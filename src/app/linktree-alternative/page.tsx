import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linktree Alternative kostenlos – arche.links",
  description: "Kostenlose Linktree Alternative ohne Anmeldung. Unbegrenzte Links, Themes, Social Icons. 100% im Browser – arche.links.",
  alternates: { canonical: "https://arche-links.pages.dev/linktree-alternative" },
  openGraph: {
    title: "Linktree Alternative kostenlos – arche.links",
    description: "Kostenlose Linktree Alternative ohne Anmeldung. Unbegrenzte Links, Themes, Social Icons.",
    url: "https://arche-links.pages.dev/linktree-alternative",
    type: "website",
    locale: "de_DE",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Ist arche.links wirklich kostenlos?", acceptedAnswer: { "@type": "Answer", text: "Ja, arche.links ist 100% kostenlos. Es gibt keine Credits, keine täglichen Limits und keine versteckten Kosten. Alle Features sind kostenlos nutzbar." } },
    { "@type": "Question", name: "Brauche ich ein Konto bei arche.links?", acceptedAnswer: { "@type": "Answer", text: "Nein. arche.links erfordert keine Anmeldung. Du erstellst deine Seite direkt im Browser und teilst den Link oder lädst sie als HTML herunter." } },
    { "@type": "Question", name: "Wie viele Links kann ich hinzufügen?", acceptedAnswer: { "@type": "Answer", text: "Unbegrenzt. Im Gegensatz zu Linktree (5 Links im kostenlosen Plan) gibt es bei arche.links kein Limit." } },
    { "@type": "Question", name: "Kann ich meine Seite anpassen?", acceptedAnswer: { "@type": "Answer", text: "Ja. arche.links bietet 8 Themes, 16 Color-Hunt-Paletten, eigene Hex-Farben, 5 Layouts und Social Icons für Instagram, YouTube, TikTok und mehr." } },
    { "@type": "Question", name: "Funktioniert arche.links auf dem Handy?", acceptedAnswer: { "@type": "Answer", text: "Ja, arche.links ist vollständig mobil-optimiert. Die erstellte Seite funktioniert perfekt auf iOS und Android." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "arche.links", item: "https://arche-links.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "Linktree Alternative", item: "https://arche-links.pages.dev/linktree-alternative" },
  ],
};

export default function LinktreeAlternative() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">Linktree Alternative</span>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Linktree Alternative <span className="text-amber-accent">kostenlos</span> – arche.links
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              arche.links ist die kostenlose Alternative zu Linktree. Erstelle
              deine Link-in-Bio Seite mit unbegrenzten Links, eigenen Farben und
              Themes – ganz ohne Anmeldung und ohne Limits. Im Gegensatz zu
              Linktree, das im kostenlosen Plan auf 5 Links und wenige Themes
              beschränkt ist, bietet arche.links alle Features kostenlos.
            </p>
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Jetzt Seite erstellen →
            </a>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Warum eine Linktree Alternative?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Linktree ist der bekannteste Link-in-Bio-Dienst, aber der kostenlose
              Plan ist stark eingeschränkt: Nur 5 Links, wenige Themes, kein
              eigenes Branding, keine detaillierte Anpassung, und ein
              Linktree-Wasserzeichen wird auf jeder Seite angezeigt. Wer
              professionell auftreten will, muss bei Linktree auf den Pro-Plan
              ($5/Monat) upgraden.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              arche.links schließt diese Lücke. Es ist eine komplett kostenlose
              Alternative, die alle Features bietet, die bei Linktree
              kostenpflichtig wären: unbegrenzte Links, eigene Farben und Themes,
              Social Icons, HTML-Export und kein Wasserzeichen. Zudem ist
              arche.links datenschutzfreundlicher – deine Link-Konfiguration wird
              client-seitig generiert, nicht auf einem Server gespeichert.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Vergleich: arche.links vs. Linktree</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-amber-accent">arche.links</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Linktree Free</th>
                </tr></thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2.5 px-4">Anzahl Links</td><td className="text-center py-2.5 px-4 text-success">Unbegrenzt</td><td className="text-center py-2.5 px-4 text-destructive">5</td></tr>
                  <tr><td className="py-3 px-4">Anmeldung</td><td className="text-center py-3 px-4 text-success">Nicht nötig</td><td className="text-center py-3 px-4 text-destructive">Erforderlich</td></tr>
                  <tr><td className="py-3 px-4">Themes</td><td className="text-center py-3 px-4 text-success">8 + eigene Farben</td><td className="text-center py-3 px-4 text-muted-foreground">Wenige</td></tr>
                  <tr><td className="py-3 px-4">Social Icons</td><td className="text-center py-3 px-4 text-success">13 Plattformen</td><td className="text-center py-3 px-4 text-muted-foreground">Begrenzt</td></tr>
                  <tr><td className="py-3 px-4">HTML Export</td><td className="text-center py-3 px-4 text-success">Ja</td><td className="text-center py-3 px-4 text-destructive">Nein</td></tr>
                  <tr><td className="py-3 px-4">Wasserzeichen</td><td className="text-center py-3 px-4 text-success">Keins</td><td className="text-center py-3 px-4 text-destructive">Linktree-Branding</td></tr>
                  <tr><td className="py-3 px-4">Datenschutz</td><td className="text-center py-3 px-4 text-success">100% client-side</td><td className="text-center py-3 px-4 text-muted-foreground">Server-basiert</td></tr>
                  <tr><td className="py-3 px-4">Preis</td><td className="text-center py-3 px-4 text-success">Kostenlos</td><td className="text-center py-3 px-4 text-muted-foreground">Free / Pro $5/mo</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">So erstellst du deine Link-in-Bio Seite</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Erstellung einer Link-in-Bio Seite mit arche.links dauert weniger
              als eine Minute. Du brauchst keine Anmeldung und kannst sofort
              loslegen.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Öffne <a href="https://arche-links.pages.dev/" className="text-amber-accent hover:underline">arche.links</a> – keine Anmeldung nötig</li>
              <li>Trage deinen Namen und eine kurze Bio ein</li>
              <li>Lade ein Profilbild hoch (optional)</li>
              <li>Füge unbegrenzt Links hinzu – mit Icon, Titel und URL</li>
              <li>Wähle ein Theme aus 8 Presets oder erstelle eigene Farben</li>
              <li>Füge Social Icons hinzu (Instagram, YouTube, TikTok, GitHub, …)</li>
              <li>Teile deine Seite per URL oder lade sie als standalone HTML herunter</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Features von arche.links</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">Unbegrenzte Links</h3>
                <p className="text-xs text-muted-foreground mt-1">Füge so viele Links hinzu wie du willst. Kein Limit wie bei Linktree Free.</p>
              </div>
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">8 Themes + eigene Farben</h3>
                <p className="text-xs text-muted-foreground mt-1">Voreingestellte Themes oder eigene Hex-Farben aus ColorHunt-Paletten.</p>
              </div>
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">13 Social Icons</h3>
                <p className="text-xs text-muted-foreground mt-1">Instagram, YouTube, TikTok, GitHub, LinkedIn, Twitch, Discord und mehr.</p>
              </div>
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">HTML Export</h3>
                <p className="text-xs text-muted-foreground mt-1">Lade deine Seite als eigenständige HTML-Datei herunter und hoste sie selbst.</p>
              </div>
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">URL-Hash Hosting</h3>
                <p className="text-xs text-muted-foreground mt-1">Teile dein Profil über eine URL – das Profil ist in der URL kodiert, kein Server nötig.</p>
              </div>
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">Dark + Light Mode</h3>
                <p className="text-xs text-muted-foreground mt-1">Deine Seite schaltet automatisch zwischen Hell und Dunkel je nach Besucher-Einstellung.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Datenschutz bei arche.links</h2>
            <p className="text-muted-foreground leading-relaxed">
              arche.links speichert keine Profil-Daten auf einem Server. Deine
              Link-Konfiguration wird entweder direkt in der URL (als Hash)
              kodiert oder als eigenständige HTML-Datei zum Download
              bereitgestellt. Das bedeutet: keine Server-Datenbank, kein
              Tracking, keine Daten, die missbraucht werden können. Das ist ein
              wesentlicher Vorteil gegenüber Linktree, das alle Profildaten
              serverseitig speichert.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ – Häufige Fragen</h2>
            <div className="space-y-3">
              <div><h3 className="font-semibold">Ist arche.links wirklich kostenlos?</h3><p className="text-muted-foreground text-sm mt-1">Ja, 100% kostenlos. Keine Credits, keine Limits, keine versteckten Kosten.</p></div>
              <div><h3 className="font-semibold">Brauche ich ein Konto?</h3><p className="text-muted-foreground text-sm mt-1">Nein. Du erstellst deine Seite direkt im Browser und teilst den Link.</p></div>
              <div><h3 className="font-semibold">Wie viele Links kann ich hinzufügen?</h3><p className="text-muted-foreground text-sm mt-1">Unbegrenzt. Im Gegensatz zu Linktree Free (5 Links) gibt es kein Limit.</p></div>
              <div><h3 className="font-semibold">Kann ich meine Seite anpassen?</h3><p className="text-muted-foreground text-sm mt-1">Ja. 8 Themes, 16 Paletten, eigene Hex-Farben, 5 Layouts, 13 Social Icons.</p></div>
              <div><h3 className="font-semibold">Funktioniert es auf dem Handy?</h3><p className="text-muted-foreground text-sm mt-1">Ja, vollständig mobil-optimiert für iOS und Android.</p></div>
              <div><h3 className="font-semibold">Werden meine Daten gespeichert?</h3><p className="text-muted-foreground text-sm mt-1">Nein. arche.links speichert keine Profildaten serverseitig. Alles passiert im Browser.</p></div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Weitere arche Tools</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://arche-remove.pages.dev/" className="block p-5 rounded-2xl bg-surface ring-1 ring-inset ring-border hover:ring-amber-accent/40 transition-all">
                <h3 className="font-semibold">arche.remove</h3>
                <p className="text-sm text-muted-foreground mt-1">Kostenloser KI Hintergrund Entferner – 100% im Browser.</p>
              </a>
              <a href="https://arche-pdf.pages.dev/" className="block p-5 rounded-2xl bg-surface ring-1 ring-inset ring-border hover:ring-amber-accent/40 transition-all">
                <h3 className="font-semibold">arche.pdf</h3>
                <p className="text-sm text-muted-foreground mt-1">Kostenlose PDF Tools – Bearbeiten, Zusammenfügen, Signieren.</p>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Mehr Tools auf <a href="https://arche-website.pages.dev" className="text-amber-accent hover:underline">arche-website.pages.dev</a>
            </p>
          </section>

          <div className="pt-8 text-center">
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Kostenlose Link-in-Bio Seite erstellen →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm pb-8">
            <a href="https://arche-links.pages.dev/link-in-bio" className="text-amber-accent hover:underline">Link in Bio</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/instagram-bio-link" className="text-amber-accent hover:underline">Instagram Bio Link</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/tiktok-bio-link" className="text-amber-accent hover:underline">TikTok Bio Link</a>
            <span className="text-muted-foreground">·</span>
            <a href="https://arche-links.pages.dev/faq" className="text-amber-accent hover:underline">FAQ</a>
          </div>
        </main>
      </div>
    </>
  );
}
