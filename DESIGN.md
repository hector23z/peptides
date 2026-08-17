---
name: Dark Lab Catalogue
description: Research-peptides ecommerce and content system. Deep charcoal lab surfaces, cyan scientific accents, image-led compound records and editorial data density. Precise, clinical, trustworthy — no hype, no gradients, no template tells.
colors:
  # Surfaces (dark lab)
  lab-black: "#081014"          # page ground
  lab-deep: "#050a0d"           # deepest inset (footer, code blocks)
  lab-panel: "#101a22"          # cards, panels
  lab-panel-raised: "#15232c"   # hover lift, active states
  lab-rule: "#293b46"           # AA-visible hairlines, borders

  # Text
  lab-text: "#e7eef1"           # body — near-white, cool
  lab-heading: "#f5f8f9"        # headlines
  lab-muted: "#9aadb7"          # captions, meta
  lab-faint: "#758995"          # subdued, but still AA on the page ground

  # Accent (scientific cyan/teal — the ONLY saturated color)
  lab-cyan: "#39cbbb"           # primary accent, links, active states
  lab-cyan-deep: "#16877e"      # borders against accent, hover deep
  lab-cyan-pale: "#72dfd2"      # hover lift on accent
  lab-cyan-glow: "rgba(57, 203, 187, 0.10)"  # soft fills only, never a shadow

  # State
  lab-warning: "#f59e0b"        # warnings only, sparingly
  lab-success: "#34d399"        # success, in-stock
  lab-error: "#f87171"          # errors, out-of-stock

typography:
  display:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 5.4vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 4vw, 3.15rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geologica, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lede:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  card: "12px"
  icon: "10px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "56px"
  2xl: "80px"
---

# Dark Lab — Design Rules

## Selected direction

Four full-home concepts were explored in `en/design-concepts/`: dark/cyan, light clinical, dark/amber luxury and technical brutalist. Dark/cyan was selected because it gives the best combined result for scientific trust, product-image contrast and brand differentiation. The selected system borrows the brutalist concept's useful catalog density and visible metadata, while keeping familiar ecommerce hierarchy and calmer reading rhythm.

## Color strategy: Restrained
Neutrals (lab-black through lab-faint) + ONE accent (lab-cyan). Cyan is for links, active states, focus rings, and data emphasis ONLY. Never amber, never purple, never gradients. Colored surfaces: only lab-cyan-glow soft fills at low opacity.

## Typography
- Geologica for display/headlines (self-hosted), Figtree for body, JetBrains Mono for data/measurements (purity %, molecular weights, prices).
- Body measure 65-72ch. Display max 5.25rem only in split heroes; content headings remain smaller. Tracking floor -0.045em on display type.
- No gradient text. No italic serif display. No eyebrow/kicker labels above headings.

## Layout
- Mobile-first shell with `clamp()` gutters and a 1280px maximum width.
- Home and category heroes use an asymmetric text/image split above 960px and collapse to one column below it.
- Category grids use a 7/5 and 5/7 rhythm; product grids use an asymmetric 6/3/3 lead row before settling into catalogue columns.
- Content, blog and product records preserve a 65-72ch reading measure. Supporting navigation lives in a slim sticky rail only when the viewport can support it.
- Section hierarchy comes from space, rules and type scale — not repeated containers or numbered headings.

## Components
- Cards: lab-panel bg, 1px lab-rule border, 10px maximum radius. NO nested cards. NO icon-tile-stack (icon in rounded square above heading).
- Buttons: primary = lab-cyan bg with lab-black text; secondary = transparent with lab-cyan border. Pills only for small controls (tags, badges).
- Tables: JetBrains Mono numerals, lab-rule hairlines, no zebra stripes.
- Focus rings: 2px lab-cyan, visible on all interactive elements.
- Shadows: none on catalogue cards. Depth comes from borders, image contrast and small vertical movement.
- Product cards always expose category, purity, format and price before the destination link. Never invent cart behaviour when no cart exists.
- Navigation must have a keyboard-visible focus state and a real mobile disclosure button with `aria-expanded`.

## Imagery
- AI-generated lab photography (vials, glassware, molecular structures) — dark background, cyan rim light.
- Homepage imagery is asymmetric: negative space supports copy while the compound/lab subject remains visually dominant.
- No people, no hands, no logos, no readable text on vials, no medical symbols.
- OG images: dark banner + "Research Peptides" + vial imagery.

## Motion
- Motion is limited to transform/opacity reveals and small hover movement; no perpetual loops or scroll hijacking.
- Honor `prefers-reduced-motion` globally.

## Bans (from craft floor)
- No gradient text, no glassmorphism decoration, no side-stripe borders >1px, no hard offset shadows, no sparklines/progress rings as decoration, no emoji/unicode glyph icons, no section numbers, no hero-metric template, no identical card grids as page structure.

## Copy
- "Research use only" framing everywhere. Never "human use", "dosis", "treatment", "medical advice".
- Controls name their action. Errors name the problem and recovery.
- No fake testimonials, no invented prices, no fabricated CoAs.
