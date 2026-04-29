import { ChevronDown } from 'lucide-react'
import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-near-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="hero-animate text-gold text-xs tracking-[0.4em] uppercase mb-6">
          Real Estate Solutions
        </p>

        <h1
          className="hero-animate-delay font-display text-white text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Helping You Navigate
          <br />
          <em className="not-italic text-white/90">Your Property</em> with Confidence
        </h1>

        <p className="hero-animate-delay-2 text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We work with homeowners to explore real solutions—whether you're selling,
          refinancing, or just need guidance.
        </p>

        <div className="hero-animate-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gold text-white text-xs uppercase tracking-widest px-8 py-4 hover:bg-gold-light transition-all duration-200"
          >
            Get a Free Consultation
          </a>
          <a
            href="#contact"
            className="border border-white text-white text-xs uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-near-black transition-all duration-200"
          >
            Speak with Ronnie
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="text-white/50" size={28} />
      </div>
    </section>
  )
}
