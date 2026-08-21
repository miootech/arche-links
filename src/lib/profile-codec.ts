/**
 * arche.links — profile codec.
 *
 * Encodes a Profile into a URL-safe string for the hash fragment, and
 * decodes it back. The hash is what makes "hosting on a static Cloudflare
 * URL" work — the profile lives in the URL itself, no backend needed.
 *
 * Encoding: JSON → encodeURIComponent → btoa → "v1." prefix.
 *
 * The "v1." prefix lets us change the encoding scheme later without
 * breaking existing shared URLs.
 *
 * Limits:
 *   - We set a "soft" warning threshold at 4500 encoded chars (still
 *     well within Cloudflare's safe URL length of ~8KB).
 *   - We set a "hard" warning at 7000 chars.
 *   - The encoder never throws — invalid hashes just return null.
 */

import type { Profile } from "./profile";

const VERSION_PREFIX = "v1.";
const SOFT_LIMIT = 4500;
const HARD_LIMIT = 7000;

export interface EncodeResult {
  /** The encoded string (without `#` prefix). */
  encoded: string;
  /** Total encoded length in chars. */
  length: number;
  /** Soft limit (start suggesting download). */
  softLimit: number;
  /** Hard limit (strongly suggest download). */
  hardLimit: number;
  /** True if the encoded length exceeds the soft limit. */
  overSoft: boolean;
  /** True if the encoded length exceeds the hard limit. */
  overHard: boolean;
}

export function encodeProfile(profile: Profile): EncodeResult {
  const json = JSON.stringify(profile);
  const base64 = btoa(encodeURIComponent(json));
  const encoded = VERSION_PREFIX + base64;
  const length = encoded.length;
  return {
    encoded,
    length,
    softLimit: SOFT_LIMIT,
    hardLimit: HARD_LIMIT,
    overSoft: length > SOFT_LIMIT,
    overHard: length > HARD_LIMIT,
  };
}

export function decodeProfile(hash: string): Profile | null {
  if (!hash) return null;
  // Strip leading `#` if present.
  const stripped = hash.startsWith("#") ? hash.slice(1) : hash;
  // Strip our prefix.
  if (!stripped.startsWith(VERSION_PREFIX)) return null;
  const base64 = stripped.slice(VERSION_PREFIX.length);
  try {
    const json = decodeURIComponent(atob(base64));
    const profile = JSON.parse(json) as Profile;
    if (!profile || typeof profile !== "object") return null;
    if (!Array.isArray(profile.links) || !profile.theme || !profile.layout) {
      return null;
    }
    return profile;
  } catch {
    return null;
  }
}

/**
 * Build the full shareable URL (origin + path + hash).
 */
export function buildShareUrl(encoded: string): string {
  if (typeof window === "undefined") return `#${encoded}`;
  return `${window.location.origin}${window.location.pathname}#${encoded}`;
}

/**
 * Read the hash from the current location (without the `#`).
 */
export function readHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash.slice(1);
}

/**
 * Update the hash without scrolling the page.
 */
export function writeHash(encoded: string): void {
  if (typeof window === "undefined") return;
  // Use replaceState so we don't add a history entry on every keystroke.
  const newUrl = `${window.location.pathname}#${encoded}`;
  window.history.replaceState(null, "", newUrl);
}

/**
 * Clear the hash (used when the user goes back to the editor).
 */
export function clearHash(): void {
  if (typeof window === "undefined") return;
  window.history.replaceState(null, "", window.location.pathname);
}
