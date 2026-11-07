import type { NextConfig } from "next";

const englishSlugs = {
  about: "nosotros",
  services: "servicios",
  "training-program": "programa-de-formacion",
  partnerships: "alianzas",
  contact: "contacto",
};

const legacyRoutes = {
  inicio: "",
  "quienes-somos": "nosotros",
  servicios: "servicios",
  formacion: "programa-de-formacion",
  "emprender-futuro": "servicios",
  "silver-economy": "servicios",
  esal: "alianzas",
  responsabilidad: "alianzas",
  monitoreo: "alianzas",
  redes: "contacto",
};

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      // Former slugs from the first draft
      { source: "/es/curso", destination: "/es/programa-de-formacion", permanent: true },
      { source: "/en/course", destination: "/en/training-program", permanent: true },
      // Routes of the previous pranainc.org (Angular) site, kept for SEO
      ...Object.entries(legacyRoutes).map(([from, to]) => ({
        source: `/${from}`,
        destination: to ? `/es/${to}` : "/es",
        permanent: true,
      })),
      // Keep English URLs in English: /en/nosotros -> /en/about
      ...Object.entries(englishSlugs).map(([en, es]) => ({
        source: `/en/${es}`,
        destination: `/en/${en}`,
        permanent: true,
      })),
    ];
  },
  async rewrites() {
    return Object.entries(englishSlugs).map(([en, es]) => ({
      source: `/en/${en}`,
      destination: `/en/${es}`,
    }));
  },
};

export default nextConfig;
