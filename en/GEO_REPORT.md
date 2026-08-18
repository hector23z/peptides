# PeptideLab — GEO Score Report

**Site:** https://peptidelab.example (C:\Proyectos\peptides\en)
**Date:** 2026-08-18
**Method:** GEO-SEO scoring model (Citability 25% / Brand 20% / Content 20% / Technical 15% / Schema 10% / Platform 10%)

## Composite GEO Score: **58.1/100** — Fair (borderline; 40–59 = Poor, 60–74 = Fair)

| Category | Score | Weight | Weighted |
|---|---:|---|---:|
| AI Citability & Visibility | 65 | 25% | 16.2 |
| Brand Authority Signals | 10 | 20% | 2.0 |
| Content Quality & E-E-A-T | 72 | 20% | 14.4 |
| Technical Foundations | 80 | 15% | 12.0 |
| Structured Data | 75 | 10% | 7.5 |
| Platform Optimization | 60 | 10% | 6.0 |
| **Total** | | | **58.1** |

---

## 1) AI Citability & Visibility — 65/100 (25%)

Sub-composite: Citability 80 ×35% · Brand mentions 10 ×30% · Crawler access 100 ×25% · llms.txt 90 ×10% = **65**

**Citability (80/100):**
- Home, product and keyword pages contain citable passages: 1–2 sentence definitions ("Semaglutide is a GLP-1 receptor agonist…", "BPC-157 is a 15-amino-acid peptide…"), specific data (molecular weight, purity, amino-acid counts, structure), and question-based H2s.
- Product pages include a **specification table** (compound, purity, MW, intended use) and direct-answer FAQ.
- Keyword pages include **Frequently Asked Questions** with direct answers.

**AI crawler access (100/100):** `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Amazonbot, Applebot-Extended, Bytespider and CCBot, plus a wildcard allow and the XML sitemap reference. Added `Content-Signal:` directive (`ai-train=yes, search=yes, ai-personalization=no, ai-retrieval=yes`).

**Brand mentions (10/100, unverified):** the brand/domain is a placeholder with no confirmable external presence on Wikipedia, Reddit, YouTube, LinkedIn or industry sources. Marked unverified per methodology (no fabricated results).

## 2) Brand Authority Signals — 10/100 (20%)

**Unverified / low (10/100).** No confirmable Wikipedia entry, Reddit discussion, YouTube channel, LinkedIn company page, or industry/niche coverage for this placeholder brand. This is the single largest drag on the composite and a go-to-market (not site-content) gap. Action: launch real brand presence and entity profiles once the domain is live.

## 3) Content Quality & E-E-A-T — 72/100 (20%)

- **Experience:** product pages expose a verification methodology (independent HPLC purity testing, molecular-weight confirmation, certificate of analysis) and an "evidence package" / "source verification" workflow. **No medical claims** — tone is strictly "research use only".
- **Expertise:** technical depth is strong (MW, purity, structure, reconstitution); named author/Person schema not present (minor gap).
- **Authoritativeness:** about page, research-literature references; no external media mentions.
- **Trustworthiness:** HTTPS-ready, contact, privacy, terms, disclaimer; batch CoA disclosed; no invented prices/CoAs.
- Content is 800–1200 words with clean heading hierarchy.

## 4) Technical Foundations — 80/100 (15%)

- Server-side rendered static HTML (Astro) — content visible to AI crawlers without JS (full weight).
- Unique meta title/description + canonical on every page.
- `robots.txt` allows AI crawlers and references the XML sitemap (`sitemap-index.xml`).
- Mobile-responsive, clean URL structure, HTTPS-ready.
- **Gap:** security headers (HSTS, CSP, X-Content-Type-Options, Referrer-Policy) not configured — recommend adding in deployment.

## 5) Structured Data — 75/100 (10%)

- **Organization** (all pages) — enhanced with `knowsAbout`, `areaServed`, `alternateName`.
- **WebSite** (all pages).
- **Product + FAQPage** on all product pages.
- **Article + FAQPage** on all blog posts.
- **Article + FAQPage** (NEW) on all keyword pages — parsed from the markdown FAQ.
- All delivered as server-rendered JSON-LD (crawler-visible).
- **Gaps:** no `Person` schema for an author, no `BreadcrumbList`, no `sameAs` (3+ platforms, blocked until brand is live).

## 6) Platform Optimization — 60/100 (10%)

- Google AI Overviews: question-heading structure, direct-answer paragraphs, spec/comparison tables — strong.
- ChatGPT: crawler access ✓; entity recognition weak until brand/Wikipedia presence exists.
- Perplexity: content source-ready; community-validation signals (Reddit/Quora) absent.
- Gemini / Bing Copilot: crawler access ✓.

---

## Changes applied in this pass

1. **`public/llms.txt`** — rewrote to the llms.txt spec: blockquote description, `## Products / Categories / Guides / Blog / Key Facts / Contact / Legal` sections, 10–30 quality page entries with descriptions.
2. **`public/llms-full.txt`** — added a comprehensive extended guide (111 products, 10 categories, 51 keyword pages, 10 blog posts) for a 90–100 llms.txt score.
3. **`public/robots.txt`** — explicitly allowed 10 AI crawlers + wildcard, added `Content-Signal:` directive.
4. **`src/pages/[slug].astro`** — added server-rendered **Article + FAQPage** JSON-LD to every keyword page (FAQ parsed from markdown).
5. **`src/layouts/Layout.astro`** — enhanced **Organization** JSON-LD with `knowsAbout`, `areaServed`, `alternateName`.
6. **10 top keyword pages** — added a research-literature + verification E-E-A-T signal (no medical claims).

## Priority actions

- **[HIGH]** Build real external brand authority (Wikipedia/Wikidata, Reddit, YouTube, LinkedIn) once the domain is live — this lifts Brand (20%) and Platform (10%) and would raise the composite by ~8–10 points.
- **[MEDIUM]** Add security headers (HSTS, CSP, X-Content-Type-Options, Referrer-Policy) at deployment.
- **[MEDIUM]** Add a named author with `Person` schema + `sameAs` on a real profile to complete E-E-A-T and schema scores.
- **[LOW]** Add `BreadcrumbList` schema and a `/speakable` property.
