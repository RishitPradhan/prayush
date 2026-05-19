import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client } from '../sanity/client'

export default function LegalTemplate() {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const query = `*[_type == "legal" && slug.current == $slug][0]`
    
    client.fetch(query, { slug }).then((res) => {
      setData(res)
      setLoading(false)
    }).catch(console.error)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto dark:text-white">
        Loading...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto dark:text-white">
        <h2>Page not found</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight dark:text-white mb-8">
        {data.title}
      </h1>
      <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        {data.lastUpdated && (
          <p className="mb-6">Last updated: {new Date(data.lastUpdated).toLocaleDateString()}</p>
        )}
        
        {data.content && (
          <PortableText value={data.content} />
        )}
      </div>
    </div>
  )
}
