# TAREA: Rediseñar las 3 webs de péptidos a theme blanco limpio con imágenes reales

## CONTEXTO
Eres Kimi (Moonshot AI). Trabajas en C:\Proyectos\peptides\.
Hay 3 webs Astro: en/ (EN), de/ (DE), nl/ (NL). Cada una tiene ~15 productos, 4 categorías, blog, páginas keyword.
El diseño actual es "Dark Lab" (fondo oscuro, verde neón) — se ve muy AI.

## OBJETIVO
Rediseñar a un theme BLANCO LIMPIO que NO se vea como hecho por IA:
- Fondo: blanco (#FFFFFF) o blanco roto (#FAFAF8)
- Tipografía: Sora/Outfit/Spline Sans Mono (NO Inter/Space Grotesk)
- Acentos: verde profesional (#0f766e petrol), no neón
- Tarjetas de producto: bordes sutiles, sombras suaves
- Imágenes de producto: usar las fotos REALES que estarán en real_images/ (no los renders actuales)

## ARCHIVOS A MODIFICAR
1. `en/src/layouts/Layout.astro` — cambiar el theme global
2. `en/src/styles/global.css` (o equivalente) — paleta, tipografía
3. `en/src/components/ProductCard.astro` (o equivalente) — card de producto
4. `en/src/pages/index.astro` — hero con foto real de laboratorio
5. `de/src/` y `nl/src/` — mismos cambios (las 3 webs)
6. Reemplazar las imágenes de producto en `*/public/images/products/*.png` con las reales de `real_images/` cuando estén listas

## PALETA SUGERIDA
```
--bg: #FAFAF8
--bg-card: #FFFFFF
--text: #1a1a1a
--text-muted: #6b7280
--accent: #0f766e (petrol green)
--accent-light: #14b8a6
--border: #e5e7eb
--shadow: 0 1px 3px rgba(0,0,0,0.08)
--radius: 12px
```

## VERIFICACIÓN
1. `npm run build` en las 3 webs → sin errores
2. Revisar que las imágenes se carguen
3. Responder en español con resumen del rediseño