# camc8.com

Personal site for Cameron Hernando Clark — Miami, FL. Software engineer,
director of marketing for assisted living, and property manager.

**Live:** [camc8.com](https://camc8.com)

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with Turbopack
- TypeScript + React 18
- Tailwind CSS v3
- Fonts: Cormorant Garamond, DM Sans, Inter, Geist Mono
- Deployed on Vercel

## Pages

- `/` — Home. Roles, projects, and contact.
- `/dos` — DOS Healthcare e-business card. A self-contained, mobile-first
  contact card with tap-to-call/text, save-to-contacts (vCard), and email.

## Open Graph / link previews

Social share images are generated at build time with `next/og`
(`ImageResponse`) and wired in automatically via Next.js file conventions:

- `app/opengraph-image.tsx` + `app/twitter-image.tsx` — site-wide default
  (1200×630), monochrome to match the home page.
- `app/dos/opengraph-image.tsx` + `app/dos/twitter-image.tsx` — a dedicated
  card-style preview for `/dos`, mirroring the e-business card's warm palette
  so the link itself looks like a business card when shared.

Fonts for the images live in `app/fonts/`. The DM Sans weights are static
instances (`dm-sans-400.ttf`, `dm-sans-500.ttf`) because Satori, which powers
`next/og`, does not reliably parse variable fonts.

Favicon and Apple touch icon are likewise generated from `app/icon.tsx` and
`app/apple-icon.tsx`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

To preview the generated OG images locally, build and start, then open:

- `http://localhost:3000/opengraph-image`
- `http://localhost:3000/dos/opengraph-image`
