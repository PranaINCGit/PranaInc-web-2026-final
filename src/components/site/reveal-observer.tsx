"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/** Marks [data-reveal] elements as visible once, when they enter the viewport. */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute("data-visible", "")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
