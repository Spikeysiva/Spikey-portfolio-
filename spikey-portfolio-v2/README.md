# SPIKEY® Portfolio V2

A personal portfolio for **SPIKEY**, graphic designer and visual creative. Built with React, TypeScript and Vite, using plain modern CSS and Lucide icons. This is a new standalone project, separate from V1.

## Quick start

```bash
cd spikey-portfolio-v2
npm install
npm run dev        # local dev server
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Node 18 or newer is needed.

## Before you publish ✏️

| What | Where |
| --- | --- |
| **Portrait (hero + About)** | Add `public/images/spikey-hero.webp` (see `public/images/README.md`) |
| **Contact email** | `src/data/site.ts` → `email` |
| **Social links** | `src/data/site.ts` → `socials[].url` |
| **Projects** | `src/data/projects.ts`: all 8 are **placeholders** with generated SVG art |
| Availability badge | `src/data/site.ts` → `availableForProjects` |

Anything you haven't set yet appears as a clearly marked placeholder, never a fake link:
- Social links without a URL show a dashed "link coming soon" pill.
- If no email is set, the contact form still validates, then tells the visitor the email isn't configured yet.
- Once an email is set, the form opens the visitor's email app with the message pre-filled. There's no backend. To use a form service such as Formspree or Netlify Forms instead, change `onSubmit` in `src/components/Contact.tsx`.

## Theme

The whole site uses a dark theme. Colours are CSS variables in `src/styles/global.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#131313` | main background |
| `--surface` | `#1B1B1B` | secondary background (Services / Contact panels) |
| `--card` | `#222222` | cards, form, buttons |
| `--text` / `--text-2` | `#FAF8F8` / `#B8B5B8` | primary / secondary text |
| `--line` | `#383438` | borders |
| `--pink` / `--magenta` | `#FF007F` / `#C31FA6` | main / secondary accent |
| `--yellow` / `--blue` | `#FFE36E` / `#5865F2` | highlight accents |

## Structure

```
src/
  components/   Navbar, Hero, Marquee, ProjectGallery, ProjectCard, ProjectArt,
                ExperimentLab, LabArt,
                Services, SoftwareGrid, SoftwareLogo, About, Process, Contact,
                SocialLinks, Footer, Cursor, Reveal, Doodles   (each with its own .css)
  pages/        HomePage, ProjectPage
  data/         site.ts, projects.ts, services.ts
  hooks/        useHashRoute, useActiveSection, useReducedMotion
  styles/       global.css   (design tokens, buttons, typography, animations)
```

### Hero
A centred hero (`Hero.tsx`) on pure black. SPIKEY's original portrait (`public/images/spikey-hero.webp`) is shown as a floating cutout with no card: its black background blends into the hero. A display-only crop frames head to upper torso, about 400px tall on desktop, and the image file is never modified. Below it are three rows of condensed Anton type, each label a link with the arrow first. The font size is calculated from the viewport width, so each row stays on one line within 1100px. Below 700px the labels wrap naturally.

To swap in a different portrait (e.g. a waving photo), replace the file. If its framing differs, adjust the two crop numbers in `Hero.css` (`1.5177` and `-0.2152`); the comment there explains the maths.

### Experiment Lab
Five tall, original SVG panels (red checkerboard, orange waves, purple brush, cyan botanical, green type) live in `LabArt.tsx`. On desktop, hovering, focusing or clicking a panel expands it. On tablet and mobile they become a smooth-scrolling snap carousel with previous/next buttons.

### Routing
- `#work`, `#about`, … scroll smoothly to sections on the home page.
- `#/work/<slug>` opens a project's detail page.

Hash routing works on any static host (GitHub Pages, Netlify, Vercel, S3) with no rewrite rules. `vite.config.ts` uses `base: './'`, so the build also works from a sub-path.

### Motion & accessibility
- Scroll reveals use IntersectionObserver. Decorations float, and the marquee pauses on hover.
- The custom cursor only runs on devices with a fine pointer. The normal cursor stays visible.
- `prefers-reduced-motion` turns off all animation, smooth scrolling and the custom cursor.
- Semantic landmarks, a skip link, a mobile menu that closes with Escape, labelled form errors with `aria-invalid`, and visible focus rings.

### Fonts
Bricolage Grotesque (display), DM Sans (body) and Caveat (handwritten notes), loaded from Google Fonts in `index.html`.

### Software logos
Adobe apps use their official tile style. CorelDRAW and DaVinci Resolve glyph paths are adapted from [Simple Icons](https://simpleicons.org) (CC0). All trademarks belong to their owners.
