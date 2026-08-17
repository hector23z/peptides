# PLAN DE ARQUITECTURA — 3 Webs de Péptidos (Astro)

## Stack
- Astro 7 (estático, content collections), Tailwind CSS, sin framework JS
- 3 webs idénticas en estructura, distinto idioma/dominio:
  - C:\Proyectos\peptides\en — EN (US/UK/CA/AU)
  - C:\Proyectos\peptides\de — DE
  - C:\Proyectos\peptides\nl — NL
- Cada una es un repo git independiente

## Estructura de páginas (por web)

### Núcleo (páginas estáticas)
- / — home: hero + categorías + top 3 productos + disclaimer
- /about/ — quiénes somos (research use only)
- /contact/ — contacto
- /disclaimer/ — research use only, no human consumption
- /shipping/ — tiempos de envío, tracking, política de reenvío
- /privacy/ — privacidad
- /terms/ — términos

### Categorías (hubs)
- /peptides/ — hub de péptidos (GLP-1, recuperación, longevidad)
- /glp-1/ — semaglutide, tirzepatide, retatrutide
- /recovery/ — BPC-157, TB-500, GHK-CU
- /longevity/ — NAD+, epitalon, MOTS-c
- /hgh/ — HGH, fragmentos, secretagogos
- /steroids/ — testosterona, trenbolona, boldenona (solo EN/DE, NL más suave)

### Páginas de producto (programáticas, ~30 por web)
Patrón: /{categoria}/{producto}/
Ej: /glp-1/semaglutide/, /recovery/bpc-157/, /hgh/hgh-10iu/
Cada página: qué es, cómo funciona, dosificación (research), pureza/CoA, comparación de precios, FAQ, CTA a tienda

### Páginas de keyword (SEO programático, ~50-80 por web)
Patrón: /{keyword-slug}/
Ej: /compounded-semaglutide/, /buy-peptides/, /peptide-kaufen/, /ozempic-kopen/
Cada página: responde la intención de búsqueda + CTA

### Blog (autoridad, 10-20 posts iniciales)
- Guías de investigación, comparativas, noticias del nicho

## Content collections (Astro)
- src/content/products/ — productos (mdx)
- src/content/pages/ — páginas keyword (mdx)
- src/content/blog/ — blog (mdx)
- src/content/categories/ — categorías (mdx)

## SEO técnico
- sitemap.xml, robots.txt, llms.txt
- JSON-LD: Organization, WebSite, Article, Product (con disclaimer research)
- Meta title/description por página
- hreflang NO (dominios separados)
- OG images (generadas por codex/luna)
- Canonical en todas las páginas

## Legal (por país)
- EN: research use only disclaimer, 18+, no medical advice
- DE: Impressum (obligatorio), Datenschutz, research disclaimer
- NL: research disclaimer, 18+

## Monetización
- Fase 1: afiliado (SwissChems y similares) — links en CTAs
- Fase 2: tienda propia crypto-only (dominio separado, enlazada desde las 3 webs)

## Imágenes (codex + luna)
- OG images por página
- Hero images por categoría
- Imágenes de producto (viales, no personas, no marcas)
- Estilo: limpio, científico, dark theme con acentos
- PROMPTING: describir como "laboratory research supplies", "scientific glassware",
  "research vials" — NUNCA "drugs", "steroids for sale", "human use"
- Evitar: personas, jeringas con uso humano, marcas farmacéuticas

## Orden de construcción
1. Scaffold Astro + Tailwind + content collections (prime-agent)
2. Páginas núcleo (prime-agent)
3. 30 páginas de producto (prime-agent, batch)
4. 50-80 páginas keyword (prime-agent, batch)
5. Blog inicial (prime-agent)
6. Imágenes (codex/luna, paralelo)
7. SEO técnico + JSON-LD (prime-agent)
8. Build + verificación (yo, arquitecto)

## Reglas para workers
- NO inventar precios ni claims médicos — todo "research use only"
- NO usar términos de consumo humano ("dosis", "tratamiento") — usar "research protocols"
- Contenido original, no copiar de otros sitios
- Cada página: meta title único, H1 único, 800-1500 palabras
- Astro: imports inline (NO usar alias ~/*), como en CMC Holding
