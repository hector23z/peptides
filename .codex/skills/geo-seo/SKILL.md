---
name: geo-seo
description: >
  GEO-first SEO analysis for improving a website's visibility in AI-generated
  search answers while preserving traditional SEO foundations. Use when Codex
  needs a full or focused audit of AI visibility, citability, crawler access,
  llms.txt, brand authority, platform readiness, technical SEO, content quality,
  E-E-A-T, schema markup, reporting, proposals, prospect tracking, or monthly
  GEO score comparisons for a URL or local audit files.
---

# GEO-SEO for Codex

Use this skill as the orchestrator for Generative Engine Optimization (GEO) and
traditional SEO analysis. It preserves the source toolkit's scoring model,
citability rubric, AI crawler checks, `llms.txt` workflow, platform analysis,
schema validation, reporting, and CRM-style utilities while using Codex's
natural-language task flow.

## How to invoke

Use a natural-language request or invoke `$geo-seo`. Examples:

- “Run a full GEO audit for `https://example.com`.”
- “Check AI crawler access and `robots.txt` for this URL.”
- “Score this page for AI citability and suggest rewrites.”
- “Generate `llms.txt` from the site.”
- “Compare these two GEO audit files.”
- “Create a client-ready GEO report or proposal from the audit.”

The imported `/geo ...` examples from the Claude bundle are intent labels only;
Codex does not require slash commands. Map the user's request to the relevant
reference playbook below.

## Full audit workflow

For a full audit, follow these phases and keep the 50-page crawl limit, 30-second
per-page timeout, one-second request spacing, at most five concurrent fetches,
robots.txt awareness, and duplicate-page skip rule.

1. Discovery: fetch the homepage, identify the business type, and collect up to
   50 important pages from the sitemap and internal links.
2. Analysis: run the five specialist passes represented by the playbooks in
   `references/agent-playbooks/`. If parallel subagents are available, delegate
   the five passes concurrently; otherwise run them sequentially in the same
   session and keep their outputs separate.
3. Synthesis: verify every finding against fetched evidence, aggregate scores,
   classify issues as Critical/High/Medium/Low, write the prioritized action
   plan, and save the requested report files.

Never fabricate a platform result, crawler status, schema, or brand mention. Mark
blocked, unavailable, or unverified checks explicitly.

## Composite GEO score

Keep this weighting unchanged:

| Category | Weight | Evidence |
|---|---:|---|
| AI Citability & Visibility | 25% | Passage quality, answer blocks, crawler access |
| Brand Authority Signals | 20% | Mentions on Reddit, YouTube, Wikipedia, LinkedIn, entity presence |
| Content Quality & E-E-A-T | 20% | Experience, expertise, original data, credentials |
| Technical Foundations | 15% | SSR, Core Web Vitals, crawlability, mobile, security |
| Structured Data | 10% | Schema completeness, JSON-LD validation, rich-result eligibility |
| Platform Optimization | 10% | Google AI Overviews, ChatGPT, Perplexity, Gemini, Bing Copilot |

Use a 0–100 score for every category and calculate the weighted average. Load
`references/scoring-methodology.md` when exact sub-score formulas or deductions
are needed. Keep non-scoring agent-readiness signals separate from the numeric
technical score.

## Reference playbooks

Load only the playbook needed for the user's request. The files are intentionally
references rather than nested discoverable skills: Codex discovers this one root
`SKILL.md`, then progressively loads the appropriate specialized material.

| Intent | Reference |
|---|---|
| Full audit and score aggregation | `references/subskills/geo-audit.md` |
| Passage-level citation readiness | `references/subskills/geo-citability.md` |
| AI crawler and robots.txt checks | `references/subskills/geo-crawlers.md` |
| Analyze or generate `llms.txt` | `references/subskills/geo-llmstxt.md` |
| Brand mentions and authority | `references/subskills/geo-brand-mentions.md` |
| Platform-specific optimization | `references/subskills/geo-platform-optimizer.md` |
| Schema detection, validation, JSON-LD | `references/subskills/geo-schema.md` |
| Technical SEO and agent-readiness | `references/subskills/geo-technical.md` |
| Content quality and E-E-A-T | `references/subskills/geo-content.md` |
| Client-facing report | `references/subskills/geo-report.md` |
| PDF report | `references/subskills/geo-report-pdf.md` |
| Prospect pipeline | `references/subskills/geo-prospect.md` |
| Proposal generation | `references/subskills/geo-proposal.md` |
| Monthly delta report | `references/subskills/geo-compare.md` |
| Update the local bundle | `references/subskills/geo-update.md` |

The five specialist role playbooks are in `references/agent-playbooks/`:

- `geo-ai-visibility.md`: citability, crawlers, `llms.txt`, brand mentions.
- `geo-platform-analysis.md`: Google AI Overviews, ChatGPT, Perplexity,
  Gemini, and Bing Copilot.
- `geo-technical.md`: crawlability, indexability, security, performance, SSR,
  and agent-readiness signals.
- `geo-content.md`: E-E-A-T, readability, topical authority, freshness, and
  AI-content indicators.
- `geo-schema.md`: structured-data detection, validation, entity linking, and
  JSON-LD recommendations.

## Bundled utilities

The reusable Python utilities live in `scripts/`. Resolve the skill directory
before running them if the current working directory is the project being
audited. Important utilities include:

- `fetch_page.py`: raw HTML, headers, metadata, structured data, and text.
- `citability_scorer.py`: deterministic passage-level citability scoring.
- `llmstxt_generator.py`: validate or generate `llms.txt`.
- `brand_scanner.py`: platform-based brand signal collection.
- `crm_dashboard.py`: local prospect/pipeline dashboard.

Use `schema/` for JSON-LD templates and `templates/` for PDF report rendering.
The bundled `requirements.txt` is optional unless a utility requiring third-party
Python packages is executed. Do not modify the project's existing `.codex/hooks.json`;
the source bundle contains no hook implementation to install.

## Output conventions

Unless the user specifies another path, write results in the current project:

| Task | Default output |
|---|---|
| Full audit | `GEO-AUDIT-REPORT.md` |
| Single-page analysis | `GEO-PAGE-ANALYSIS.md` |
| Citability | `GEO-CITABILITY-SCORE.md` |
| Crawler access | `GEO-CRAWLER-ACCESS.md` |
| `llms.txt` | `llms.txt` |
| Brand mentions | `GEO-BRAND-MENTIONS.md` |
| Platforms | `GEO-PLATFORM-OPTIMIZATION.md` |
| Schema | `GEO-SCHEMA-REPORT.md` plus JSON-LD |
| Technical | `GEO-TECHNICAL-AUDIT.md` |
| Content | `GEO-CONTENT-ANALYSIS.md` |
| Client report | `GEO-CLIENT-REPORT.md` |
| PDF report | `GEO-REPORT.pdf` |

For prospect, proposal, and comparison tasks, follow the storage instructions in
their playbooks and confirm the final saved path. Do not silently overwrite an
existing audit or client deliverable; create a dated/versioned file or ask when
replacement is materially risky.
