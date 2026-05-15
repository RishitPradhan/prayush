import { ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Sneha Salon & Spa',
    category: 'Website Design',
    description: 'A high-end luxury salon experience brought online. Features a rich dark brown and gold aesthetic that radiates elegance, designed to elevate the premium brand identity.',
    image: '/sneha_salon_mockup.png',
    link: 'https://sneha-saloon.vercel.app/',
  },
  {
    id: 2,
    title: 'ATF Gym',
    category: 'Web Development',
    description: 'A bold and high-impact digital presence for a premium fitness center. Combines dynamic typography with a sleek black, white, and green theme to drive memberships.',
    image: '/atf_gym_mockup.png',
    link: 'https://atfgymdemo.vercel.app/',
  },
  {
    id: 3,
    title: 'Apex Coaching Centre',
    category: 'UI/UX Design',
    description: 'A professional and trustworthy platform for an educational institute. Designed with clean, modern aesthetics and student-focused layouts to boost enrollments.',
    image: '/coaching_centre_mockup.png',
    link: 'https://coachingcentrenewdemo.vercel.app/',
  },
  {
    id: 4,
    title: 'Modern Fitness Center',
    category: 'Landing Page Design',
    description: 'An energetic and highly visual fitness showcase. Features an immersive dark mode UI, vibrant neon accents, and smooth animations that inspire action.',
    image: '/gym_demo_mockup.png',
    link: 'https://gym-demos.vercel.app/',
  }
];

export default function Portfolio() {
  return (
    <div className="animate-fade-in-up min-h-screen">
      {/* ── PORTFOLIO HEADER ── */}
      <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight mb-5">
          <span className="block dark:text-white">Our Recent</span>
          <span className="block bg-gradient-to-r from-black via-gray-500 to-gray-400 dark:from-white dark:via-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
            Success Stories.
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore our latest projects. We deliver premium, high-performing websites and digital experiences that help businesses scale.
        </p>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s`, opacity: 0 }}
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] bg-gray-100 dark:bg-zinc-900 aspect-[4/3] mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ExternalLink className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
                    {project.category}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
                </div>
                <h3 className="text-2xl font-semibold dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
