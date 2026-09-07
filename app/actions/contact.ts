"use server"

import { z } from "zod"

const schema = z.object({
  nom: z.string().min(1, "Votre nom est requis."),
  email: z.string().email("Adresse e-mail invalide."),
  sujet: z.string().min(1, "Choisissez un sujet."),
  message: z.string().min(10, "Votre message est un peu court."),
})

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = schema.safeParse({
    nom: formData.get("nom"),
    email: formData.get("email"),
    sujet: formData.get("sujet"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Formulaire invalide.",
    }
  }

  console.log("Nouveau message de contact LMAS:", parsed.data)

  return {
    status: "success",
    message: "Merci, votre message a bien été envoyé. Nous vous répondons au plus vite.",
  }
}
