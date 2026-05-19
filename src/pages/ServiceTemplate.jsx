import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { client, urlFor } from '../sanity/client'

export default function ServiceTemplate({ setQuoteOpen }) {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const query = `*[_type == "service" && slug.current == $slug][0]{
      ...,
      "relatedServices": relatedServices[]->{title, "slug": slug.current}
    }`
    
    client.fetch(query, { slug }).then((res) => {
      setData(res)
      setLoading(false)
    }).catch(console.error)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:text-white">
        Loading...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:text-white">
        <h2>Service not found</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
        <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-6">
          {data.category || 'Service'}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight dark:text-white mb-8">
          {data.heroHeadline}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-10">
          {data.heroDescription}
        </p>
        <Link
          to="/contact"
          className="bg-black dark:bg-white text-white dark:text-black px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
        >
          Get In Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ── IMAGE SHOWCASE ── */}
      {(data.mainImage || data.mainImageUrl) && (
        <section className="px-6 pb-20 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={data.mainImage ? urlFor(data.mainImage).url() : data.mainImageUrl}
              alt={data.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      )}

      {/* ── SERVICES BREAKDOWN ── */}
      {data.breakdownItems && data.breakdownItems.length > 0 && (
        <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
              {data.breakdownTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
              {data.breakdownDescription}
            </p>

            <div className="space-y-16">
              {data.breakdownItems.map((item, index) => (
                <div key={index}>
                  <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                    <h3 className="text-xl font-semibold dark:text-white md:sticky md:top-24">
                      {item.title}
                    </h3>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      {item.expectations && item.expectations.length > 0 && (
                        <div className="space-y-3">
                          <p className="text-sm font-medium dark:text-white">
                            {item.expectationListTitle || 'Expect:'}
                          </p>
                          {item.expectations.map((exp, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{exp}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {index < data.breakdownItems.length - 1 && (
                    <div className="border-t border-gray-100 dark:border-zinc-800 mt-16"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      {data.processSteps && data.processSteps.length > 0 && (
        <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-900/50">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
              {data.processTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-16">
              {data.processDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {data.processSteps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-3xl font-bold text-gray-200 dark:text-zinc-800 shrink-0 w-10">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY US ── */}
      {data.whyUsReasons && data.whyUsReasons.length > 0 && (
        <section className="px-6 py-20 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-16">
              {data.whyUsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {data.whyUsReasons.map((reason, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="px-6 py-16 bg-gray-50 dark:bg-zinc-900/50">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {data.relatedServices.map((s, i) => (
                <Link
                  key={i}
                  to={`/services/${s.slug}`}
                  className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="px-6 py-24 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight dark:text-white mb-6">
            {data.ctaTitle || "Ready to get started?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            {data.ctaDescription}
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
