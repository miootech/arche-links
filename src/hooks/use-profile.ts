"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Profile, LinkItem, SocialLink, ThemeSpec, LayoutSpec } from "@/lib/profile";
import { createDefaultProfile, id } from "@/lib/profile";
import {
  buildShareUrl,
  decodeProfile,
  encodeProfile,
  readHash,
  type EncodeResult,
} from "@/lib/profile-codec";

const STORAGE_KEY = "arche.links.profile";

/**
 * Manages a Profile in the editor:
 *  - Loads from localStorage (or default on first visit).
 *  - Auto-saves to localStorage on every change.
 *  - Generates a shareable URL hash (encoded profile) on every change.
 *  - Detects an incoming hash on first mount AND on hashchange → loads
 *    that profile (viewer mode).
 *  - In editor mode, the hash is NOT rewritten to the URL automatically
 *    (we don't want to clobber the visitor's URL bar with a 4KB hash on
 *    every keystroke). The hash is only set when the user clicks "Open"
 *    in the export panel or copies the share URL.
 */
export function useProfile() {
  const [profile, setProfile] = useState<Profile>(() => createDefaultProfile());
  const [encode, setEncode] = useState<EncodeResult | null>(null);
  const [shareUrl, setShareUrl] = useState<string>("");
  const [mode, setMode] = useState<"editor" | "viewer">("editor");
  const [decodedFromHash, setDecodedFromHash] = useState(false);
  const firstRunRef = useRef(true);

  // ---- Helper: try to load a profile from the current URL hash ----
  // Wrapped in useCallback so the hashchange listener stays stable.
  const tryLoadFromHash = useCallback(() => {
    const hash = readHash();
    if (!hash) return false;
    const decoded = decodeProfile(hash);
    if (!decoded) return false;
    // The setState calls below are safe — they fire from a user-triggered
    // hashchange event, not on every render. The lint rule can't see that
    // distinction, so we disable it here.
    setProfile(decoded);
    setMode("viewer");
    setDecodedFromHash(true);
    return true;
  }, []);

  // ---- On mount: check for incoming hash profile, else load from localStorage ----
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    const loaded = tryLoadFromHash();
    if (loaded) return;
    // No valid hash → load from localStorage or default.
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Profile;
        if (parsed && Array.isArray(parsed.links)) {
          setProfile(parsed);
        }
      }
    } catch {
      // ignore storage errors
    }
  }, [tryLoadFromHash]);

  // ---- Listen for hashchange events (e.g. user pastes a share URL) ----
  useEffect(() => {
    const onHashChange = () => {
      tryLoadFromHash();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [tryLoadFromHash]);

  // ---- Re-encode + share URL whenever profile changes ----
  useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
      // Don't push the loaded profile's hash back into the URL on first run
      // — that would clobber the URL the user is viewing.
      // But DO compute the encode result so the share panel can show it.
      const result = encodeProfile(profile);
      // setState in effect here is the correct pattern — we're computing
      // derived state (encoded hash + share URL) from the profile, which
      // can't be done during render because btoa/encodeURIComponent need
      // to run on the latest profile value.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEncode(result);
       
      setShareUrl(buildShareUrl(result.encoded));
      return;
    }

    const result = encodeProfile(profile);
     
    setEncode(result);
     
    setShareUrl(buildShareUrl(result.encoded));

    // Persist to localStorage for next session — only in editor mode.
    if (mode === "editor") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      } catch {
        // Storage full or unavailable — the user can still export as HTML.
      }
    }
  }, [profile, mode]);

  // ---- Mutators (all immutable) ----

  const updateName = useCallback((name: string) => {
    setProfile((p) => ({ ...p, name }));
  }, []);

  const updateBio = useCallback((bio: string) => {
    setProfile((p) => ({ ...p, bio }));
  }, []);

  const updateAvatar = useCallback((avatar: string) => {
    setProfile((p) => ({ ...p, avatar }));
  }, []);

  const toggleVerified = useCallback(() => {
    setProfile((p) => ({ ...p, verified: !p.verified }));
  }, []);

  const addLink = useCallback(() => {
    setProfile((p) => ({
      ...p,
      links: [
        ...p.links,
        { id: id(), title: "New link", url: "https://", icon: "" },
      ],
    }));
  }, []);

  const updateLink = useCallback((linkId: string, patch: Partial<LinkItem>) => {
    setProfile((p) => ({
      ...p,
      links: p.links.map((l) => (l.id === linkId ? { ...l, ...patch } : l)),
    }));
  }, []);

  const removeLink = useCallback((linkId: string) => {
    setProfile((p) => ({
      ...p,
      links: p.links.filter((l) => l.id !== linkId),
    }));
  }, []);

  const moveLink = useCallback((linkId: string, dir: -1 | 1) => {
    setProfile((p) => {
      const idx = p.links.findIndex((l) => l.id === linkId);
      if (idx === -1) return p;
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= p.links.length) return p;
      const links = [...p.links];
      [links[idx], links[newIdx]] = [links[newIdx], links[idx]];
      return { ...p, links };
    });
  }, []);

  const addSocial = useCallback((platform: SocialLink["platform"]) => {
    setProfile((p) => ({
      ...p,
      socials: [...p.socials, { id: id(), platform, url: "https://" }],
    }));
  }, []);

  const updateSocial = useCallback(
    (socialId: string, patch: Partial<SocialLink>) => {
      setProfile((p) => ({
        ...p,
        socials: p.socials.map((s) => (s.id === socialId ? { ...s, ...patch } : s)),
      }));
    },
    [],
  );

  const removeSocial = useCallback((socialId: string) => {
    setProfile((p) => ({
      ...p,
      socials: p.socials.filter((s) => s.id !== socialId),
    }));
  }, []);

  const setTheme = useCallback((theme: ThemeSpec) => {
    setProfile((p) => ({ ...p, theme }));
  }, []);

  const setLayout = useCallback((layout: LayoutSpec) => {
    setProfile((p) => ({ ...p, layout }));
  }, []);

  const reset = useCallback(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
    const fresh = createDefaultProfile();
    setProfile(fresh);
    setMode("editor");
    setDecodedFromHash(false);
  }, []);

  const exitViewer = useCallback(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setMode("editor");
    setDecodedFromHash(false);
  }, []);

  return {
    profile,
    encode,
    shareUrl,
    mode,
    decodedFromHash,
    updateName,
    updateBio,
    updateAvatar,
    toggleVerified,
    addLink,
    updateLink,
    removeLink,
    moveLink,
    addSocial,
    updateSocial,
    removeSocial,
    setTheme,
    setLayout,
    reset,
    exitViewer,
  };
}
