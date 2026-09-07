import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { TerrainTag } from "@/components/terrain-tag"
import { projets } from "@/lib/data"

export const metadata: Metadata = {
  title: "Nos projets — LMAS",
  description: "Les maraudes et les projets de développement menés par LMAS.",
}

export default function ProjetsPage() {
  const maraudes = projets.filter((p) => p.terrain === "maraude")
  const etranger = projets.filter((p) => p.terrain === "etranger")

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="flex gap-1.5">
        <span className="size-2.5 bg-lantern" />
        <span className="size-2.5 bg-terrain" />
      </div>
      <h1 className="mt-3 max-w-lg font-heading text-3xl font-medium sm:text-4xl">
        Deux terrains, un même engagement.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Certaines de nos actions se déroulent à quelques rues d’ici, d’autres
        à plusieurs milliers de kilomètres. Toutes reposent sur des équipes
        qui reviennent, semaine après semaine, année après année.
      </p>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-medium">Les maraudes</h2>
        <div className="mt-5 divide-y divide-border/70 border-y border-border/70">
          {maraudes.map((projet) => (
            <article key={projet.slug} className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-medium">
                  {projet.titre}
                </h3>
                <TerrainTag terrain={projet.terrain} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {projet.lieu} — {projet.periode}
              </p>
              <p className="mt-3 max-w-2xl text-sm">{projet.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-heading text-xl font-medium">À l’étranger</h2>
        <div className="mt-5 divide-y divide-border/70 border-y border-border/70">
          {etranger.map((projet) => (
            <article key={projet.slug} className="py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-medium">
                  {projet.titre}
                </h3>
                <TerrainTag terrain={projet.terrain} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {projet.lieu} — {projet.periode}
              </p>
              <p className="mt-3 max-w-2xl text-sm">{projet.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-wrap items-center gap-4 bg-ink px-6 py-6 text-ink-foreground">
        <p className="text-sm text-ink-foreground/75">
          Envie de rejoindre une maraude ou de soutenir un projet ?
        </p>
        <div className="flex gap-3">
          <Button
            render={<Link href="/contact" />} nativeButton={false}
            variant="outline"
            className="rounded-sm border-ink-foreground/25 bg-transparent text-ink-foreground hover:bg-ink-foreground/10"
          >
            Nous contacter
          </Button>
          <Button
            render={<Link href="/dons" />} nativeButton={false}
            className="rounded-sm bg-lantern text-lantern-foreground hover:bg-lantern/85"
          >
            Faire un don
          </Button>
        </div>
      </div>
    </div>
  )
}
