import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://arche-links.pages.dev";
const SITE_NAME = "arche.links";
const OG_IMAGE = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "arche.links — Free Linktree Alternative | Unlimited Links, No Sign-up",
  description:
    "Build your Linktree-style page with all premium features free. Unlimited links, themes, custom colors, and layouts. Export as standalone HTML or share via URL. 100% client-side.",
  applicationName: SITE_NAME,
  authors: [{ name: "Arche", url: "https://arche-projects.pages.dev" }],
  creator: "Arche",
  publisher: "Arche",
  keywords: [
    "linktree alternative free",
    "free linktree",
    "link in bio",
    "links page builder",
    "no signup linktree",
    "custom linktree",
    "arche.links",
    "linktree unlimited",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  category: "technology",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
    shortcut: [{ url: "/favicon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "arche.links — Free Linktree Alternative | Unlimited Links, No Sign-up",
    description:
      "Build your Linktree-style page with all premium features free. Unlimited links, themes, custom colors, and layouts. Export as standalone HTML or share via URL.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "arche.links — All your links. One page. Free forever.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "arche.links — Free Linktree Alternative | Unlimited Links, No Sign-up",
    description:
      "Build your Linktree-style page with all premium features free. Unlimited links, themes, custom colors, layouts. Export as standalone HTML or share via URL.",
    images: [OG_IMAGE],
    creator: "@arche",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/#webapp`,
      name: SITE_NAME,
      alternateName: "Arche Links",
      url: SITE_URL,
      description:
        "Build your Linktree-style page with all premium features free. Unlimited links, themes, custom colors, layouts. Export as standalone HTML or share via URL.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any (modern web browser)",
      browserRequirements:
        "Modern browser with WebAssembly support (Chrome, Edge, Firefox, Safari)",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Unlimited links",
        "Custom themes and colors",
        "Multiple layout presets",
        "ColorHunt-style palette presets",
        "Social icons (Instagram, YouTube, GitHub, etc.)",
        "Avatar upload",
        "Verified badge",
        "Featured links",
        "HTML export (self-contained, no dependencies)",
        "URL hash hosting (no backend)",
        "Dark and light mode auto-switching",
        "100% client-side, no sign-up",
      ],
      author: {
        "@type": "Organization",
        name: "Arche",
        url: "https://arche-projects.pages.dev",
      },
      publisher: {
        "@type": "Organization",
        name: "Arche",
        url: "https://arche-projects.pages.dev",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://arche-projects.pages.dev/#org",
      name: "Arche",
      url: "https://arche-projects.pages.dev",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
