# CLAUDE.md — Personal Website Build Instructions

You are building a personal website for **Pranika Jain**: a software engineer of 10 years (most recently at Amazon, global trade systems → Try Before You Buy → return-rate signals) now in NYC and pivoting toward creative work. The site should feel like a person built it — playful, distinctive, content-forward — and should treat her creative work (sketches, craft) as first-class alongside her engineering past.

This file is the source of truth. If anything below is ambiguous, ask before guessing.

---

## Stack — use exactly this

- **Framework:** Astro (latest), with MDX integration enabled.
- **Styling:** Tailwind CSS. One distinctive display font for headings (serif, mono, or display — *not* Inter). Default to **Fraunces** for headings and **IBM Plex Sans** for body unless instructed otherwise.
- **Language:** TypeScript everywhere.
- **Package manager:** pnpm.
- **Node:** latest LTS.
- **Content:** Markdown/MDX files in the repo (no CMS).
- **Deployment target:** Vercel (configure but do not deploy).
- **Linting/formatting:** ESLint + Prettier, with a Prettier Tailwind plugin.

Use Astro's Image component for all images. No client-side JS on pages that don't need it.

---

## Build order — do this in phases, stop after each for review

### Phase 1 — Scaffold
- `pnpm create astro@latest` with TypeScript, strict mode, MDX, Tailwind, sitemap integration.
- Set up Prettier, ESLint, `.editorconfig`.
- Add Vercel adapter config.
- Folder structure: `src/{components,layouts,pages,content}`, `src/content/{blog,projects}`, `public/`.
- Configure content collections for `blog` and `projects` with typed schemas.
- README scaffolded (will be filled in Phase 7).

### Phase 2 — Foundation
- `BaseLayout.astro` with `<head>` meta, OG tags, favicon hooks.
- Header (logo/name + nav: About, Projects, Blog) and footer (social links, "made with care" line).
- Theme: light + dark mode, respecting `prefers-color-scheme` with a manual toggle. Both themes intentional, not inverted.
- Base typography styles. Tailwind config with custom colors and font families.
- A `Placeholder` component (see "Handling missing content" below) — built before any page that might need it.

### Phase 3 — Core pages
- `/` Home: hero (name, one-line description, avatar placeholder), latest 3 blog posts, 3 featured projects, footer.
- `/about` About: use the bio below verbatim, plus a "currently" section with TODO placeholders, plus a small embedded sketch placeholder grid (4 slots).
- `/404` Custom 404 with personality (a sketch placeholder + a witty line).

### Phase 4 — Projects
- `/projects` index. Two sections, visually distinct: **Creative work** (image-forward grid) and **Engineering** (card list). Each has a brief intro line.
- `/projects/[slug]` detail template.
- Seed three engineering project MDX files (Global Trade Services, Try Before You Buy, Return-rate signals) with the starter content below — write-ups marked TODO for Pranika to expand.
- Seed two creative project MDX files as placeholders ("Sketchbook archive," "Craft projects") with image placeholders.

### Phase 5 — Blog
- `/blog` index, reverse-chronological, with title, date, reading time, excerpt.
- `/blog/[slug]` detail with prev/next links.
- Seed one placeholder post ("Hello, world — and what this is") with lorem-ipsum body and a clear TODO banner at top.
- MDX support so custom components can be dropped into posts.

### Phase 6 — Polish
- RSS feed at `/rss.xml`.
- `sitemap.xml` (via Astro integration) and `robots.txt`.
- Per-page `<title>` and meta descriptions.
- Open Graph + Twitter card tags on every page.
- `prefers-reduced-motion` respected for any animations.

### Phase 7 — Wrap-up
- Run Lighthouse against home, a project page, a blog post. Fix anything under 95 on Performance, Accessibility, Best Practices, SEO.
- Keyboard navigation pass: every interactive element reachable with visible focus.
- Fill in `README.md`: how to run locally, how to add a blog post (one paragraph), how to add a project, how to deploy to Vercel.
- Generate `TODO.md` at project root listing every placeholder in the site, grouped by page, with file paths.

---

## Site structure

```
/                  Home
/about             About
/projects          Projects index
/projects/[slug]   Project detail
/blog              Blog index
/blog/[slug]       Post detail
/rss.xml           RSS feed
/404               Custom 404
```

---

## About page — use this bio verbatim

> Hi, I'm Pranika. I grew up in Delhi sketching whatever I was feeling — a habit that quietly turned my notebooks into a decade-long visual diary that probably wouldn't make sense to anyone but me, but where each page is still vivid in my memory. I studied computer science, then spent ten years as a software engineer at Amazon working on global trade systems, the Try Before You Buy fulfillment platform, and most recently on signals that detect when products get returned too often. Somewhere along the way I realized the projects that genuinely lit me up were the ones with a visual or design dimension — and that the sketchbook had never stopped being the thing I most wanted to come back to. I'm now in NYC, recently between chapters, and trying to figure out what it looks like to make creative work as a primary practice instead of a quiet side life. I'm especially curious about photography, craft, and what happens at the edges where making by hand meets making with code.

Below the bio, include:
- A "Currently" block with TODO placeholders for: reading, making, listening to.
- A small grid of 4 sketch image placeholders.
- Contact: email TODO + social links TODO.

---

## Engineering project starters

