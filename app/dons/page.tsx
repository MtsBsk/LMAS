import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Faire un don — LMAS",
  description: "Soutenez les maraudes et les projets internationaux de LMAS.",
}

const impacts = [
  {
    montant: "20 €",
    description: "Une soirée de maraude : repas chauds et boissons pour une trentaine de personnes.",
  },
  {
    montant: "50 €",
    description: "La rentrée scolaire complète d’un enfant du projet d’Antsirabe.",
  },
  {
    montant: "150 €",
    description: "Une pièce de rechange pour l’entretien d’un puits à Kaolack.",
  },
]

export default function DonsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-lantern">Faire un don</p>
      <h1 className="mt-2 max-w-lg font-heading text-3xl font-medium sm:text-4xl">
        Un don, deux terrains d’action.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Votre don finance à la fois nos maraudes et nos projets à l’étranger,
        selon les besoins du moment. Vous pouvez aussi préciser une
        affectation dans le message qui suit votre don.
      </p>

      <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
        {impacts.map((impact) => (
          <div key={impact.montant} className="flex items-baseline gap-6 py-5">
            <p className="w-20 shrink-0 font-heading text-2xl font-medium">
              {impact.montant}
            </p>
            <p className="text-sm text-muted-foreground">{impact.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-border/70 p-6">
        <Button
          size="lg"
          render={<Link href="#" />} nativeButton={false}
          className="bg-lantern text-lantern-foreground hover:bg-lantern/85"
        >
          Faire un don en ligne
        </Button>
        <p className="text-xs text-muted-foreground">
          Paiement sécurisé via notre plateforme de collecte (lien à
          connecter par l’association, par exemple HelloAsso).
        </p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-medium">Par virement ou chèque</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Écrivez-nous à{" "}
            <a href="mailto:contact@lmas-asso.org" className="text-foreground hover:underline">
              contact@lmas-asso.org
            </a>{" "}
            pour recevoir notre RIB, ou envoyez un chèque à l’ordre de LMAS,
            12 rue des Lilas, 75000 Paris.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-medium">Réduction d’impôt</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Un reçu fiscal est délivré pour chaque don. Selon votre situation,
            il peut ouvrir droit à une réduction d’impôt sur le revenu
            pouvant atteindre 66 % du montant versé.
          </p>
        </div>
      </div>
    </div>
  )
}
