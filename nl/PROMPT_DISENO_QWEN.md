# TAREA: Diseñar la web NEERLANDESA (nl/) basada en los mockups de codex

## Contexto
Eres el diseñador frontend de la web neerlandesa de Peptidux (research peptides). Codex generó 4 mockups de concepto en C:\Proyectos\peptides\nl\design-concepts\:
- concepto-a.png (Dutch Clean Lab — minimalista claro, verde menta)
- concepto-b.png (Amsterdam Tech — dark tech, naranja neón)
- concepto-c.png (Nordic Pharma — escandinavo frío, azul hielo)
- concepto-d.png (Biohacker Grid — terminal verde)

## TU TAREA
1. MIRA los 4 mockups (usa tu capacidad de visión si la tienes, o lee el PROMPT_MOCKUPS.md que describe cada concepto)
2. ELIGE el mejor concepto para el mercado neerlandés (confiable, profesional, no scam)
3. IMPLEMENTA el diseño elegido en C:\Proyectos\peptides\nl\:
   - El scaffold ya existe (config, layouts, componentes, estilos, scripts, lib, pages copiados de la web EN)
   - REEMPLAZA el diseño Dark Lab por el nuevo: colores, tipografías, componentes, layout
   - Crea src/content/ con:
     - categories: glp-1, recovery, longevity, hgh (en neerlandés)
     - products: los 15 péptidos principales (semaglutide, tirzepatide, retatrutide, bpc-157, tb-500, ghk-cu, melanotan-2, pt-141, nad-plus, epitalon, mots-c, hgh-10iu, hgh-24iu, ipamorelin, cjc-1295) en NEERLANDÉS con title/description/category/purity/size/price/featured/order
     - pages: las 4 guías (research-peptides, purity, reconstitution, storage) en neerlandés
   - Páginas núcleo en neerlandés: home, about, contact, shipping, disclaimer, privacy, terms
   - Mantén el ecommerce funcionando (cart, checkout, admin, API) — solo cambia el diseño y los textos
4. Verifica con: npm install && npm run build

## Restricciones
- NO uses Inter ni Space Grotesk (sobreusadas)
- NO copies el Dark Lab de EN/DE
- NO crees esteroides ni blog
- Mantén los slugs en inglés
- El diseño debe verse profesional y confiable

## Respuesta
Responde en español con: qué concepto elegiste, por qué, y resumen de lo implementado + resultado del build.
