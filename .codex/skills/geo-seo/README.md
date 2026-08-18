# GEO-SEO para Codex

Adaptación del bundle `geo-seo-claude` para el formato de skills de Codex.
Mantiene la metodología GEO/SEO original: scoring compuesto 0–100, citabilidad,
acceso de crawlers, `llms.txt`, menciones de marca, optimización por plataforma,
SEO técnico, E-E-A-T, schema.org, reportes y seguimiento mensual.

## Instalación local

Esta copia ya está instalada para este proyecto en:

```text
C:\Proyectos\peptides\.codex\skills\geo-seo\
```

Codex descubre el `SKILL.md` raíz. Los 15 subskills y 5 playbooks de agente se
conservan como referencias en `references/subskills/` y
`references/agent-playbooks/`, y se cargan según la tarea.

Para instalarla en el ámbito de usuario en Windows:

```powershell
pwsh -File .codex\skills\geo-seo\install.ps1
```

Para usar otra ubicación:

```powershell
pwsh -File .codex\skills\geo-seo\install.ps1 -Destination "$env:USERPROFILE\.codex\skills\geo-seo"
```

En macOS/Linux:

```bash
bash .codex/skills/geo-seo/install.sh
```

Los instaladores copian el bundle y no modifican `.codex/hooks.json`. La opción
`-InstallDependencies` del script PowerShell crea un entorno virtual aislado y
instala `requirements.txt`; sin esa opción, las dependencias solo son necesarias
cuando se ejecutan los utilitarios Python.

## Uso desde Codex

Usa lenguaje natural o `$geo-seo`; no hay comandos `/geo` en Codex. Ejemplos:

```text
Use $geo-seo para auditar https://example.com.
Comprueba crawlers de IA, robots.txt y llms.txt para https://example.com.
Puntúa la citabilidad de https://example.com/guide y propone reescrituras.
Genera un reporte GEO para el audit GEO-AUDIT-REPORT.md.
Compara GEO-AUDIT-REPORT-baseline.md con GEO-AUDIT-REPORT-current.md.
```

La skill debe usar navegación web para datos remotos y los scripts locales para
HTML crudo, headers, schema, citabilidad, `llms.txt` y brand scanning. Si una
fuente no está disponible, debe marcar el resultado como no verificado.

## Estructura

```text
geo-seo/
├── SKILL.md                         # entrada autodetectable de Codex
├── agents/openai.yaml               # metadata de interfaz
├── references/subskills/            # 15 playbooks especializados
├── references/agent-playbooks/      # 5 roles de análisis
├── references/scoring-methodology.md
├── scripts/                         # utilidades Python
├── schema/                          # plantillas JSON-LD
├── templates/                       # salida PDF
├── white-label/                     # configuración opcional de marca
├── install.ps1
├── install.sh
└── requirements.txt
```

El directorio `agents/` de Codex se reserva para metadatos de interfaz como
`openai.yaml`; los agentes Claude independientes se convirtieron en playbooks
de referencia para evitar depender de una carpeta `~/.claude/agents/`.
