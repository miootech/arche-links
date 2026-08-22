import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link in Bio kostenlos erstellen \u2013 arche.links",
  description: "Erstelle deine kostenlose Link-in-Bio Seite mit arche.links. Unbegrenzte Links, Themes, Social Icons. Ohne Anmeldung, ohne Wasserzeichen, direkt im Browser.",
  alternates: { canonical: "https://arche-links.pages.dev/link-in-bio" },
  openGraph: {
    title: "Link in Bio kostenlos erstellen \u2013 arche.links",
    description: "Kostenlose Link-in-Bio Seite. Unbegrenzte Links, Themes, Social Icons.",
    url: "https://arche-links.pages.dev/link-in-bio",
    type: "website",
    locale: "de_DE",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist arche.links wirklich kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, 100% kostenlos. Keine Credits, keine Limits, keine versteckten Kosten. Alle Features sind kostenlos nutzbar."
      }
    },
    {
      "@type": "Question",
      "name": "Brauche ich ein Konto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Du erstellst deine Seite direkt im Browser und teilst den Link oder lädst sie als HTML herunter."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viele Links kann ich hinzufügen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unbegrenzt. Im Gegensatz zu Linktree (5 Links im Free-Plan) gibt es bei arche.links kein Limit."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich meine Seite anpassen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. 8 Themes, 16 Color-Hunt-Paletten, eigene Hex-Farben, 5 Layouts und 13 Social Icons."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert arche.links auf dem Handy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, arche.links ist vollständig mobil-optimiert. Die erstellte Seite funktioniert perfekt auf iOS und Android."
      }
    }
  ]
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "arche.links",
      "item": "https://arche-links.pages.dev/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Link in Bio",
      "item": "https://arche-links.pages.dev/link-in-bio"
    }
  ]
};

const preHydrationScript = `(function(){try{var t=localStorage.getItem('theme');if(t===null){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`;
const toggleScript = `(function(){var b=document.getElementById('theme-toggle');if(!b)return;b.addEventListener('click',function(){var d=document.documentElement.classList.toggle('dark');try{localStorage.setItem('theme',d?'dark':'light');}catch(e){}b.setAttribute('aria-label',d?'In den hellen Modus wechseln':'In den dunklen Modus wechseln');});})();`;

