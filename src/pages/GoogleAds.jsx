import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function GoogleAds({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-6">Paid Advertising</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          Google Ads is the most powerful intent-based platform in the world.{' '}
          <span className="text-gray-400 dark:text-gray-500">But without proper management, it drains budgets fast.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          We treat your budget as if it were our own. Through meticulous keyword targeting, negative keyword pruning, and compelling ad copy, we ensure you only pay for clicks with a high probability of converting.
        </p>
        <Link to="/contact" className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2">
          Get Your Free Audit <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <img src="/assets/google_ads_1779027161992.png" alt="Google Ads dashboard" className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Our Google Ads Services</h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Search Campaigns</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">The bread and butter of PPC. Text ads that appear exactly when a user searches for your product or service. We identify the right keywords, write compelling ad copy, and structure your account for maximum Quality Score and minimum cost-per-click.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Includes:</p>
                  {['Comprehensive keyword research and negative keyword lists', 'Ad group structuring for relevance and Quality Score', 'Multiple ad variations for ongoing A/B testing', 'Bid strategy selection based on your goals'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Remarketing & Display</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Most visitors don't convert on their first visit. Remarketing puts your brand back in front of people who've already shown interest — across millions of websites and apps. We design the creative, set up the audiences, and optimize for return visits that convert.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">We set up:</p>
                  {['Custom audience segments based on site behavior', 'Display ad creative in all required sizes', 'Frequency capping to avoid ad fatigue', 'Cross-device remarketing for full funnel coverage'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Conversion Tracking & Reporting</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">If you can't track it, you can't optimize it. We set up precise conversion tracking so you know exactly which keywords, ads, and landing pages are generating revenue — not just clicks.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Tracking setup:</p>
                  {['Google Ads conversion tracking with proper attribution', 'Google Analytics 4 integration and custom events', 'Call tracking and form submission tracking', 'Monthly performance reports with clear ROAS metrics'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Our Campaign Process</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: '01', title: 'Research & Setup', desc: 'Identify profitable keywords, analyze competitor ads, and structure your account for maximum efficiency.' },
              { num: '02', title: 'Launch & Learn', desc: 'Launch with controlled budgets, gather initial data, and identify which search terms perform best.' },
              { num: '03', title: 'Optimize & Scale', desc: 'Cut losing keywords ruthlessly, increase budget on winners, and continuously improve ad copy and Quality Score.' },
              { num: '04', title: 'Report & Repeat', desc: 'Transparent monthly reports showing spend, conversions, ROAS, and the strategic adjustments we made.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-3xl font-bold text-gray-200 dark:text-zinc-800 shrink-0 w-10">{step.num}</span>
                <div><h3 className="text-base font-semibold dark:text-white mb-2">{step.title}</h3><p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Why choose us for Google Ads</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: 'Budget Stewardship', desc: 'We treat your ad spend like it\'s our own money. Every rupee is accounted for and optimized.' },
              { title: 'No Long-Term Contracts', desc: 'We earn your business month to month. If we\'re not delivering, you can walk away.' },
              { title: 'Landing Page Alignment', desc: 'We don\'t just manage ads — we ensure the pages people land on are built to convert.' },
              { title: 'Certified Team', desc: 'Our team is Google Ads certified and stays updated on the latest platform changes and best practices.' },
            ].map((r, i) => (
              <div key={i}><h3 className="text-base font-semibold dark:text-white mb-2">{r.title}</h3><p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'SEO', href: '/seo' }, { label: 'Landing Page Design', href: '/landing-page-design' }, { label: 'Social Media', href: '/social-media' }].map((s, i) => (
              <Link key={i} to={s.href} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">Stop guessing. Start converting. Let's build a campaign that pays for itself.</h2>
          <Link to="/contact" className="mt-6 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
