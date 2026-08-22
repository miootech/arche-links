import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link in Bio kostenlos erstellen – arche.links",
  description: "Erstelle deine kostenlose Link-in-Bio Seite mit arche.links. Unbegrenzte Links, Themes, Social Icons. Ohne Anmeldung, ohne Wasserzeichen, direkt im Browser.",
  alternates: { canonical: "https://arche-links.pages.dev/link-in-bio" },
  openGraph: {
    title: "Link in Bio kostenlos erstellen – arche.links",
    description: "Kostenlose Link-in-Bio Seite. Unbegrenzte Links, Themes, Social Icons.",
    url: "https://arche-links.pages.dev/link-in-bio",
    type: "website",
    locale: "de_DE",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "arche.links", item: "https://arche-links.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "Link in Bio", item: "https://arche-links.pages.dev/link-in-bio" },
  ],
};

export default function LinkInBio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">Link in Bio</span>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Link in Bio <span className="text-amber-accent">kostenlos</span> erstellen
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Eine Link-in-Bio Seite bündelt alle deine wichtigen Links an einem Ort.
              Perfekt für Instagram, TikTok und andere Social Media Profile, die nur
              einen einzigen Link in der Bio erlauben. Mit arche.links erstellst du
              deine Seite in unter einer Minute – kostenlos, ohne Anmeldung.
            </p>
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Jetzt Link-in-Bio erstellen →
            </a>
          </div>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Was ist eine Link-in-Bio Seite?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Eine Link-in-Bio Seite ist eine einfache Landing Page, die alle deine
              Links sammelt: Website, YouTube-Videos, Social Media Profile, Shop,
              Newsletter und mehr. Statt ständig den Link in deiner Instagram- oder
              TikTok-Bio zu wechseln, verlinkst du auf diese eine Seite, die alle
              Links enthält. Der Begriff "Link in Bio" stammt ursprünglich von
              Instagram, wo Profile nur einen einzigen klickbaren Link erlauben.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Wie erstelle ich eine Link-in-Bio Seite?</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Öffne <a href="https://arche-links.pages.dev/" className="text-amber-accent hover:underline">arche.links</a></li>
              <li>Trage deinen Namen und eine Bio ein</li>
              <li>Füge Links hinzu (Website, Social Media, Shop, …)</li>
              <li>Wähle ein Theme und deine Farben</li>
              <li>Teile den Link in deiner Instagram/TikTok Bio</li>
            </ol>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Warum arche.links für deine Link-in-Bio?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>100% kostenlos – keine Pro-Version nötig</li>
              <li>Unbegrenzte Anzahl Links</li>
              <li>Keine Anmeldung – direkt im Browser</li>
              <li>Eigene Farben und Themes</li>
              <li>Social Icons für Instagram, TikTok, YouTube und mehr</li>
              <li>HTML Export für eigenes Hosting</li>
              <li>Vollständig mobil-optimiert</li>
            </ul>
          </section>
          <div className="pt-8 text-center">
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Jetzt kostenlos starten →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm pb-8">
            <a href="https://arche-links.pages.dev/linktree-alternative" className="text-amber-accent hover:underline">Linktree Alternative</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/instagram-bio-link" className="text-amber-accent hover:underline">Instagram Bio Link</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/tiktok-bio-link" className="text-amber-accent hover:underline">TikTok Bio Link</a>
          </div>
        </main>
      </div>
    </>
  );
}
