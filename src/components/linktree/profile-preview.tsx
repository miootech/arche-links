"use client";

import { useMemo } from "react";
import { generateProfileHTML } from "@/lib/export-html";
import type { Profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

interface ProfilePreviewProps {
  profile: Profile;
  /** Optional className wrapper override. */
  className?: string;
}

/**
 * Renders the profile exactly as it would appear when exported, inside an
 * iframe with srcDoc. Using an iframe gives us:
 *  - Full style isolation (no leaking Tailwind / parent CSS into the profile)
 *  - Exact match between preview and export (we feed the same HTML string)
 *  - Mobile + desktop responsive behavior independent of the parent layout
 */
export function ProfilePreview({ profile, className }: ProfilePreviewProps) {
  const html = useMemo(
    () => generateProfileHTML(profile, { includeData: false }),
    [profile],
  );

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden ring-1 ring-inset ring-border bg-surface",
        "shadow-sm",
        className,
      )}
    >
      <div className="px-3 py-2 border-b border-border/60 flex items-center justify-between text-[11px] text-muted-foreground/70">
        <span className="font-mono">Live preview</span>
        <span className="hidden sm:inline">Updates as you edit</span>
      </div>
      <div className="bg-[var(--bg)]" style={{ ["--bg" as string]: profile.theme.background }}>
        <iframe
          // We use srcDoc + a sandbox that allows same-origin scripts (so
          // the renderer can read window.__ARCHE_PROFILE__) but disallows
          // forms, top navigation, popups, etc. for safety.
          srcDoc={html}
          sandbox="allow-scripts allow-same-origin"
          title="Profile preview"
          className="w-full h-[640px] sm:h-[680px] border-0 bg-transparent"
        />
      </div>
    </div>
  );
}
