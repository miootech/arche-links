"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { useProfile } from "@/hooks/use-profile";
import { THEME_PRESETS, getThemePreset } from "@/lib/themes";
import { COLOR_PALETTES } from "@/lib/palettes";
import type { ThemeSpec } from "@/lib/profile";
import { Palette, Sparkles, Hash } from "lucide-react";

type ProfileState = ReturnType<typeof useProfile>;

/**
 * Design tab:
 *  1. Theme presets (light + dark paired)
 *  2. ColorHunt-style palette presets (one-click apply to all colors)
 *  3. Custom hex editor (edit individual color slots)
 */
export function DesignTab({ state }: { state: ProfileState }) {
  const [paletteOpen, setPaletteOpen] = useState(true);
  const [customOpen, setCustomOpen] = useState(false);
  const { profile } = state;

  return (
    <div className="space-y-5">
      {/* 1. THEME PRESETS */}
      <Card>
        <Header icon={<Sparkles className="h-4 w-4" />} title="Theme presets" subtitle="Hand-picked color sets, light + dark paired" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {THEME_PRESETS.map((preset) => {
            const active = profile.theme.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  // Apply both light and dark variant — we ship them as the
                  // "current" theme. The export uses the active theme spec
                  // directly; we set the light variant here and the export
                  // will swap to dark via prefers-color-scheme.
                  state.setTheme({ ...preset.light, id: preset.id });
                }}
                aria-pressed={active}
                className={cn(
                  "rounded-xl p-3 ring-1 ring-inset ring-border transition-all text-left focus-amber",
                  active
                    ? "ring-amber-accent bg-surface-elevated"
                    : "bg-surface hover:bg-surface-elevated",
                )}
              >
                <div className="flex h-12 rounded-lg overflow-hidden ring-1 ring-inset ring-border">
                  {preset.swatch.map((c, i) => (
                    <div
                      key={i}
                      className="flex-1"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div className="mt-2 text-xs font-medium text-foreground">
                  {preset.name}
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

      {/* 2. COLORHUNT-STYLE PALETTES */}
      <Card>
        <Header
          icon={<Palette className="h-4 w-4" />}
          title="Color palettes"
          subtitle="ColorHunt-style 4-color sets — click to apply"
          collapsible
          open={paletteOpen}
          onToggle={() => setPaletteOpen(!paletteOpen)}
        />
        {paletteOpen && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {COLOR_PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => applyPalette(state, p.colors)}
                className="rounded-xl p-2 ring-1 ring-inset ring-border bg-surface hover:bg-surface-elevated transition-colors focus-amber text-left"
              >
                <div className="flex h-10 rounded-md overflow-hidden">
                  {p.colors.map((c, i) => (
                    <div
                      key={i}
                      className="flex-1"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div className="mt-1.5 text-[11px] font-medium text-foreground truncate">
                  {p.name}
                </div>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* 3. CUSTOM HEX EDITOR */}
      <Card>
        <Header
          icon={<Hash className="h-4 w-4" />}
          title="Custom colors"
          subtitle="Edit any color slot with your own hex"
          collapsible
          open={customOpen}
          onToggle={() => setCustomOpen(!customOpen)}
        />
        {customOpen && (
          <div className="space-y-2.5">
            {COLOR_FIELDS.map((f) => (
              <ColorField
                key={f.key}
                label={f.label}
                value={(profile.theme as any)[f.key] ?? ""}
                onChange={(v) => {
                  const newTheme: ThemeSpec = {
                    ...profile.theme,
                    [f.key]: v,
                  };
                  state.setTheme(newTheme);
                }}
              />
            ))}
            <p className="text-[11px] text-muted-foreground/70 pt-2">
              Tip: paste any hex from{" "}
              <a
                href="https://colorhunt.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-accent hover:underline"
              >
                colorhunt.co
              </a>{" "}
              into any field above.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Apply a ColorHunt palette to the active theme.
// Map: [0]=bg, [1]=text, [2]=card, [3]=accent
// Derive muted, cardBorder, linkText, avatarRing from these.
// ---------------------------------------------------------------------------
function applyPalette(state: ProfileState, colors: [string, string, string, string]) {
  const [bg, text, card, accent] = colors;
  const newTheme: ThemeSpec = {
    id: "custom",
    name: "Custom",
    background: bg,
    text,
    // Derive muted as a semi-transparent version of text.
    muted: mix(text, bg, 0.5),
    card,
    cardBorder: mix(card, text, 0.15),
    linkText: text,
    accent,
    avatarRing: accent,
  };
  state.setTheme(newTheme);
}

/** Mix two hex colors. t=0 returns a, t=1 returns b. */
function mix(a: string, b: string, t: number): string {
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${bl.toString(16).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Color field row
// ---------------------------------------------------------------------------

interface ColorFieldDef {
  key: keyof ThemeSpec;
  label: string;
}

const COLOR_FIELDS: ColorFieldDef[] = [
  { key: "background", label: "Background" },
  { key: "text", label: "Text" },
  { key: "muted", label: "Muted text" },
  { key: "card", label: "Card background" },
  { key: "cardBorder", label: "Card border" },
  { key: "linkText", label: "Link text" },
  { key: "accent", label: "Accent" },
  { key: "avatarRing", label: "Avatar ring" },
];

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <label
        className="relative h-8 w-8 rounded-full ring-2 ring-inset ring-border cursor-pointer overflow-hidden shrink-0"
        aria-label={`${label} color picker`}
      >
        <span
          className="absolute inset-0"
          style={{ backgroundColor: value }}
        />
        <input
          type="color"
          value={normalizeHex(value)}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>
      <span className="text-xs font-medium text-foreground w-28">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "flex-1 font-mono text-xs bg-surface px-2 py-1.5 rounded-md",
          "ring-1 ring-inset ring-border focus:ring-amber-accent/60 focus:outline-none focus:ring-2",
          "transition-shadow text-foreground",
        )}
        placeholder="#000000"
        aria-label={`${label} hex value`}
      />
    </div>
  );
}

/** HTML <input type=color> requires 7-char hex; fall back to #000 for invalid. */
function normalizeHex(v: string): string {
  return /^#[0-9a-fA-F]{6}$/.test(v) ? v : "#000000";
}

// ---------------------------------------------------------------------------
// Shared card / header
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
  collapsible,
  open,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  collapsible?: boolean;
  open?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={collapsible ? onToggle : undefined}
        disabled={!collapsible}
        className={cn(
          "flex items-center gap-2 w-full text-left",
          collapsible && "cursor-pointer",
        )}
      >
        <span className="text-muted-foreground">{icon}</span>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-[11px] text-muted-foreground/70 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {collapsible && (
          <span className="text-xs text-muted-foreground">
            {open ? "−" : "+"}
          </span>
        )}
      </button>
    </div>
  );
}
