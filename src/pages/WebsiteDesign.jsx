import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WebsiteDesign({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-6">Design Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          When someone visits your site, you get a few seconds to earn their trust.{' '}
          <span className="text-gray-400 dark:text-gray-500">We make those seconds count.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          At Prayush Studios, we don't build websites from templates. We design digital experiences tailored around your business, your audience, and the actions you want them to take. Every layout, every color, every interaction — intentional.
        </p>
        <Link
          to="/contact"
          className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
        >
          Get In Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ── IMAGE SHOWCASE ── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/assets/web_design_1779027058817.png"
            alt="Website design process"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ── SERVICES BREAKDOWN ── */}
      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Types of Website Design Services We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
            Good design isn't decoration. It's structure, clarity, and intent. Here's what we bring to the table.
          </p>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Custom Website Design</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Your business isn't a template. Your site shouldn't look like one either. We design fully custom interfaces from scratch — built around your brand language, your customer journey, and the outcomes you care about. No drag-and-drop builders. No cookie-cutter layouts.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Expect:</p>
                  {['Unique layouts built from wireframes, not themes', 'Visual language that matches your brand tone', 'Intuitive navigation that reduces friction', 'Design systems that scale with your business'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Responsive & Mobile-First Design</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Over 60% of web traffic comes from mobile devices. If your site doesn't feel native on a phone, you're losing more than half your potential customers before they even scroll. We design mobile-first — meaning the small screen isn't an afterthought, it's where we start.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">You'll get:</p>
                  {['Pixel-perfect rendering on every screen size', 'Touch-optimized interactions and tap targets', 'Layouts that reflow naturally without breaking', 'Speed-focused design — no heavy assets on mobile'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">UI/UX Redesigns</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Already have a site that isn't performing? Sometimes you don't need to start over — you need a smarter structure. We audit your existing site, identify where users are dropping off, and redesign with intent. Better UX, better results.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">We handle:</p>
                  {['UX audits with actionable feedback', 'Conversion-focused layout restructuring', 'Visual modernization while keeping your brand intact', 'Improved accessibility and usability'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
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
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Our Design Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
            Design done right is a blend of research, strategy, and craft. Here's how we move from brief to launch.
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: '01', title: 'Discovery & Research', desc: 'Understand your business goals, target audience, and competitive landscape. Define site structure, features, and content requirements.' },
              { num: '02', title: 'Wireframing', desc: 'Create low-fidelity layouts that map out the user journey. No colors, no distractions — just structure and flow.' },
              { num: '03', title: 'Visual Design', desc: 'Apply your brand identity — typography, color, imagery — to high-fidelity mockups. Every page, every state, designed in detail.' },
              { num: '04', title: 'Prototyping & Review', desc: 'Interactive prototypes you can click through and test. We revise until you are confident in every element.' },
              { num: '05', title: 'Handoff & Support', desc: 'Pixel-perfect design files handed to development. We stay involved through build to ensure nothing gets lost in translation.' },
              { num: '06', title: 'Post-Launch Review', desc: 'After launch, we review real user data and suggest design tweaks based on actual behavior — not assumptions.' },
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
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">
            Why brands choose us for design
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: 'No Templates', desc: "Every line of design has a purpose. We don't reskin themes — we build from scratch." },
              { title: 'Collaborative Process', desc: 'Our design and dev teams work together from day one. No handoff chaos.' },
              { title: 'SEO & Speed Aware', desc: 'Design decisions factor in load time and search visibility from the start.' },
              { title: 'Scalable Systems', desc: "You won't outgrow our work. We build design systems that evolve with your brand." },
            ].map((reason, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold dark:text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Website Development', href: '/website-development' },
              { label: 'Landing Page Design', href: '/landing-page-design' },
              { label: 'Logo & Branding', href: '/logo-design' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Your website is your strongest digital asset. Let's make it work as hard as you do.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Start your next chapter with Prayush Studios.
          </p>
          <Link
            to="/contact"
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
