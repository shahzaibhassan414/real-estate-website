<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: Chaudhary Estate Landing Page

Full spec lives in [README.md](README.md) — read it before implementing. Summary: a one-page marketing site for a Lahore property dealership, recreated from a design-tool prototype (`Chaudhary Estate.dc.html`, not included in this repo checkout) into this app's actual stack.

### Stack
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 — all currently at the `create-next-app` default scaffold in `app/`.
- No component library or state management is installed; keep it plain React state (this is a single static page, no routing needed beyond `#anchor` links).

### Implementation notes
- Replace the default `app/page.tsx` boilerplate and `app/globals.css` theme tokens entirely — nothing from the scaffold (Geist fonts, Vercel/Next demo content) is part of the design.
- Swap `Geist`/`Geist_Mono` in `app/layout.tsx` for `Newsreader` (serif, headings) and `Manrope` (sans, body) via `next/font/google`, matching the weights listed in README's Typography section.
- Define the design tokens (colors, spacing, radius) from README's "Design Tokens" section as Tailwind `@theme` CSS variables in `globals.css`, not hardcoded hex values scattered through components — default to the `brick` theme.
- Split the page into one component per section (Nav, Hero, StatsBar, Listings, Categories, About, Contact, WhatsAppButton) rather than one large `page.tsx`.
- Scroll-reveal and the contact form need client components (`"use client"`) — IntersectionObserver and controlled inputs don't work in server components.
- Build `wa.me` / `tel:` links from the single `whatsappNumber` config value (default `923004471303`) — don't repeat the raw number across components.
- No real photography exists yet — use placeholder `<img>`/`next/image` slots with the aspect ratios README specifies (hero/about 4:5, listings 16:10, categories 4:3), sized so swapping in real assets later doesn't require layout changes.
- Add a mobile stacked (single-column) breakpoint for hero/about/contact/stats/listings/categories — the original prototype didn't build one (see README's Interactions & Behavior note).
