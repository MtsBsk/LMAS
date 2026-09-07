import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-medium">LMAS</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Association loi 1901. Des maraudes près de chez vous, des
            projets de développement à l’étranger.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">À propos</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <Link href="/projets" className="hover:text-foreground">
              Nos projets
            </Link>
            <Link href="/dons" className="hover:text-foreground">
              Faire un don
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-sm font-medium">Nous contacter</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:contact@lmas-asso.org" className="hover:text-foreground">
              contact@lmas-asso.org
            </a>
            <span>12 rue des Lilas, 75000 Paris</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} LMAS — Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
