# 369 Home Inspections

Marketing site for 369 Home Inspections — a veteran-owned home inspection business.

**🌐 Live site: <https://jc1198.github.io/369inspections/>**

Built with [Astro](https://astro.build) as a static site. No UI framework; design tokens drive a small set of reusable components.

## Pages

- **Home** — hero, trust bar, services, inspector challenge, FAQ
- **Services** — full list of inspection offerings
- **Home Systems** — overview grid linking to 9 system detail pages: Attic, Electrical, Exterior, Foundation, HVAC, Interior, Plumbing, Roof, Sewer. Each lists what we check, common defects, illustrations, and the relevant building-code requirements.

## Project structure

```text
src/
├── components/        # Nav, Footer, Button, ServiceCard, ArrowLink
│   ├── home/          # home-page sections (Hero, TrustBar, Services, …)
│   └── system/        # shared detail-page parts (SystemHeader, Checklist, MediaGrid, RegulationsList)
├── data/              # per-system building-code regulations
├── fonts/             # self-hosted Inter (400, 500)
├── layouts/           # base page shell
├── lib/               # withBase() URL helper for the GitHub Pages base path
├── pages/             # routes (home, services, home-systems + detail pages)
└── styles/            # design tokens + global styles
```

## Develop

```sh
npm install
npm run dev        # http://localhost:4321/369inspections
npm run build      # output to ./dist
npm run preview    # preview the production build
```

## Deploy

Pushing to `main` triggers [the GitHub Actions workflow](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages automatically.

The site is served from a subpath (`/369inspections`), set via `base` in [`astro.config.mjs`](astro.config.mjs). Internal links go through `withBase()` so they resolve correctly under that path.
