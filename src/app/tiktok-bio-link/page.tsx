import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Bio Link kostenlos – arche.links",
  description: "Erstelle deine TikTok Bio Link Seite kostenlos mit arche.links. Unbegrenzte Links, Themes, Social Icons. Ohne Anmeldung, direkt im Browser.",
  alternates: { canonical: "https://arche-links.pages.dev/tiktok-bio-link" },
  openGraph: {
    title: "TikTok Bio Link kostenlos – arche.links",
    description: "Erstelle deine TikTok Bio Link Seite kostenlos. Unbegrenzte Links, Themes.",
    url: "https://arche-links.pages.dev/tiktok-bio-link",
    type: "website",
    locale: "de_DE",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "arche.links", item: "https://arche-links.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "TikTok Bio Link", item: "https://arche-links.pages.dev/tiktok-bio-link" },
  ],
};

export default function TikTokBioLink() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">TikTok Bio Link</span>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              TikTok Bio Link <span className="text-amber-accent">kostenlos</span> erstellen
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              TikTok erlaubt nur einen Link in deiner Bio. Mit arche.links erstellst
              du eine Seite mit allen deinen Links – kostenlos, ohne Anmeldung.
            </p>
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              TikTok Bio Link erstellen →
            </a>
          </div>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">TikTok Bio Link einrichten</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Erstelle deine Seite auf <a href="https://arche-links.pages.dev/" className="text-amber-accent hover:underline">arche.links</a></li>
              <li>Füge Links zu deinen neuesten TikTok-Videos hinzu</li>
              <li>Verlinke auf Instagram, YouTube, Shop oder Merch</li>
              <li>Kopiere deine arche.links URL</li>
              <li>Füge die URL in TikTok → Profil bearbeiten → Website ein</li>
            </ol>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Warum arche.links für TikTok?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kostenlos – keine Limits wie bei Linktree Free</li>
              <li>Unbegrenzte Links auf einer Seite</li>
              <li>Schnell ladend – wichtig für TikTok-Nutzer</li>
              <li>Mobil-optimiert für die TikTok-App</li>
              <li>Eigene Farben und Themes</li>
            </ul>
          </section>
          <div className="pt-8 text-center">
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              TikTok Bio Link kostenlos erstellen →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm pb-8">
            <a href="https://arche-links.pages.dev/linktree-alternative" className="text-amber-accent hover:underline">Linktree Alternative</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/link-in-bio" className="text-amber-accent hover:underline">Link in Bio</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/instagram-bio-link" className="text-amber-accent hover:underline">Instagram Bio Link</a>
          </div>
        </main>
      </div>
    </>
  );
}
