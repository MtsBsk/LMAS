import type { Metadata } from "next"
import { Fraunces, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz", "SOFT"],
})

export const metadata: Metadata = {
  title: "LMAS — Maraudes et solidarité internationale",
  description:
    "LMAS agit ici, par des maraudes solidaires, et ailleurs, par des projets de développement à l'étranger. Découvrez nos actions et soutenez-les.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        fraunces.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-svh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
