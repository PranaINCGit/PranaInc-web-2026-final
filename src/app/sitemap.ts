import type { MetadataRoute } from "next"
import { href, locales, routes, type RouteKey } from "@/lib/i18n"
import { SITE_URL } from "@/lib/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    locales.map((lang) => ({
      url: `${SITE_URL}${href(lang, key)}`,
      changeFrequency: "monthly" as const,
      priority: key === "home" ? 1 : key === "course" || key === "partners" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${href(l, key)}`])),
      },
    })),
  )
}
