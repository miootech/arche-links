import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Bio Link kostenlos – arche.links",
  description: "Erstelle deine Instagram Bio Link Seite kostenlos mit arche.links. Unbegrenzte Links, Themes, Social Icons. Ohne Anmeldung, direkt im Browser.",
  alternates: { canonical: "https://arche-links.pages.dev/instagram-bio-link" },
  openGraph: {
    title: "Instagram Bio Link kostenlos – arche.links",
    description: "Erstelle deine Instagram Bio Link Seite kostenlos. Unbegrenzte Links, Themes.",
    url: "https://arche-links.pages.dev/instagram-bio-link",
    type: "website",
    locale: "de_DE",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "arche.links", item: "https://arche-links.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "Instagram Bio Link", item: "https://arche-links.pages.dev/instagram-bio-link" },
  ],
};

export default function InstagramBioLink() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">Instagram Bio Link</span>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Instagram Bio Link <span className="text-amber-accent">kostenlos</span> erstellen
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Instagram erlaubt nur einen einzigen Link in deiner Bio. Mit einer
              Link-in-Bio Seite von arche.links bündelst du alle Links an einem Ort
              – kostenlos und ohne Anmeldung.
            </p>
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Instagram Bio Link erstellen →
            </a>
          </div>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">So nutzt du arche.links für Instagram</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Erstelle deine Seite auf <a href="https://arche-links.pages.dev/" className="text-amber-accent hover:underline">arche.links</a></li>
              <li>Füge Links zu deinen neuesten Posts, Reels, Story-Highlights hinzu</li>
              <li>Verlinke auf deinen Shop, YouTube-Kanal oder Newsletter</li>
              <li>Kopiere deine arche.links URL</li>
              <li>Füge die URL in deine Instagram-Bio ein unter "Website"</li>
            </ol>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Vorteile von arche.links für Instagram</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kostenlos – keine Pro-Version wie bei Linktree nötig</li>
              <li>Unbegrenzte Links (Instagram erlaubt nur 1 Link in der Bio)</li>
              <li>Mobil-optimiert für die Instagram-App</li>
              <li>Eigene Farben passend zu deinem Instagram-Branding</li>
              <li>Keine Anmeldung – sofort startklar</li>
            </ul>
          </section>
          <div className="pt-8 text-center">
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Instagram Bio Link kostenlos erstellen →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm pb-8">
            <a href="https://arche-links.pages.dev/linktree-alternative" className="text-amber-accent hover:underline">Linktree Alternative</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/link-in-bio" className="text-amber-accent hover:underline">Link in Bio</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/tiktok-bio-link" className="text-amber-accent hover:underline">TikTok Bio Link</a>
          </div>
        </main>
      </div>
    </>
  );
}
