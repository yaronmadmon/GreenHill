import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const initialForm = { name: '', email: '', phone: '', message: '', consent: false }

export default function Contact() {
  const [form, setForm]           = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const headingRef = useIntersectionObserver({ threshold: 0.2 })
  const formRef    = useIntersectionObserver({ threshold: 0.1 })
  const infoRef    = useIntersectionObserver({ threshold: 0.1 })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Send failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try calling or emailing us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full bg-white/10 border border-white/15 rounded-xl text-white text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-white/30'

  return (
    <section id="contact" className="bg-green-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headingRef} className="fade-in-up text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">Get in Touch</p>
          <h2
            className="font-display text-white text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            We're here to listen
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Whatever you're going through, we'd love to hear from you. No pressure, no judgment — just a real conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form card */}
          <div ref={formRef} className="fade-in-up lg:col-span-3 bg-white/5 rounded-2xl p-8 border border-white/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="text-gold mb-6" size={48} />
                <h3
                  className="font-display text-white text-3xl font-light mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Message received
                </h3>
                <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="jane@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="(555) 000-0000" />
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Tell us about your situation *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Briefly describe your property and what you're looking for…" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 shrink-0 accent-gold cursor-pointer"
                  />
                  <span className="text-white/40 text-xs leading-relaxed">
                    By checking this box, I consent to being contacted by Green Hill Management
                    via phone, email, and SMS text messages at the contact information provided
                    above. Message and data rates may apply. Message frequency varies. Reply STOP
                    to opt out of SMS at any time. I understand that my information will be used
                    solely to respond to my inquiry and will not be shared with third parties.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading || !form.consent}
                  className="self-start bg-gold text-white text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div ref={infoRef} className="fade-in-up delay-200 lg:col-span-2 flex flex-col gap-8 pt-2">
            <p
              className="font-display text-white text-2xl font-light"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Prefer to reach us directly?
            </p>

            <div className="flex items-start gap-4">
              <Phone className="text-gold mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+17186644026" className="text-white text-sm hover:text-gold transition-colors">718-664-4026</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gold mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:thegreenhillrealty@gmail.com" className="text-white text-sm hover:text-gold transition-colors">thegreenhillrealty@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-gold mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Service Area</p>
                <p className="text-white/70 text-sm leading-relaxed">New York, New Jersey &amp; Connecticut</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/30 text-xs leading-relaxed">
                We respond to all inquiries within one business day. All consultations are
                completely confidential and free of charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
