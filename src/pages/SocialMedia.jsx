import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SocialMedia({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-red-600 dark:text-red-400 uppercase tracking-widest mb-6">Marketing Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          Posting consistently is easy.{' '}
          <span className="text-gray-400 dark:text-gray-500">Posting content that moves the needle is where we come in.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          Social media isn't just about being present — it's about being relevant. We manage your profiles end-to-end, creating scroll-stopping content and building communities that drive real business outcomes.
        </p>
        <Link to="/contact" className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2">
          Get Free Strategy Session <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <img src="/assets/social_media_1779027121943.png" alt="Social media marketing" className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-red-600 dark:text-red-400 uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Our Social Media Services</h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Content Strategy & Creation</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">We analyze your brand, audience, and trends to build a content calendar that balances promotional, educational, and engaging content — the right mix for growth.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Includes:</p>
                  {['Monthly content calendars with curated post grids', 'Short-form video production for Reels, Shorts, and TikTok', 'Captivating copywriting tailored to each platform', 'Branded templates and visual assets'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Community Management</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Your audience isn't just numbers. We treat them like people — proactive engagement, timely replies, and genuine conversations that build loyalty.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">We handle:</p>
                  {['Comment and DM management', 'Proactive engagement with relevant accounts', 'Review and feedback responses', 'Crisis monitoring and reputation management'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 dark:border-zinc-800"></div>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white">Analytics & Growth</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">We provide detailed monthly reports beyond vanity metrics — showing what's driving engagement, clicks, and conversions. Strategy adjustments are data-led.</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Reporting includes:</p>
                  {['Reach, impressions, and engagement rate breakdowns', 'Top-performing content analysis', 'Follower growth trends and demographic insights', 'Actionable recommendations for next month'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3"><Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span className="text-sm text-gray-600 dark:text-gray-400">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-12">Platforms we manage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Twitter / X', 'Pinterest', 'TikTok', 'Google My Business'].map((p, i) => (
              <div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-center">
                <span className="text-sm font-medium dark:text-white">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Why brands trust us with their social</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: 'Not an Intern\'s Job', desc: 'Your social presence is managed by experienced strategists — not interns scheduling random posts.' },
              { title: 'Platform-Native Thinking', desc: 'What works on LinkedIn doesn\'t work on Instagram. We tailor tone, format, and timing for each.' },
              { title: 'Content That Converts', desc: 'We don\'t chase viral for viral\'s sake. Every piece of content is tied to a business objective.' },
              { title: 'Transparent Reporting', desc: 'No fluff. You\'ll see what worked, what didn\'t, and what we\'re doing about it.' },
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
            {[{ label: 'Google Ads', href: '/google-ads' }, { label: 'SEO', href: '/seo' }, { label: 'Logo & Branding', href: '/logo-design' }].map((s, i) => (
              <Link key={i} to={s.href} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">{s.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">Your audience is already scrolling. Let's give them a reason to stop.</h2>
          <Link to="/contact" className="mt-6 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
