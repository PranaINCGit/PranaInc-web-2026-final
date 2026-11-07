import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/content/es"

type Testimonial = Dictionary["testimonials"][number]

/** Native player: no autoplay, nothing downloads until the visitor presses play. */
function TestimonialVideo({ item, label, featured }: { item: Testimonial; label: string; featured?: boolean }) {
  return (
    <figure className="flex flex-col">
      <div className="overflow-hidden rounded-2xl bg-navy">
        <video
          controls
          playsInline
          preload="none"
          poster={`/videos/testimonios/${item.id}.webp`}
          aria-label={`${label} ${item.name}`}
          className="aspect-video w-full object-cover"
        >
          <source src={`/videos/testimonios/${item.id}.mp4`} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span>
          <span className={cn("block font-heading font-bold", featured ? "text-h3" : "text-lg")}>{item.name}</span>
          <span className="block text-cream/80">{item.role}</span>
        </span>
        <span className="shrink-0 text-sm tabular-nums text-cream/65">{item.duration}</span>
      </figcaption>
    </figure>
  )
}

export function Testimonials({ t }: { t: Dictionary }) {
  const h = t.home.testimonials
  const [first, ...rest] = t.testimonials
  return (
    <section aria-labelledby="testimonios" className="bg-blue py-20 lg:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow text-gold">{h.kicker}</p>
            <h2 id="testimonios" className="mt-5 text-h2 font-bold tracking-tight">{h.title}</h2>
            <p className="mt-5 text-lead text-cream/85">{h.body}</p>
          </div>
          <div data-reveal className="lg:col-span-7">
            <TestimonialVideo item={first} label={t.a11y.video} featured />
          </div>
        </div>
        <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((item, i) => (
            <li key={item.id} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <TestimonialVideo item={item} label={t.a11y.video} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const ARCHIVE_SIZES: Record<string, [number, number]> = {
  "/images/archivo/encuentro-internacional.webp": [1600, 1170],
  "/images/archivo/heroes-fest.webp": [1024, 768],
  "/images/archivo/textiles.webp": [1400, 933],
  "/images/archivo/funcion-teatro.webp": [768, 576],
  "/images/archivo/foro-pioneros.webp": [1350, 935],
  "/images/archivo/entrega-certificado.webp": [1600, 900],
  "/images/archivo/grupo-viaje.webp": [1280, 960],
  "/images/archivo/conferencia.webp": [960, 720],
  "/images/archivo/entrevista-radio.webp": [768, 576],
  "/images/archivo/encuentro-salon.webp": [1600, 1200],
  "/images/archivo/entrevista-tv.webp": [768, 576],
}

/** Masonry-style archive. Captions only where the event name is visible in the photo itself. */
export function ArchiveGallery({
  items,
  className,
}: {
  items: { src: string; alt: string; caption?: string }[]
  className?: string
}) {
  return (
    <ul className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>
      {items.map((item) => {
        const [width, height] = ARCHIVE_SIZES[item.src] ?? [1200, 900]
        return (
          <li key={item.src} data-reveal className="mb-4 break-inside-avoid">
            <figure>
              <Image
                src={item.src}
                alt={item.alt}
                width={width}
                height={height}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="h-auto w-full rounded-2xl"
              />
              {item.caption && <figcaption className="mt-2 text-sm text-ink/70">{item.caption}</figcaption>}
            </figure>
          </li>
        )
      })}
    </ul>
  )
}
