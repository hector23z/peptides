# TAREA: Generar imágenes profesionales de producto con Luna

## OBJETIVO
Usar Luna (gpt-5.6-luna via codex exec --yolo) para generar imágenes limpias y profesionales de cada péptido, usando las fotos reales descargadas como referencia/inspiración.

## CONTEXTO
- Fotos reales en: C:\Proyectos\peptides\real_images\ (21 imágenes: 15 productos + lab + científicos)
- Las fotos reales son de proveedores (viales, frascos) pero NO son consistentes en estilo/iluminación/fondo
- El objetivo: generar 15 imágenes de producto consistentes (fondo blanco #FAFAF8, iluminación profesional, vial centrado) que se vean como fotos de catálogo de laboratorio

## INSTRUCCIONES

### 1. Para cada producto, genera una imagen con este prompt base:
"Professional product photograph of a [PRODUCT] peptide vial, 10mg amber glass vial with white label, clean white background #FAFAF8, soft studio lighting, centered composition, high detail, laboratory research chemical, no text overlay, square 1:1"

### 2. Lista de productos:
1. bpc-157 → BPC-157
2. tb-500 → TB-500
3. semaglutide → Semaglutide
4. tirzepatide → Tirzepatide
5. retatrutide → Retatrutide
6. ghk-cu → GHK-Cu (copper peptide, vial may have blue tint)
7. melanotan-2 → Melanotan-2
8. pt-141 → PT-141
9. nad-plus → NAD+ (white powder in vial)
10. epitalon → Epitalon
11. mots-c → MOTS-c
12. hgh-10iu → HGH 10IU (larger vial)
13. hgh-24iu → HGH 24IU (larger vial)
14. ipamorelin → Ipamorelin
15. cjc-1295 → CJC-1295

### 3. Si tienes acceso a Luna (image generation):
- Usa la foto real de cada producto en real_images/ como input/reference
- Genera con fondo blanco limpio, iluminación consistente
- Tamaño: 768x768
- Guarda en: C:\Proyectos\peptides\luna_images/[slug].png

### 4. Si NO tienes acceso directo a generación de imágenes con Luna:
- Usa codex exec --yolo --model gpt-5.6-luna
- O describe el prompt exacto para cada producto y guárdalo en C:\Proyectos\peptides\luna_prompts.json
- Intenta generar las imágenes con cualquier herramienta disponible

### 5. También generar:
- 1 hero image: laboratorio limpio y moderno con viales (1920x1080) → hero-lab.png
- 1 imagen "about": científico con bata mirando cromatograma (800x600) → about-scientist.png

## OUTPUT
- 15 imágenes de producto en C:\Proyectos\peptides\luna_images/
- 2 imágenes auxiliares (hero + about)
- Responder en español con la lista de imágenes generadas