# pranikajain.com

Personal site for **Pranika Jain** — software engineer of ten years, now in NYC making creative work the primary practice.

Built with [Astro](https://astro.build/) 6, Tailwind CSS v4, and MDX. TypeScript strict-mode throughout. Deploys to Vercel (static).

---

## Run locally

```sh
pnpm install
pnpm dev      # http://localhost:4321
```

Other useful commands:

```sh
pnpm build              # build static output to ./dist (and Vercel output)
pnpm preview            # serve the built site locally
pnpm exec astro check   # type-check the project
pnpm format             # prettier write
pnpm lint               # eslint
```

Node ≥ 22.12 and pnpm are required.

---

## Drop new content with `uploads/`

`uploads/` is the staging area for raw files. See [`uploads/README.md`](uploads/README.md) for the per-folder convention. Typical flow:

1. Drop a raw photo / sketch / blog draft into the matching `uploads/` subfolder.
2. Ask Claude to process it. Images get rotated per EXIF, resized to 1400 px wide, EXIF-stripped, and written to `public/images/<project>/`. Blog text gets a new `.mdx` in `src/content/blog/`.

Manual procedure for each content type is below.

### Add a blog post

Create a new `.mdx` file under `src/content/blog/`. The filename becomes the URL slug.

```mdx
---
title: 'Post title'
description: 'One-line summary used on the index, OG tags, and RSS.'
pubDate: 2026-05-27
updatedDate: 2026-05-28   # optional
heroImage: '/images/post-hero.jpg'  # optional
draft: false              # set true to hide from index + RSS
---

Your markdown / MDX here. The `<Placeholder>` component is auto-available.
```

Appears at `/blog/<filename>` and in the "From the journal" list on `/` and `/blog`.

### Add a photography day (To See, and to See Again.)

Two photos per day — one by Pranika, one by a stranger. Create a new MDX in `src/content/projects/photography/`:

```mdx
---
title: 'Day 06'
kind: 'photography'
date: 2026-05-30
location: 'At <place>, <city>'
order: 6
images:
  - src: '/images/to-see-and-to-see-again/day-06-foo.jpg'
    alt: '...'
    caption: 'Title text — appears in the lightbox caption as `"title" - author`.'
    credit: 'Pranika'
    ratio: '1400/1867'
  - src: '/images/to-see-and-to-see-again/day-06-bar.jpg'
    alt: '...'
    caption: '...'
    credit: '<Stranger name>'
    ratio: '1400/1867'
---
```

Pranika's photo always goes first (left tile). Credit appears as a corner `©` chip on the thumbnail and inline in the lightbox caption. Pages auto-update.

### Add a sketch (Of hands and hours)

Drop a new MDX in `src/content/projects/sketches/`:

```mdx
---
title: 'Sketch title'
kind: 'sketches'
images:
  - src: '/images/of-hands-and-hours/<slug>.jpg'
    alt: '...'
    ratio: '1400/1867'
---
```

`craft` is also a valid `kind` and is grouped with sketches on the same page.

### Add a new project section

Each project page is a standalone Astro route in `src/pages/projects/`. Use `a-slow-conversation.astro` as a template — copy it, rename, swap the eyebrow / H1 / body / previews. Then add a tile to both `src/pages/index.astro` (the home "From the studio" list) and `src/pages/projects/index.astro` (the projects index).

---

## Theme + design

- **Typeface:** **Soria** (Fontshare) used everywhere — headings, body, and the mono-styled date/credit chips. Loaded via a `<link>` in `BaseLayout.astro`. Soria ships in a single weight (400) with no true italic, so weights and italics are browser-synthesized.
- **Palette:** terracotta accent (`#D2691E`), warm off-white paper, deep navy ink — plus a dusty sage counter-accent and a muted blush. Defined in `tailwind.config.ts`. Intentional dark mode (warm cream on deep navy), not inverted.
- **Dark mode:** respects `prefers-color-scheme` with a manual header toggle that persists to `localStorage`. Pre-paint script in `BaseLayout` avoids the flash.
- **Motion:** `prefers-reduced-motion` is globally honored (`src/styles/global.css`).
- **Layout:** mobile-first; the home hero floats the portrait right on mobile and uses a two-column grid on `sm+`.

To swap the typeface, update the Fontshare `<link>` in `BaseLayout.astro` and the `fontFamily` block in `tailwind.config.ts`.

---

## Project structure

```
src/
├── components/
│   ├── BackdropOrnaments.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Placeholder.astro       ← visible placeholder for missing imagery
│   ├── ThemeToggle.astro
│   └── projects/
│       ├── Lightbox.astro      ← shared image lightbox (click + ←/→ keys)
│       ├── PhotographyGallery.astro
│       └── SketchesGallery.astro
├── content/
│   ├── blog/                   ← .mdx posts
│   └── projects/
│       ├── photography/        ← one .mdx per day (two photos each)
│       └── sketches/           ← one .mdx per sketch
├── content.config.ts           ← typed schemas for both collections
├── layouts/
│   └── BaseLayout.astro        ← head meta, OG, font, theme bootstrap, header/footer
├── pages/
│   ├── 404.astro
│   ├── about.astro
│   ├── index.astro             ← home
│   ├── blog/
│   │   ├── [...slug].astro     ← blog post detail
│   │   └── index.astro
│   ├── projects/
│   │   ├── index.astro                       ← projects index
│   │   ├── a-slow-conversation.astro         ← Generative Art landing
│   │   ├── of-hands-and-hours.astro          ← sketches gallery
│   │   └── to-see-and-to-see-again.astro     ← photography days
│   └── rss.xml.ts
└── styles/
    └── global.css              ← Tailwind v4 entry + reduced-motion + dark variant

public/
├── favicon.svg                 ← placeholder terracotta "p" mark
├── og-default.png              ← 1200×630 default OG / Twitter card image
├── robots.txt
└── images/                     ← processed images served at /images/...
```

`TODO.md` (project root) lists every remaining placeholder.

---

## Deploy to Vercel

The `@astrojs/vercel` adapter is wired in `astro.config.mjs` (output: `static`). To deploy:

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com/new) — Vercel will detect Astro automatically.
3. Defaults work: `pnpm install` / `pnpm build`. No environment variables required.
4. The `site` URL in `astro.config.mjs` is set to `https://pranikajain.com` (controls sitemap + RSS absolute URLs). Update it there if the domain changes.

Every push to `main` redeploys.

---

## What's intentionally out of scope (v1)

Newsletter, comments, analytics, search, i18n, CMS, tag filtering, auto-generated OG images. Parked for v2.
