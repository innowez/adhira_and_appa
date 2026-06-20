# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint (Next.js config)
```

There are no tests.

## Architecture

This is a single-page marketing/landing site for **Adhira & Appa Coffee**, an Indian coffee franchise brand.

**Entry point:** `src/app/page.tsx` renders `<CoffeeBrandLanding />` — everything is one React tree.

**`CoffeeBrandLanding`** (`src/components/magicpath/landing-page/CoffeeBrandLanding.tsx`) is the root client component. It:
- Initialises **Lenis** for smooth scrolling and hooks it into GSAP's ticker so that `ScrollTrigger` and Lenis share a single animation frame loop. All per-section GSAP animations depend on this setup existing at the root.
- Renders 11 sections in sequence, plus a fixed `<NavDots />` overlay.

**Sections** live in `src/components/magicpath/landing-page/sections/`. Each section carries its own GSAP/ScrollTrigger setup using the `useGSAP` hook scoped to a `ref` on the section root.

**NavDots** (`sections/NavDots.tsx`) maps scroll position to a drum-wheel dot indicator. It requires every section to have an `id` attribute matching the `SECTIONS` array defined inside that file (welcome, our_story, story_behind_every_cup, story_beans, the_blend, the_vibe, testimonials, press_and_media, our_stores, franchise_bridge_CTA, footer). Adding a new section means adding it to that array.

**`src/components/archive/`** holds older/experimental versions of components. Do not use these; treat them as reference only.

**`src/components/common/`** holds shared UI (e.g. `LoadingScreen`).

**`src/lib/utils.ts`** exports `cn()` (clsx + tailwind-merge) and `ensureLightMode()`. Dark mode is intentionally disabled site-wide.

## Animation conventions

- Always `gsap.registerPlugin(ScrollTrigger, useGSAP)` at the top of any file that uses them.
- Use `useGSAP(() => { ... }, { scope: sectionRef })` — the scope option limits selector queries to the component's subtree.
- Pass `revertOnUpdate: true` when the animation has dependencies that change (e.g. `isMobile`).
- GSAP-driven hover effects (e.g. the `.discover-btn` in GallerySection) query the DOM directly with `.querySelector` inside mouse event handlers — keep the CSS class names stable.
- `data-from-x`, `data-from-y`, `data-from-rot` are data attributes used by GallerySection to drive per-image entrance animations from `gsap.utils.toArray(".food-item")`.

## Styling

- **Tailwind v4**: uses `@import "tailwindcss"` (not v3 `@tailwind` directives).
- Theme tokens are declared in `src/app/globals.css` via `@theme inline`:
  - `bg-brand-orange` → `#ff5100`
  - `bg-brand-navy` → `#1e2339`
  - `font-recoleta`, `font-outfit` (both loaded via `@font-face` from `/fonts/`)
- Use `cn()` from `@/lib/utils` for conditional class merging.
- The site is always light mode; never add `dark:` variants.

## Assets

- Local images are referenced relative to the `public/` folder: `../logo.png`, `../menu/0meal.png`, etc. These files must exist under `public/`.
- Decorative SVGs and some images are served from `storage.googleapis.com/storage.magicpath.ai/…`.
