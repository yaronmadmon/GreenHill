import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const testimonials = [
  {
    quote:
      'We were two months behind on our mortgage and terrified of losing our home. Green Hill walked us through every option without any pressure. We ended up selling at a fair price and walked away with peace of mind.',
    name: 'Marcus & Linda T.',
    location: 'New Jersey',
  },
  {
    quote:
      "Ronnie was upfront from day one. No hidden fees, no runaround. He made a complicated situation feel manageable. I wish I'd called sooner.",
    name: 'Diane F.',
    location: 'New York',
  },
  {
    quote:
      "After my divorce I didn't know what to do with the house. Green Hill laid out my options clearly and handled everything. Closed in 18 days.",
    name: 'James R.',
    location: 'Connecticut',
  },
]

function TestimonialCard({ quote, name, location, delay }) {
  const ref = useIntersectionObserver({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`fade-in-up ${delay} bg-white p-10 flex flex-col justify-between`}
    >
      <div>
        <p
          className="font-display text-gold text-5xl leading-none mb-6 select-none"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-hidden="true"
        >
          "
        </p>
        <p className="text-near-black/70 text-sm leading-relaxed mb-8 italic">{quote}</p>
      </div>
      <div className="border-t border-near-black/10 pt-6">
        <p className="text-near-black font-medium text-sm">{name}</p>
        <p className="text-near-black/40 text-xs tracking-widest uppercase mt-1">{location}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headingRef = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="testimonials" className="bg-warm-gray py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="fade-in-up text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">Client Stories</p>
          <h2
            className="font-display text-near-black text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Real results for real homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              delay={['', 'delay-200', 'delay-400'][i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
