import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { getDictionary } from "@/content"
import { href, whatsapp } from "@/lib/i18n"
import { Eyebrow, Pill, SectionTitle, Stroke } from "@/components/site/primitives"
import { ClosingBand, DataNote, EconomyAreas, PartnerLogos } from "@/components/site/blocks"
import { Timeline } from "@/components/site/timeline"
import { JsonLd } from "@/components/site/json-ld"
import { RevealObserver } from "@/components/site/reveal-observer"
import { Testimonials } from "@/components/site/media"

export default async function HomePage() {
  const { t, lang } = await getDictionary()
  const h = t.home

  return (
    <>
      <JsonLd lang={lang} t={t} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-10 lg:pt-16">
        <div className="shell relative grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 lg:py-6">
            <Eyebrow className="rise text-gold">{h.eyebrow}</Eyebrow>
            <h1 className="mt-6 text-display font-bold tracking-tight">
              {h.title.map((line, i) => (
                <span key={line} className="rise block" style={{ "--i": i + 1 } as React.CSSProperties}>
                  {i === h.title.length - 1 ? <span className="text-gold">{line}</span> : line}
                </span>
              ))}
            </h1>
            <p className="rise mt-8 max-w-xl text-lead text-cream/85" style={{ "--i": 4 } as React.CSSProperties}>
              {h.lead}
            </p>
          </div>
          <div className="rise relative lg:col-span-5" style={{ "--i": 3 } as React.CSSProperties}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tl-[7rem] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
              <Image
                src="/images/mesa-de-trabajo.jpg"
                alt={h.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
          </div>
        </div>

        <Stroke animate className="relative -mt-4 h-28 w-full text-gold lg:-mt-24 lg:h-44" />

        {/* Two paths */}
        <div className="shell relative mt-4 pb-16 lg:pb-24">
          <p className="eyebrow mb-4 text-cream/70">{h.paths.label}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={href(lang, "course")}
              className="group flex min-h-56 flex-col justify-between gap-8 rounded-3xl bg-cream p-7 text-navy transition-transform duration-150 active:scale-[0.99] lg:p-9"
            >
              <div>
                <p className="eyebrow text-blue">{h.paths.founder.kicker}</p>
                <p className="mt-3 font-heading text-h3 font-bold">{h.paths.founder.title}</p>
              </div>
              <span className="flex items-center gap-2 font-semibold">
                {h.paths.founder.cta}
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
            <Link
              href={href(lang, "partners")}
              className="group flex min-h-56 flex-col justify-between gap-8 rounded-3xl bg-blue p-7 text-cream transition-transform duration-150 active:scale-[0.99] lg:p-9"
            >
              <div>
                <p className="eyebrow text-cream/80">{h.paths.institution.kicker}</p>
                <p className="mt-3 font-heading text-h3 font-bold">{h.paths.institution.title}</p>
              </div>
              <span className="flex items-center gap-2 font-semibold">
                {h.paths.institution.cta}
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-labelledby="cifras" className="bg-blue py-16 lg:py-20">
        <div className="shell">
          <h2 id="cifras" className="sr-only">{h.stats.title}</h2>
          <dl className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-cream/20">
            {h.stats.items.map((s, i) => (
              <div key={s.label} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex flex-col-reverse gap-3 lg:px-8 lg:first:pl-0">
                <dt className="max-w-[16rem] text-cream/85">
                  {s.label}
                  {s.scoped && <span className="text-gold" aria-hidden>*</span>}
                </dt>
                <dd className="font-heading text-stat font-bold tracking-tight">
                  {s.value} <span className="text-h3 font-semibold text-gold">{s.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
          <DataNote text={t.common.dataNote} className="mt-12 max-w-2xl text-cream/80" />
        </div>
      </section>

      <EconomyAreas t={t} />

      {/* How we work */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionTitle tone="cream" kicker={h.how.kicker} title={h.how.title} body={h.how.body} />
              <div data-reveal className="mt-8">
                <Pill href={href(lang, "services")} variant="navy">{t.common.seeServices}</Pill>
              </div>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {t.services.items.map((s, i) => (
              <li key={s.id} data-reveal className="border-t border-navy/15 last:border-b">
                <Link
                  href={href(lang, "services", s.id)}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 lg:py-7"
                >
                  <span className="font-heading text-lg font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-heading text-h3 font-bold text-navy">{s.name}</span>
                    <span className="mt-1 block text-ink/75">{s.summary}</span>
                  </span>
                  <ArrowUpRight className="size-5 text-navy transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Course */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionTitle kicker={h.course.kicker} title={h.course.title} body={h.course.body} />
            <dl data-reveal className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {h.course.facts.map((f) => (
                <div key={f.label} className="border-t border-cream/20 pt-4">
                  <dt className="eyebrow text-cream/65">{f.label}</dt>
                  <dd className="mt-1 text-lg font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <Pill href={whatsapp(t.wa.course)} external variant="gold">{h.course.cta}</Pill>
              <Pill href={href(lang, "course")} variant="ghost">{t.common.seeCourse}</Pill>
            </div>
          </div>
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-6" aria-label={t.course.modules.title}>
            {t.course.modules.items.map((m, i) => (
              <li
                key={m.name}
                data-reveal
                style={{ "--i": i } as React.CSSProperties}
                className={`flex aspect-square flex-col justify-between rounded-2xl p-5 ${i % 2 === 0 ? "bg-blue" : "bg-cream/[0.07] ring-1 ring-inset ring-cream/15"} ${i === 1 || i === 4 ? "sm:translate-y-6" : ""}`}
              >
                <span className="font-heading text-4xl font-bold text-gold">{i + 1}</span>
                <span className="font-heading text-base font-semibold leading-snug sm:text-lg">{m.name}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials t={t} />

      {/* History */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle kicker={h.history.kicker} title={h.history.title} />
            <div data-reveal className="shrink-0">
              <Pill href={href(lang, "about", "trayectoria")} variant="ghost">{t.common.seeHistory}</Pill>
            </div>
          </div>
          <div className="mt-14">
            <Timeline items={t.timeline} />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-24">
        <div className="shell">
          <SectionTitle tone="cream" kicker={h.partners.kicker} title={h.partners.title} />
          <PartnerLogos className="mt-12" />
        </div>
      </section>

      {/* Bogotá Design Festival */}
      <section aria-labelledby="bdf" className="bg-navy py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <div data-reveal className="relative aspect-square overflow-hidden rounded-[2rem] rounded-tr-[7rem] lg:col-span-5">
            <Image
              src="/images/bdf/bdf-caminando.webp"
              alt={h.bdf.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div data-reveal>
              <Eyebrow className="text-gold">{h.bdf.kicker}</Eyebrow>
              <h2 id="bdf" className="mt-8">
                <Image src="/images/bdf/logo-bdf-blanco.png" alt={t.bdf.name} width={640} height={371} className="h-auto w-56 lg:w-72" />
              </h2>
            </div>
            <p data-reveal className="mt-8 max-w-xl text-lead text-cream/85">{h.bdf.body}</p>
            <div data-reveal className="mt-10">
              <Pill href={t.bdf.url} external variant="gold" className="max-w-full whitespace-normal">
                {t.bdf.cta}
                <span className="sr-only"> {t.a11y.newTab}</span>
              </Pill>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand lang={lang} t={t} title={h.closing.title} body={h.closing.body} />
      <RevealObserver />
    </>
  )
}
