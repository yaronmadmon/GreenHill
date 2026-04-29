# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build
npm run preview   # Preview production build at localhost:4173
npm run lint      # ESLint
```

## Tech Stack

- **Vite 8** + **React 19** (ES modules, `createRoot` API)
- **Tailwind CSS v4** — configured via `@theme {}` block in `src/index.css` (no `tailwind.config.js`)
- **`@tailwindcss/vite`** — Vite plugin (not PostCSS), registered in `vite.config.js`
- **`lucide-react`** — icon library (import named icons only, never the full package)
- **Google Fonts** — Inter (body) + Cormorant Garamond (display/headings), loaded in `index.html`

## Architecture

Single-page marketing site with no router. `App.jsx` composes 8 section components in order:

```
Navbar → Hero → About → Services → HowItWorks → Testimonials → Contact → Footer
```

**Component structure:**
```
src/
  components/
    Navbar.jsx          # Sticky nav: transparent → dark green on scroll
    Hero.jsx            # Full-viewport, hero.png background + overlay
    About.jsx           # bg-warm-gray, centered text + 3 stats
    Services.jsx        # bg-white, 4-card grid with hover effects
    HowItWorks.jsx      # bg-green-dark, 3-step process
    Testimonials.jsx    # bg-warm-gray, 3 testimonial cards
    Contact.jsx         # bg-near-black, lead form + direct contact
    Footer.jsx          # bg-[#0A0A0A], 3-column layout
  hooks/
    useIntersectionObserver.js   # Scroll-triggered fade-in (no animation lib)
  index.css             # Design system: @theme tokens, .fade-in-up, base resets
  App.jsx               # Root composition only
```

## Design System

Custom color tokens (defined in `src/index.css` `@theme {}`, usable as Tailwind classes):

| Token | Hex | Tailwind class |
|-------|-----|----------------|
| near-black | `#0F0F0F` | `bg-near-black`, `text-near-black` |
| warm-gray | `#F7F6F3` | `bg-warm-gray` |
| gold | `#B59A5A` | `bg-gold`, `text-gold`, `border-gold` |
| gold-light | `#D4B87A` | `hover:bg-gold-light` |
| green-dark | `#1E3A2F` | `bg-green-dark`, `text-green-dark` |

Fonts: `font-display` (Cormorant Garamond, headings) and `font-body` (Inter, body text).

## Animations

All scroll-triggered animations use `useIntersectionObserver` hook — no Framer Motion or GSAP. The hook adds a `visible` class when an element enters the viewport. Apply `className="fade-in-up"` to the element and attach the ref:

```jsx
const ref = useIntersectionObserver({ threshold: 0.15 })
return <div ref={ref} className="fade-in-up">...</div>
```

Stagger delays use `.delay-100`, `.delay-200`, `.delay-300` classes (defined in `index.css`).

Hero content uses a CSS `heroReveal` keyframe (auto-plays on load, no observer needed).

## Placeholders to Replace Before Launch

- Phone number: `(XXX) XXX-XXXX` in `Contact.jsx` and `Footer.jsx`
- Email: `info@greenhillmgmt.com` in `Footer.jsx`
- Contact form submission: currently shows a success state locally — wire up EmailJS, Formspree, or a serverless function (marked with `// TODO` in `Contact.jsx`)
