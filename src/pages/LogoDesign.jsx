import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LogoDesign({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-widest mb-6">Branding Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          A great logo doesn't just look good.{' '}
          <span className="text-gray-400 dark:text-gray-500">It communicates who you are before you say a word.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          We design logos and brand identities that aren't just visually sharp — they're strategically built to connect with your audience and hold up across every touchpoint, from your website to a billboard.
        </p>
        <Link
          to="/contact"
          className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
        >
          Get In Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ── IMAGE ── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <img src="/assets/logo_design_1779027073824.png" alt="Logo design process" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* ── SERVICES BREAKDOWN ── */}
      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            What Our Logo & Branding Service Includes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
            A logo is just the starting point. We build the full visual system around it.
          </p>

          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Logo Design</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We don't just draw logos — we research your market, understand your positioning, and then design a mark that carries meaning. Multiple concepts, thorough revisions, and a final symbol you can be proud of for years to come.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Includes:</p>
                  {['3-5 initial concept directions', 'Unlimited revisions on chosen concept', 'Primary, secondary, and icon-only variations', 'All source files (AI, SVG, EPS, PNG)'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Brand Identity System</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  A logo without a system is just a picture. We build the complete visual language — colors, typography, spacing rules, do's and don'ts — so your brand looks consistent whether it's on a business card or a conference stage.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">You'll get:</p>
                  {['Curated color palette with hex, RGB, and CMYK values', 'Primary and secondary font pairings', 'Clear usage guidelines and spacing rules', 'Brand guidelines document (PDF)'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Collateral & Social Kit</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Your brand lives in the real world. We design the materials that carry it there — business cards, letterheads, email signatures, and social media kits sized for every platform. Ready to use from day one.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Deliverables:</p>
                  {['Business card and letterhead design', 'Social media profile and cover templates', 'Email signature design', 'Presentation deck template'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-pink-600 dark:text-pink-400 uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Our Branding Process</h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: '01', title: 'Brand Questionnaire', desc: 'We ask the questions that matter — your audience, your competitors, the feeling you want your brand to evoke.' },
              { num: '02', title: 'Research & Moodboarding', desc: 'We study your space, collect visual references, and build a moodboard that aligns on direction before any design begins.' },
              { num: '03', title: 'Concept Exploration', desc: 'Multiple unique directions presented with rationale. No guessing — every design choice is explained.' },
              { num: '04', title: 'Refinement & Delivery', desc: 'We refine your chosen direction to perfection, then package everything into a clean, organized brand kit.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-3xl font-bold text-gray-200 dark:text-zinc-800 shrink-0 w-10">{step.num}</span>
                <div>
                  <h3 className="text-base font-semibold dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Why brands trust us with their identity</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: 'Strategy First', desc: "We don't start in Illustrator. We start with your business goals and competitive landscape." },
              { title: '100% Ownership', desc: 'You own everything. All source files, all formats. No licensing, no fine print.' },
              { title: 'Built to Last', desc: "We design marks that don't chase trends. Timeless over trendy, every time." },
              { title: 'Revision Until Right', desc: "We don't cap revisions on the chosen concept. It's done when you love it." },
            ].map((reason, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold dark:text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Website Design', href: '/website-design' },
              { label: 'Landing Page Design', href: '/landing-page-design' },
              { label: 'Social Media', href: '/social-media' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Your brand is the first thing people remember. Let's make it unforgettable.
          </h2>
          <Link
            to="/contact"
            className="mt-6 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
