import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ \u2013 arche.links: Linktree Alternative kostenlos",
  description: "H\u00e4ufige Fragen zu arche.links: Ist es kostenlos? Brauche ich ein Konto? Wie viele Links? Alles beantwortet.",
  alternates: { canonical: "https://arche-links.pages.dev/faq" },
  openGraph: {
    title: "FAQ \u2013 arche.links",
    description: "H\u00e4ufige Fragen zur kostenlosen Linktree Alternative.",
    url: "https://arche-links.pages.dev/faq",
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
        "text": "Ja, arche.links ist 100% kostenlos. Es gibt keine Credits, keine täglichen Limits und keine versteckten Kosten. Alle Features sind kostenlos nutzbar."
      }
    },
    {
      "@type": "Question",
      "name": "Brauche ich ein Konto bei arche.links?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. arche.links erfordert keine Anmeldung. Du erstellst deine Seite direkt im Browser und teilst den Link oder lädst sie als HTML herunter."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viele Links kann ich hinzufügen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unbegrenzt. Im Gegensatz zu Linktree (5 Links im kostenlosen Plan) gibt es bei arche.links kein Limit."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich meine Seite anpassen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. arche.links bietet 8 Themes, 16 Color-Hunt-Paletten, eigene Hex-Farben, 5 Layouts und Social Icons für 13 Plattformen."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert arche.links auf dem Handy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, arche.links ist vollständig mobil-optimiert. Die erstellte Seite funktioniert perfekt auf iOS und Android."
      }
    },
    {
      "@type": "Question",
      "name": "Muss ich etwas installieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. arche.links läuft vollständig im Browser. Keine App, keine Software, keine Installation."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich meine Seite als HTML exportieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Du kannst deine fertige Seite als eigenständige HTML-Datei herunterladen und auf deinem eigenen Webspace hosten."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zu Linktree?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "arche.links bietet alle Features, die bei Linktree kostenpflichtig wären (unbegrenzte Links, Themes, kein Wasserzeichen), komplett kostenlos an. Zudem ist arche.links datenschutzfreundlicher."
      }
    },
    {
      "@type": "Question",
      "name": "Sind meine Daten sicher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. arche.links speichert keine Profil-Daten auf einem Server. Deine Link-Konfiguration wird entweder in der URL (Hash) gespeichert oder als HTML-Datei heruntergeladen."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich arche.links für mein Business nutzen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. arche.links eignet sich für Creator, Influencer, Kleinunternehmen und alle, die eine professionelle Link-in-Bio Seite benötigen."
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
      "name": "FAQ",
      "item": "https://arche-links.pages.dev/faq"
    }
  ]
};

const preHydrationScript = `(function(){try{var t=localStorage.getItem('theme');if(t===null){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`;
const toggleScript = `(function(){var b=document.getElementById('theme-toggle');if(!b)return;b.addEventListener('click',function(){var d=document.documentElement.classList.toggle('dark');try{localStorage.setItem('theme',d?'dark':'light');}catch(e){}b.setAttribute('aria-label',d?'In den hellen Modus wechseln':'In den dunklen Modus wechseln');});})();`;