Create three MDX files in `src/content/projects/` with frontmatter and a brief intro paragraph. Mark the write-up itself as TODO.

**1. Global Trade Services (Amazon)**
- Role: Software Engineer · Years: TODO · Tags: backend, distributed systems
- Intro: "Designed and built applications and microservices that supported Amazon's global trade for B2B and B2C — the tools that applied trade and cost restrictions to cross-border movement of goods."
- Write-up: TODO

**2. Prime Try Before You Buy (Amazon)**
- Role: Software Engineer · Years: TODO · Tags: backend, fulfillment, payments
- Intro: "Worked on the optimistic fulfillment platform that lets Prime members try items at home for 7 days and pay only if they decide to keep them — wrestling with the engineering and product edges of non-payment, returns, and customer trust."
- Write-up: TODO

**3. Return-rate signals (Amazon)**
- Role: Software Engineer · Years: TODO · Tags: ML signals, e-commerce
- Intro: "Built signals to detect when items were being returned too often within specific customer cohorts, then plugged those signals into recommendations, substitutions, and the Amazon main page — so the system could quietly route customers away from items likely to disappoint them."
- Write-up: TODO

---

## Design direction

**Tone:** Playful and creative. Hand-built feel. Not a SaaS landing page.

**Do:**
- Pick a strong accent color (or two) used deliberately. Default suggestion: a warm terracotta / burnt orange (`#D2691E`-ish) plus a deep navy, on a warm off-white background. Adjust if your sense of taste says otherwise — but commit to a real palette, not zinc/slate defaults.
- Use Fraunces (or similar) for headings with a slight italic on h1s.
- Asymmetric layouts welcome. Generous whitespace.
- Small delights: one or two, not five. Examples: a wobble on hover for the avatar, an underline that draws itself on link hover, a confetti-of-tiny-dots on the 404.
- Image-forward where possible. Creative projects should *show*, not describe.

**Don't:**
- Generic gradient hero, three-up feature grid, testimonials.
- Inter + zinc/slate everywhere.
- Glassmorphism, "AI-generated portfolio" energy, neon-on-black.
- Animation for its own sake. Every motion has a reason.
- Stock illustration. Use placeholder boxes instead — Pranika will swap in her own sketches.

**Responsive:** Mobile-first, 360px and up. Touch targets ≥ 44px.

**Accessibility:**
- Semantic HTML, correct heading hierarchy.
- WCAG AA contrast minimum.
- Visible focus states, full keyboard nav.
- Alt text on every image (use the placeholder description for now).
- Respect `prefers-reduced-motion`.

---

## Handling missing content — IMPORTANT

Pranika will fill in personal content (sketches, photos, full project write-ups, contact details, exact color preferences) directly on the built site. Your job is to make missing content **obvious in the codebase and visible on the rendered page**, never invented or hidden.

Rules:

1. **Never fabricate personal facts.** No invented project details, dates, opinions, or biographical claims beyond what's provided above.

2. **For missing text** (write-ups, blog posts, "currently" entries): insert a clearly marked `{/* TODO: ... */}` comment in the source and a visible placeholder block on the page. Lorem ipsum is acceptable for the seed blog post only, and must have a banner at the top reading "Placeholder post — replace before publishing."

3. **For missing images** (sketches, photos, project thumbnails, avatar): build a reusable `<Placeholder>` component that renders a dashed-border box at the correct aspect ratio, with the alt-text-to-be written inside it (e.g. "Sketch: woman with umbrella, 2019"). Do **not** use stock images, Unsplash, or AI-generated images. Do **not** use solid gray fills with no label.

4. **For missing links** (social, email): use `href="#TODO-twitter"` etc. and add an `aria-label` describing what it should link to. Visually mark them as TODO.

5. **For missing color preferences**: implement the default palette above and add a comment at the top of `tailwind.config.ts` saying "TODO: confirm palette with Pranika."

6. **Generate `TODO.md`** at the project root in Phase 7. Group entries by page (`/about`, `/projects/try-before-you-buy`, etc.) and include the source file path for each. Format:
   ```
   ## /about
   - [ ] Replace avatar placeholder · `src/pages/about.astro:42`
   - [ ] Fill in "Currently reading" · `src/pages/about.astro:67`
   - [ ] Add 4 sketch images · `src/pages/about.astro:81-98`
   ```

---

## Definition of done

- All routes listed above render with real or clearly-placeholdered content.
- Lighthouse: 95+ on Performance, Accessibility, Best Practices, SEO for home, a project page, and a blog post.
- Site builds and previews cleanly with `pnpm build && pnpm preview`.
- `vercel.json` (or equivalent Astro Vercel adapter config) is committed; Pranika should be able to connect the repo to Vercel and deploy on push to `main` without further config.
- `README.md` explains: run locally, add a blog post, add a project, deploy.
- `TODO.md` lists every placeholder with a file path.
- No console errors. No accessibility warnings in dev.
- Conventional commits throughout, one phase per feature branch is fine.

---

## Out of scope

Newsletter, comments, analytics, search, i18n, CMS, tag filtering, auto-generated OG images. Don't build these even if they seem easy — they're parked for v2.

---

## How to start

1. Confirm Node version and pnpm are installed.
2. Run Phase 1 end-to-end. Show me the file tree and `package.json` before moving on.
3. Proceed phase by phase. Stop after each phase, summarize what changed, and wait for confirmation before continuing.
