"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { useProfile } from "@/hooks/use-profile";
import {
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Star,
  ShieldCheck,
  ImageIcon,
  GripVertical,
} from "lucide-react";
import type { SocialLink } from "@/lib/profile";

type ProfileState = ReturnType<typeof useProfile>;

const SOCIAL_PLATFORMS: { id: SocialLink["platform"]; label: string }[] = [
  { id: "instagram", label: "Instagram" },
  { id: "youtube", label: "YouTube" },
  { id: "tiktok", label: "TikTok" },
  { id: "twitter", label: "Twitter" },
  { id: "x", label: "X" },
  { id: "github", label: "GitHub" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "twitch", label: "Twitch" },
  { id: "discord", label: "Discord" },
  { id: "facebook", label: "Facebook" },
  { id: "spotify", label: "Spotify" },
  { id: "email", label: "Email" },
  { id: "website", label: "Website" },
];

export function ContentTab({ state }: { state: ProfileState }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const { profile } = state;

  const onAvatar = async (file: File | null | undefined) => {
    if (!file) return;
    // Resize avatar to 256x256 max — keeps the URL/HTML small.
    const bitmap = await createImageBitmap(file, { resizeWidth: 256, resizeHeight: 256, resizeQuality: "high" }).catch(
      () => null,
    );
    if (!bitmap) {
      alert("Could not load that image.");
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(bitmap, 0, 0, 256, 256);
    bitmap.close?.();
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    state.updateAvatar(dataUrl);
  };

  return (
    <div className="space-y-5">
      {/* PROFILE SECTION */}
      <Card>
        <h3 className="text-sm font-semibold mb-4 text-foreground">Profile</h3>
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className={cn(
                "relative flex h-20 w-20 items-center justify-center rounded-full overflow-hidden",
                "ring-2 ring-inset ring-border hover:ring-amber-accent transition-all focus-amber",
                "bg-surface-elevated",
              )}
              aria-label="Upload avatar"
            >
              {profile.avatar ? (
                <img src={profile.avatar} alt="" className="h-full w-full object-cover" />
              ) : (
                <ImageIcon className="h-6 w-6 text-muted-foreground" />
              )}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                void onAvatar(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
          </div>
          {/* Name + verified toggle */}
          <div className="flex-1 space-y-3">
            <Field label="Name">
              <input
                type="text"
                value={profile.name}
                onChange={(e) => state.updateName(e.target.value)}
                placeholder="Your name"
                maxLength={64}
                className={inputCls}
              />
            </Field>
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                type="button"
                onClick={state.toggleVerified}
                aria-pressed={!!profile.verified}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium",
                  "ring-1 ring-inset ring-border transition-colors focus-amber",
                  profile.verified
                    ? "bg-amber-accent/10 text-amber-accent ring-amber-accent/30"
                    : "bg-surface text-muted-foreground hover:text-foreground",
                )}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                {profile.verified ? "Verified on" : "Verified off"}
              </button>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <Field label="Bio">
            <textarea
              value={profile.bio}
              onChange={(e) => state.updateBio(e.target.value)}
              placeholder="A short line about you."
              maxLength={200}
              rows={2}
              className={cn(inputCls, "resize-none")}
            />
          </Field>
          <p className="text-[11px] text-muted-foreground/70 mt-1">
            {profile.bio.length}/200
          </p>
        </div>
      </Card>

      {/* LINKS */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">
            Links{" "}
            <span className="text-muted-foreground/70 font-normal">
              · {profile.links.length} unlimited
            </span>
          </h3>
          <button
            type="button"
            onClick={state.addLink}
            className="inline-flex items-center gap-1 rounded-md bg-surface-elevated px-2.5 py-1.5 text-xs font-medium text-foreground hover:bg-surface transition-colors focus-amber"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>

        {profile.links.length === 0 && (
          <div className="text-center py-8 text-sm text-muted-foreground">
            No links yet — add your first one.
          </div>
        )}

        <div className="space-y-2">
          {profile.links.map((link, i) => (
            <div
              key={link.id}
              className={cn(
                "rounded-xl bg-surface-elevated/50 ring-1 ring-inset ring-border p-3",
                "hover:ring-border hover:bg-surface-elevated transition-colors",
              )}
            >
              <div className="flex items-start gap-2">
                <div className="flex flex-col gap-0.5 pt-1.5 text-muted-foreground/60">
                  <GripVertical className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={link.icon ?? ""}
                      onChange={(e) =>
                        state.updateLink(link.id, { icon: e.target.value })
                      }
                      placeholder="🎉"
                      maxLength={4}
                      className={cn(inputCls, "w-14 text-center text-lg")}
                      aria-label="Icon (emoji)"
                    />
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) =>
                        state.updateLink(link.id, { title: e.target.value })
                      }
                      placeholder="Link title"
                      maxLength={80}
                      className={cn(inputCls, "flex-1")}
                      aria-label="Link title"
                    />
                  </div>
                  <input
                    type="url"
                    value={link.url}
                    onChange={(e) =>
                      state.updateLink(link.id, { url: e.target.value })
                    }
                    placeholder="https://"
                    className={cn(inputCls, "text-sm font-mono")}
                    aria-label="Link URL"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => state.moveLink(link.id, -1)}
                    disabled={i === 0}
                    aria-label="Move up"
                    className="h-7 w-7 inline-flex items-center justify-center rounded-md bg-surface text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors focus-amber"
                  >
                    <ChevronUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => state.moveLink(link.id, 1)}
                    disabled={i === profile.links.length - 1}
                    aria-label="Move down"
                    className="h-7 w-7 inline-flex items-center justify-center rounded-md bg-surface text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors focus-amber"
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <button
                    type="button"
                    onClick={() =>
                      state.updateLink(link.id, { featured: !link.featured })
                    }
                    aria-pressed={!!link.featured}
                    className={cn(
                      "inline-flex items-center gap-1 text-xs font-medium",
                      link.featured ? "text-amber-accent" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Star className={cn("h-3 w-3", link.featured && "fill-amber-accent")} />
                    {link.featured ? "Featured" : "Feature"}
                  </button>
                </label>
                <button
                  type="button"
                  onClick={() => state.removeLink(link.id)}
                  aria-label="Remove link"
                  className="h-7 w-7 inline-flex items-center justify-center rounded-md text-destructive/80 hover:text-destructive hover:bg-destructive/10 transition-colors focus-amber"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* SOCIALS */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">
            Social icons
            <span className="text-muted-foreground/70 font-normal">
              {" "}· {profile.socials.length}
            </span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {SOCIAL_PLATFORMS.map((p) => {
            const alreadyAdded = profile.socials.some(
              (s) => s.platform === p.id,
            );
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => !alreadyAdded && state.addSocial(p.id)}
                disabled={alreadyAdded}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium",
                  "ring-1 ring-inset ring-border transition-colors focus-amber",
                  alreadyAdded
                    ? "bg-surface-elevated text-muted-foreground/50 cursor-not-allowed"
                    : "bg-surface text-foreground hover:bg-surface-elevated",
                )}
              >
                {p.label}
                {!alreadyAdded && <Plus className="h-3 w-3" />}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {profile.socials.map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-2 rounded-lg bg-surface-elevated/40 p-2"
            >
              <span className="text-xs font-medium uppercase text-muted-foreground/70 w-16 shrink-0">
                {s.platform}
              </span>
              <input
                type="url"
                value={s.url}
                onChange={(e) => state.updateSocial(s.id, { url: e.target.value })}
                placeholder="https://"
                className={cn(inputCls, "flex-1 text-sm font-mono")}
                aria-label={`${s.platform} URL`}
              />
              <button
                type="button"
                onClick={() => state.removeSocial(s.id)}
                aria-label="Remove social"
                className="h-7 w-7 inline-flex items-center justify-center rounded-md text-destructive/80 hover:text-destructive hover:bg-destructive/10 transition-colors focus-amber"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ---- Shared input styling ----
const inputCls = cn(
  "w-full rounded-lg bg-surface px-3 py-2 text-sm text-foreground",
  "ring-1 ring-inset ring-border",
  "placeholder:text-muted-foreground/50",
  "focus:ring-amber-accent/60 focus:outline-none focus:ring-2",
  "transition-shadow",
);

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-surface/80 ring-1 ring-inset ring-border p-5 sm:p-6">
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium text-muted-foreground/80 uppercase tracking-wider mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
