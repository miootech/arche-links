/**
 * arche.links — profile data model.
 *
 * A profile is everything needed to render a Linktree-style page:
 * metadata (name, bio, avatar), links, theme, layout, and optional
 * social icons. The structure is JSON-serialisable so it can be:
 *   1. Encoded into a URL hash for hosting on a static Cloudflare URL
 *   2. Embedded into a standalone HTML file for download
 *   3. Saved to localStorage for editing
 */

// ---------------------------------------------------------------------------
// Core types
// ---------------------------------------------------------------------------

export interface LinkItem {
  /** Stable id for React keys + reorder. */
  id: string;
  /** Visible label, e.g. "My latest YouTube video". */
  title: string;
  /** Destination URL. Must include protocol. */
  url: string;
  /** Optional emoji icon (rendered as text). */
  icon?: string;
  /** Optional: highlight this link (premium feature — typically a paid add-on). */
  featured?: boolean;
}

export interface SocialLink {
  id: string;
  /** Platform identifier — used to pick the icon. */
  platform:
    | "instagram"
    | "twitter"
    | "x"
    | "tiktok"
    | "youtube"
    | "github"
    | "linkedin"
    | "twitch"
    | "discord"
    | "facebook"
    | "spotify"
    | "email"
    | "website";
  url: string;
}

export interface ThemeSpec {
  /** Identifier so the editor knows which preset is active. */
  id: string;
  /** Visible name shown in the picker. */
  name: string;
  /** Page background (CSS value — can be solid color, gradient, etc.). */
  background: string;
  /** Page text color. */
  text: string;
  /** Muted/secondary text color. */
  muted: string;
  /** Link card background. */
  card: string;
  /** Link card border. */
  cardBorder: string;
  /** Link text color. */
  linkText: string;
  /** Accent color (icons, name, featured links). */
  accent: string;
  /** Avatar ring/border color. */
  avatarRing: string;
}

export interface LayoutSpec {
  id: string;
  name: string;
  /** Visual style — controls border radius, shadow, border. */
  style: "cards" | "pills" | "outline" | "solid" | "minimal";
  /** Link block alignment. */
  align: "center" | "left";
  /** Max width of the link column in pixels. */
  maxWidth: number;
  /** Gap between link cards in px. */
  gap: number;
  /** Padding inside each card in px. */
  padding: number;
  /** Card corner radius in px (ignored for "pills" which is full). */
  radius: number;
  /** Card shadow strength: 0 = none, 1 = subtle, 2 = strong. */
  shadow: 0 | 1 | 2;
}

export interface Profile {
  /** Schema version — bump when the shape changes. */
  v: 1;
  /** Display name. */
  name: string;
  /** Short bio under the name. */
  bio: string;
  /** Avatar as a data URL (so the export is self-contained). */
  avatar: string;
  /** Optional verified badge. */
  verified?: boolean;
  /** Primary link list (Linktree-style). */
  links: LinkItem[];
  /** Small social icons row at the bottom. */
  socials: SocialLink[];
  /** Active theme. */
  theme: ThemeSpec;
  /** Active layout. */
  layout: LayoutSpec;
  /** Timestamp of last edit. */
  updatedAt: number;
}

// ---------------------------------------------------------------------------
// Default / starter profile
// ---------------------------------------------------------------------------

export function createDefaultProfile(): Profile {
  return {
    v: 1,
    name: "Your Name",
    bio: "Everything I do, in one place.",
    avatar: "",
    verified: false,
    links: [
      {
        id: id(),
        title: "My Website",
        url: "https://example.com",
        icon: "🌐",
        featured: true,
      },
      {
        id: id(),
        title: "Latest YouTube Video",
        url: "https://youtube.com",
        icon: "▶",
      },
      {
        id: id(),
        title: "Newsletter",
        url: "https://example.com/news",
        icon: "✉",
      },
    ],
    socials: [
      { id: id(), platform: "instagram", url: "https://instagram.com" },
      { id: id(), platform: "youtube", url: "https://youtube.com" },
      { id: id(), platform: "github", url: "https://github.com" },
    ],
    theme: {
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
    layout: {
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
    updatedAt: Date.now(),
  };
}

/** Generate a short unique id (good enough for client-only use). */
export function id(): string {
  return Math.random().toString(36).slice(2, 10);
}
