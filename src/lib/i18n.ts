export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

// Folder names under app/[lang] are the Spanish slugs. English slugs are
// rewritten to them in next.config.ts, so /en/about serves /en/nosotros.
export const routes = {
  home: { es: "", en: "" },
  about: { es: "nosotros", en: "about" },
  services: { es: "servicios", en: "services" },
  course: { es: "programa-de-formacion", en: "training-program" },
  partners: { es: "alianzas", en: "partnerships" },
  contact: { es: "contacto", en: "contact" },
} as const

export type RouteKey = keyof typeof routes

export function href(lang: Locale, key: RouteKey, hash?: string) {
  const slug = routes[key][lang]
  const path = slug ? `/${lang}/${slug}` : `/${lang}`
  return hash ? `${path}#${hash}` : path
}

export function routeKeyFromSlug(slug: string | undefined): RouteKey {
  if (!slug) return "home"
  const match = (Object.keys(routes) as RouteKey[]).find(
    (key) => routes[key].es === slug || routes[key].en === slug,
  )
  return match ?? "home"
}

export const contact = {
  whatsappNumber: "573197987259",
  phoneDisplay: "+57 319 798 7259",
  phoneHref: "tel:+573197987259",
  email: "pranainc@gmail.com",
  address: "Cl. 69 #4-97, Bogotá",
  mapUrl: "https://share.google/YeatqZZey2WC9jPgB",
  mapEmbed:
    "https://www.google.com/maps?q=Calle+69+%234-97,+Bogot%C3%A1,+Colombia&output=embed",
  youtube: "https://www.youtube.com/@pranaincubadora",
}

export function whatsapp(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}
