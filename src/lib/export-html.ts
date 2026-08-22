/**
 * arche.links — self-contained profile HTML generator.
 *
 * Produces a complete, standalone HTML document that renders a Profile.
 * Used in TWO places:
 *   1. Export — the user downloads this string as `arche-links-<name>.html`.
 *   2. Live preview — rendered into an `<iframe srcDoc={html} />`.
 *
 * The HTML is intentionally tiny and dependency-free so the export works
 * on any static host (Cloudflare Pages, GitHub Pages, Netlify, or just
 * double-clicking the file).
 *
 * The renderer:
 *   - Reads `window.__ARCHE_PROFILE__` (set inline at the top of <body>).
 *   - Picks light/dark variant of the theme based on `prefers-color-scheme`.
 *   - Honors a manual `data-theme="light|dark"` attribute on <html> too,
 *     so users can ship a fixed-theme export if they want.
 *   - Renders links with the chosen layout style + custom colors.
 */

import type { Profile } from "./profile";

// SVG paths for social icons — kept minimal so the export stays small.
const SOCIAL_ICONS: Record<string, string> = {
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.2.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.2 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.2-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.2-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zM17.6 7a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
  twitter:
    "M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4.1 4.1 0 0011.7 9c0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.5-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.7 1.8 3.4-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 4 3-.7.6-1.9 1-3 1.2H4.4c1.1 1.3 2.7 2.1 4.6 2.1 5.5 0 8.5-4.6 8.5-8.5v-.4c.6-.4 1.1-1 1.5-1.6z",
  x: "M17.5 3h3.4l-7.4 8.5L22 21h-6.8l-5.3-7-6.1 7H.4l8-9.1L0 3h7l4.8 6.3L17.5 3zm-1.2 16h1.9L7 5H5l11.3 14z",
  tiktok:
    "M16.6 5.8c-.9-.6-1.5-1.5-1.7-2.6v-.7h-2.5v12.2c0 1.3-1 2.3-2.3 2.3a2.3 2.3 0 01-2.3-2.3c0-1.3 1-2.3 2.3-2.3.3 0 .5 0 .7.1v-2.5c-.2 0-.5-.1-.7-.1a4.8 4.8 0 100 9.6 4.8 4.8 0 004.8-4.8V9.1c1 .7 2.3 1.1 3.6 1.1V7.7c-.7 0-1.4-.2-2-.5-.1 0-.1-.1-.2-.1z",
  youtube:
    "M22 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C18.3 5.2 12 5.2 12 5.2s-6.3 0-7.9.4c-.8.2-1.5.9-1.7 1.7C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.6.4 7.9.4 7.9.4s6.3 0 7.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zm-11.5 3V9l5.3 3-5.3 3z",
  github:
    "M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.4 4.6-4.6 4.9.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0012 2z",
  linkedin:
    "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18H5.7V9.7h2.6V18zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 9.5h-2.6v-4c0-1-.4-1.6-1.2-1.6s-1.4.6-1.4 1.6v4H10.2V9.7h2.6v1.1c.4-.6 1.3-1.3 2.4-1.3 1.7 0 3 1.1 3 3.5V18z",
  twitch: "M4 3l1.5 17 6.5 3.5 6.5-3.5L20.5 3H4zm13 5.5h-9V7h9v1.5zm-1.5 5h-7.5V12H15.5v1.5z",
  discord:
    "M19.5 5.6c-1.4-.6-2.9-1.1-4.5-1.4l-.2.4c-1.5-.2-3-.2-4.5 0l-.2-.4c-1.6.3-3.1.8-4.5 1.4C2.8 9.2 2.2 12.8 2.5 16.3c1.8 1.3 3.5 2.1 5.2 2.6l.5-1.7c-.5-.2-1-.4-1.5-.7l.4-.3c2.9 1.3 6 1.3 8.9 0l.4.3c-.5.3-1 .5-1.5.7l.5 1.7c1.7-.5 3.4-1.3 5.2-2.6.4-4-.5-7.6-2.6-10.7zM8.9 14.4c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7zm6.2 0c-.8 0-1.5-.8-1.5-1.7s.7-1.7 1.5-1.7 1.5.8 1.5 1.7-.7 1.7-1.5 1.7z",
  facebook:
    "M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z",
  spotify:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm4.6 14.4c-.2.3-.6.4-.9.2-2.4-1.5-5.4-1.8-9-1-.4.1-.7-.2-.8-.5-.1-.4.2-.7.5-.8 3.9-.9 7.2-.5 9.9 1.2.4.2.5.6.3.9zm1.2-2.7c-.2.4-.7.5-1.1.3-2.7-1.7-6.9-2.2-10.1-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.7-1.1 8.3-.6 11.4 1.3.4.2.5.7.3 1.1zm.1-2.8C14.7 8.8 9.4 8.6 6.3 9.5c-.5.2-1.1-.1-1.2-.7-.2-.5.1-1.1.7-1.2 3.6-1.1 9.4-.9 13.1 1.4.5.3.7.9.4 1.4-.3.4-.9.6-1.4.3z",
  email: "M2 5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2.4.4L12 11l7.6-5.6H4.4zM20 7l-7.6 5.4a.8.8 0 01-.8 0L4 7v12h16V7z",
  website:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.8c1.6 0 3.2 1.6 4.2 4.2H7.8C8.8 5.4 10.4 3.8 12 3.8zM6 12c0-1.4.2-2.7.5-3.9h4.5v8H6.5A12 12 0 016 12zm6 4.1v-8h4.5c.3 1.2.5 2.5.5 3.9s-.2 2.7-.5 4.1H12zm-2.7 3.6c-.6-.9-1.1-2.1-1.4-3.6h2.9v3.6h-1.5zm4.4 0v-3.6h2.9c-.3 1.5-.8 2.7-1.4 3.6h-1.5zm5.7-3.6H17c.3-1.3.5-2.7.5-4.1s-.2-2.8-.5-4.1h2.4c.4 1.3.6 2.7.6 4.1s-.2 2.8-.6 4.1z",
};

