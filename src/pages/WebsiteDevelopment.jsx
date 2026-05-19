import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WebsiteDevelopment({ setQuoteOpen }) {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">Development Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          Your website should work as hard as your business does.{' '}
          <span className="text-gray-400 dark:text-gray-500">We build the engine under the hood.</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          At Prayush Studios, web development isn't about getting something online. It's about crafting digital platforms that run clean, load fast, and work hard behind the scenes. From tailored codebases to mobile-first builds, every project is as strategic as it is functional.
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
        <div className="rounded-2xl overflow-hidden bg-[#1e1e1e] border border-gray-700">
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <img src="/assets/web_dev_1779027105679.png" alt="Web development" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* ── SERVICES BREAKDOWN ── */}
      <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">What We Build</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            Types of Web Development We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
            True web development is equal parts planning, engineering, and foresight. Here's how we make it work.
          </p>

          <div className="space-y-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Custom Web Applications</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Your business doesn't come from a template. Your website shouldn't either. We build fully custom digital platforms using modern frameworks like React and Next.js — clean code that performs, scales, and stays maintainable.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">Expect:</p>
                  {['Seamless experiences across devices', 'Built-in SEO performance through structural code optimization', 'Smooth user flows that actually convert', 'Modular, component-based architecture'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">CMS Development</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Managing your content shouldn't feel like navigating a maze. We set up content management systems that give your team control without complexity. WordPress, Webflow, or headless — we pick the right tool for your workflow.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">You'll have:</p>
                  {['Intuitive dashboards and logical content flow', 'Clean backend systems that are easy to use', 'Blog setups, plugin management, and third-party integrations', 'Documentation and training so your team can manage independently'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-zinc-800"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">Performance Optimization</h3>
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  If your current site is slow, bloated, or ranking poorly — we can fix it without starting from scratch. We audit your existing codebase, identify bottlenecks, and optimize for speed, accessibility, and search visibility.
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium dark:text-white">We handle:</p>
                  {['Core Web Vitals optimization', 'Backend cleanups and database query tuning', 'Asset compression and caching strategies', 'Mobile responsiveness and accessibility fixes'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
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
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">Our Development Process</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
            Web development done right is a blend of smart planning, clean code, and user-first thinking.
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { num: '01', title: 'Discovery & Planning', desc: 'Understand business goals, user journeys, and integration needs. Define site structure, features, and technical requirements.' },
              { num: '02', title: 'Architecture & Setup', desc: 'Select the right tech stack, set up the repository, configure CI/CD pipelines, and map out the database schema.' },
              { num: '03', title: 'Development & Coding', desc: 'Build front-end and back-end in sprints using modern frameworks. Focus on performance, SEO readiness, and modular scalability.' },
              { num: '04', title: 'Testing & QA', desc: 'Multi-browser and multi-device testing. Optimize loading speed, form flows, and accessibility compliance.' },
              { num: '05', title: 'Launch & Deployment', desc: 'Deploy to production with full security, SSL configuration, domain setup, and analytics tracking from day one.' },
              { num: '06', title: 'Maintenance & Support', desc: 'Ongoing performance monitoring, bug fixes, speed optimization, and support for future scalability.' },
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
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">Why brands choose us for development</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: 'No Shortcuts', desc: "Every line of code has a purpose. We don't use page builders or bloated plugins." },
              { title: 'Full-Stack Capability', desc: 'Frontend, backend, databases, APIs, hosting — we handle the full picture.' },
              { title: 'SEO & Speed From Day One', desc: "Performance isn't an afterthought. It's baked into every technical decision." },
              { title: 'Post-Launch Support', desc: "We don't disappear after deploy. Ongoing maintenance, updates, and real help." },
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
              { label: 'SEO', href: '/seo' },
              { label: 'Landing Page Design', href: '/landing-page-design' },
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
            The digital world is always moving. Let's make sure your website moves faster.
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
