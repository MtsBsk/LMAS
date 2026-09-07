"use client"

import { useActionState, useEffect } from "react"
import { toast } from "sonner"

import { sendContactMessage, type ContactState } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactState = { status: "idle" }

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  )

  useEffect(() => {
    if (state.status === "success" && state.message) {
      toast.success(state.message)
    } else if (state.status === "error" && state.message) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="nom">Nom</Label>
          <Input id="nom" name="nom" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="sujet">Sujet</Label>
        <Input
          id="sujet"
          name="sujet"
          placeholder="Bénévolat, projet à l'étranger, presse…"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <Button type="submit" disabled={pending} className="w-fit">
        {pending ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  )
}
