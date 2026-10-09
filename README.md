# hermes-helmet-landing

Landing page for [hermeshelmet.com](https://hermeshelmet.com): an open-source layer that gives Hermes Agent a planner, parallel workers and a verifier, while using fewer tokens.

Built with [Astro](https://astro.build). Static output, no client framework, a few small TypeScript modules for the interactive demos.

## Getting started

Requires Node 22.12 or newer (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve the production build
npm run check      # type-check .astro and .ts files
npm run format     # prettier
```

## Project structure

```
src/
  assets/        Optimized images (clay hero, hands, helmet, closing scene) and provider logo SVGs
  components/    One component per page section, plus Tile, RollButton, CopyButton
  data/          Copy and links (site.ts), provider logos, icon glyphs
  layouts/       Base.astro: <head>, fonts, global styles
  pages/         index.astro composes the sections
  scripts/       Vanilla TS: console demo, install stepper, copy button, anchor scrolling
  styles/        tokens.css (design tokens), base.css, components.css, motion.css
public/          Favicon and robots.txt
```

## Design system

- **Palette:** neutral grays on white (see `tokens.css`). No accent color.
- **Shape:** pill buttons (9999px), 24px panels, 16px cards, no shadows.
- **Type:** Hanken Grotesk Variable, self-hosted via `@fontsource-variable`. Sentence case, no letter-spacing.
- **Motion:** transform and opacity only. Scroll-driven effects use CSS `animation-timeline: view()` and are wrapped in `prefers-reduced-motion: no-preference`, so the page is fully static for people who ask for less motion.

## Editing content

- Copy that repeats (FAQ, stats, links, install command) lives in `src/data/site.ts`.
- The console demo script is `src/scripts/console.ts`; the install walkthrough is `src/scripts/stepper.ts`.
- To add a provider logo, drop the SVG in `src/assets/logos/` and add it to `src/data/providers.ts`.

## Before launch

- [ ] Replace the placeholder GitHub, contributing and license URLs in `src/data/site.ts`.
- [ ] Replace `[LICENSE AND REPO LINK]` in the FAQ answer (same file).
- [ ] Confirm or remove the "~83%" cache statistic (`stats` in `src/data/site.ts`; the count-up target is `--num` in `tokens.css` and `hh-count` in `motion.css`).
- [ ] Add a `LICENSE` file.
- [ ] Add an Open Graph image and reference it in `src/layouts/Base.astro`.

## Deploy

Any static host works. On Vercel, import the repo: the Astro preset is detected automatically (build `npm run build`, output `dist`). Then add `hermeshelmet.com` under Project Settings, Domains.

## Credits

Provider marks come from [`@lobehub/icons-static-svg`](https://github.com/lobehub/lobe-icons) and belong to their respective owners. They are shown only to indicate compatibility.

The Hermes Agent wing (`src/assets/hermes-agent-wing.svg`) is from [Nous Research](https://hermes-agent.nousresearch.com/) and belongs to them. It identifies the agent Helmet builds on.
