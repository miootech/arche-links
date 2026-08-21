"use client";

import { cn } from "@/lib/utils";
import type { useProfile } from "@/hooks/use-profile";
import { LAYOUT_PRESETS } from "@/lib/layouts";
import type { LayoutSpec } from "@/lib/profile";
import { Layout as LayoutIcon } from "lucide-react";

type ProfileState = ReturnType<typeof useProfile>;

const LAYOUT_SWATCHES: Record<
  LayoutSpec["style"],
  (accent: string, text: string, card: string, border: string) => React.ReactNode
> = {
  cards: (a, t, c, b) => (
    <div className="space-y-1.5">
      <div className="h-3 rounded bg-[var(--c)] ring-1 ring-[var(--b)]" />
      <div className="h-3 rounded bg-[var(--c)] ring-1 ring-[var(--b)]" />
      <div className="h-3 rounded bg-[var(--c)] ring-1 ring-[var(--b)]" />
    </div>
  ),
  pills: (a, t, c, b) => (
    <div className="space-y-1.5">
      <div className="h-3 rounded-full bg-[var(--c)] ring-1 ring-[var(--b)]" />
      <div className="h-3 rounded-full bg-[var(--c)] ring-1 ring-[var(--b)]" />
      <div className="h-3 rounded-full bg-[var(--c)] ring-1 ring-[var(--b)]" />
    </div>
  ),
  outline: (a, t, c, b) => (
    <div className="space-y-1.5">
      <div className="h-3 rounded border-[1.5px] border-[var(--a)]" />
      <div className="h-3 rounded border-[1.5px] border-[var(--a)]" />
      <div className="h-3 rounded border-[1.5px] border-[var(--a)]" />
    </div>
  ),
  solid: (a, t, c, b) => (
    <div className="space-y-1">
      <div className="h-3 rounded bg-[var(--a)]" />
      <div className="h-3 rounded bg-[var(--a)]" />
      <div className="h-3 rounded bg-[var(--a)]" />
    </div>
  ),
  minimal: (a, t, c, b) => (
    <div className="space-y-2">
      <div className="h-3 border-b border-[var(--b)]" />
      <div className="h-3 border-b border-[var(--b)]" />
      <div className="h-3 border-b border-[var(--b)]" />
    </div>
  ),
};

export function LayoutTab({ state }: { state: ProfileState }) {
  const { profile } = state;
  const t = profile.theme;
  // Pass colors as CSS vars to the swatches.
  const swatchVars = {
    ["--a" as string]: t.accent,
    ["--t" as string]: t.text,
    ["--c" as string]: t.card,
    ["--b" as string]: t.cardBorder,
  } as React.CSSProperties;

  const updateLayout = (patch: Partial<LayoutSpec>) => {
    state.setLayout({ ...profile.layout, ...patch, id: "custom" });
  };

  return (
    <div className="space-y-5">
      <Card>
        <Header icon={<LayoutIcon className="h-4 w-4" />} title="Layout style" subtitle="Overall shape of the link cards" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {LAYOUT_PRESETS.map((l) => {
            const active = profile.layout.style === l.style;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => state.setLayout({ ...l })}
                aria-pressed={active}
                className={cn(
                  "rounded-xl p-3 ring-1 ring-inset ring-border transition-all text-left focus-amber",
                  active ? "ring-amber-accent bg-surface-elevated" : "bg-surface hover:bg-surface-elevated",
                )}
              >
                <div
                  className="h-14 rounded-md p-2 bg-[var(--bg)]"
                  style={
                    {
                      ["--bg" as string]: t.background,
                      ...swatchVars,
                    } as React.CSSProperties
                  }
                >
                  {LAYOUT_SWATCHES[l.style](t.accent, t.text, t.card, t.cardBorder)}
                </div>
                <div className="mt-2 text-xs font-medium text-foreground">
                  {l.name}
                </div>
                {active && (
                  <div className="text-[10px] text-amber-accent font-medium mt-0.5">
                    ✓ Active
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </Card>

      <Card>
        <Header title="Spacing & shape" subtitle="Fine-tune the link column" />
        <div className="space-y-4">
          <Slider
            label="Max width"
            value={profile.layout.maxWidth}
            min={320}
            max={720}
            step={10}
            onChange={(v) => updateLayout({ maxWidth: v })}
            suffix="px"
          />
          <Slider
            label="Gap between links"
            value={profile.layout.gap}
            min={4}
            max={32}
            step={1}
            onChange={(v) => updateLayout({ gap: v })}
            suffix="px"
          />
          <Slider
            label="Card padding"
            value={profile.layout.padding}
            min={8}
            max={32}
            step={1}
            onChange={(v) => updateLayout({ padding: v })}
            suffix="px"
          />
          <Slider
            label="Corner radius"
            value={profile.layout.radius}
            min={0}
            max={32}
            step={1}
            onChange={(v) => updateLayout({ radius: v })}
            suffix="px"
          />
        </div>
      </Card>

      <Card>
        <Header title="Alignment" subtitle="Where to anchor the content" />
        <div className="inline-flex rounded-full bg-background p-1 ring-1 ring-inset ring-border">
          {(["center", "left"] as const).map((a) => {
            const active = profile.layout.align === a;
            return (
              <button
                key={a}
                type="button"
                onClick={() => updateLayout({ align: a })}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {a === "center" ? "Center" : "Left"}
              </button>
            );
          })}
        </div>
      </Card>

      <Card>
        <Header title="Shadow" subtitle="Drop shadow depth on link cards" />
        <div className="inline-flex rounded-full bg-background p-1 ring-1 ring-inset ring-border">
          {([0, 1, 2] as const).map((s) => {
            const active = profile.layout.shadow === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => updateLayout({ shadow: s })}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                  active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s === 0 ? "None" : s === 1 ? "Subtle" : "Strong"}
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Slider
// ---------------------------------------------------------------------------

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
        <span className="font-medium text-foreground">{label}</span>
        <span className="font-mono">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-amber-accent"
        aria-label={label}
      />
    </div>
  );
}

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
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      {subtitle && (
        <p className="text-[11px] text-muted-foreground/70 mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}