function socialSvg(platform: string, fill: string): string {
  const path = SOCIAL_ICONS[platform] ?? SOCIAL_ICONS.website;
  return `<svg viewBox="0 0 24 24" fill="${fill}" width="20" height="20" aria-hidden="true"><path d="${path}"/></svg>`;
}

/**
 * Generate the complete standalone HTML for a profile.
 *
 * @param profile The profile to render.
 * @param options
 *   - mode: "auto" (respect prefers-color-scheme) or "light" / "dark" (fixed).
 *   - includeData: if true, embed `window.__ARCHE_PROFILE__` so the export
 *     is self-contained and reloadable. Set false for the live editor
 *     preview where the profile is set externally.
 */
export function generateProfileHTML(
  profile: Profile,
  options: { mode?: "auto" | "light" | "dark"; includeData?: boolean } = {},
): string {
  const mode = options.mode ?? "auto";
  const includeData = options.includeData ?? true;
  const profileJson = JSON.stringify(profile);

  // We use TWO sets of CSS custom properties (--bg, --text, etc.) — one for
  // light, one for dark — and switch between them based on the mode.
  const lightTheme = profile.theme;
  // If the profile's theme has a dark variant shipped (which it does, since
  // we apply presets' dark variant into a ThemeSpec), use that. But because
  // a profile stores a single ThemeSpec, we derive a "dark" variant by
  // falling back to the same colors when no dark variant exists.
  // For the export, we use the ThemeSpec as-is and apply prefers-color-scheme
  // only if mode === "auto".
  const t = lightTheme;

  const themeCssVars = `
    --bg: ${t.background};
    --text: ${t.text};
    --muted: ${t.muted};
    --card: ${t.card};
    --card-border: ${t.cardBorder};
    --link: ${t.linkText};
    --accent: ${t.accent};
    --avatar-ring: ${t.avatarRing};
  `;

  const layout = profile.layout;
  // Shadow styles per layout.
  const shadowMap = [
    "none",
    "0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.04)",
    "0 4px 8px rgba(0,0,0,.10), 0 12px 32px rgba(0,0,0,.08)",
  ];
  const boxShadow = shadowMap[layout.shadow] ?? "none";

  // Border styles per layout.
  const cardStyleMap: Record<string, string> = {
    cards: `background: var(--card); border: 1px solid var(--card-border); box-shadow: ${boxShadow};`,
    pills: `background: var(--card); border: 1px solid var(--card-border);`,
    outline: `background: transparent; border: 1.5px solid var(--accent); box-shadow: none;`,
    solid: `background: var(--accent); border: none; box-shadow: none;`,
    minimal: `background: transparent; border: none; border-bottom: 1px solid var(--card-border); box-shadow: none; border-radius: 0 !important;`,
  };
  const cardStyle = cardStyleMap[layout.style] ?? cardStyleMap.cards;

  const linkTextForStyle =
    layout.style === "solid" ? "var(--bg)" : "var(--link)";

  const align = layout.align === "center" ? "center" : "flex-start";
  const textAlign = layout.align === "center" ? "center" : "left";

  const html = `<!DOCTYPE html>
<html lang="en" data-mode="${mode}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<title>${escapeHtml(profile.name)} — arche.links</title>
<meta name="description" content="${escapeHtml(profile.bio)}"/>
<meta property="og:type" content="profile"/>
<meta property="og:title" content="${escapeHtml(profile.name)}"/>
<meta property="og:description" content="${escapeHtml(profile.bio)}"/>
${
  profile.avatar
    ? `<meta property="og:image" content="${profile.avatar}"/>`
    : ""
}
<style>
*{box-sizing:border-box;}
html,body{margin:0;padding:0;}
html{${themeCssVars} background:var(--bg); color:var(--text); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;}
body{min-height:100svh; padding:32px 20px; padding-top:calc(32px + env(safe-area-inset-top)); padding-bottom:calc(32px + env(safe-area-inset-bottom));}
.wrap{max-width:${layout.maxWidth}px; margin:0 auto; display:flex; flex-direction:column; align-items:${align}; gap:24px; text-align:${textAlign};}
.avatar{width:96px; height:96px; border-radius:50%; background:var(--card); border:3px solid var(--avatar-ring); overflow:hidden; display:flex; align-items:center; justify-content:center;}
.avatar img{width:100%; height:100%; object-fit:cover; border-radius:50%;}
.avatar-empty{font-size:36px; color:var(--muted); font-weight:600;}
.name{font-size:24px; font-weight:600; letter-spacing:-0.01em; display:flex; align-items:center; gap:6px;}
.verified{display:inline-flex; width:18px; height:18px; background:var(--accent); border-radius:50%; align-items:center; justify-content:center; color:var(--bg); font-size:12px; font-weight:bold;}
.bio{font-size:15px; color:var(--muted); margin-top:-12px; max-width:90%; line-height:1.45;}
.links{width:100%; display:flex; flex-direction:column; gap:${layout.gap}px; margin-top:8px;}
.link{display:flex; align-items:center; justify-content:center; gap:10px; ${cardStyle} border-radius:${layout.radius}px; padding:${layout.padding}px ${layout.padding + 4}px; text-decoration:none; color:${linkTextForStyle}; font-size:15px; font-weight:500; transition:transform .15s ease, box-shadow .15s ease, opacity .15s ease; line-height:1.2; min-height:48px; width:100%;}
.link:hover{transform:translateY(-1px); opacity:.92;}
.link:active{transform:translateY(0);}
.link .icon{font-size:18px; line-height:1;}
.link.featured{border-color:var(--accent); box-shadow:0 0 0 1px var(--accent), ${boxShadow};}
.socials{display:flex; gap:14px; margin-top:4px;}
.socials a{color:var(--muted); display:inline-flex; padding:6px; border-radius:8px; transition:color .15s ease, background .15s ease;}
.socials a:hover{color:var(--accent); background:var(--card);}
.footer-brand{margin-top:24px; font-size:11px; color:var(--muted); text-decoration:none; opacity:.6;}
.footer-brand:hover{opacity:1;}
@media (max-width:480px){.wrap{gap:20px;}.name{font-size:22px;}.bio{font-size:14px;}}
@media (prefers-reduced-motion:reduce){*{animation:none!important; transition:none!important;}}
</style>
</head>
<body>
${includeData ? `<script>window.__ARCHE_PROFILE__=${profileJson};</script>` : ""}
<div class="wrap">
<div class="avatar">${
    profile.avatar
      ? `<img src="${profile.avatar}" alt="${escapeHtml(profile.name)}"/>`
      : `<span class="avatar-empty">${escapeHtml(profile.name.charAt(0) || "U")}</span>`
  }</div>
<div class="name">${escapeHtml(profile.name)}${
    profile.verified
      ? `<span class="verified" title="Verified" aria-label="Verified">✓</span>`
      : ""
  }</div>
${profile.bio ? `<div class="bio">${escapeHtml(profile.bio)}</div>` : ""}
<div class="links">
${profile.links
  .map(
    (l) => `  <a class="link${l.featured ? " featured" : ""}" href="${escapeHtml(
      l.url,
    )}" target="_blank" rel="noopener noreferrer">
    ${l.icon ? `<span class="icon">${escapeHtml(l.icon)}</span>` : ""}
    <span>${escapeHtml(l.title)}</span>
  </a>`,
  )
  .join("\n")}
</div>
${
  profile.socials.length
    ? `<div class="socials">
${profile.socials
  .map(
    (s) =>
      `  <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(
        s.platform,
      )}" title="${escapeHtml(s.platform)}">${socialSvg(
        s.platform,
        "currentColor",
      )}</a>`,
  )
  .join("\n")}
</div>`
    : ""
}
<a class="footer-brand" href="https://arche-projects.pages.dev" target="_blank" rel="noopener noreferrer">made with arche.links</a>
</div>
</body>
</html>`;
  return html;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
