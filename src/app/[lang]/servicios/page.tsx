import { Check } from "lucide-react"
import { getDictionary } from "@/content"
import { href, whatsapp } from "@/lib/i18n"
import { pageMetadata } from "@/lib/metadata"
import { PageHero, Pill } from "@/components/site/primitives"
import { ClosingBand } from "@/components/site/blocks"
import { RevealObserver } from "@/components/site/reveal-observer"

export const generateMetadata = () => pageMetadata("services")

export default async function ServicesPage() {
  const { t, lang } = await getDictionary()
  const s = t.services

  return (
    <>
      <PageHero kicker={s.kicker} title={s.title} lead={s.lead}>
        <nav aria-label={s.kicker}>
          <ol className="grid gap-1 text-cream/85">
            {s.items.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="flex min-h-11 items-center gap-3 transition-colors duration-150 hover:text-gold">
                  <span className="font-heading text-sm font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageHero>

      <section className="on-cream bg-cream py-8 text-ink lg:py-16">
        <div className="shell">
          {s.items.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              data-reveal
              className="grid scroll-mt-28 gap-8 border-b border-navy/15 py-12 last:border-b-0 lg:grid-cols-12 lg:py-16"
            >
              <div className="lg:col-span-5">
                <p className="font-heading text-stat font-bold leading-none text-blue/25">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-h2 font-bold tracking-tight text-navy">{item.name}</h2>
                <p className="mt-4 text-lead text-ink/80">{item.summary}</p>
              </div>
              <div className="grid gap-8 lg:col-span-7 lg:grid-cols-2 lg:pt-6">
                <p className="text-ink/85 lg:col-span-2">{item.body}</p>
                <div>
                  <h3 className="eyebrow text-blue">{s.forWhom}</h3>
                  <p className="mt-3 text-ink/85">{item.forWhom}</p>
                </div>
                <div>
                  <h3 className="eyebrow text-blue">{s.includes}</h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {item.includes.map((inc) => (
                      <li key={inc} className="flex gap-2 text-ink/85">
                        <Check className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div data-reveal className="shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-h2 font-bold tracking-tight">{s.courseBand.title}</h2>
            <p className="mt-3 text-lead text-cream/80">{s.courseBand.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Pill href={href(lang, "course")} variant="gold">{t.common.seeCourse}</Pill>
            <Pill href={whatsapp(t.wa.course)} external variant="ghost">{t.common.whatsapp}</Pill>
          </div>
        </div>
      </section>

      <ClosingBand lang={lang} t={t} title={s.closing.title} body={s.closing.body} />
      <RevealObserver />
    </>
  )
}
