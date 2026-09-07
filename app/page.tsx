import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Carnet } from "@/components/carnet"
import { chiffresCles, projets } from "@/lib/data"

export default function Page() {
  const maraudes = projets.filter((p) => p.terrain === "maraude")
  const etranger = projets.filter((p) => p.terrain === "etranger")

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="text-sm text-ink-foreground/55">Association loi 1901</p>
            <h1 className="mt-4 max-w-md font-heading text-4xl leading-[1.1] font-medium sm:text-5xl">
              Une présence, ici et ailleurs.
            </h1>
            <p className="mt-5 max-w-md text-base text-ink-foreground/70">
              LMAS va à la rencontre des personnes sans-abri lors de maraudes
              régulières, et soutient des projets d’accès à l’eau et à
              l’éducation dans quatre pays.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/dons" />} nativeButton={false}
                size="lg"
                className="rounded-sm bg-lantern text-lantern-foreground hover:bg-lantern/85"
              >
                Faire un don
              </Button>
              <Button
                render={<Link href="/projets" />} nativeButton={false}
                variant="outline"
                size="lg"
                className="rounded-sm border-ink-foreground/25 bg-transparent text-ink-foreground hover:bg-ink-foreground/10"
              >
                Découvrir nos projets
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 md:justify-start md:px-0">
            <Carnet />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-ink px-6 py-14 text-ink-foreground sm:px-10 md:py-20">
          <div className="mx-auto max-w-sm md:ml-auto md:mr-0">
            <span className="inline-block size-2.5 bg-lantern" />
            <h2 className="mt-3 font-heading text-2xl font-medium">
              Les maraudes
            </h2>
            <p className="mt-3 text-sm text-ink-foreground/70">
              Trois fois par semaine, nos équipes partent à pied à la
              rencontre des personnes qui vivent dans la rue, avec un repas
              chaud, des vêtements, et surtout le temps de s’arrêter et
              d’écouter.
            </p>
            <Link
              href="/projets"
              className="mt-4 inline-block text-sm font-medium text-lantern hover:underline"
            >
              Voir les villes couvertes
            </Link>
          </div>
        </div>

        <div className="bg-earth px-6 py-14 text-earth-foreground sm:px-10 md:py-20">
          <div className="mx-auto max-w-sm md:mr-auto md:ml-0">
            <span className="inline-block size-2.5 bg-earth-foreground" />
            <h2 className="mt-3 font-heading text-2xl font-medium">
              Les projets à l’étranger
            </h2>
            <p className="mt-3 text-sm text-earth-foreground/75">
              Au Sénégal et à Madagascar, LMAS finance des forages d’eau
              potable et accompagne la scolarisation d’enfants dont les
              familles ne peuvent pas seules assumer la rentrée.
            </p>
            <Link
              href="/projets"
              className="mt-4 inline-block text-sm font-medium text-earth-foreground hover:underline"
            >
              Voir les projets en cours
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-8">
            {chiffresCles.map((chiffre) => (
              <div key={chiffre.label}>
                <p className="font-heading text-3xl font-medium">
                  {chiffre.valeur}
                  {chiffre.unite && (
                    <span className="ml-1 text-base text-muted-foreground">
                      {chiffre.unite}
                    </span>
                  )}
                </p>
                <p className="mt-1 max-w-40 text-sm text-muted-foreground">
                  {chiffre.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-medium">
            Ce que nous menons en ce moment
          </h2>
          <Link href="/projets" className="text-sm text-muted-foreground hover:text-foreground">
            Tous les projets
          </Link>
        </div>

        <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
          {[...maraudes, ...etranger].slice(0, 4).map((projet) => (
            <div key={projet.slug} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-medium">{projet.titre}</p>
                <p className="text-sm text-muted-foreground">{projet.lieu}</p>
              </div>
              <p className="text-xs text-muted-foreground sm:text-right">
                {projet.periode}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-earth text-earth-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-medium">
              Chaque don compte, où qu’il aille.
            </h2>
            <p className="mt-2 max-w-md text-sm text-earth-foreground/75">
              20 € financent une soirée de maraude complète. 50 € couvrent
              la rentrée scolaire d’un enfant à Antsirabe.
            </p>
          </div>
          <Button
            render={<Link href="/dons" />} nativeButton={false}
            size="lg"
            className="shrink-0 rounded-sm bg-lantern text-lantern-foreground hover:bg-lantern/85"
          >
            Faire un don
          </Button>
        </div>
      </section>
    </>
  )
}
