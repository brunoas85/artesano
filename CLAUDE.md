# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

ArteSano is a single-page marketing site for a gluten-free artisanal bakery, written in Spanish. It's a React + TypeScript + Vite app styled with Tailwind CSS — no backend, no state management library, no data fetching. All content (products, copy, links) is hardcoded directly in the components.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # type-check (tsc -b) then production build to dist/
npm run lint      # run ESLint over the whole project
npm run preview   # serve the production build locally
```

There is no test suite configured.

Both `package-lock.json` and `pnpm-lock.yaml` are present in the repo — check which one is up to date before adding dependencies, and install with the corresponding package manager (`npm install` / `pnpm install`) to avoid the lockfiles diverging further.

## Architecture

- **Routing**: `src/App.tsx` defines two routes with `react-router-dom`'s `BrowserRouter`: `/` renders `Landing` (a full-bleed hero splash screen with an "Ingresar" button), and `/home` renders `Home` (the actual site content). `Home` is a straight-line composition of section components in display order: `Header`, `Hero`, `Products`, `BestSellers`, `Encargos`, `AboutUs`, `Contact`, `Footer`.
- **Component pattern**: Every section in `src/components/` is a self-contained, default-exported function component with no props — data (product lists, links, etc.) is defined as local constants at the top of the file, not passed in or fetched. `Header`'s nav links use in-page anchors (`#productos`, `#mas-vendidos`, etc.) that correspond to `id` attributes on each section, so adding/reordering/renaming a section requires keeping the anchor `id` and the `Header` link list in sync.
- **Styling**: Tailwind CSS utility classes only (no CSS modules, no styled-components). The brand palette is defined in `tailwind.config.js` under the `artesano` color namespace (`artesano-white`, `artesano-celeste`, `artesano-azul`, `artesano-naranja`) — use these tokens rather than raw hex/Tailwind default colors when styling new UI. Global styles live in `src/index.css` (Tailwind directives + smooth scroll).
- **Assets**: Images referenced by components (product photos, logo, icons) live in `public/` and are referenced by absolute path (e.g. `/baguette.png`), not imported through the bundler.
- **TypeScript config**: `tsconfig.json` is a references-only root pointing at `tsconfig.app.json` (the `src/` app code) and `tsconfig.node.json` (Vite config). Edit the relevant sub-config rather than the root when changing compiler options.
