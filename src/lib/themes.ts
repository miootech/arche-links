/**
 * arche.links — theme presets.
 *
 * Each theme has a light variant (default) and a dark variant (auto-applied
 * when the viewer's prefers-color-scheme is dark). The exported HTML respects
 * both, so the user's profile automatically matches their visitor's OS.
 */
import type { ThemeSpec } from "./profile";

export interface ThemePreset {
  id: string;
  name: string;
  /** Light theme colors. */
  light: ThemeSpec;
  /** Dark theme colors. If omitted, dark mode uses light colors as-is. */
  dark?: ThemeSpec;
  /** Tiny swatch for the picker UI. */
  swatch: string[];
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "warm",
    name: "Warm",
    swatch: ["#FAFAF7", "#1A1A1F", "#B8754A"],
    light: {
      id: "warm",
      name: "Warm",
      background: "#FAFAF7",
      text: "#1A1A1F",
      muted: "#6B6B73",
      card: "#FFFFFF",
      cardBorder: "#E8E5DD",
      linkText: "#1A1A1F",
      accent: "#B8754A",
      avatarRing: "#E6B87A",
    },
    dark: {
      id: "warm",
      name: "Warm",
      background: "#111113",
      text: "#F5F5F7",
      muted: "#A1A1AA",
      card: "#1B1B1F",
      cardBorder: "#303037",
      linkText: "#F5F5F7",
      accent: "#E6B87A",
      avatarRing: "#E6B87A",
    },
  },
  {
    id: "minimal",
    name: "Minimal",
    swatch: ["#FFFFFF", "#000000", "#000000"],
    light: {
      id: "minimal",
      name: "Minimal",
      background: "#FFFFFF",
      text: "#0A0A0A",
      muted: "#737373",
      card: "#FFFFFF",
      cardBorder: "#E5E5E5",
      linkText: "#0A0A0A",
      accent: "#0A0A0A",
      avatarRing: "#0A0A0A",
    },
    dark: {
      id: "minimal",
      name: "Minimal",
      background: "#000000",
      text: "#FFFFFF",
      muted: "#737373",
      card: "#0A0A0A",
      cardBorder: "#1F1F1F",
      linkText: "#FFFFFF",
      accent: "#FFFFFF",
      avatarRing: "#FFFFFF",
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    swatch: ["#0F172A", "#F1F5F9", "#22D3EE"],
    light: {
      id: "ocean",
      name: "Ocean",
      background: "#F0F9FF",
      text: "#0F172A",
      muted: "#475569",
      card: "#FFFFFF",
      cardBorder: "#BAE6FD",
      linkText: "#0F172A",
      accent: "#0EA5E9",
      avatarRing: "#22D3EE",
    },
    dark: {
      id: "ocean",
      name: "Ocean",
      background: "#0F172A",
      text: "#F1F5F9",
      muted: "#94A3B8",
      card: "#1E293B",
      cardBorder: "#334155",
      linkText: "#F1F5F9",
      accent: "#22D3EE",
      avatarRing: "#22D3EE",
    },
  },
  {
    id: "forest",
    name: "Forest",
    swatch: ["#F5F7F2", "#1F2A1E", "#4F7A4A"],
    light: {
      id: "forest",
      name: "Forest",
      background: "#F5F7F2",
      text: "#1F2A1E",
      muted: "#5C6B57",
      card: "#FFFFFF",
      cardBorder: "#D7E3CF",
      linkText: "#1F2A1E",
      accent: "#4F7A4A",
      avatarRing: "#5A8F5A",
    },
    dark: {
      id: "forest",
      name: "Forest",
      background: "#0E140D",
      text: "#E8F0E5",
      muted: "#9CAE96",
      card: "#1A2418",
      cardBorder: "#2A3626",
      linkText: "#E8F0E5",
      accent: "#7EB88C",
      avatarRing: "#7EB88C",
    },
  },
  {
    id: "sunset",
    name: "Sunset",
    swatch: ["#FFEDD5", "#7C2D12", "#F97316"],
    light: {
      id: "sunset",
      name: "Sunset",
      background: "#FFF7ED",
      text: "#7C2D12",
      muted: "#A16244",
      card: "#FFFFFF",
      cardBorder: "#FED7AA",
      linkText: "#7C2D12",
      accent: "#F97316",
      avatarRing: "#FB923C",
    },
    dark: {
      id: "sunset",
      name: "Sunset",
      background: "#1A0E08",
      text: "#FFEDD5",
      muted: "#C4A48D",
      card: "#2A1810",
      cardBorder: "#43281C",
      linkText: "#FFEDD5",
      accent: "#F97316",
      avatarRing: "#FB923C",
    },
  },
  {
    id: "cyber",
    name: "Cyber",
    swatch: ["#0B0118", "#E0AAFF", "#9D4EDD"],
    light: {
      id: "cyber",
      name: "Cyber",
      background: "#F5F0FF",
      text: "#1A0B2E",
      muted: "#5A4570",
      card: "#FFFFFF",
      cardBorder: "#D8C5F5",
      linkText: "#1A0B2E",
      accent: "#7B2CBF",
      avatarRing: "#9D4EDD",
    },
    dark: {
      id: "cyber",
      name: "Cyber",
      background: "#0B0118",
      text: "#E0AAFF",
      muted: "#9D7ECF",
      card: "#180A2A",
      cardBorder: "#2A1648",
      linkText: "#E0AAFF",
      accent: "#9D4EDD",
      avatarRing: "#9D4EDD",
    },
  },
  {
    id: "rose",
    name: "Rose",
    swatch: ["#FFF1F2", "#881337", "#E11D48"],
    light: {
      id: "rose",
      name: "Rose",
      background: "#FFF1F2",
      text: "#4C0519",
      muted: "#9F3F58",
      card: "#FFFFFF",
      cardBorder: "#FECDD3",
      linkText: "#4C0519",
      accent: "#E11D48",
      avatarRing: "#F43F5E",
    },
    dark: {
      id: "rose",
      name: "Rose",
      background: "#150509",
      text: "#FECDD3",
      muted: "#A37A85",
      card: "#240A14",
      cardBorder: "#3F0F23",
      linkText: "#FECDD3",
      accent: "#F43F5E",
      avatarRing: "#F43F5E",
    },
  },
  {
    id: "slate",
    name: "Slate",
    swatch: ["#F8FAFC", "#0F172A", "#475569"],
    light: {
      id: "slate",
      name: "Slate",
      background: "#F8FAFC",
      text: "#0F172A",
      muted: "#475569",
      card: "#FFFFFF",
      cardBorder: "#CBD5E1",
      linkText: "#0F172A",
      accent: "#475569",
      avatarRing: "#64748B",
    },
    dark: {
      id: "slate",
      name: "Slate",
      background: "#020617",
      text: "#F8FAFC",
      muted: "#94A3B8",
      card: "#0F172A",
      cardBorder: "#1E293B",
      linkText: "#F8FAFC",
      accent: "#94A3B8",
      avatarRing: "#64748B",
    },
  },
];

/** Find a preset by id (falls back to "warm"). */
export function getThemePreset(id: string): ThemePreset {
  return THEME_PRESETS.find((t) => t.id === id) ?? THEME_PRESETS[0];
}
