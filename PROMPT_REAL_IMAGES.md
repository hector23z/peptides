# TAREA: Descargar imágenes REALES de péptidos y productos de laboratorio

## OBJETIVO
Usar BrowserClaw (MCP en http://127.0.0.1:9010/mcp) para buscar y descargar fotos REALES de:
1. Viales/frascos de cada péptido (de proveedores reales: Sigma-Aldrich, Bachem, Peptide Sciences, Canada Peptides, etc.)
2. Fotos de laboratorio reales (científicos, pipetas, cromatografía HPLC)
3. Fotos de personas reales (laboratoristas, investigadores en bata blanca)

## LISTA DE 15 PRODUCTOS (slug → nombre para buscar)
1. bpc-157 → "BPC-157 peptide vial"
2. tb-500 → "TB-500 Thymosin Beta-4 vial"
3. semaglutide → "Semaglutide peptide vial research"
4. tirzepatide → "Tirzepatide peptide vial"
5. retatrutide → "Retatrutide peptide research"
6. ghk-cu → "GHK-Cu copper peptide vial"
7. melanotan-2 → "Melanotan 2 MT2 vial"
8. pt-141 → "PT-141 Bremelanotide vial"
9. nad-plus → "NAD+ nicotinamide adenine dinucleotide vial"
10. epitalon → "Epitalon peptide vial"
11. mots-c → "MOTS-c mitochondrial peptide vial"
12. hgh-10iu → "HGH growth hormone 10IU vial"
13. hgh-24iu → "HGH 24IU vial"
14. ipamorelin → "Ipamorelin peptide vial"
15. cjc-1295 → "CJC-1295 peptide vial"

## FUENTES PRIORITARIAS (donde buscar)
1. Google Images: "bpc 157 peptide vial" (filtrar por imágenes que parezcan fotos reales, no renders 3D)
2. Sitios de proveedores: sigmaaldrich.com, bachem.com, peptidesciences.com, canadapeptides.org
3. Wikimedia Commons: "laboratory vial", "peptide synthesis", "HPLC chromatography"
4. Unsplash/Pexels (gratis, sin licencia): "laboratory scientist", "research lab", "white lab coat"
5. Alibaba/AliExpress: "peptide vial 10mg" (fotos de producto reales de fabricantes chinos)

## CÓMO USAR BROWSERCLAW
El helper está en el skill browserclaw. Conexión:
```python
import httpx, json, re
MCP_URL = "http://127.0.0.1:9010/mcp"
headers = {"Accept": "application/json, text/event-stream", "Content-Type": "application/json"}
# init session, luego tabs/new, wait, read/evaluate para extraer URLs de imágenes
# Descargar con httpx.get(url) y guardar en C:\Proyectos\peptides\real_images\
```

Patrón de scraping:
1. `tabs action:new url:"https://www.google.com/search?q=bpc+157+peptide+vial&tbm=isch"` 
2. wait 5s, luego `evaluate` para extraer URLs de imágenes (`document.querySelectorAll('img').map(i => i.src)`)
3. Filtrar URLs que terminen en .jpg/.png/.webp y tengan dominios de proveedores (no google thumb proxies)
4. Descargar cada imagen con httpx, guardar como `bpc-157_real_1.jpg`, etc.

Para personas/laboratorio:
- `https://unsplash.com/s/photos/laboratory-scientist` → descargar 5-6 fotos de personas reales
- `https://www.pexels.com/search/laboratory/` → lo mismo

## OUTPUT
Guardar TODAS las imágenes en: C:\Proyectos\peptides\real_images\
- Productos: `bpc-157_real.jpg`, `semaglutide_real.jpg`, etc. (1 por producto, la mejor foto)
- Personas: `scientist_1.jpg`, `scientist_2.jpg`, `lab_research_1.jpg`, etc.
- Laboratorio: `lab_hplc.jpg`, `lab_vials.jpg`, etc.

Crea el directorio si no existe. Descarga mínimo 20 imágenes (15 productos + 5 personas/lab).
Responde en español con la lista de imágenes descargadas y sus rutas.