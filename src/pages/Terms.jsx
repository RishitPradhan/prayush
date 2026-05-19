import React from 'react'

export default function Terms() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight dark:text-white mb-8">
        Terms of Service
      </h1>
      <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">1. Agreement to Terms</h2>
        <p className="mb-6">
          By accessing our website and engaging our services at Prayush Studios, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">2. Services</h2>
        <p className="mb-6">
          Prayush Studios provides web design, web development, digital marketing, SEO, and branding services. The specific details, deliverables, timeline, and pricing for your project will be outlined in a separate Statement of Work or Proposal.
        </p>

        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">3. Intellectual Property Rights</h2>
        <p className="mb-6">
          Other than the content you own, under these Terms, Prayush Studios and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
        </p>
        <p className="mb-6">
          Upon full payment for our services, the specific intellectual property rights for the deliverables created for you will be transferred as outlined in your specific project contract.
        </p>

        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">4. Client Responsibilities</h2>
        <p className="mb-6">
          To ensure successful project delivery, you agree to provide timely feedback, necessary assets, and clear communication. Delays in providing required materials may result in project timeline extensions.
        </p>

        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">5. Limitation of Liability</h2>
        <p className="mb-6">
          In no event shall Prayush Studios, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website or our services. We shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
        </p>

        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">6. Revisions and Errata</h2>
        <p className="mb-6">
          The materials appearing on the Prayush Studios website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold dark:text-white mt-10 mb-4">7. Contact Information</h2>
        <p className="mb-6">
          If you have any inquiries regarding these Terms, please contact us at:
          <br /><br />
          <strong>Email:</strong> prayushstudios@gmail.com<br />
          <strong>Phone:</strong> +91 78548 27613
        </p>
      </div>
    </div>
  )
}
