import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 78548 27613',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+917854827613',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'prayushstudios@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:prayushstudios@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat Instantly',
    sub: 'Fastest way to reach us',
    href: 'https://wa.me/917854827613?text=Hi%20Prayush%20Studios%2C%20I%27d%20like%20to%20discuss%20a%20project',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    sub: 'Serving clients nationwide',
    href: null,
  },
]

const services = [
  'Website Design',
  'Logo & Brand Identity',
  'Landing Page Design',
  'Website Development',
  'Social Media Management',
  'SEO Services',
  'Google Ads',
  'Other',
]

const faqs = [
  {
    q: 'How soon can you start on my project?',
    a: `We typically begin within 2–3 business days of receiving a signed brief and initial payment. For urgent projects, reach out and we'll do our best to accommodate you.`,
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Absolutely. We work with clients across India, the UK, UAE, and beyond. Everything is handled remotely with clear communication via email, WhatsApp, and video calls.',
  },
  {
    q: 'What information do I need to share to get started?',
    a: `Just the basics — your business name, what you do, your goals, and any references you like. We'll guide you through the rest during the free consultation call.`,
  },
  {
    q: 'Do you offer payment in instalments?',
    a: 'Yes. Most projects are structured as 50% upfront and 50% on delivery. For larger retainer packages, we can discuss a monthly payment plan.',
  },
]

export default function Contact({ setQuoteOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer re_emq6fDyR_P9TUj371zyXSHrVZfY1H7tBy',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'prayushstudios@gmail.com',
          subject: `New Enquiry from ${formData.name} — ${formData.service || 'General'}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Service Required:</strong> ${formData.service}</p>
            <hr/>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br/>')}</p>
          `,
        }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Failed to send message.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
          Contact Us
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          Let's build something{' '}
          <span className="text-gray-400 dark:text-gray-500">that actually works for your business.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Whether you have a clear brief or just a rough idea — we're here to help you figure out the right path.
          A free 30-minute consultation costs you nothing and could change everything.
        </p>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="px-6 pb-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto pt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const inner = (
                <>
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-black dark:group-hover:bg-white transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                    {method.label}
                  </p>
                  <p className="text-sm font-semibold dark:text-white mb-1">{method.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 shrink-0" />
                    {method.sub}
                  </p>
                </>
              )

              return method.href ? (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 transition-all block"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={method.label}
                  className="group p-6 rounded-2xl border border-gray-100 dark:border-zinc-800"
                >
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Sidebar */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              What Happens Next
            </p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight dark:text-white mb-8">
              We keep it simple.
            </h2>
            <div className="space-y-8">
              {[
                { num: '01', title: 'Fill the form', desc: 'Tell us what you need in a few lines. No lengthy briefs required at this stage.' },
                { num: '02', title: 'We reach out', desc: 'A real person from our team will contact you within one business day.' },
                { num: '03', title: 'Free consultation', desc: 'A 30-minute call to understand your goals and recommend the right solution.' },
                { num: '04', title: 'Proposal & kickoff', desc: `A clear, itemised proposal. No hidden costs. Work begins once you're happy.` },
              ].map((step) => (
                <div key={step.num} className="flex gap-5">
                  <span className="text-3xl font-bold text-gray-200 dark:text-zinc-800 shrink-0 w-10 leading-none mt-1">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white mb-2">Message Received</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="rahul@business.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 78548 27613"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Service Required <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Tell Us About Your Project <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your business, what you're looking for, and any deadlines or budget in mind..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 text-center -mt-2">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                  By submitting you agree to our{' '}
                  <a href="/privacy" className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    Privacy Policy
                  </a>
                  . We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">
            Common questions answered.
          </h2>
          <div className="divide-y divide-gray-100 dark:divide-zinc-800">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-base font-medium dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 shrink-0 text-lg leading-none mt-0.5">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BANNER ── */}
      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Prefer to jump straight to a call?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Book a free 30-minute consultation and let's figure out exactly what you need — no pressure, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/917854827613?text=Hi%20Prayush%20Studios%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-zinc-700 text-black dark:text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
