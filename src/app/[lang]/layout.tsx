import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "../globals.css"
import { getDictionary } from "@/content"
import { locales } from "@/lib/i18n"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { pageMetadata } from "@/lib/metadata"

// Brand typefaces (Fontshare, FFL). Loaded locally instead of Google Fonts
// because they are the fonts defined in PRANA's brand manual.
const supreme = localFont({
  src: "../../fonts/Supreme-Variable.woff2",
  variable: "--font-supreme",
  weight: "100 800",
  display: "swap",
})

const switzer = localFont({
  src: [
    { path: "../../fonts/Switzer-Variable.woff2", style: "normal" },
    { path: "../../fonts/Switzer-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-switzer",
  weight: "100 900",
  display: "swap",
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("home")
}

export const viewport: Viewport = {
  themeColor: "#002567",
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { t, lang } = await getDictionary()

  return (
    <html lang={lang} suppressHydrationWarning className={`${supreme.variable} ${switzer.variable} antialiased`}>
      <head>
        {/* Lets scroll reveals hide content only when JS can bring it back */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="sr-only z-50 rounded-full bg-gold px-5 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.a11y.skip}
        </a>
        <SiteHeader lang={lang} nav={t.nav} a11y={t.a11y} />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter lang={lang} t={t} />
      </body>
    </html>
  )
}
