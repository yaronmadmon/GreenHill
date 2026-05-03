import { Home, RefreshCw, FileText, HeartHandshake } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const services = [
  {
    icon: Home,
    title: 'Cash Home Purchases',
    description:
      'We buy homes directly—any condition, any timeline. Skip the listings, showings, and uncertainty of the open market.',
  },
  {
    icon: RefreshCw,
    title: 'Loan Modifications',
    description:
      'Struggling with your mortgage? We connect you with resources to restructure your loan and keep you in your home.',
  },
  {
    icon: FileText,
    title: 'Foreclosure Prevention',
    description:
      'Time is critical. We work fast to explore every legal option available before a foreclosure becomes final.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Consulting',
    description:
      'No two situations are identical. We sit down with you, understand your goals, and build a plan that fits your life.',
  },
]

const delays = ['', 'delay-100', 'delay-200', 'delay-300']

function ServiceCard({ icon: Icon, title, description, delay }) {
  const ref = useIntersectionObserver({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`fade-in-up ${delay} group border border-near-black/10 p-8 rounded-2xl hover:border-gold hover:bg-warm-gray transition-all duration-300`}
    >
      <div className="w-12 h-12 flex items-center justify-center border border-gold/40 rounded-xl mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
        <Icon size={20} className="text-gold group-hover:text-white transition-colors duration-300" />
      </div>
      <h3
        className="font-display text-near-black text-2xl font-light mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h3>
      <p className="text-near-black/55 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function Services() {
  const headingRef = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="services" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="fade-in-up text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-5">What We Offer</p>
          <h2
            className="font-display text-near-black text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Solutions tailored to your situation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} {...svc} delay={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
