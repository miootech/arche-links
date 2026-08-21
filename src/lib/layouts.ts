/**
 * arche.links — layout presets.
 */
import type { LayoutSpec } from "./profile";

export const LAYOUT_PRESETS: LayoutSpec[] = [
  {
    id: "cards",
    name: "Cards",
    style: "cards",
    align: "center",
    maxWidth: 480,
    gap: 12,
    padding: 16,
    radius: 14,
    shadow: 1,
  },
  {
    id: "pills",
    name: "Pills",
    style: "pills",
    align: "center",
    maxWidth: 460,
    gap: 10,
    padding: 14,
    radius: 999,
    shadow: 0,
  },
  {
    id: "outline",
    name: "Outline",
    style: "outline",
    align: "center",
    maxWidth: 480,
    gap: 12,
    padding: 16,
    radius: 10,
    shadow: 0,
  },
  {
    id: "solid",
    name: "Solid",
    style: "solid",
    align: "center",
    maxWidth: 480,
    gap: 8,
    padding: 18,
    radius: 12,
    shadow: 0,
  },
  {
    id: "minimal",
    name: "Minimal",
    style: "minimal",
    align: "center",
    maxWidth: 440,
    gap: 4,
    padding: 12,
    radius: 8,
    shadow: 0,
  },
];

export function getLayoutPreset(id: string): LayoutSpec {
  return LAYOUT_PRESETS.find((l) => l.id === id) ?? LAYOUT_PRESETS[0];
}
