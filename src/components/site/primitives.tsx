import Link from "next/link"
import { ArrowRight, Camera } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ComponentProps, ReactNode } from "react"

/** Reserved space for a future photograph. Visible on purpose. */
export function PhotoSlot({
  label,
  className,
  srLabel,
}: {
  label: string
  className?: string
  srLabel: string
}) {
  return (
    <div
      role="img"
      aria-label={`${srLabel}: ${label}`}
      className={cn("photo-slot flex flex-col items-center justify-center gap-2 rounded-2xl p-6 text-center", className)}
    >
      <Camera className="size-7" aria-hidden />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

type PillProps = ComponentProps<typeof Link> & {
  variant?: "gold" | "ghost" | "navy" | "outline-navy"
  arrow?: boolean
  external?: boolean
  children: ReactNode
}

export function Pill({ variant = "gold", arrow = true, external, className, children, ...props }: PillProps) {
  const cls = cn("pill", `pill-${variant}`, className)
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="arrow size-4" aria-hidden />}
    </>
  )
  if (external) {
    return (
      <a href={String(props.href)} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <Link className={cls} {...props}>
      {content}
    </Link>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow flex items-center gap-3", className)}>
    <span className="h-px w-8 bg-current opacity-60" aria-hidden />
    {children}
  </p>
}

/** The sweeping line taken from the PRANA figure. Decorative. */
export function Stroke({ className, animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("pointer-events-none", animate && "draw", className)}
    >
      <path
        d="M-20 250 C 220 300, 420 330, 640 270 C 860 210, 900 90, 1080 70 C 1240 52, 1350 120, 1460 60"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M-20 284 C 240 330, 460 350, 690 290 C 900 236, 960 130, 1120 112 C 1260 96, 1360 150, 1460 104"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string
  title: string
  lead: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-28 pt-14 lg:pb-44 lg:pt-20">
      <Stroke animate className="absolute inset-x-0 bottom-0 h-28 w-full text-gold lg:h-40" />
      <div className="shell relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow className="rise text-gold">{kicker}</Eyebrow>
          <h1 className="rise mt-6 text-h1 font-bold tracking-tight" style={{ "--i": 1 } as React.CSSProperties}>
            {title}
          </h1>
          <p className="rise mt-6 max-w-2xl text-lead text-cream/80" style={{ "--i": 2 } as React.CSSProperties}>
            {lead}
          </p>
        </div>
        {children && (
          <div className="rise lg:col-span-4 lg:self-end" style={{ "--i": 3 } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionTitle({
  kicker,
  title,
  body,
  tone = "navy",
  className,
}: {
  kicker?: string
  title: string
  body?: string
  tone?: "navy" | "cream"
  className?: string
}) {
  const onCream = tone === "cream"
  return (
    <div data-reveal className={cn("max-w-3xl", className)}>
      {kicker && <Eyebrow className={onCream ? "text-blue" : "text-gold"}>{kicker}</Eyebrow>}
      <h2 className={cn("mt-5 text-h2 font-bold tracking-tight", onCream ? "text-navy" : "text-cream")}>{title}</h2>
      {body && <p className={cn("mt-5 text-lead", onCream ? "text-ink/80" : "text-cream/80")}>{body}</p>}
    </div>
  )
}