export default function LinkInBio() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script dangerouslySetInnerHTML={{ __html: preHydrationScript }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto flex items-center gap-2">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">Link in Bio</span>
          <button id="theme-toggle" aria-label="In den dunklen Modus wechseln" type="button" className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-inset ring-border bg-surface text-foreground hover:bg-surface-elevated transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block dark:hidden"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></button>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Link in Bio <span className="text-amber-accent">kostenlos</span> erstellen
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Eine Link-in-Bio Seite bündelt alle deine wichtigen Links an einem Ort. Perfekt für Instagram, TikTok und andere Social-Media-Profile, die nur einen einzigen Link in der Bio erlauben. Mit arche.links erstellst du deine Seite in unter einer Minute – komplett kostenlos, ohne Anmeldung und ohne Wasserzeichen.
            </p>
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Jetzt Link-in-Bio erstellen →
            </a>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Warum brauchst du eine Link-in-Bio Seite?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Instagram, TikTok, Twitter, Threads und die meisten Social-Media-Plattformen erlauben nur einen einzigen klickbaren Link in deiner Bio. Wenn du täglich neue Inhalte postest, ein Produkt launchst oder auf deinen YouTube-Kanal verweisen willst, müsstest du theoretisch ständig den Bio-Link wechseln – und alte Links gehen verloren. Eine Link-in-Bio Seite löst dieses Problem, indem sie alle deine Links an einem zentralen Ort sammelt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Statt teure Pro-Pläne bei Linktree zu abonnieren, bietet arche.links eine komplett kostenlose Alternative mit unbegrenzten Links, eigenen Themes, Social Icons und HTML-Export. Deine Seite ist in Sekunden erstellt, mobil-optimiert und datenschutzfreundlich – alle Daten bleiben in deinem Browser, es gibt keine Server-Datenbank.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Vergleich: arche.links vs. Linktree Free</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="border-b border-border"><th className="text-left py-3 px-4 font-semibold">Feature</th><th className="text-center py-3 px-4 font-semibold text-amber-accent">arche.links</th><th className="text-center py-3 px-4 font-semibold text-muted-foreground">Linktree Free</th></tr></thead>
                <tbody className="divide-y divide-border"><tr><td className="py-3 px-4">Anzahl Links</td><td className="text-center py-3 px-4 text-success">Unbegrenzt</td><td className="text-center py-3 px-4 text-destructive">5</td></tr><tr><td className="py-3 px-4">Anmeldung</td><td className="text-center py-3 px-4 text-success">Nicht nötig</td><td className="text-center py-3 px-4 text-destructive">Erforderlich</td></tr><tr><td className="py-3 px-4">Themes</td><td className="text-center py-3 px-4 text-foreground">8 + eigene Farben</td><td className="text-center py-3 px-4 text-destructive">Wenige</td></tr><tr><td className="py-3 px-4">Social Icons</td><td className="text-center py-3 px-4 text-foreground">13 Plattformen</td><td className="text-center py-3 px-4 text-destructive">Begrenzt</td></tr><tr><td className="py-3 px-4">HTML Export</td><td className="text-center py-3 px-4 text-success">Ja</td><td className="text-center py-3 px-4 text-destructive">Nein</td></tr><tr><td className="py-3 px-4">Wasserzeichen</td><td className="text-center py-3 px-4 text-success">Keins</td><td className="text-center py-3 px-4 text-muted-foreground">Linktree-Branding</td></tr><tr><td className="py-3 px-4">Preis</td><td className="text-center py-3 px-4 text-success">Kostenlos</td><td className="text-center py-3 px-4 text-muted-foreground">Free / Pro $5/mo</td></tr></tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">So erstellst du deine Link-in-Bio Seite</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Erstellung einer Link-in-Bio Seite mit arche.links dauert weniger als eine Minute. Du brauchst keine Anmeldung und kannst sofort loslegen.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Öffne <a href="https://arche-links.pages.dev/" className="text-amber-accent hover:underline">arche.links</a> – keine Anmeldung nötig</li><li>Trage deinen Namen und eine kurze Bio ein</li><li>Lade optional ein Profilbild hoch</li><li>Füge unbegrenzt Links hinzu – mit Icon, Titel und URL</li><li>Wähle ein Theme aus 8 Presets oder eigene Hex-Farben</li><li>Füge Social Icons hinzu (Instagram, YouTube, TikTok, GitHub, …)</li><li>Teile deine URL in der Instagram- oder TikTok-Bio</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Features von arche.links</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">Unbegrenzte Links</h3>
                <p className="text-xs text-muted-foreground mt-1">Füge so viele Links hinzu wie du willst. Kein Limit wie bei Linktree Free.</p>
              </div><div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">8 Themes + eigene Farben</h3>
                <p className="text-xs text-muted-foreground mt-1">Voreingestellte Themes oder eigene Hex-Farben aus ColorHunt-Paletten.</p>
              </div><div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">13 Social Icons</h3>
                <p className="text-xs text-muted-foreground mt-1">Instagram, YouTube, TikTok, GitHub, LinkedIn, Twitch, Discord und mehr.</p>
              </div><div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">HTML Export</h3>
                <p className="text-xs text-muted-foreground mt-1">Lade deine Seite als eigenständige HTML-Datei herunter und hoste sie selbst.</p>
              </div><div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">URL-Hash Hosting</h3>
                <p className="text-xs text-muted-foreground mt-1">Teile dein Profil über eine URL – das Profil ist in der URL kodiert, kein Server nötig.</p>
              </div><div className="rounded-xl bg-surface ring-1 ring-inset ring-border p-4">
                <h3 className="font-semibold text-sm">Dark + Light Mode</h3>
                <p className="text-xs text-muted-foreground mt-1">Deine Seite schaltet automatisch zwischen Hell und Dunkel je nach Besucher-Einstellung.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Datenschutz bei arche.links</h2>
            <p className="text-muted-foreground leading-relaxed">
              arche.links speichert keine Profil-Daten auf einem Server. Deine Link-Konfiguration wird entweder direkt in der URL (als Hash) kodiert oder als eigenständige HTML-Datei zum Download bereitgestellt. Das bedeutet: keine Server-Datenbank, kein Tracking, keine Daten, die missbraucht werden können.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ – Häufige Fragen</h2>
            <div className="space-y-3">
              <div><h3 className="font-semibold">Ist arche.links wirklich kostenlos?</h3><p className="text-muted-foreground text-sm mt-1">Ja, 100% kostenlos. Keine Credits, keine Limits, keine versteckten Kosten. Alle Features sind kostenlos nutzbar.</p></div><div><h3 className="font-semibold">Brauche ich ein Konto?</h3><p className="text-muted-foreground text-sm mt-1">Nein. Du erstellst deine Seite direkt im Browser und teilst den Link oder lädst sie als HTML herunter.</p></div><div><h3 className="font-semibold">Wie viele Links kann ich hinzufügen?</h3><p className="text-muted-foreground text-sm mt-1">Unbegrenzt. Im Gegensatz zu Linktree (5 Links im Free-Plan) gibt es bei arche.links kein Limit.</p></div><div><h3 className="font-semibold">Kann ich meine Seite anpassen?</h3><p className="text-muted-foreground text-sm mt-1">Ja. 8 Themes, 16 Color-Hunt-Paletten, eigene Hex-Farben, 5 Layouts und 13 Social Icons.</p></div><div><h3 className="font-semibold">Funktioniert arche.links auf dem Handy?</h3><p className="text-muted-foreground text-sm mt-1">Ja, arche.links ist vollständig mobil-optimiert. Die erstellte Seite funktioniert perfekt auf iOS und Android.</p></div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Weitere arche Tools</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://arche-remove.pages.dev/" className="block p-5 rounded-2xl bg-surface ring-1 ring-inset ring-border hover:ring-amber-accent/40 transition-all">
                <h3 className="font-semibold">arche.remove</h3>
                <p className="text-sm text-muted-foreground mt-1">Kostenloser KI Hintergrund Entferner – 100% im Browser.</p>
              </a><a href="https://arche-pdf.pages.dev/" className="block p-5 rounded-2xl bg-surface ring-1 ring-inset ring-border hover:ring-amber-accent/40 transition-all">
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
              Jetzt kostenlos starten →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm pb-8"><a href="https://arche-links.pages.dev/linktree-alternative" className="text-amber-accent hover:underline">Linktree Alternative</a> <span className="text-muted-foreground">·</span> <a href="https://arche-links.pages.dev/instagram-bio-link" className="text-amber-accent hover:underline">Instagram Bio Link</a> <span className="text-muted-foreground">·</span> <a href="https://arche-links.pages.dev/tiktok-bio-link" className="text-amber-accent hover:underline">TikTok Bio Link</a> <span className="text-muted-foreground">·</span> <a href="https://arche-links.pages.dev/faq" className="text-amber-accent hover:underline">FAQ</a></div>
        </main>
      </div>
      <script dangerouslySetInnerHTML={{ __html: toggleScript }} />
    </>
  );
}
