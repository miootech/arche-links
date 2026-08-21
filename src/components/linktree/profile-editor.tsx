"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/snaperase/theme-toggle";
import { Footer } from "@/components/snaperase/footer";
import { ProfilePreview } from "./profile-preview";
import { ContentTab } from "./tabs/content-tab";
import { DesignTab } from "./tabs/design-tab";
import { LayoutTab } from "./tabs/layout-tab";
import { ExportTab } from "./tabs/export-tab";
import type { useProfile } from "@/hooks/use-profile";
import { Link2, Palette, Layout as LayoutIcon, Download } from "lucide-react";
import Image from "next/image";

type TabId = "content" | "design" | "layout" | "export";

type ProfileState = ReturnType<typeof useProfile>;

export function ProfileEditor({ state }: { state: ProfileState }) {
  const [tab, setTab] = useState<TabId>("content");

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "content", label: "Content", icon: <Link2 className="h-4 w-4" /> },
    { id: "design", label: "Design", icon: <Palette className="h-4 w-4" /> },
    { id: "layout", label: "Layout", icon: <LayoutIcon className="h-4 w-4" /> },
    { id: "export", label: "Export", icon: <Download className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-[100svh] flex flex-col bg-background text-foreground theme-aware">
      {/* HEADER */}
      <header className="w-full px-4 sm:px-6 pt-5 sm:pt-8 border-b border-border/60">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-3 pb-3">
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                arche.links
              </span>
              <span className="text-[10px] text-muted-foreground/70">
                All your links · one page · free forever
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`#${state.encode?.encoded ?? ""}`}
              onClick={(e) => {
                if (!state.encode) return;
                e.preventDefault();
                window.location.hash = state.encode.encoded;
                setTimeout(() => window.location.reload(), 100);
              }}
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 rounded-full",
                "bg-surface px-3 py-1.5 text-[11px] font-medium text-muted-foreground",
                "ring-1 ring-inset ring-border hover:text-foreground transition-colors focus-amber",
              )}
              aria-label="Preview as visitor (opens viewer)"
              title="Preview as visitor"
            >
              Preview
            </a>
            <ThemeToggle />
          </div>
        </div>
        {/* TABS */}
        <div className="mx-auto max-w-6xl flex gap-1 overflow-x-auto scrollbar-thin">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-pressed={tab === t.id}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium",
                "border-b-2 transition-colors outline-none focus-amber",
                "whitespace-nowrap",
                tab === t.id
                  ? "border-amber-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 px-4 sm:px-6 py-6">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* EDITOR PANEL */}
          <div className="min-w-0">
            {tab === "content" && <ContentTab state={state} />}
            {tab === "design" && <DesignTab state={state} />}
            {tab === "layout" && <LayoutTab state={state} />}
            {tab === "export" && <ExportTab state={state} />}
          </div>

          {/* PREVIEW (sticky on desktop, hidden on mobile) */}
          <aside className="lg:sticky lg:top-6 lg:self-start hidden lg:block">
            <ProfilePreview profile={state.profile} />
          </aside>
        </div>
      </main>

      {/* MOBILE PREVIEW TOGGLE */}
      <MobilePreview state={state} />

      <Footer />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile preview — opens the preview in a modal so the user can see the
// mobile rendering of their profile.
// ---------------------------------------------------------------------------

function MobilePreview({ state }: { state: ProfileState }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "lg:hidden fixed bottom-4 right-4 z-30 inline-flex items-center gap-2",
          "h-11 px-4 rounded-full text-sm font-medium shadow-lg",
          "bg-foreground text-background",
          "focus-amber",
        )}
      >
        Preview
      </button>
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile preview"
        >
          <div className="absolute top-3 right-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-full bg-surface ring-1 ring-inset ring-border text-foreground focus-amber"
              aria-label="Close preview"
            >
              ✕
            </button>
          </div>
          <div className="pt-16 pb-8 px-4 h-full overflow-auto">
            <ProfilePreview profile={state.profile} />
          </div>
        </div>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------

function BrandMark() {
  return (
    <div
      className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-surface-elevated to-surface ring-1 ring-inset ring-border"
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={22}
        height={22}
        className="w-[22px] h-[22px] object-contain"
      />
    </div>
  );
}
