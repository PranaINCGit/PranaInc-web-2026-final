import Image from "next/image"
import { getDictionary } from "@/content"
import { pageMetadata } from "@/lib/metadata"
import { PageHero, SectionTitle } from "@/components/site/primitives"
import { ClosingBand, PartnerLogos } from "@/components/site/blocks"
import { Timeline } from "@/components/site/timeline"
import { RevealObserver } from "@/components/site/reveal-observer"
import { ArchiveGallery } from "@/components/site/media"

export const generateMetadata = () => pageMetadata("about")

export default async function AboutPage() {
  const { t, lang } = await getDictionary()
  const a = t.about

  return (
    <>
      <PageHero kicker={a.kicker} title={a.title} lead={a.lead} />

      {/* Story */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionTitle tone="cream" title={a.story.title} />
            <div className="mt-8 flex flex-col gap-5 text-lg text-ink/85">
              {a.story.paragraphs.map((p, i) => (
                <p key={i} data-reveal>{p}</p>
              ))}
            </div>
          </div>
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-br-[7rem] lg:col-span-6">
            <Image
              src="/images/archivo/reunion-terraza.webp"
              alt={a.story.photoAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="trayectoria" className="scroll-mt-20 bg-navy py-20 lg:py-28">
        <div className="shell">
          <SectionTitle title={a.timeline.title} body={a.timeline.lead} />
          <div className="mt-14">
            <Timeline items={t.timeline} />
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell">
          <SectionTitle tone="cream" kicker={a.gallery.kicker} title={a.gallery.title} body={a.gallery.lead} />
          <ArchiveGallery items={a.gallery.items} className="mt-14" />
        </div>
      </section>

      {/* Mission, vision, values */}
      <section className="bg-blue py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-5">
            {[a.mission, a.vision].map((block) => (
              <div key={block.title} data-reveal>
                <h2 className="eyebrow text-gold">{block.title}</h2>
                <p className="mt-3 font-heading text-h3 font-semibold leading-snug">{block.body}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7">
            <h2 data-reveal className="text-h2 font-bold tracking-tight">{a.values.title}</h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {a.values.items.map((v, i) => (
                <div key={v.name} data-reveal style={{ "--i": i } as React.CSSProperties} className="rounded-3xl bg-navy p-7">
                  <dt className="text-h3 font-heading font-bold">{v.name}</dt>
                  <dd className="mt-2 text-cream/85">{v.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell">
          <SectionTitle tone="cream" title={a.team.title} />
          <article data-reveal className="mt-12 grid gap-8 sm:grid-cols-[minmax(0,18rem)_1fr] sm:items-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tr-[5rem]">
              <Image
                src="/images/equipo/juan-carlos-gaitan.webp"
                alt={a.team.photoAlt}
                fill
                sizes="(min-width: 640px) 18rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="max-w-xl pb-2">
              <h3 className="text-h2 font-bold tracking-tight text-navy">{a.team.name}</h3>
              <p className="eyebrow mt-2 text-blue">{a.team.role}</p>
              <p className="mt-5 text-lg text-ink/85">{a.team.bio}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="shell">
          <SectionTitle title={a.partners.title} />
          <PartnerLogos className="mt-12" />
        </div>
      </section>

      <ClosingBand lang={lang} t={t} title={a.closing.title} body={a.closing.body} />
      <RevealObserver />
    </>
  )
}
