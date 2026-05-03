import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Homeowners Helped' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function About() {
  const headingRef = useIntersectionObserver({ threshold: 0.2 })
  const textRef    = useIntersectionObserver({ threshold: 0.15 })
  const statsRef   = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section id="about" className="bg-warm-gray py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p ref={headingRef} className="fade-in-up text-gold text-xs tracking-[0.4em] uppercase mb-5">
          Who We Are
        </p>

        <h2
          className="fade-in-up delay-100 font-display text-near-black text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          A team rooted in real estate,
          <br />
          <em className="not-italic text-green-dark">built for real people.</em>
        </h2>

        <div ref={textRef} className="fade-in-up delay-200 text-near-black/65 text-lg max-w-3xl mx-auto mb-6 leading-relaxed font-light space-y-6 text-left md:text-center">
          <p>
            For over 20 years, Green Hill Management has been buying, selling, and managing
            properties across the region. But what truly defines us isn't the transactions —
            it's the people behind them.
          </p>
          <p>
            We've met homeowners at some of the most difficult moments in their lives. Moments
            filled with stress, uncertainty, and pressure. When the bank keeps calling. When
            letters start piling up. When it feels like things are slipping out of control.
          </p>
          <p>
            In those moments, what people need most isn't just a solution — it's someone who
            understands, listens, and knows how to navigate the situation.
          </p>
          <p className="text-green-dark font-medium">
            That's where we come in.
          </p>
          <p>
            We specialize in helping homeowners through these challenges — stopping
            foreclosures, working through loan modifications, resolving violations, and finding
            practical paths forward that protect what matters most.
          </p>
          <p>
            We take the time to understand your situation, not just your property. Because
            behind every home, there's a story — and that story matters.
          </p>
          <p className="text-near-black font-medium">
            We don't just know real estate.<br />
            We understand what you're going through.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="fade-in-up delay-300 grid grid-cols-3 gap-8 border-t border-near-black/10 pt-12 mt-10"
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
