# Handoff: Chaudhary Estate Landing Page

## Overview
A one-page marketing site for Chaudhary Estate, a property dealership in Lahore, Pakistan. Sections: nav, hero, trust stats bar, featured listings grid, category tiles (Plots/Homes/Commercial), about/why-us, contact form, and a sticky WhatsApp button.

## About the Design Files
The bundled file (`Chaudhary Estate.dc.html`) is a **design reference built in HTML/React** — a working prototype showing intended look, copy, and behavior. It is not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, plain HTML/CSS, etc.), using its established component patterns, routing, and build tooling. If no environment/framework exists yet, React is a reasonable default given how this prototype is structured (component + state, no build-specific dependencies).

Note: the file uses a custom templating runtime (`support.js`, `<x-dc>`, `{{ }}` holes, `<sc-for>`/`<sc-if>`) specific to this design tool — none of that markup should be carried into the target codebase. Treat it purely as a spec of structure, styling, and behavior.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final (pending real photography). Recreate pixel-close using the codebase's existing component/styling conventions.

## Screens / Views
Single page, six stacked sections plus a fixed nav and fixed WhatsApp button.

### 1. Nav (sticky)
- Sticky top, `z-index: 40`, blurred translucent background (`backdrop-filter: blur(8px)`), bottom hairline border.
- Left: wordmark "Chaudhary Estate" (serif, 22px, weight 600) + "LAHORE" label (11px, letterspaced, uppercase, muted).
- Right: text links "Listings" (#listings), "Categories" (#categories, hidden on mobile), "About" (#about); primary WhatsApp button (icon + "WhatsApp Us", solid brand-primary fill, white text, 9px/16px padding, 3px radius).

### 2. Hero
- Two-column grid (1.1fr / 0.9fr), gap ~48px, vertically centered, generous top padding (responsive clamp).
- Left: eyebrow label "Trusted Property Dealers · Lahore" (uppercase, letterspaced, bold, brand-primary-dark); H1 "Find your next address in the heart of Lahore." (serif, weight 600, clamp(38px,5.2vw,62px), line-height 1.08); paragraph (17px, muted-strong, max 46 characters wide); two CTAs side by side: "View Listings →" (solid primary button) and "Chat on WhatsApp" (outlined button with WhatsApp icon, border in ink color).
- Right: photo slot, 4:5 aspect ratio, rounded 4px, drop shadow. A floating badge card sits bottom-left over the photo: "{years}+ Years" (serif, 20px) / "Serving Lahore families" (11px, muted) — this badge has a gentle continuous float animation (translateY ±4px, 4s ease-in-out loop).

### 3. Trust stats bar
- Full-width row, 3 equal columns, divided by vertical hairlines, bounded top/bottom by hairlines.
- Each column: big serif number (clamp(32px,4vw,46px), brand-primary-dark) over an uppercase label (13px, letterspaced, muted): "Years Active", "Properties Listed", "Deals Closed". Values are tweakable (default 15 / 500 / 300), rendered with a trailing "+".

### 4. Featured listings (id="listings")
- Eyebrow "Featured Properties" + H2 "Handpicked listings, ready to view".
- 2-column grid of property cards, 28px gap. Card: photo (16:10) with a "For Sale" pill badge top-left (primary bg, white text); below the photo, price in serif/brand-primary-dark (22px), title (16px bold), location (13px muted), then a beds/baths/size row separated by "·"; footer is two equal buttons: outlined "Call" (tel: link) and solid primary "WhatsApp" (wa.me link prefilled with a message naming the property).
- Card hover: lifts (translateY(-8px)) with an added drop shadow, 0.35s ease.
- 4 listings in this build:
  1. 13 Marla House, Mozang Chungi, Lahore — PKR 2.98 Crore — 5 Bed / 4 Bath / 13 Marla
  2. Triple Storey House, Temple Road, Lahore — PKR 75 Lakh — 5 Bed / 5 Bath / 4 Marla
  3. House, Bagh Gul Begum, Fateh Sher Road, Lahore — PKR 1.40 Crore — 4 Bed / 3 Bath / 7 Marla
  4. Modern 6 Marla House, Lahore — PKR 1.55 Crore — 4 Bed / 3 Bath / 6 Marla

### 5. Categories (id="categories")
- Eyebrow "Browse by Category" + H2 "What are you looking for?".
- 3-column grid of image tiles (4:3), each a full-bleed photo with a bottom-to-top dark gradient overlay and bottom-left text: title (serif, 24px) + subtitle (13px, 85% opacity). Tiles: **Plots** ("Residential & investment land"), **Homes** ("Houses & independent units"), **Commercial** ("Shops, offices & plazas"). All link to #listings. Hover: lift translateY(-6px).

### 6. About (id="about")
- Two-column grid (0.9fr photo / 1.1fr text), vertically centered.
- Left: portrait photo slot, 4:5 ratio, rounded 5px.
- Right: eyebrow "Why Chaudhary Estate" + H2 "Local expertise, honest dealing." + paragraph referencing years active and Lahore neighborhoods (Mozang, Temple Road, Bahria Town, DHA). Below: 2x2 grid of feature blurbs, each bold 15px title + 14px muted description: Verified Listings, Transparent Dealing, End-to-End Support, Local Network.

### 7. Contact / footer (id="contact")
- Dark section: background = ink color, text = bg (cream) color.
- Two-column grid (0.9fr / 1.1fr).
- Left: eyebrow "Get in touch" (gold accent) + H2 "Let's find your property." + stacked contact details: Office address, Phone (tel: link), WhatsApp (wa.me link) — each with a small uppercase label above.
- Right: a form (Name, Phone, "What are you looking for?" textarea) with a gold submit button "Send via WhatsApp". On submit, it opens wa.me with a prefilled message built from the field values, then swaps the form for a confirmation message ("Message ready.") in place.
- Below both columns: centered copyright line with top hairline, "© {year} Chaudhary Estate, Lahore. All rights reserved."

### Sticky WhatsApp button
- Fixed bottom-right, 58px circle, WhatsApp green (#25D366), white WhatsApp glyph icon, drop shadow. Scales up slightly (1.08x) on hover. Always visible, `z-index: 50`.

## Interactions & Behavior
- **Scroll-reveal**: each of the 6 major sections (hero, stats, listings, categories, about, contact) fades/slides in (opacity 0→1, translateY(28px)→0, 0.8s ease) the first time it enters the viewport, via IntersectionObserver (threshold 0, rootMargin `0px 0px -15% 0px` — triggers once the section is ~15% into the viewport from the bottom). Hero is revealed immediately on mount (no scroll needed). Each section unobserves after its first reveal (one-shot, not re-triggered on scroll up/down).
- **Card hover-lift**: listing cards and category tiles lift on hover (see above).
- **Button hover states**: all buttons darken/tint on hover per their color (see Design Tokens).
- **Contact form**: controlled inputs (name, phone, message) in local state; on submit, prevents default, builds a WhatsApp deep link (`https://wa.me/<number>?text=<encoded message>`) with the name/phone/message interpolated, opens it in a new tab, then shows a "Message ready" confirmation in place of the form (no page navigation).
- **WhatsApp links throughout** (nav button, hero CTA, sticky button, contact section, per-listing WhatsApp button) all deep-link to `https://wa.me/923004471303` with a context-specific prefilled message (e.g. naming the specific property for listing cards).
- **Call links** use `tel:+923004471303`.
- No responsive breakpoints were built beyond fluid `clamp()` sizing — recommend adding a mobile stacked layout (single column) for hero, about, contact, stats, and listings/categories grids below ~768px, since the current 2/3-column grids don't collapse.

## State Management
- `revealed`: object map of section-id → boolean, set by the IntersectionObserver as sections enter view.
- `formName`, `formPhone`, `formMessage`: controlled form field state.
- `formSubmitted`: boolean, toggled true on form submit to swap in the confirmation view.
- Configurable inputs (would be props/config in production): `whatsappNumber` (default `923004471303`), `accentTheme` (`brick` | `olive` | `charcoal` — swaps primary/primaryDark/gold), `yearsActive` (15), `listingsCount` (500), `dealsCount` (300).

## Design Tokens

### Colors (theme = "brick", the default)
- `--bg`: `#f6efe6` (warm cream page background)
- `--surface`: `#efe1cf` (card background, slightly deeper cream)
- `--ink`: `#211815` (near-black text / dark section background)
- `--muted`: `#211815` at 55% opacity
- `--muted-strong`: `#211815` at 72% opacity
- `--divider`: `#211815` at 14% opacity (hairlines)
- `--primary`: `#9c3f2e` (terracotta/brick — buttons, price highlights, "For Sale" badge)
- `--primary-dark`: `#7c3324` (hover state, big numbers, eyebrow labels)
- `--gold`: `#c99a4a` (accent on dark contact section — eyebrow, submit button)
- WhatsApp green: `#25D366` (sticky button only, fixed brand color — not part of the theme)

Alternate theme swaps (same roles): `olive` → primary `#5c6b3f` / dark `#454f30` / gold `#af8a3d`. `charcoal` → primary `#4a4038` / dark `#332c27` / gold `#b98d4a`.

### Typography
- Headings: **Newsreader** (serif), weight 600. Sizes: H1 `clamp(38px,5.2vw,62px)`, H2 `clamp(28px,3.4vw,38px)` (contact H2 slightly smaller: `clamp(26px,3.2vw,34px)`), stat numbers `clamp(32px,4vw,46px)`, card price 22px, hero badge 20px.
- Body: **Manrope** (sans), weights 400–800. Body copy 16–17px, line-height 1.6–1.7. Small labels/eyebrows 11–13px, uppercase, letter-spacing 0.06–0.12em, weight 700.
- Loaded via Google Fonts: `Newsreader:ital,opsz,wght@0,6..72,400;500;600;1,6..72,500` and `Manrope:wght@400;500;600;700;800`.

### Spacing / radius
- Section horizontal padding: `clamp(20px, 5vw, 64px)`, max content width 1280px, centered.
- Card/button radius: 2–5px (badges 2px, buttons 3px, cards/photos 4–5px, sticky WhatsApp button: full circle).
- Grid gaps: 24–28px between cards/tiles; 32–64px between major two-column layout halves (responsive clamp).

### Shadows
- Hero photo: `0 24px 60px -20px` at 45% ink opacity.
- Hero floating badge: `0 10px 24px -8px` at 40% ink opacity.
- Card hover: `0 20px 40px -16px` at 35% ink opacity.
- Sticky WhatsApp button: `0 10px 30px -6px rgba(0,0,0,0.4)`.

### Motion
- Scroll-reveal: `opacity`/`transform` 0.8s ease (see Interactions).
- Hero badge float: continuous `translateY(0 → -4px → 0)`, 4s ease-in-out infinite.
- Card/tile hover lift: `transform` 0.3–0.35s ease.
- Button/link hover color changes: instant (no explicit transition set — recommend adding ~0.15s ease in production).

## Assets
- All photos are placeholders (drag-and-drop image slots in the prototype tool) — hero photo, 4 listing photos, 3 category tiles (plots/homes/commercial), 1 about/team photo. None are final; source real photography before shipping.
- WhatsApp icon: inline SVG (bundled in the HTML file), reused at 3 sizes (14px nav, 16px hero CTA, 28px sticky button).
- No other icon set used.

## Files
- `Chaudhary Estate.dc.html` — the full design reference (structure, inline styles, and behavior/state logic combined).
- `image-slot.js` — a placeholder image-slot helper referenced by the design file; not needed in the target codebase (replace with your own `<img>`/asset pipeline).

## Contact details used in this design
- Office: H839+252, Mozang Chungi, Lahore, 54000, Pakistan
- Phone / WhatsApp: +92 300 4471303
