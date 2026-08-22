import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – arche.links: Linktree Alternative kostenlos",
  description: "Häufige Fragen zu arche.links: Ist es kostenlos? Brauche ich ein Konto? Wie viele Links? Alles beantwortet.",
  alternates: { canonical: "https://arche-links.pages.dev/faq" },
  openGraph: {
    title: "FAQ – arche.links",
    description: "Häufige Fragen zur kostenlosen Linktree Alternative.",
    url: "https://arche-links.pages.dev/faq",
    type: "website",
    locale: "de_DE",
  },
};

const faqs = [
  { q: "Ist arche.links wirklich kostenlos?", a: "Ja, arche.links ist 100% kostenlos. Es gibt keine Credits, keine täglichen Limits und keine versteckten Kosten. Alle Features sind kostenlos nutzbar." },
  { q: "Brauche ich ein Konto bei arche.links?", a: "Nein. arche.links erfordert keine Anmeldung. Du erstellst deine Seite direkt im Browser und teilst den Link oder lädst sie als HTML herunter." },
  { q: "Wie viele Links kann ich hinzufügen?", a: "Unbegrenzt. Im Gegensatz zu Linktree (5 Links im kostenlosen Plan) gibt es bei arche.links kein Limit." },
  { q: "Kann ich meine Seite anpassen?", a: "Ja. arche.links bietet 8 Themes, 16 Color-Hunt-Paletten, eigene Hex-Farben, 5 Layouts und Social Icons für 13 Plattformen." },
  { q: "Funktioniert arche.links auf dem Handy?", a: "Ja, arche.links ist vollständig mobil-optimiert. Die erstellte Seite funktioniert perfekt auf iOS und Android." },
  { q: "Muss ich etwas installieren?", a: "Nein. arche.links läuft vollständig im Browser. Keine App, keine Software, keine Installation." },
  { q: "Kann ich meine Seite als HTML exportieren?", a: "Ja. Du kannst deine fertige Seite als eigenständige HTML-Datei herunterladen und auf deinem eigenen Webspace hosten." },
  { q: "Was ist der Unterschied zu Linktree?", a: "arche.links bietet alle Features, die bei Linktree kostenpflichtig wären (unbegrenzte Links, Themes, kein Wasserzeichen), komplett kostenlos an. Zudem ist arche.links datenschutzfreundlicher." },
  { q: "Sind meine Daten sicher?", a: "Ja. arche.links speichert keine Profil-Daten auf einem Server. Deine Link-Konfiguration wird entweder in der URL (Hash) gespeichert oder als HTML-Datei heruntergeladen." },
  { q: "Kann ich arche.links für mein Business nutzen?", a: "Ja. arche.links eignet sich für Creator, Influencer, Kleinunternehmen und alle, die eine professionelle Link-in-Bio Seite benötigen." },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "arche.links", item: "https://arche-links.pages.dev/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://arche-links.pages.dev/faq" },
  ],
};

export default function FAQ() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">FAQ</span>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">FAQ – arche.links</h1>
            <p className="mt-4 text-muted-foreground">Häufige Fragen zur kostenlosen Linktree Alternative.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-surface ring-1 ring-inset ring-border p-5">
                <h2 className="font-semibold text-foreground">{faq.q}</h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="pt-8 text-center">
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Jetzt Link-in-Bio erstellen →
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
