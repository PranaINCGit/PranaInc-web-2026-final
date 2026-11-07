import Image from "next/image"
import { Check } from "lucide-react"
import { getDictionary } from "@/content"
import { whatsapp } from "@/lib/i18n"
import { pageMetadata } from "@/lib/metadata"
import { PageHero, Pill, SectionTitle } from "@/components/site/primitives"
import { ClosingBand, EconomyAreas } from "@/components/site/blocks"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RevealObserver } from "@/components/site/reveal-observer"

export const generateMetadata = () => pageMetadata("course")

export default async function CoursePage() {
  const { t, lang } = await getDictionary()
  const c = t.course

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} lead={c.lead}>
        <div className="flex flex-col gap-3">
          <Pill href={whatsapp(t.wa.course)} external variant="gold">{t.home.course.cta}</Pill>
          <p className="text-sm text-cream/75">{c.details.items[3].value}</p>
        </div>
      </PageHero>

      {/* For whom + photo */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionTitle tone="cream" title={c.forWhom.title} />
            <ul className="mt-10 flex flex-col">
              {c.forWhom.items.map((item, i) => (
                <li key={item} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex gap-4 border-t border-navy/15 py-5 text-lg text-ink/90 last:border-b">
                  <Check className="mt-1 size-5 shrink-0 text-blue" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tr-[7rem] lg:col-span-5">
            <Image
              src="/images/programa/sesion-programa.webp"
              alt={c.photoAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[35%_50%]"
            />
          </div>
        </div>
      </section>

      <EconomyAreas t={t} />

      {/* Curriculum */}
      <section id="plan" className="bg-navy py-20 lg:py-28">
        <div className="shell">
          <SectionTitle title={c.modules.title} body={c.modules.lead} />
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.modules.items.map((m, i) => (
              <li
                key={m.name}
                data-reveal
                style={{ "--i": i % 3 } as React.CSSProperties}
                className={`flex flex-col rounded-3xl p-7 lg:p-8 ${i % 2 === 0 ? "bg-blue" : "bg-cream/[0.06] ring-1 ring-inset ring-cream/15"}`}
              >
                <p className="eyebrow text-cream/70">
                  {c.modules.step} <span className="font-heading text-4xl font-bold normal-case tracking-normal text-gold">{i + 1}</span>
                </p>
                <h3 className="mt-4 text-h3 font-bold">{m.name}</h3>
                <ul className="mt-5 flex flex-col gap-2 text-cream/85">
                  {m.topics.map((topic) => (
                    <li key={topic} className="flex gap-2">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-gold" aria-hidden />
                      {topic}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Details + process */}
      <section id="inscripcion" className="scroll-mt-24 bg-blue py-20 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle title={c.details.title} />
            <dl data-reveal className="mt-10 flex flex-col">
              {c.details.items.map((d) => (
                <div key={d.label} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-cream/25 py-4 last:border-b">
                  <dt className="eyebrow pt-1 text-cream/75">{d.label}</dt>
                  <dd className="text-lg font-medium">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <SectionTitle title={c.process.title} />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {c.process.steps.map((step, i) => (
                <li key={step.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="rounded-3xl bg-navy p-7">
                  <span className="font-heading text-4xl font-bold text-gold">{i + 1}</span>
                  <h3 className="mt-3 text-h3 font-bold">{step.title}</h3>
                  <p className="mt-2 text-cream/85">{step.body}</p>
                </li>
              ))}
            </ol>
            <div data-reveal className="mt-8">
              <Pill href={whatsapp(t.wa.course)} external variant="gold">{t.home.course.cta}</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle tone="cream" title={c.faq.title} />
          </div>
          <Accordion type="single" collapsible className="lg:col-span-8">
            {c.faq.items.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-navy/15">
                <AccordionTrigger className="min-h-14 items-center py-4 font-heading text-lg font-semibold text-navy hover:text-blue [&_svg]:text-navy">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-ink/85">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ClosingBand lang={lang} t={t} title={c.closing.title} body={c.closing.body} />
      <RevealObserver />
    </>
  )
}
