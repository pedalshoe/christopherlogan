# Christopher M. Logan - Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS rebuild of the portfolio
page, with locale switching (English, Spanish, French).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 - the middleware redirects `/` to a locale-prefixed
route (for example `/en`) based on the `Accept-Language` header.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run start` - serve the production build
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript, no emit

## How localization works

- `src/i18n/config.ts` - supported locales and helpers.
- `src/i18n/dictionaries/*.json` - per-locale UI strings and project copy,
  keyed by project id.
- `src/i18n/dictionaries.ts` - server-side dictionary loader and types.
- `src/middleware.ts` - prefixes requests with a locale segment.
- `src/components/LocaleSwitcher.tsx` - client control that swaps the leading
  locale segment in the URL.

Routes live under `src/app/[locale]`. Locale-independent data (URLs, tags,
contact details) lives in `src/data/portfolio.ts`; all translatable text lives
in the dictionaries.

## Adding a locale

1. Add the code to `locales` in `src/i18n/config.ts` and give it a display name
   in `localeNames`.
2. Add a loader entry in `src/i18n/dictionaries.ts`.
3. Copy `src/i18n/dictionaries/en.json` to the new code and translate it.
