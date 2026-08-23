# TAREA: Completar web alemana — Blog DE + Keywords DE

## Contexto
Eres Qwen Code 3.8 trabajando en C:\Proyectos\peptides\de\
La web ya tiene: 15 productos en alemán, 4 categorías, 4 guías, páginas núcleo (about/contact/shipping/disclaimer/privacy/terms/impressum), ecommerce funcionando (carrito/checkout/admin), build OK.

## PARTE 1: BLOG ALEMÁN (10 posts)

Crea src/content/blog/ con 10 artículos en alemán (800-1,200 palabras cada uno). Usa los mismos slugs que la versión EN pero traducidos al alemán:

1. was-ist-bpc-157.mdx — "BPC-157: Wirkungsweise, Forschung und Anwendung in der Laborforschung"
2. glp-1-agonisten-vergleich.mdx — "GLP-1-Agonisten im Vergleich: Semaglutid vs. Tirzepatid vs. Retatrutid"
3. hgh-guide-wachstumshormon.mdx — "Wachstumshormon (HGH) im Labor: Was Forscher wissen müssen"
4. peptide-lagerung-handhabung.mdx — "Peptide richtig lagern und handhaben: Leitfaden für Labore"
5. rekonstitution-peptide-anleitung.mdx — "Peptide rekonstituieren: Schritt-für-Schritt-Anleitung"
6. reinheit-peptide-pruefen.mdx — "Peptid-Reinheit prüfen: HPLC, Massenspektrometrie und COAs erklärt"
7. nad-plus-forschung.mdx — "NAD+ und Anti-Aging-Forschung: Aktueller Stand der Wissenschaft"
8. tb-500-forschungsupdate.mdx — "TB-500 (Thymosin Beta-4): Forschungsüberblick"
9. melanotan-2-risiken.mdx — "Melanotan 2: Risiken, Nebenwirkungen und Forschungsstand"
10. semaglutid-studien-2026.mdx — "Semaglutid-Studien 2026: Neue Erkenntnisse aus der Forschung"

Formato frontmatter (igual que productos):
```
---
title: "[título]"
description: "[meta description 150-160 chars]"
pubDate: 2026-08-22
author: "Peptidux Forschungsteam"
tags: ["peptide", "forschung", ...]
---
```

Contenido: tono científico-profesional, menciona naturalmente los productos relacionados (enlaces internos), disclaimers de research use only.

## PARTE 2: KEYWORDS DE (25 páginas programáticas)

Crea src/content/pages/ con estas páginas keyword (mismo formato que las guías existentes, 600-900 palabras cada una):

Alta prioridad (volumen alto):
1. ozempic-kaufen.mdx (27,100/mes) — "Ozempic kaufen: Forschungspeptide & GLP-1 für Laborzwecke"
2. testosteron-kaufen.mdx (12,100/mes)
3. peptide-kaufen.mdx (9,900/mes)
4. hgh-kaufen.mdx (3,600/mes)
5. semaglutid-kaufen.mdx (~2,900/mes)
6. tirzepatid-kaufen.mdx (~1,900/mes)
7. bpc-157-kaufen.mdx (~1,300/mes)
8. anabolika-kaufen.mdx (1,300/mes — SOLO contenido informativo, NO venta de esteroides)
9. nandrolon-kaufen.mdx (contenido informativo)
10. oxandrolon-kaufen.mdx (contenido informativo)

Media prioridad:
11. peptide-online-kaufen.mdx
12. research-peptides-deutschland.mdx
13. bpc-157-deutschland.mdx
14. tb-500-kaufen.mdx
15. ghk-cu-kaufen.mdx
16. melanotan-2-kaufen.mdx
17. pt-141-kaufen.mdx
18. nad-plus-kaufen.mdx
19. epitalon-kaufen.mdx
20. ipamorelin-kaufen.mdx

Long-tail:
21. cjc-1295-kaufen.mdx
22. mots-c-kaufen.mdx
23. retatrutid-kaufen.mdx
24. glp-1-peptide-kaufen.mdx
25. peptide-reinheit-deutschland.mdx

Cada página: título H1 con la keyword, respuesta directa a la intención en los primeros 100 palabras, tabla comparativa de productos relacionados (con precios EUR), FAQ section (3-5 preguntas), CTA a productos internos, disclaimer research use only.

IMPORTANTE para las de esteroides (anabolika/nandrolon/oxandrolon): solo contenido educativo/informativo sobre su estatus legal y riesgos, SIN botones de compra, SIN precios, con enlace a la política de solo-péptidos.

## VERIFICACIÓN
1. npm run build → debe pasar sin errores
2. Verifica que las 35 páginas nuevas existen
3. Responde en español con resumen de lo creado + resultado del build
