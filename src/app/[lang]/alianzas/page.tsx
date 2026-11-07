import Image from "next/image"
import { getDictionary } from "@/content"
import { contact, whatsapp } from "@/lib/i18n"
import { pageMetadata } from "@/lib/metadata"
import { PageHero, Pill, SectionTitle, Stroke } from "@/components/site/primitives"
import { ClosingBand, DataNote, PartnerLogos } from "@/components/site/blocks"
import { RevealObserver } from "@/components/site/reveal-observer"

export const generateMetadata = () => pageMetadata("partners")

export default async function PartnersPage() {
  const { t, lang } = await getDictionary()
  const p = t.partners

  return (
    <>
      <PageHero kicker={p.kicker} title={p.title} lead={p.lead}>
        <div className="flex flex-col gap-3">
          <Pill href={whatsapp(t.wa.partner)} external variant="gold">{t.common.whatsapp}</Pill>
          <Pill href={`mailto:${contact.email}`} external variant="ghost" arrow={false}>{contact.email}</Pill>
        </div>
      </PageHero>

      {/* Proof */}
      <section className="bg-blue py-16 lg:py-20">
        <div className="shell">
          <h2 data-reveal className="eyebrow text-cream/80">{p.proof.title}</h2>
          <dl className="mt-8 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-cream/20">
            {p.proof.items.map((item, i) => (
              <div key={item.label} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex flex-col-reverse gap-3 lg:px-8 lg:first:pl-0">
                <dt className="max-w-[16rem] text-cream/85">
                  {item.label}
                  {item.scoped && <span className="text-gold" aria-hidden>*</span>}
                </dt>
                <dd className="font-heading text-stat font-bold tracking-tight">{item.value}</dd>
              </div>
            ))}
          </dl>
          <DataNote text={t.common.dataNote} className="mt-12 max-w-2xl text-cream/80" />

          {/* Certificate */}
          <div data-reveal className="mt-16 grid gap-8 rounded-[2rem] bg-navy p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10">
            <div className="overflow-hidden rounded-xl lg:col-span-6">
              <Image
                src="/images/alianzas/certificado-analitica-datos.webp"
                alt={p.certificate.imageAlt}
                width={1200}
                height={795}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow text-gold">{p.certificate.kicker}</p>
              <h3 className="mt-3 text-h3 font-bold">{p.certificate.title}</h3>
              <p className="mt-4 text-cream/85">{p.certificate.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle tone="cream" title={p.offer.title} />
            <div data-reveal className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem] rounded-bl-[7rem]">
              <Image
                src="/images/alianzas/bdf-2020-grupo.webp"
                alt={p.photoAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {p.offer.items.map((item, i) => (
              <li key={item.name} data-reveal className="grid grid-cols-[3rem_1fr] gap-4 border-t border-navy/15 py-7 last:border-b">
                <span className="font-heading text-lg font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-h3 font-bold text-navy">{item.name}</h3>
                  <p className="mt-2 text-ink/85">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="shell">
          <SectionTitle title={p.trackRecord.title} />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {p.trackRecord.groups.map((g, i) => (
              <div key={g.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <h3 className="eyebrow border-b border-cream/20 pb-3 text-gold">{g.name}</h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-cream/90">
                  {g.items.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <PartnerLogos className="mt-16" />
        </div>
      </section>

      {/* Bogotá Design Festival */}
      <section className="on-cream bg-cream py-20 text-ink lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionTitle tone="cream" kicker={p.bdf.kicker} title={p.bdf.title} body={p.bdf.body} />
            <p data-reveal className="mt-5 text-lg text-ink/85">{p.bdf.body2}</p>
            <div data-reveal className="mt-10">
              <Pill href={t.bdf.url} external variant="navy" className="max-w-full whitespace-normal">
                {t.bdf.cta}
                <span className="sr-only"> {t.a11y.newTab}</span>
              </Pill>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div data-reveal className="relative aspect-[3/2] overflow-hidden rounded-[2rem] rounded-tl-[7rem]">
              <Image src={p.bdf.photos[0].src} alt={p.bdf.photos[0].alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
            <div data-reveal className="relative -mt-14 ml-auto aspect-[3/2] w-3/5 overflow-hidden rounded-2xl ring-8 ring-cream sm:w-1/2">
              <Image src={p.bdf.photos[1].src} alt={p.bdf.photos[1].alt} fill sizes="(min-width: 1024px) 28vw, 60vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Europe */}
      <section className="relative overflow-hidden bg-navy pb-24 pt-4 lg:pb-32">
        <Stroke className="absolute inset-x-0 bottom-0 h-40 w-full text-blue" />
        <div className="shell relative">
          <div data-reveal className="grid gap-8 rounded-[2rem] bg-blue p-8 lg:grid-cols-12 lg:p-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold">{p.europe.kicker}</p>
              <h2 className="mt-4 text-h2 font-bold tracking-tight">{p.europe.title}</h2>
            </div>
            <p className="text-lead text-cream/90 lg:col-span-7 lg:pt-10">{p.europe.body}</p>
          </div>
        </div>
      </section>

      <ClosingBand lang={lang} t={t} title={p.closing.title} body={p.closing.body} variant="partner" />
      <RevealObserver />
    </>
  )
}
