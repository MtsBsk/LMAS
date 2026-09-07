"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [renderedPathname, setRenderedPathname] = React.useState(pathname)

  if (renderedPathname !== pathname) {
    setRenderedPathname(pathname)
    if (open) setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-heading text-xl font-medium">
          LMAS
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button render={<Link href="/dons" />} nativeButton={false} className="bg-lantern text-lantern-foreground hover:bg-lantern/85">
            Faire un don
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-1 text-sm",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={<Link href="/dons" />} nativeButton={false}
              className="mt-1 w-fit bg-lantern text-lantern-foreground hover:bg-lantern/85"
            >
              Faire un don
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
