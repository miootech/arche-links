"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { useProfile } from "@/hooks/use-profile";
import { generateProfileHTML } from "@/lib/export-html";
import { triggerDownload } from "@/lib/image-utils";
import {
  Download,
  Link as LinkIcon,
  Copy,
  Check,
  AlertTriangle,
  ExternalLink,
  Smartphone,
  Monitor,
} from "lucide-react";

type ProfileState = ReturnType<typeof useProfile>;

export function ExportTab({ state }: { state: ProfileState }) {
  const { profile, encode, shareUrl } = state;
  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState<"auto" | "light" | "dark">(
    "auto",
  );

  const copyUrl = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard errors
    }
  };

  const openInNewTab = () => {
    if (!shareUrl) return;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const downloadHtml = () => {
    const html = generateProfileHTML(profile, {
      mode: previewMode,
      includeData: true,
    });
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const stem = profile.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "arche-links";
    triggerDownload(blob, `${stem}-arche-links.html`);
  };

  return (
    <div className="space-y-5">
      {/* SHARE VIA URL */}
      <Card>
        <Header
          icon={<LinkIcon className="h-4 w-4" />}
          title="Share via URL"
          subtitle="Hosted on your Cloudflare Pages URL — no backend needed"
        />

        {encode && (
          <>
            {/* Length status */}
            <div
              className={cn(
                "rounded-lg p-2.5 text-xs flex items-start gap-2 ring-1 ring-inset mb-3",
                encode.overHard
                  ? "bg-destructive/10 ring-destructive/40 text-destructive"
                  : encode.overSoft
                    ? "bg-amber-accent/10 ring-amber-accent/30 text-amber-accent"
                    : "bg-success/10 ring-success/30 text-success",
              )}
            >
              <AlertTriangle
                className="h-3.5 w-3.5 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>
                {encode.overHard
                  ? `Hash too long (${encode.length} / ${encode.hardLimit}). Download as HTML instead — exports have no length limit.`
                  : encode.overSoft
                    ? `Hash is getting long (${encode.length} / ${encode.hardLimit}). Consider downloading as HTML for unlimited size.`
                    : `Hash length OK (${encode.length} / ${encode.softLimit} soft, ${encode.hardLimit} hard limit).`}
              </span>
            </div>

            {/* URL box + buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                onFocus={(e) => e.target.select()}
                className={cn(
                  "flex-1 rounded-lg bg-surface px-3 py-2 text-xs font-mono text-foreground",
                  "ring-1 ring-inset ring-border",
                  "focus:ring-amber-accent/60 focus:outline-none focus:ring-2",
                )}
                aria-label="Shareable URL"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={copyUrl}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium",
                    "bg-surface-elevated text-foreground ring-1 ring-inset ring-border",
                    "hover:bg-surface transition-colors focus-amber",
                  )}
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-success" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button
                  type="button"
                  onClick={openInNewTab}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium",
                    "bg-foreground text-background",
                    "hover:bg-foreground/90 transition-colors focus-amber",
                  )}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open
                </button>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground/70 mt-3 leading-relaxed">
              The profile data lives in the URL hash (<code>#v1.…</code>) —
              no server stores it. Anyone with this URL sees your profile
              rendered live. URL length has a hard browser limit (~8&nbsp;KB),
              so very large profiles should be exported as HTML instead.
            </p>
          </>
        )}
      </Card>

      {/* DOWNLOAD HTML */}
      <Card>
        <Header
          icon={<Download className="h-4 w-4" />}
          title="Download as HTML"
          subtitle="Standalone file — unlimited size, no dependencies, works offline"
        />

        {/* Theme mode picker */}
        <div className="mb-4">
          <span className="block text-[11px] font-medium text-muted-foreground/80 uppercase tracking-wider mb-2">
            Theme mode
          </span>
          <div className="inline-flex rounded-full bg-background p-1 ring-1 ring-inset ring-border">
            {(
              [
                { id: "auto", label: "Auto (visitor)", icon: null },
                { id: "light", label: "Light", icon: <Monitor className="h-3 w-3" /> },
                { id: "dark", label: "Dark", icon: <Smartphone className="h-3 w-3" /> },
              ] as const
            ).map((m) => {
              const active = previewMode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPreviewMode(m.id)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
                    active
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {m.icon}
                  {m.label}
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-muted-foreground/70 mt-2">
            {previewMode === "auto"
              ? "Switches between light and dark based on the visitor's OS preference."
              : previewMode === "light"
                ? "Always uses the light theme — even on dark-mode devices."
                : "Always uses the dark theme — even on light-mode devices."}
          </p>
        </div>

        <button
          type="button"
          onClick={downloadHtml}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-medium",
            "bg-amber-accent text-white",
            "hover:bg-amber-accent/90 transition-colors focus-amber",
          )}
        >
          <Download className="h-4 w-4" />
          Download HTML
        </button>
        <p className="text-[11px] text-muted-foreground/70 mt-3 leading-relaxed">
          The exported file is fully self-contained — embedded CSS, embedded
          profile data, embedded social icons. Open it locally, host it on
          Cloudflare Pages, GitHub Pages, Netlify, or any static host. No
          size limit.
        </p>
      </Card>

      {/* RESET */}
      <Card>
        <Header
          icon={<AlertTriangle className="h-4 w-4" />}
          title="Reset profile"
          subtitle="Start over from a blank profile"
        />
        <button
          type="button"
          onClick={() => {
            if (
              confirm(
                "Reset your profile to defaults? This cannot be undone.",
              )
            ) {
              state.reset();
            }
          }}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium",
            "bg-destructive/10 text-destructive ring-1 ring-inset ring-destructive/30",
            "hover:bg-destructive/20 transition-colors focus-amber",
          )}
        >
          Reset to defaults
        </button>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared
// ---------------------------------------------------------------------------

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-surface/80 ring-1 ring-inset ring-border p-5 sm:p-6">
      {children}
    </div>
  );
}

function Header({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      {subtitle && (
        <p className="text-[11px] text-muted-foreground/70 mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}
