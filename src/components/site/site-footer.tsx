import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/brand/social-icons"
import { contact, href, whatsapp, type Locale, type RouteKey } from "@/lib/i18n"
import type { Dictionary } from "@/content/es"

type Props = { lang: Locale; t: Dictionary }

const LINKS: RouteKey[] = ["home", "about", "services", "course", "partners", "contact"]

export function SiteFooter({ lang, t }: Props) {
  const inactive = [
    { name: "Instagram", Icon: InstagramIcon },
    { name: "Facebook", Icon: FacebookIcon },
    { name: "LinkedIn", Icon: LinkedinIcon },
  ]

  return (
    <footer className="bg-ink text-cream">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] lg:py-20">
        <div className="flex flex-col gap-5">
          <Link href={href(lang, "home")} aria-label={t.a11y.home} className="self-start">
            <Image src="/brand/prana-horizontal-blanco.png" alt="PRANA Incubadora" width={772} height={276} className="h-16 w-auto" />
          </Link>
          <p className="max-w-xs text-cream/75">{t.footer.tagline}</p>
          <div>
            <h2 className="eyebrow mb-3 text-cream/60">{t.footer.social}</h2>
            <ul className="flex items-center gap-2">
              {inactive.map(({ name, Icon }) => (
                <li key={name}>
                  <span
                    title={`${name} · ${t.a11y.comingSoon}`}
                    className="grid size-11 place-items-center rounded-full border border-cream/15 text-cream/40"
                  >
                    <Icon className="size-5" />
                    <span className="sr-only">{`${name} (${t.a11y.comingSoon})`}</span>
                  </span>
                </li>
              ))}
              <li>
                <a
                  href={contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="grid size-11 place-items-center rounded-full border border-cream/40 text-cream transition-[background-color,color,transform] duration-150 hover:bg-gold hover:text-navy active:scale-[0.97]"
                >
                  <YoutubeIcon className="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label={t.footer.explore}>
          <h2 className="eyebrow mb-4 text-cream/60">{t.footer.explore}</h2>
          <ul className="flex flex-col gap-1">
            {LINKS.map((key) => (
              <li key={key}>
                <Link
                  href={href(lang, key)}
                  className="inline-flex min-h-11 items-center text-cream/85 transition-colors duration-150 hover:text-gold"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow mb-4 text-cream/60">{t.footer.visit}</h2>
          <ul className="flex flex-col gap-4 text-cream/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {contact.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <span>
                {t.contactPage.hours.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-4 text-cream/60">{t.footer.talk}</h2>
          <ul className="flex flex-col gap-4 text-cream/85">
            <li className="flex gap-3">
              <WhatsappIcon className="mt-0.5 size-5 shrink-0 text-gold" />
              <a href={whatsapp(t.wa.general)} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {t.contactPage.channels.whatsapp} · {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <a href={contact.phoneHref} className="hover:text-gold">{contact.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-gold">{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="shell flex flex-col py-6 text-center text-sm text-cream/60">
          <p>© {2026} PRANA. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
