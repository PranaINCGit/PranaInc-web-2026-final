import { contact, type Locale } from "@/lib/i18n"
import { SITE_URL } from "@/lib/metadata"
import type { Dictionary } from "@/content/es"

export function JsonLd({ lang, t }: { lang: Locale; t: Dictionary }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "PRANA",
    alternateName: t.meta.siteName,
    url: `${SITE_URL}/${lang}`,
    logo: `${SITE_URL}/brand/Logo_Prana-04.svg`,
    description: t.meta.homeDescription,
    foundingDate: "2003",
    email: contact.email,
    telephone: "+573197987259",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 69 #4-97",
      addressLocality: "Bogotá",
      addressRegion: "Bogotá D.C.",
      addressCountry: "CO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [contact.youtube],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
