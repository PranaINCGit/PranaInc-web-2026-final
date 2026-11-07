import { lang } from "next/root-params"
import { notFound } from "next/navigation"
import { hasLocale, type Locale } from "@/lib/i18n"
import type { Dictionary } from "./es"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./es").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
}

export async function getLocale(): Promise<Locale> {
  const value = await lang()
  if (!value || !hasLocale(value)) notFound()
  return value
}

export async function getDictionary() {
  const locale = await getLocale()
  return { t: await dictionaries[locale](), lang: locale }
}

export type { Dictionary }
