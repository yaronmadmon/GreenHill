import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-dark"
    >
      {/* Decorative gold line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold opacity-60" aria-hidden="true" />

      {/* Subtle dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-near-black/60 via-transparent to-near-black/40" aria-hidden="true" />

      {/* Large decorative background text */}
      <p
        className="absolute inset-0 flex items-center justify-center text-white/[0.03] font-display font-light select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 22rem)', lineHeight: 1 }}
        aria-hidden="true"
      >
        GHM
      </p>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Gold eyebrow */}
        <div className="hero-animate flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold" />
          <p className="text-gold text-xs tracking-[0.5em] uppercase">
            Green Hill Management
          </p>
          <div className="h-px w-12 bg-gold" />
        </div>

        {/* Headline */}
        <h1
          className="hero-animate-delay font-display text-white font-light leading-none mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          Your Home.
          <br />
          <span className="text-gold">Your Options.</span>
          <br />
          Your Decision.
        </h1>

        {/* Subheadline */}
        <p className="hero-animate-delay-2 text-white/60 text-base md:text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          We help homeowners facing difficult situations understand their choices —
          with honesty, care, and zero pressure.
        </p>

        {/* Single CTA */}
        <div className="hero-animate-delay-2">
          <a
            href="#contact"
            className="inline-block bg-gold text-white text-xs uppercase tracking-[0.3em] px-10 py-4 rounded-xl hover:bg-gold-light transition-colors duration-200"
          >
            Get a Free Consultation
          </a>
        </div>

        {/* Trust line */}
        <p className="hero-animate-delay-2 text-white/30 text-xs tracking-widest uppercase mt-8">
          Confidential &nbsp;·&nbsp; No Obligation &nbsp;·&nbsp; No Fees
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="text-gold/50" size={26} />
      </div>
    </section>
  )
}
