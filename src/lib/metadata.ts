import type { Metadata } from "next"
import { getDictionary } from "@/content"
import { href, locales, type RouteKey } from "./i18n"

export const SITE_URL = "https://pranainc.org"

const titles: Record<RouteKey, { es: string; en: string }> = {
  home: { es: "", en: "" },
  about: { es: "Nosotros: 23 años incubando la economía cultural y creativa", en: "About us: 23 years incubating the cultural and creative economy" },
  services: { es: "Servicios de incubación para emprendimientos culturales y creativos", en: "Incubation services for cultural and creative ventures" },
  course: { es: "Programa de formación en emprendimiento cultural y creativo en Bogotá", en: "Training program in cultural and creative entrepreneurship in Bogotá" },
  partners: { es: "Alianzas con instituciones públicas y privadas", en: "Partnerships with public and private institutions" },
  contact: { es: "Contacto", en: "Contact" },
}

const descriptions: Record<RouteKey, { es: string; en: string }> = {
  home: { es: "", en: "" },
  about: {
    es: "Incubadora de empresas de la economía cultural y creativa en Bogotá desde 2003. Nuestra historia, trayectoria, equipo y aliados.",
    en: "Incubator for businesses in the cultural and creative economy in Bogotá since 2003. Our story, track record, team and partners.",
  },
  services: {
    es: "Diagnóstico, asesorías, talleres, capital semilla, acompañamiento y nuevos mercados para emprendimientos de artes y patrimonio, industrias culturales y creaciones funcionales.",
    en: "Diagnosis, advisory, workshops, seed funding, implementation support and new markets for ventures in arts and heritage, cultural industries and functional creations.",
  },
  course: {
    es: "Programa de formación en Plan de Negocios para emprendimientos de la economía cultural y creativa en Bogotá: seis módulos, 3 meses, con facilidades de pago.",
    en: "Business Plan training program for ventures in the cultural and creative economy in Bogotá: six modules, 3 months, with payment plans.",
  },
  partners: {
    es: "Cohortes por convenio, formación de formadores y evaluación de proyectos para ministerios, fundaciones, universidades y cooperación internacional.",
    en: "Partner cohorts, train-the-trainer programs and project evaluation for ministries, foundations, universities and international cooperation.",
  },
  contact: {
    es: "Escríbenos por WhatsApp al +57 319 798 7259 o visítanos en Cl. 69 #4-97, Chapinero, Bogotá.",
    en: "Message us on WhatsApp at +57 319 798 7259 or visit us at Cl. 69 #4-97, Chapinero, Bogotá.",
  },
}

export async function pageMetadata(key: RouteKey): Promise<Metadata> {
  const { t, lang } = await getDictionary()
  const title = key === "home" ? t.meta.homeTitle : `${titles[key][lang]} · PRANA`
  const description = key === "home" ? t.meta.homeDescription : descriptions[key][lang]
  const path = href(lang, key)

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
      languages: Object.fromEntries([
        ...locales.map((l) => [l === "es" ? "es-CO" : "en", href(l, key)]),
        ["x-default", href("es", key)],
      ]),
    },
    openGraph: {
      type: "website",
      siteName: t.meta.siteName,
      title,
      description,
      url: path,
      locale: t.meta.locale,
      images: [{ url: "/images/mesa-de-trabajo.jpg", width: 1280, height: 960 }],
    },
    twitter: { card: "summary_large_image", title, description },
  }
}
