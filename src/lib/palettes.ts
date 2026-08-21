/**
 * arche.links — curated color palette presets (ColorHunt-style).
 *
 * Each palette is a 4-color set. When the user picks one, the four colors
 * are mapped onto the active theme slots:
 *   [0] background
 *   [1] text
 *   [2] card
 *   [3] accent
 *
 * (We map these onto BOTH light and dark theme slots by swapping light/dark
 * pairs as needed — see `applyPalette()`.)
 */

export interface ColorPalette {
  id: string;
  name: string;
  colors: [string, string, string, string];
}

export const COLOR_PALETTES: ColorPalette[] = [
  // ColorHunt classics
  { id: "ph1", name: "Warm Cream", colors: ["#FAFAF7", "#1A1A1F", "#FFFFFF", "#B8754A"] },
  { id: "ph2", name: "Sunset Glow", colors: ["#FFEDD5", "#7C2D12", "#FFFFFF", "#F97316"] },
  { id: "ph3", name: "Ocean Deep", colors: ["#0F172A", "#F1F5F9", "#1E293B", "#22D3EE"] },
  { id: "ph4", name: "Forest Sage", colors: ["#F5F7F2", "#1F2A1E", "#FFFFFF", "#4F7A4A"] },
  { id: "ph5", name: "Rose Petal", colors: ["#FFF1F2", "#4C0519", "#FFFFFF", "#E11D48"] },
  { id: "ph6", name: "Lavender", colors: ["#F5F0FF", "#1A0B2E", "#FFFFFF", "#7B2CBF"] },
  { id: "ph7", name: "Mocha", colors: ["#F5EFE6", "#3D2817", "#FFFFFF", "#A47148"] },
  { id: "ph8", name: "Mint", colors: ["#ECFDF5", "#022C22", "#FFFFFF", "#10B981"] },
  { id: "ph9", name: "Coral Reef", colors: ["#FFF7ED", "#7C2D12", "#FFFFFF", "#FF6B6B"] },
  { id: "ph10", name: "Midnight", colors: ["#030712", "#F9FAFB", "#111827", "#A78BFA"] },
  { id: "ph11", name: "Sand Dune", colors: ["#FAF6F0", "#3F2B1C", "#FFFFFF", "#B8860B"] },
  { id: "ph12", name: "Cyber Pink", colors: ["#0B0118", "#E0AAFF", "#180A2A", "#FF1B6B"] },
  { id: "ph13", name: "Pure Mono", colors: ["#FFFFFF", "#000000", "#F5F5F5", "#000000"] },
  { id: "ph14", name: "Inverted Mono", colors: ["#000000", "#FFFFFF", "#1A1A1A", "#FFFFFF"] },
  { id: "ph15", name: "Sky Fade", colors: ["#F0F9FF", "#0F172A", "#FFFFFF", "#0EA5E9"] },
  { id: "ph16", name: "Autumn", colors: ["#FFF8E1", "#3E2723", "#FFFFFF", "#BF6B1C"] },
];
