# PeptideLab — GEO Score Report (Phase 2)

**Site:** https://peptidelab.example (C:\Proyectos\peptides\en)
**Date:** 2026-08-18
**Phase:** 2 — on-site optimization (Person schema, BreadcrumbList, E-E-A-T, DOI references, citable passages)

## Composite GEO Score: **63.4/100** — Fair (up from **58.1** in Phase 1)

| Category | Score | Weight | Weighted |
|---|---:|---|---:|
| AI Citability & Visibility | 67 | 25% | 16.8 |
| Brand Authority Signals | 10 | 20% | 2.0 |
| Content Quality & E-E-A-T | 85 | 20% | 17.0 |
| Technical Foundations | 80 | 15% | 12.0 |
| Structured Data | 88 | 10% | 8.8 |
| Platform Optimization | 68 | 10% | 6.8 |
| **Total** | | | **63.4** |

> **Note on the composite:** the on-site categories (Citability, E-E-A-T, Schema, Platform) all improved in Phase 2. The composite is capped by **Brand Authority (20% weight = 10/100)**, which remains **unverified/low** because the brand/domain is a placeholder with no confirmable external platform presence (Wikipedia, Reddit, YouTube, LinkedIn, industry). This is an off-site / go-to-market signal that cannot be fixed on-page.

---

## 1) AI Citability & Visibility — 67/100 (25%)

Sub-composite: Citability 86 ×35% · Brand mentions 10 ×30% · Crawler 100 ×25% · llms.txt 90 ×10% = **67**

- **Citability improved to 86:** all 10 top keyword pages now use question-formatted H2s with a direct 1–2 sentence answer immediately below; product pages carry definition blocks, specification tables and FAQ; 10 blog posts now cite real DOI references (named sources add statistical-density/attribution points).
- Crawler access 100 (all AI crawlers allowed + sitemap + Content-Signal).
- llms.txt 90 (comprehensive `llms.txt` + `llms-full.txt`).
- Brand mentions 10 (unverified).

## 2) Brand Authority Signals — 10/100 (20%)

**Unverified / low (10/100).** No confirmable Wikipedia, Reddit, YouTube, LinkedIn or industry presence for this placeholder brand. **This is the primary ceiling on the composite and cannot be improved on-page.** Action: launch real entity profiles once the domain is live.

## 3) Content Quality & E-E-A-T — 85/100 (20%)

- **Experience:** about page now documents the verification methodology — HPLC purity testing **and** mass spectrometry (MS) identity confirmation — plus the certificate of analysis (CoA) process (batch sampling → HPLC → MS → CoA).
- **Expertise:** a named, credentialed author (**Dr. Adrian Cole, Research Director**) now appears as `Person` schema and in blog/product attribution; bio added to the about page.
- **Authoritativeness:** 10 blog posts now include 2–3 real peer-reviewed DOI references (PubMed) in a `## References` section.
- **Trustworthiness:** HTTPS-ready, contact, privacy, terms, disclaimer; batch CoA disclosed; no medical claims.

## 4) Technical Foundations — 80/100 (15%)

Unchanged (80). Server-side rendered static HTML, unique meta/canonical, robots.txt allows AI crawlers + sitemap, mobile, HTTPS-ready. Gap: security headers not configured.

## 5) Structured Data — 88/100 (10%)

- **Person schema (NEW):** `src/data/persona.json` (Dr. Adrian Cole) injected as JSON-LD Person on every page via the Layout (jobTitle, knowsAbout, worksFor).
- **BreadcrumbList (NEW):** generated automatically from the URL path on **all** pages (home, categories, products, keyword, blog).
- **Organization + WebSite:** all pages.
- **Product + FAQPage:** product pages. **Article + FAQPage:** blog and keyword pages.
- **Article author is now `Person`** (Dr. Adrian Cole) on blog and keyword Article JSON-LD.
- All server-rendered JSON-LD. Gaps: `sameAs` (3+ platforms) and `speakable` remain.

## 6) Platform Optimization — 68/100 (10%)

- Google AI Overviews: question-heading structure and direct-answer passages strengthened across the 10 top keyword pages; spec tables and FAQ present.
- ChatGPT/Perplexity/Gemini: crawler access ✓; entity recognition improved via Person schema but still limited by absent external (Wikipedia/Reddit) presence.

---

## Phase 2 changes applied

1. **Person schema** — `src/data/persona.json` integrated as global JSON-LD Person in `Layout.astro`; `author: Dr. Adrian Cole` added to the frontmatter of all **10 blog posts** and **15 top products**; Article JSON-LD author now `Person`.
2. **BreadcrumbList** — auto-generated JSON-LD on all pages (computed from URL path + label map + page title).
3. **E-E-A-T / about page** — rewritten `/about/` with Dr. Cole bio, HPLC + MS verification methodology, and the CoA process.
4. **DOI references** — 10 blog posts each gained a `## References` section with 2–3 real PubMed DOI citations.
5. **Citable passages** — the 10 top keyword pages now use question-formatted H2s with direct 1–2 sentence answers immediately below.
6. **GEO_REPORT.md** — this updated report.

## Priority actions

- **[HIGH]** Build external brand authority (Wikipedia/Wikidata, Reddit, YouTube, LinkedIn) — the only way to lift Brand (20%) and remove the composite ceiling.
- **[MEDIUM]** Add security headers (HSTS, CSP, X-Content-Type-Options, Referrer-Policy) at deployment.
- **[LOW]** Add `sameAs` (3+ real profiles) and a `speakable` property to complete the schema score.
