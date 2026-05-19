import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. "Design Services", "Marketing Services"',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'text',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Showcase Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImageUrl',
      title: 'Main Image URL (local or external)',
      type: 'string',
      description: 'URL/path to the image, e.g. /assets/web_design.png or an external URL.',
    }),
    
    // Services Breakdown
    defineField({
      name: 'breakdownTitle',
      title: 'Services Breakdown Title',
      type: 'string',
    }),
    defineField({
      name: 'breakdownDescription',
      title: 'Services Breakdown Description',
      type: 'text',
    }),
    defineField({
      name: 'breakdownItems',
      title: 'Breakdown Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {
              name: 'expectationListTitle',
              type: 'string',
              title: 'Expectation List Title',
              description: 'e.g. "Expect:", "You will get:"',
            },
            {
              name: 'expectations',
              type: 'array',
              title: 'Expectations (Checklist)',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),

    // Process
    defineField({
      name: 'processTitle',
      title: 'Process Title',
      type: 'string',
    }),
    defineField({
      name: 'processDescription',
      title: 'Process Description',
      type: 'text',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'num', type: 'string', title: 'Step Number (e.g. 01)'},
            {name: 'title', type: 'string', title: 'Step Title'},
            {name: 'description', type: 'text', title: 'Step Description'},
          ],
        },
      ],
    }),

    // Why Us
    defineField({
      name: 'whyUsTitle',
      title: 'Why Us Title',
      type: 'string',
    }),
    defineField({
      name: 'whyUsReasons',
      title: 'Why Us Reasons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Reason Title'},
            {name: 'description', type: 'text', title: 'Reason Description'},
          ],
        },
      ],
    }),

    // CTA
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
    }),
  ],
})
