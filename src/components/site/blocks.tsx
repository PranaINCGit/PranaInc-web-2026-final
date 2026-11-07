import Image from "next/image"
import { cn } from "@/lib/utils"
import { contact, href, whatsapp, type Locale } from "@/lib/i18n"
import type { Dictionary } from "@/content/es"
import { Pill, Stroke } from "./primitives"

const PARTNER_LOGOS = [
  { src: "/images/aliados/camaraComercioLogo.png", name: "Cámara de Comercio de Bogotá", url: "https://www.ccb.org.co" },
  { src: "/images/aliados/javerianaLogo.webp", name: "Pontificia Universidad Javeriana", url: "https://www.javeriana.edu.co" },
  { src: "/images/aliados/manosVisiblesLogo.png", name: "Corporación Manos Visibles", url: "https://manosvisibles.org" },
  { src: "/images/aliados/atenea.png", name: "Atenea, Agencia Distrital para la Educación Superior, la Ciencia y la Tecnología", url: "https://www.agenciaatenea.gov.co" },
  { src: "/images/aliados/black-global.jpg", name: "Black & Global Business Network", url: null },
]

export function PartnerLogos({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5", className)}>
      {PARTNER_LOGOS.map((p, i) => {
        const logo = (
          <Image
            src={p.src}
            alt={p.name}
            width={220}
            height={110}
            className="h-16 w-auto max-w-full object-contain"
          />
        )
        return (
          <li key={p.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-2xl bg-white p-5 transition-transform duration-150 active:scale-[0.97]"
              >
                {logo}
              </a>
            ) : (
              <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-5">{logo}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export function DataNote({ text, className }: { text: string; className?: string }) {
  return (
    <p className={cn("text-sm", className)}>
      <span aria-hidden className="mr-1 text-gold">*</span>
      {text}
    </p>
  )
}

/** Closing call to action used at the bottom of every page. */
export function ClosingBand({
  lang,
  t,
  title,
  body,
  variant = "founder",
}: {
  lang: Locale
  t: Dictionary
  title: string
  body: string
  variant?: "founder" | "partner"
}) {
  const partner = variant === "partner"
  return (
    <section className="relative overflow-hidden bg-blue py-20 lg:py-28">
      <Stroke className="absolute inset-x-0 top-0 h-32 w-full rotate-180 text-cream/25" />
      <div className="shell relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div data-reveal className="lg:col-span-7">
          <h2 className="text-h1 font-bold tracking-tight">{title}</h2>
          <p className="mt-5 max-w-xl text-lead text-cream/90">{body}</p>
        </div>
        <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
          <Pill href={whatsapp(partner ? t.wa.partner : t.wa.general)} external variant="gold">
            {t.common.whatsapp}
          </Pill>
          {partner ? (
            <Pill href={`mailto:${contact.email}`} external variant="ghost" arrow={false}>
              {t.common.email}
            </Pill>
          ) : (
            <Pill href={href(lang, "services")} variant="ghost">
              {t.common.seeServices}
            </Pill>
          )}
        </div>
      </div>
    </section>
  )
}

/** CSECCB taxonomy: the three areas of the cultural and creative economy and their segments. */
export function EconomyAreas({ t }: { t: Dictionary }) {
  const e = t.economy
  return (
    <section aria-labelledby="economia" className="bg-navy py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div data-reveal className="lg:col-span-7">
            <p className="eyebrow text-gold">{e.kicker}</p>
            <h2 id="economia" className="mt-4 text-h2 font-bold tracking-tight">{e.title}</h2>
          </div>
          <p data-reveal className="text-lead text-cream/85 lg:col-span-5">{e.lead}</p>
        </div>
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {e.areas.map((area, i) => (
            <li key={area.name} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex flex-col rounded-3xl bg-blue p-7 lg:p-9">
              <span className="font-heading text-sm font-semibold tabular-nums text-gold">0{i + 1}</span>
              <h3 className="mt-3 text-h3 font-bold">{area.name}</h3>
              <ul className="mt-6 flex flex-col">
                {area.segments.map((segment) => (
                  <li key={segment} className="border-t border-cream/20 py-3 text-cream/90">{segment}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-cream/70">{e.source}</p>
      </div>
    </section>
  )
}
