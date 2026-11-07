"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { href, routeKeyFromSlug, type Locale, type RouteKey } from "@/lib/i18n"
import type { Dictionary } from "@/content/es"

type Props = {
  lang: Locale
  nav: Dictionary["nav"]
  a11y: Dictionary["a11y"]
}

const LINKS: RouteKey[] = ["about", "services", "course", "contact"]

export function SiteHeader({ lang, nav, a11y }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const current = routeKeyFromSlug(pathname.split("/")[2])
  const otherLang: Locale = lang === "es" ? "en" : "es"

  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-navy/95 backdrop-blur supports-backdrop-filter:bg-navy/85">
      <div className="shell flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          href={href(lang, "home")}
          aria-label={a11y.home}
          className="flex shrink-0 items-center gap-2.5 text-cream"
        >
          <Image
            src="/brand/prana-horizontal-blanco.png"
            alt="PRANA Incubadora"
            width={772}
            height={276}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <nav aria-label={a11y.mainNav} className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {LINKS.map((key) => (
              <li key={key}>
                <Link
                  href={href(lang, key)}
                  aria-current={current === key ? "page" : undefined}
                  className={cn(
                    "text-[0.9375rem] font-medium text-cream/80 transition-colors duration-150 hover:text-cream",
                    current === key && "link-line text-cream",
                  )}
                >
                  {nav[key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link href={href(lang, "course", "inscripcion")} className="pill pill-gold">
              {nav.enroll}
            </Link>
            <Link href={href(lang, "partners")} className="pill pill-ghost">
              {nav.partners}
            </Link>
            <Link
              href={href(otherLang, current)}
              hrefLang={otherLang}
              lang={otherLang}
              aria-label={`${a11y.language}: ${nav.otherLangName}`}
              className="grid size-11 place-items-center rounded-full text-sm font-semibold tracking-wide text-cream/80 transition-colors duration-150 hover:text-gold"
            >
              {nav.otherLang}
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <Link
            href={href(otherLang, current)}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={`${a11y.language}: ${nav.otherLangName}`}
            className="grid size-11 place-items-center rounded-full text-sm font-semibold text-cream/80"
          >
            {nav.otherLang}
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={a11y.menu}
              className="grid size-11 place-items-center rounded-full text-cream transition-transform duration-150 active:scale-[0.97]"
            >
              <Menu className="size-6" aria-hidden />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-full border-cream/10 bg-navy p-0 text-cream sm:max-w-sm"
            >
              <div className="flex h-16 items-center justify-between px-4">
                <SheetTitle className="text-cream">
                  <Image src="/brand/prana-horizontal-blanco.png" alt="PRANA Incubadora" width={772} height={276} className="h-9 w-auto" />
                </SheetTitle>
                <SheetClose
                  aria-label={a11y.closeMenu}
                  className="grid size-11 place-items-center rounded-full transition-transform duration-150 active:scale-[0.97]"
                >
                  <X className="size-6" aria-hidden />
                </SheetClose>
              </div>
              <nav aria-label={a11y.mainNav} className="flex flex-1 flex-col px-4 pb-8">
                <ul className="flex flex-col border-t border-cream/10">
                  {(["home", ...LINKS, "partners"] as RouteKey[]).map((key, i) => (
                    <li key={key} className="menu-link border-b border-cream/10" style={{ "--i": i } as React.CSSProperties}>
                      <Link
                        href={href(lang, key)}
                        onClick={() => setOpen(false)}
                        aria-current={current === key ? "page" : undefined}
                        className="flex min-h-14 items-center font-heading text-2xl font-semibold aria-[current=page]:text-gold"
                      >
                        {nav[key]}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={href(lang, "course", "inscripcion")}
                  onClick={() => setOpen(false)}
                  className="pill pill-gold mt-auto w-full"
                >
                  {nav.enroll}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
