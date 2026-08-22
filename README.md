# GZ Media Agency — Website

Premium marketing website for **GZ Media Agency** — a Digital & AI Solutions Agency.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Stack

- Next.js 14 (App Router, React Server Components)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion (subtle animations)
- Lucide React (icons)
- Inter font (via `next/font`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm start
```

Deploy to Vercel with a single click — the project is fully compatible with `vercel deploy`.

## Environment

Optional:

```
NEXT_PUBLIC_SITE_URL=https://gzmedia.agency
```

## Project structure

```
app/                  # Pages (App Router)
components/
  layout/             # Navbar, Footer, MobileMenu, Logo
  home/               # Home sections
  ui/                 # Button, Badge, SectionTitle, Reveal, GridPattern, Glow
  forms/              # ContactForm
lib/                  # utils, constants, animations
public/               # Static assets (og.png, favicon)
```

## Customization

- **Brand colors**: `tailwind.config.ts` → `theme.extend.colors.accent`
- **Content**: `lib/constants.ts` (site info, nav) and each page file
- **Contact form endpoint**: `components/forms/ContactForm.tsx` — plug your API / Formspree / Resend
- **Logo**: `components/layout/Logo.tsx`

## Performance

- Static generation for all pages
- Optimized fonts via `next/font`
- AVIF/WebP images
- Minimal JS, code-split by route
- No heavy libraries

## License

Private — © 2026 GZ Media Agency.