import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arche-links.pages.dev'
  const lastModified = new Date('2026-08-22')

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/linktree-alternative`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/link-in-bio`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/instagram-bio-link`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tiktok-bio-link`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}