import type { Metadata } from "next"

import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact — LMAS",
  description: "Rejoignez une maraude, proposez votre aide, ou écrivez-nous.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <span className="block size-2.5 bg-lantern" />
      <h1 className="mt-3 max-w-lg font-heading text-3xl font-medium sm:text-4xl">
        Parlons-en.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Une question, une envie de rejoindre une maraude, un projet à nous
        proposer ? Écrivez-nous, une personne de l’association vous répond
        directement.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">
        <ContactForm />

        <aside className="flex flex-col gap-8 border-t border-border/70 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <div>
            <p className="text-sm font-medium">Rejoindre une maraude</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Les maraudes de Paris partent le mardi et le jeudi soir, celles
              de Lyon le mercredi. Une soirée découverte suffit pour voir si
              c’est fait pour vous.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Par e-mail</p>
            <a
              href="mailto:contact@lmas-asso.org"
              className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
            >
              contact@lmas-asso.org
            </a>
          </div>

          <div>
            <p className="text-sm font-medium">Adresse</p>
            <p className="mt-1 text-sm text-muted-foreground">
              12 rue des Lilas
              <br />
              75000 Paris
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
