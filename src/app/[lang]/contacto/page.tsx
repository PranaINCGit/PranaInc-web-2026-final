import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react"
import { getDictionary } from "@/content"
import { contact, whatsapp } from "@/lib/i18n"
import { pageMetadata } from "@/lib/metadata"
import { PageHero } from "@/components/site/primitives"
import { WhatsappIcon } from "@/components/brand/social-icons"
import { RevealObserver } from "@/components/site/reveal-observer"

export const generateMetadata = () => pageMetadata("contact")

export default async function ContactPage() {
  const { t } = await getDictionary()
  const c = t.contactPage

  const channels = [
    { label: c.channels.whatsapp, value: contact.phoneDisplay, href: whatsapp(t.wa.general), external: true, Icon: WhatsappIcon, featured: true },
    { label: c.channels.phone, value: contact.phoneDisplay, href: contact.phoneHref, external: false, Icon: Phone, featured: false },
    { label: c.channels.email, value: contact.email, href: `mailto:${contact.email}`, external: false, Icon: Mail, featured: false },
  ]

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} lead={c.lead} />

      <section className="on-cream bg-cream py-16 text-ink lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <ul className="flex flex-col gap-4 lg:col-span-5">
            {channels.map(({ label, value, href, external, Icon, featured }, i) => (
              <li key={label} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group flex items-center gap-5 rounded-3xl p-6 transition-transform duration-150 active:scale-[0.99] ${featured ? "bg-navy text-cream" : "bg-white text-navy ring-1 ring-inset ring-navy/10"}`}
                >
                  <span className={`grid size-12 shrink-0 place-items-center rounded-full ${featured ? "bg-gold text-navy" : "bg-cream text-blue"}`}>
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`eyebrow block ${featured ? "text-cream/75" : "text-blue"}`}>{label}</span>
                    <span className="mt-1 block break-words font-heading text-xl font-semibold">{value}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </li>
            ))}
            <li data-reveal style={{ "--i": 3 } as React.CSSProperties} className="grid gap-6 rounded-3xl bg-white p-6 text-navy ring-1 ring-inset ring-navy/10 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-blue" aria-hidden />
                <div>
                  <h2 className="eyebrow text-blue">{c.channels.address}</h2>
                  <p className="mt-1 font-heading text-lg font-semibold">{contact.address}</p>
                  <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="link-line mt-2 inline-flex min-h-11 items-center text-sm font-semibold">
                    {c.openMap}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-blue" aria-hidden />
                <div>
                  <h2 className="eyebrow text-blue">{c.channels.hours}</h2>
                  {c.hours.map((line) => (
                    <p key={line} className="mt-1 text-ink/85">{line}</p>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          <div data-reveal className="min-h-[24rem] overflow-hidden rounded-3xl ring-1 ring-inset ring-navy/10 lg:col-span-7">
            <iframe
              title={c.mapTitle}
              src={contact.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[24rem] w-full border-0"
            />
          </div>
        </div>
      </section>
      <RevealObserver />
    </>
  )
}
