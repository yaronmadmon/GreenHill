import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-green-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        <a
          href="#hero"
          className="font-display text-white text-xl tracking-wider"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Green Hill Management
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs uppercase tracking-widest text-white/80 hover:text-gold transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block border border-white text-white text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl hover:bg-white hover:text-green-dark transition-all duration-200"
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-green-dark border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 border border-white text-white text-xs uppercase tracking-widest px-5 py-3 rounded-xl text-center hover:bg-white hover:text-green-dark transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
