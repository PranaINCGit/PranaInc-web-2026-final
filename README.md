# PRANA Incubadora — sitio web

> **Versión del 29 de octubre de 2026.** Reemplaza la entrega del 23 de octubre. Cambios en la sección *Novedades de esta versión*, al final.

Nuevo sitio de [pranainc.org](https://pranainc.org), bilingüe (español / inglés). Reemplaza por completo al sitio actual en Angular.

- **Framework:** Next.js 16 (App Router, Turbopack, `cacheComponents`), React 19, TypeScript
- **Estilos:** Tailwind CSS 4 (sin `tailwind.config`; los tokens viven en `src/app/globals.css`) + componentes shadcn/ui (base Radix)
- **Animación:** `motion` (solo en la línea de tiempo); el resto es CSS
- **Tipografías:** Supreme y Switzer (Fontshare, licencia libre para uso comercial), servidas localmente desde `src/fonts/`
- **Sin base de datos, sin variables de entorno, sin backend.** Todas las páginas se prerenderizan como estáticas.

---

## 1. Requisitos y comandos

Node.js **20.9 o superior** (probado con Node 24).

```bash
npm ci            # instala dependencias exactas del package-lock
npm run dev       # desarrollo en http://localhost:3000
npm run build     # build de producción (debe terminar sin errores)
npm start         # sirve el build en el puerto 3000
npm run lint      # ESLint
```

## 2. Importante: hosting

El sitio actual es una SPA estática (Angular) detrás de Cloudflare. **Este proyecto no es una exportación estática**: usa redirecciones, rewrites (URLs en inglés) y Partial Prerendering, que requieren el runtime de Next.js. No se puede subir la carpeta `out/` a un hosting de archivos estáticos.

Opciones, de más simple a más compleja:

1. **Vercel (recomendado).** Importar el repositorio de GitHub en <https://vercel.com/new>. Detecta Next.js solo; no hay que configurar nada. Cada push a `main` despliega a producción y cada PR genera una URL de vista previa. El plan gratuito (Hobby) es para uso no comercial; para una organización conviene el plan Pro.
2. **Servidor propio con Node** (VPS, etc.): `npm ci && npm run build && npm start` detrás de un proxy (Nginx/Caddy) con un gestor de procesos (pm2/systemd).
3. **Cloudflare Workers** mediante el adaptador [OpenNext](https://opennext.js.org/cloudflare). Válido si se quiere mantener todo en Cloudflare, pero exige verificar compatibilidad con Next 16 antes.

### Dominio (si se usa Vercel)

El DNS de `pranainc.org` está en Cloudflare. En Vercel: *Project → Settings → Domains → Add* `pranainc.org` y `www.pranainc.org`; Vercel indica los registros exactos (normalmente un `A` para el dominio raíz y un `CNAME` para `www`). En Cloudflare, crear esos registros en modo **DNS only** (nube gris). No tocar los registros MX ni TXT existentes.

## 3. Cómo subirlo al repositorio existente

Sugerencia para no perder historia:

```bash
git checkout -b rediseno-2026
# borrar el código Angular (conservar .git y, si existen, workflows de CI que se quieran reutilizar)
# copiar el contenido de esta carpeta en la raíz del repo
npm ci && npm run build
git add -A && git commit -m "Rediseño del sitio en Next.js"
git push -u origin rediseno-2026   # abrir PR, revisar la vista previa, luego merge a main
```

Si el repo tenía un pipeline que publicaba el build de Angular (GitHub Pages, Cloudflare Pages, etc.), hay que desactivarlo o adaptarlo: ya no aplica.

## 4. Estructura

```
src/
  app/
    [lang]/                 Segmento de idioma (es | en). Los nombres de carpeta son los slugs en español
      layout.tsx            Layout raíz: fuentes, <html lang>, cabecera, pie
      page.tsx              Inicio
      nosotros/  servicios/  programa-de-formacion/  alianzas/  contacto/
    globals.css             Tokens de marca (colores, curvas), escala tipográfica, componentes y animaciones
    sitemap.ts  robots.ts  icon.svg
  content/
    es.ts                   TODOS los textos en español (define el tipo Dictionary)
    en.ts                   Textos en inglés (TypeScript obliga a que tenga las mismas claves que es.ts)
  lib/
    i18n.ts                 Idiomas, rutas por idioma, datos de contacto (WhatsApp, correo, dirección, mapa, YouTube)
    metadata.ts             Título, descripción, canonical, hreflang y Open Graph de cada página
  components/
    site/                   Cabecera, pie, bloques reutilizables, línea de tiempo, JSON-LD,
                            media.tsx (videos testimoniales y galería de archivo)
    ui/                     Componentes shadcn (accordion, sheet, button...)
public/
  brand/                    Logos
  images/
    aliados/                Logos de aliados
    alianzas/               Foto de "Cómo trabajamos con instituciones" y certificado
    archivo/                Galería "Dos décadas en fotos" (Nosotros)
    bdf/                    Bogotá Design Festival: fotos y logo en blanco
    equipo/                 Retrato de Juan Carlos Gaitán
    programa/               Foto del Programa de formación
    trayectoria/            Fotos de la línea de tiempo, una por etapa
  videos/testimonios/       5 videos testimoniales (MP4) y sus portadas (WebP)
```

### Editar contenido

- **Textos:** `src/content/es.ts` y `src/content/en.ts`. Cambiar uno sin el otro rompe el build a propósito.
- **Teléfono, correo, dirección, horario, YouTube:** `src/lib/i18n.ts` (objeto `contact`); el horario está en `contactPage.hours` de los diccionarios.
- **SEO por página:** `src/lib/metadata.ts`. `SITE_URL` debe coincidir con el dominio final.
- **Colores:** variables `--navy #002567`, `--blue #005892`, `--cream #F7F3EB`, `--ink #16171A`, `--gold #F2AD16` al inicio de `globals.css`.

### Idiomas y URLs

| Página | Español | Inglés |
| --- | --- | --- |
| Inicio | `/es` | `/en` |
| Nosotros | `/es/nosotros` | `/en/about` |
| Servicios | `/es/servicios` | `/en/services` |
| Programa de formación | `/es/programa-de-formacion` | `/en/training-program` |
| Alianzas | `/es/alianzas` | `/en/partnerships` |
| Contacto | `/es/contacto` | `/en/contact` |

`/` redirige a `/es`. Las URLs en inglés se resuelven con `rewrites` en `next.config.ts`.

### Redirecciones del sitio anterior (SEO)

Definidas en `next.config.ts` (`legacyRoutes`, 308 permanentes), para no perder enlaces indexados:

| Antes | Ahora |
| --- | --- |
| `/inicio` | `/es` |
| `/quienes-somos` | `/es/nosotros` |
| `/servicios`, `/emprender-futuro`, `/silver-economy` | `/es/servicios` |
| `/formacion` | `/es/programa-de-formacion` |
| `/esal`, `/responsabilidad`, `/monitoreo` | `/es/alianzas` |
| `/redes` | `/es/contacto` |

## 5. Material audiovisual

- **Fotos:** optimizadas en WebP. Para cambiar una, reemplazar el archivo con el mismo nombre o editar la ruta en `src/content/es.ts` / `en.ts` (galería de Nosotros y línea de tiempo) o en la página correspondiente.
- **Videos testimoniales:** `public/videos/testimonios/` (unos 29 MB en total, 480p). Se sirven desde el propio sitio con `preload="none"`: no se descargan hasta que alguien presiona reproducir. Si el hosting lo pide o se quiere ahorrar ancho de banda, pueden subirse al canal de YouTube de PRANA y sustituir el `<video>` en `src/components/site/media.tsx` por un embed. La lista de videos (nombre, rol, duración) está en `testimonials` de los diccionarios.
- **Bogotá Design Festival:** el botón "Bogotá Design Festival, Plataforma Creativa" enlaza a https://www.bogotadesignfestival.co/ (valor `bdf.url` en los diccionarios). Aparece en Inicio y en Alianzas.

## 6. Pendientes de contenido

- **Fotografías.** Ya no quedan recuadros "Foto: …" en el sitio. El componente `<PhotoSlot>` sigue disponible en `primitives.tsx` por si se necesita reservar espacio para una foto futura.
- **Redes sociales.** Solo YouTube está activo. Instagram, Facebook y LinkedIn aparecen deshabilitados en `src/components/site/site-footer.tsx` (array `inactive`); al tener las URLs, convertirlos en enlaces como el de YouTube.
- **Aliados.** Black & Global no tiene enlace; verificar que la URL de Corporación Manos Visibles sea la correcta (`src/components/site/blocks.tsx`).
- **Formulario.** No hay formulario: el contacto es por WhatsApp, teléfono y correo.

## 7. Después de publicar

1. Abrir varias URLs antiguas (`/quienes-somos`, `/formacion`) y confirmar que redirigen.
2. En Google Search Console: verificar el dominio y enviar `https://pranainc.org/sitemap.xml`.
3. Probar el botón "Inscríbete" (lleva a `/es/programa-de-formacion#inscripcion`) y los enlaces de WhatsApp.
4. Revisar en móvil (375 px) y escritorio.

## Novedades de esta versión (29/10/2026)

- **Inicio:** sección "Los que ya pasaron por aquí" con 5 videos testimoniales (Liliana Silva, Mario Montenegro, Alonso Restrepo, Ángel Acevedo, Magda Galeano). Reemplaza las tarjetas de casos de éxito sin foto (Baula, Sacro, El Globo, Eulogio), que se retiraron. Nueva franja del Bogotá Design Festival antes del cierre.
- **Alianzas:** certificado "Activa tu negocio con mentoría en Analítica de datos" (Secretaría de Desarrollo Económico de Bogotá, 2026) como imagen dentro de "Lo que respalda nuestro trabajo". Nueva sección del Bogotá Design Festival. Foto nueva en "Cómo trabajamos con instituciones".
- **Nosotros:** galería de archivo "Dos décadas en fotos", foto nueva en "Nuestra historia" y retrato de Juan Carlos Gaitán en "Equipo".
- **Línea de tiempo (Inicio y Nosotros):** cada etapa muestra una foto; la etapa 2026 incluye el certificado.
- **Programa de formación:** foto real en "Este programa es para ti si…".
- Sin cambios en dependencias, configuración, URLs ni redirecciones: basta con reemplazar `src/`, `public/` y este README en el repositorio.
