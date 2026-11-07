"use client"

import { useId, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

/** `contain` keeps documents (the certificate) whole instead of cropping them. */
type Milestone = { period: string; title: string; body: string; image?: string; imageAlt?: string; contain?: boolean }

const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const
const EASE_OUT = [0.23, 1, 0.32, 1] as const

/**
 * Horizontal accordion on desktop (one open panel at a time, like Makaia's
 * "Nuestra trayectoria"), plain vertical timeline on small screens.
 */
export function Timeline({ items }: { items: Milestone[] }) {
  const [active, setActive] = useState(items.length - 1)
  const reduce = useReducedMotion()
  const id = useId()

  return (
    <>
      {/* Desktop */}
      <div className="hidden h-[26rem] gap-2 lg:flex">
        {items.map((m, i) => {
          const open = i === active
          return (
            <motion.div
              key={m.period}
              layout={!reduce}
              transition={{ layout: { duration: 0.45, ease: EASE_IN_OUT } }}
              className={cn(
                "relative overflow-hidden rounded-2xl",
                open ? "flex-[6] bg-blue" : "flex-1 bg-cream/[0.06] hover:bg-cream/10",
              )}
            >
              <button
                type="button"
                id={`${id}-tab-${i}`}
                aria-expanded={open}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => setActive(i)}
                className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-left"
              >
                <motion.span
                  layout={!reduce ? "position" : false}
                  className={cn(
                    "font-heading font-bold leading-none tracking-tight",
                    open ? "text-h2 text-gold" : "text-xl text-cream [writing-mode:vertical-rl] rotate-180",
                  )}
                >
                  {m.period}
                </motion.span>
                {!open && <span className="sr-only">{m.title}</span>}
              </button>
              {open && m.image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: reduce ? 0 : 0.15, ease: EASE_OUT }}
                  className="pointer-events-none absolute inset-0"
                >
                  {m.contain ? (
                    <div className="absolute right-8 top-8 aspect-[3/2] w-[42%] overflow-hidden rounded-lg">
                      <Image src={m.image} alt={m.imageAlt ?? ""} fill sizes="20vw" className="object-contain" />
                    </div>
                  ) : (
                    <>
                      <Image src={m.image} alt={m.imageAlt ?? ""} fill sizes="50vw" className="object-cover" />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0_37_103/0.75),rgb(0_37_103/0.1)_30%,rgb(0_37_103/0.2)_45%,rgb(0_37_103/0.95)_80%)]"
                      />
                    </>
                  )}
                </motion.div>
              )}
              {open && (
                <motion.div
                  id={`${id}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${id}-tab-${i}`}
                  initial={{ opacity: 0, transform: reduce ? "none" : "translateY(10px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{ duration: 0.4, delay: reduce ? 0 : 0.2, ease: EASE_OUT }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-[30rem] max-w-full p-8"
                >
                  <h3 className="text-h3 font-bold text-cream">{m.title}</h3>
                  <p className="mt-3 text-cream/90">{m.body}</p>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Mobile and tablet */}
      <ol className="relative flex flex-col gap-8 border-l border-cream/25 pl-6 lg:hidden">
        {items.map((m) => (
          <li key={m.period} data-reveal className="relative">
            <span className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full bg-gold" aria-hidden />
            <p className="font-heading text-2xl font-bold text-gold">{m.period}</p>
            <h3 className="mt-1 text-h3 font-bold">{m.title}</h3>
            <p className="mt-2 text-cream/85">{m.body}</p>
            {m.image && (
              <div className="relative mt-4 aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={m.image}
                  alt={m.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 640px) 80vw, 90vw"
                  className={m.contain ? "object-contain" : "object-cover"}
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </>
  )
}
