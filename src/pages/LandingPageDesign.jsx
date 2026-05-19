import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandingPageDesign({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-6">Conversion Design</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          A landing page has one job.{' '}
          <span className="text-gray-400 dark:text-gray-500">We make sure it actually does it.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          Stop bleeding ad spend on pages that don't convert. We design laser-focused landing pages built around a single goal — whether that's capturing a lead, booking a call, or selling a product. No clutter, no distractions. Just results.
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
          <img src="/assets/landing_page_1779027090434.png" alt="Landing page design" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* ── WHAT MAKES A LANDING PAGE WORK ── */}
      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-4">The Approach</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            What makes our landing pages different
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
            Most landing pages fail because they try to do too much. Ours are ruthlessly focused — every element earns its place on the page.
          </p>

          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Conversion Architecture</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  We don't start with design. We start with the offer. What are you selling, who are you selling it to, and what objections do they have? The page structure is built around answering those questions in the right order.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Built with:</p>
                  {['Clear value proposition above the fold', 'Benefit-driven sections that address objections', 'Trust indicators — reviews, logos, guarantees', 'Single, focused CTA repeated at key scroll points'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Speed & Performance</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  If your landing page takes more than 3 seconds to load, you've already lost a significant chunk of visitors. We obsess over performance — compressed assets, minimal scripts, and clean code that loads instantly on any connection.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Performance targets:</p>
                  {['Sub-2 second load times on mobile', 'Core Web Vitals in the green across the board', 'No render-blocking resources', 'Optimized images and lazy-loaded assets'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Tracking & Iteration</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  A landing page is never "done." We set up proper conversion tracking from day one — Meta Pixel, Google Analytics, UTM parameters — so you know exactly what's working. Then we iterate based on real data, not guesswork.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">We set up:</p>
                  {['Google Analytics 4 with custom events', 'Meta Pixel and conversion API', 'UTM parameter tracking', 'A/B testing infrastructure for future experiments'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDEAL FOR ── */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-12">Ideal for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Ad Campaigns', desc: 'Google Ads, Meta Ads, or LinkedIn campaigns that need a dedicated destination page.' },
              { title: 'Product Launches', desc: 'New product or service that needs a focused pitch without the noise of your main site.' },
              { title: 'Lead Generation', desc: 'Capturing emails, phone numbers, or booking calls for your sales team.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <h3 className="text-base font-semibold dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="px-6 py-16 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Google Ads', href: '/google-ads' },
              { label: 'Website Design', href: '/website-design' },
              { label: 'SEO', href: '/seo' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Stop paying for clicks that don't convert. Let's fix that.
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
