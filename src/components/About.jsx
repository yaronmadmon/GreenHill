import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const stats = [
  { value: '500+', label: 'Homeowners Helped' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function About() {
  const headingRef = useIntersectionObserver({ threshold: 0.2 })
  const textRef    = useIntersectionObserver({ threshold: 0.2 })
  const statsRef   = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section id="about" className="bg-warm-gray py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          ref={headingRef}
          className="fade-in-up text-gold text-xs tracking-[0.4em] uppercase mb-5"
        >
          Who We Are
        </p>

        <h2
          ref={textRef}
          className="fade-in-up delay-100 font-display text-near-black text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          A trusted partner for homeowners
          <br />
          <em className="not-italic text-green-dark">facing difficult decisions</em>
        </h2>

        <p className="fade-in-up delay-200 text-near-black/60 text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          Green Hill Management was founded on a simple belief: every homeowner deserves
          honest guidance. Whether you're behind on payments, navigating a divorce, facing
          foreclosure, or simply ready to move on—we listen first, then help you find the
          path that works for <em>you</em>.
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="fade-in-up delay-300 grid grid-cols-3 gap-8 border-t border-near-black/10 pt-12"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p
                className="font-display text-4xl md:text-5xl text-green-dark font-light mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {value}
              </p>
              <p className="text-xs uppercase tracking-widest text-near-black/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
