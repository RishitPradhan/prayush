import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SEO({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6">SEO Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          When your customers search for what you sell,{' '}
          <span className="text-gray-400 dark:text-gray-500">are they finding you or your competitors?</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          Unlike paid ads where traffic stops the minute you stop paying, SEO is an investment that compounds over time. We focus on ranking you for keywords that actually drive revenue — not vanity metrics.
        </p>
        <Link to="/contact" className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2">
          Get Your Free Audit <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <img src="/assets/seo_1779027142402.png" alt="SEO analytics" className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Our SEO Services</h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Technical SEO</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">The foundation. If search engines can't properly crawl and index your site, nothing else matters. We fix what's broken under the hood — site speed, mobile-friendliness, schema markup, XML sitemaps — so Google can read your site the way it was meant to be read.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">We fix:</p>
                  {['Core Web Vitals and page speed issues', 'Crawl errors, broken links, and redirect chains', 'Schema markup and structured data', 'XML sitemaps and robots.txt configuration'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">On-Page Optimization</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Every page on your site is a ranking opportunity. We craft the perfect meta tags, headers, and internal linking structures. Content is optimized for both search engines and humans — readable, relevant, and persuasive.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Includes:</p>
                  {['Keyword-optimized title tags and meta descriptions', 'Header hierarchy and content structure', 'Internal linking strategy', 'Image alt text and content gap analysis'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Link Building & Authority</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Google trusts sites that other reputable sites vouch for. We build high-quality backlinks through genuine outreach, guest content, and strategic partnerships — no spam, no shortcuts.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Strategy:</p>
                  {['White-hat outreach to relevant publications', 'Guest content placement on authority sites', 'Competitor backlink gap analysis', 'Toxic link audit and disavow management'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Local SEO</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">If you serve a local market, showing up in the Google Map Pack is critical. We optimize your Google My Business profile, build local citations, and ensure your NAP data is consistent across the web.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Deliverables:</p>
                  {['Google My Business setup and optimization', 'Local citation building and NAP consistency', 'Review generation strategy', 'Geo-targeted keyword optimization'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Our SEO Process</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: '01', title: 'Audit & Blueprint', desc: 'Deep dive into site health, competitor landscape, and immediate quick-win opportunities.' },
              { num: '02', title: 'Foundation & Fixes', desc: 'Resolve technical errors, optimize existing content, and establish a solid foundation for growth.' },
              { num: '03', title: 'Content & Links', desc: 'Create keyword-targeted content and build authoritative backlinks to boost domain authority.' },
              { num: '04', title: 'Monitor & Adapt', desc: 'Track rankings, analyze traffic patterns, and adjust strategy based on algorithm updates and performance data.' },
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
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Why invest in SEO</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: 'Compounding Returns', desc: 'Unlike ads, SEO traffic grows over time. The content you rank today keeps bringing visitors for years.' },
              { title: 'High-Intent Traffic', desc: 'People searching on Google are actively looking for solutions. This is the highest quality traffic you can get.' },
              { title: 'Brand Credibility', desc: 'Ranking on page 1 signals trust. Users inherently trust organic results more than paid placements.' },
              { title: 'Cost Efficiency', desc: 'After the initial investment, the cost per lead from organic search consistently drops month over month.' },
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
            {[{ label: 'Google Ads', href: '/google-ads' }, { label: 'Website Development', href: '/website-development' }, { label: 'Social Media', href: '/social-media' }].map((s, i) => (
              <Link key={i} to={s.href} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">Stop losing traffic to competitors. Let's get you to Page 1.</h2>
          <Link to="/contact" className="mt-6 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
