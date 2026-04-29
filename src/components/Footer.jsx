const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/40 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div>
          <p
            className="font-display text-white text-xl tracking-wider mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Green Hill Management
          </p>
          <p className="text-xs leading-relaxed max-w-xs">
            Helping homeowners navigate difficult property decisions with clarity,
            compassion, and integrity.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-5">Navigation</p>
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs text-white/40 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-5">Contact</p>
          <div className="flex flex-col gap-3">
            <a href="tel:+10000000000" className="text-xs hover:text-gold transition-colors">
              (XXX) XXX-XXXX
            </a>
            <a
              href="mailto:info@greenhillmgmt.com"
              className="text-xs hover:text-gold transition-colors"
            >
              info@greenhillmgmt.com
            </a>
            <p className="text-xs">New York · New Jersey · Connecticut</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Green Hill Management. All rights reserved.
        </p>
        <p className="text-xs">All consultations are confidential and free of charge.</p>
      </div>
    </footer>
  )
}
