"use client";

import { useMemo } from "react";
import { generateProfileHTML } from "@/lib/export-html";
import { ThemeToggle } from "@/components/snaperase/theme-toggle";
import { cn } from "@/lib/utils";
import { ArrowLeft, Copy, Download } from "lucide-react";
import { useState } from "react";
import type { useProfile } from "@/hooks/use-profile";
import { triggerDownload } from "@/lib/image-utils";

type ProfileState = ReturnType<typeof useProfile>;

/**
 * Read-only viewer shown when the URL contains a `#v1....` hash.
 *
 * Renders the profile exactly as exported (full iframe), with a slim
 * top-bar giving the visitor the option to copy the URL or go back to
 * the editor (which clears the hash).
 */
export function ProfileViewer({ state }: { state: ProfileState }) {
  const html = useMemo(
    () => generateProfileHTML(state.profile, { includeData: false }),
    [state.profile],
  );
  const [copied, setCopied] = useState(false);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore — clipboard may be unavailable
    }
  };

  const downloadHtml = () => {
    const full = generateProfileHTML(state.profile, { includeData: true });
    const blob = new Blob([full], { type: "text/html;charset=utf-8" });
    const stem = state.profile.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "arche-links";
    triggerDownload(blob, `${stem}-arche-links.html`);
  };

  return (
    <div className="min-h-[100svh] flex flex-col bg-background text-foreground theme-aware">
      {/* TOP BAR */}
      <header className="sticky top-0 z-20 px-4 sm:px-6 py-3 border-b border-border/60 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={state.exitViewer}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-amber rounded-md px-2 py-1.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to editor
          </button>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] text-muted-foreground/70 font-mono">
              viewer mode
            </span>
            <button
              type="button"
              onClick={copyUrl}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full",
                "bg-surface-elevated px-3 py-1.5 text-xs font-medium text-foreground",
                "ring-1 ring-inset ring-border hover:bg-surface transition-colors focus-amber",
              )}
            >
              <Copy className="h-3 w-3" />
              {copied ? "Copied!" : "Copy URL"}
            </button>
            <button
              type="button"
              onClick={downloadHtml}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full",
                "bg-foreground text-background px-3 py-1.5 text-xs font-medium",
                "hover:bg-foreground/90 transition-colors focus-amber",
              )}
            >
              <Download className="h-3 w-3" />
              HTML
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* PROFILE IFRAME */}
      <main className="flex-1">
        <iframe
          srcDoc={html}
          sandbox="allow-scripts allow-same-origin allow-popups"
          title={`${state.profile.name} — arche.links profile`}
          className="w-full h-[calc(100svh-3.5rem)] border-0 bg-transparent"
        />
      </main>
    </div>
  );
}
