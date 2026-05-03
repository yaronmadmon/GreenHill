import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Situation',
    description:
      'Reach out by phone, email, or the form below. No obligation, no pressure—just an honest conversation about where you are.',
  },
  {
    number: '02',
    title: 'We Build a Plan Together',
    description:
      'We review your property, timeline, and goals. Within 24 hours we present you with clear, realistic options.',
  },
  {
    number: '03',
    title: 'Move Forward on Your Terms',
    description:
      'You choose the path. We handle the paperwork, coordination, and follow-through—so you can focus on what\'s next.',
  },
]

function Step({ number, title, description, delay }) {
  const ref = useIntersectionObserver({ threshold: 0.15 })
  return (
    <div ref={ref} className={`fade-in-up ${delay} text-center px-4`}>
      <p
        className="font-display text-6xl text-white/10 font-light mb-6 leading-none"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {number}
      </p>
      <h3
        className="font-display text-white text-2xl font-light mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h3>
      <p className="text-white/55 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  )
}

export default function HowItWorks() {
  const headingRef = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="how-it-works" className="bg-green-dark py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="fade-in-up text-center mb-20">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">The Process</p>
          <h2
            className="font-display text-white text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Simple, transparent, and built around you
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-white/10"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Step
              key={step.number}
              {...step}
              delay={['', 'delay-200', 'delay-400'][i]}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-gold text-white text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-gold-light transition-colors duration-200"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
