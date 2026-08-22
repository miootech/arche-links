import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arche-links.pages.dev";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-08-22",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/linktree-alternative`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/link-in-bio`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/instagram-bio-link`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tiktok-bio-link`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: "2026-08-22",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}