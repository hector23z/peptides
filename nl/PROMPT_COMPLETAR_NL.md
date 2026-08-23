# TAREA: Completar web neerlandesa — Blog NL + Keywords NL

## Contexto
Eres Qwen Code 3.8 (diseñador de esta web). Trabajas en C:\Proyectos\peptides\nl\
Ya existe: 15 productos NL, 4 categorías, 4 guías, páginas núcleo, diseño "Dutch Clean Lab" (tuyo), ecommerce EUR funcionando.

## PARTE 1: BLOG NEERLANDÉS (10 posts)

Crea src/content/blog/ con 10 artículos en neerlandés (800-1,200 palabras):

1. wat-is-bpc-157.mdx — "BPC-157: Werkingsmechanisme, onderzoek en toepassing in laboratoriumonderzoek"
2. glp-1-agonisten-vergelijking.mdx — "GLP-1-agonisten vergeleken: Semaglutide vs. Tirzepatide vs. Retatrutide"
3. hgh-gids-groeihormoon.mdx — "Groeihormoon (HGH) in het laboratorium: Wat onderzoekers moeten weten"
4. peptide-opslag-handhaving.mdx — "Peptiden correct opslaan en hanteren: Gids voor laboratoria"
5. reconstitutie-peptiden-handleiding.mdx — "Peptiden reconstitueren: Stap-voor-stap handleiding"
6. zuiverheid-peptiden-testen.mdx — "Peptidezuiverheid testen: HPLC, massaspectrometrie en COAs uitgelegd"
7. nad-plus-onderzoek.mdx — "NAD+ en anti-aging onderzoek: Huidige stand van de wetenschap"
8. tb-500-onderzoeksupdate.mdx — "TB-500 (Thymosine Beta-4): Onderzoeksoverzicht"
9. melanotan-2-risicos.mdx — "Melanotan 2: Risico's, bijwerkingen en onderzoeksstatus"
10. semaglutide-studies-2026.mdx — "Semaglutide studies 2026: Nieuwe inzichten uit onderzoek"

Frontmatter:
```
---
title: "[titel]"
description: "[meta description 150-160 chars]"
pubDate: 2026-08-22
author: "Peptidux Onderzoeksteam"
tags: ["peptiden", "onderzoek", ...]
---
```

## PARTE 2: KEYWORDS NL (20 páginas programáticas)

Crea src/content/pages/ con:

Alta prioridad:
1. ozempic-kopen.mdx (8,100/mes)
2. anabolen-kopen.mdx (8,100/mes — SOLO informativo, NO venta esteroides)
3. mounjaro-kopen.mdx (2,900/mes)
4. peptiden-kopen.mdx (2,400/mes)
5. semaglutide-kopen.mdx (~1,900/mes)
6. hgh-kopen.mdx (~1,300/mes)

Media:
7. bpc-157-kopen.mdx
8. tb-500-kopen.mdx
9. peptide-online-kopen.mdx
10. research-peptides-nederland.mdx
11. tirzepatide-kopen.mdx
12. melanotan-2-kopen.mdx
13. pt-141-kopen.mdx
14. nad-plus-kopen.mdx
15. ghk-cu-kopen.mdx

Long-tail:
16. epitalon-kopen.mdx
17. ipamorelin-kopen.mdx
18. retatrutide-kopen.mdx
19. glp-1-peptiden-kopen.mdx
20. peptiden-zuiverheid-nederland.mdx

Formato igual que las guías existentes (600-900 palabras): H1 con keyword, respuesta directa en primeros 100 palabras, tabla comparativa productos EUR, FAQ, CTA interno, disclaimer research use only. Las de anabolen-kopen: solo contenido educativo sin botones de compra.

## VERIFICACIÓN
1. npm run build → debe pasar
2. Verifica que las 30 páginas nuevas existen
3. Responde en español con resumen + resultado del build