export default function FAQ() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script dangerouslySetInnerHTML={{ __html: preHydrationScript }} />
      <div className="min-h-[100svh] bg-background text-foreground">
        <nav className="text-sm text-muted-foreground px-4 sm:px-6 pt-4 max-w-3xl mx-auto flex items-center gap-2">
          <a href="https://arche-links.pages.dev/" className="hover:text-foreground">arche.links</a>
          <span className="mx-1">/</span>
          <span className="text-foreground">FAQ</span>
          <button id="theme-toggle" aria-label="In den dunklen Modus wechseln" type="button" className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-inset ring-border bg-surface text-foreground hover:bg-surface-elevated transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block dark:hidden"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></button>
        </nav>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              FAQ –  <span className="text-amber-accent">arche.links</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Auf dieser Seite beantworten wir die häufigsten Fragen zu arche.links – der kostenlosen Linktree Alternative ohne Anmeldung, ohne Wasserzeichen und ohne Link-Limit. Alle Features sind 100% kostenlos nutzbar.
            </p>
            <a href="https://arche-links.pages.dev/" className="inline-flex items-center gap-2 mt-6 h-12 px-6 rounded-2xl bg-amber-accent text-white font-semibold hover:opacity-90 transition-opacity">
              Jetzt Link-in-Bio Seite erstellen →
            </a>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Was ist arche.links?</h2>
            <p className="text-muted-foreground leading-relaxed">
              arche.links ist eine kostenlose Link-in-Bio Anwendung, die vollständig im Browser läuft. Du erstellst deine Seite mit unbegrenzten Links, eigenen Farben, Themes und Social Icons – ohne Anmeldung, ohne Server, ohne Datenbank. Deine Link-Konfiguration wird entweder direkt in der URL (als Hash) kodiert oder als eigenständige HTML-Datei heruntergeladen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Im Gegensatz zu Linktree, das im Free-Plan auf 5 Links, wenige Themes und Wasserzeichen-Branding beschränkt ist, bietet arche.links alle Features komplett kostenlos an. Du kannst deine Seite als HTML exportieren, auf eigenem Webspace hosten und beliebig anpassen – auch kommerzielle Nutzung ist erlaubt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Vergleich: arche.links vs. Linktree Free</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr className="border-b border-border"><th className="text-left py-3 px-4 font-semibold">Feature</th><th className="text-center py-3 px-4 font-semibold text-amber-accent">arche.links</th><th className="text-center py-3 px-4 font-semibold text-muted-foreground">Linktree Free</th></tr></thead>
                <tbody className="divide-y divide-border"><tr><td className="py-3 px-4">Anzahl Links</td><td className="text-center py-3 px-4 text-success">Unbegrenzt</td><td className="text-center py-3 px-4 text-destructive">5</td></tr><tr><td className="py-3 px-4">Anmeldung</td><td className="text-center py-3 px-4 text-success">Nicht nötig</td><td className="text-center py-3 px-4 text-destructive">Erforderlich</td></tr><tr><td className="py-3 px-4">Themes</td><td className="text-center py-3 px-4 text-foreground">8 + eigene Farben</td><td className="text-center py-3 px-4 text-destructive">Wenige</td></tr><tr><td className="py-3 px-4">Social Icons</td><td className="text-center py-3 px-4 text-foreground">13 Plattformen</td><td className="text-center py-3 px-4 text-destructive">Begrenzt</td></tr><tr><td className="py-3 px-4">HTML Export</td><td className="text-center py-3 px-4 text-success">Ja</td><td className="text-center py-3 px-4 text-destructive">Nein</td></tr><tr><td className="py-3 px-4">Wasserzeichen</td><td className="text-center py-3 px-4 text-success">Keins</td><td className="text-center py-3 px-4 text-muted-foreground">Linktree-Branding</td></tr><tr><td className="py-3 px-4">Datenschutz</td><td className="text-center py-3 px-4 text-success">100% client-side</td><td className="text-center py-3 px-4 text-destructive">Server-basiert</td></tr></tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">So nutzt du arche.links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Nutzung von arche.links ist selbsterklärend und erfordert keine Anmeldung. Hier eine kurze Übersicht der wichtigsten Schritte.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Öffne <a href="https://arche-links.pages.dev/" className="text-amber-accent hover:underline">arche.links</a> im Browser</li><li>Trage im Content-Tab deinen Namen, eine Bio und optional ein Profilbild ein</li><li>Füge unter „Links" unbegrenzt viele Ziel-URLs hinzu – mit Icon, Titel und URL</li><li>Wechsle zum Design-Tab und wähle ein Theme oder eigene Farben</li><li>Wähle im Layout-Tab ein Layout (Cards, Pills, Outline, Solid, Minimal)</li><li>Wechsle zum Export-Tab, kopiere deine Share-URL oder lade die Seite als HTML herunter</li><li>Füge die URL in deine Instagram-, TikTok- oder Twitter-Bio ein</li>
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
              arche.links speichert keine Profil-Daten auf einem Server. Deine Link-Konfiguration wird entweder direkt in der URL (als Hash) kodiert oder als eigenständige HTML-Datei zum Download bereitgestellt. Das bedeutet: keine Server-Datenbank, kein Tracking, keine Daten, die missbraucht werden können. Das ist ein wesentlicher Vorteil gegenüber Linktree, das alle Profildaten serverseitig speichert.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ – Häufige Fragen</h2>
            <div className="space-y-3">
              <div><h3 className="font-semibold">Ist arche.links wirklich kostenlos?</h3><p className="text-muted-foreground text-sm mt-1">Ja, arche.links ist 100% kostenlos. Es gibt keine Credits, keine täglichen Limits und keine versteckten Kosten. Alle Features sind kostenlos nutzbar.</p></div><div><h3 className="font-semibold">Brauche ich ein Konto bei arche.links?</h3><p className="text-muted-foreground text-sm mt-1">Nein. arche.links erfordert keine Anmeldung. Du erstellst deine Seite direkt im Browser und teilst den Link oder lädst sie als HTML herunter.</p></div><div><h3 className="font-semibold">Wie viele Links kann ich hinzufügen?</h3><p className="text-muted-foreground text-sm mt-1">Unbegrenzt. Im Gegensatz zu Linktree (5 Links im kostenlosen Plan) gibt es bei arche.links kein Limit.</p></div><div><h3 className="font-semibold">Kann ich meine Seite anpassen?</h3><p className="text-muted-foreground text-sm mt-1">Ja. arche.links bietet 8 Themes, 16 Color-Hunt-Paletten, eigene Hex-Farben, 5 Layouts und Social Icons für 13 Plattformen.</p></div><div><h3 className="font-semibold">Funktioniert arche.links auf dem Handy?</h3><p className="text-muted-foreground text-sm mt-1">Ja, arche.links ist vollständig mobil-optimiert. Die erstellte Seite funktioniert perfekt auf iOS und Android.</p></div><div><h3 className="font-semibold">Muss ich etwas installieren?</h3><p className="text-muted-foreground text-sm mt-1">Nein. arche.links läuft vollständig im Browser. Keine App, keine Software, keine Installation.</p></div><div><h3 className="font-semibold">Kann ich meine Seite als HTML exportieren?</h3><p className="text-muted-foreground text-sm mt-1">Ja. Du kannst deine fertige Seite als eigenständige HTML-Datei herunterladen und auf deinem eigenen Webspace hosten.</p></div><div><h3 className="font-semibold">Was ist der Unterschied zu Linktree?</h3><p className="text-muted-foreground text-sm mt-1">arche.links bietet alle Features, die bei Linktree kostenpflichtig wären (unbegrenzte Links, Themes, kein Wasserzeichen), komplett kostenlos an. Zudem ist arche.links datenschutzfreundlicher.</p></div><div><h3 className="font-semibold">Sind meine Daten sicher?</h3><p className="text-muted-foreground text-sm mt-1">Ja. arche.links speichert keine Profil-Daten auf einem Server. Deine Link-Konfiguration wird entweder in der URL (Hash) gespeichert oder als HTML-Datei heruntergeladen.</p></div><div><h3 className="font-semibold">Kann ich arche.links für mein Business nutzen?</h3><p className="text-muted-foreground text-sm mt-1">Ja. arche.links eignet sich für Creator, Influencer, Kleinunternehmen und alle, die eine professionelle Link-in-Bio Seite benötigen.</p></div>
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
          <div className="flex flex-wrap gap-3 text-sm pb-8"><a href="https://arche-links.pages.dev/linktree-alternative" className="text-amber-accent hover:underline">Linktree Alternative</a> <span className="text-muted-foreground">·</span> <a href="https://arche-links.pages.dev/link-in-bio" className="text-amber-accent hover:underline">Link in Bio</a> <span className="text-muted-foreground">·</span> <a href="https://arche-links.pages.dev/instagram-bio-link" className="text-amber-accent hover:underline">Instagram Bio Link</a> <span className="text-muted-foreground">·</span> <a href="https://arche-links.pages.dev/tiktok-bio-link" className="text-amber-accent hover:underline">TikTok Bio Link</a></div>
        </main>
      </div>
      <script dangerouslySetInnerHTML={{ __html: toggleScript }} />
    </>
  );
}
