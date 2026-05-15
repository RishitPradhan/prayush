import { useState, useEffect, useRef } from 'react'
import Portfolio from './Portfolio'
import {
  Star,
  ChevronDown,
  ChevronRight,
  Palette,
  Code2,
  TrendingUp,
  Store,
  Check,
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Users,
  Globe,
  Award,
  Briefcase,
  Send,
} from 'lucide-react'

/* ────────────────────────────────────────
   NAV DROPDOWN DATA
   ──────────────────────────────────────── */
const navItems = [
  {
    label: 'Design',
    children: [
      'Website Design',
      'Logo Design',
      'UI/UX Design',
      'Landing Page Design',
      'Graphic Design',
      'Responsive Design',
    ],
  },
  {
    label: 'Development',
    children: [
      'WordPress Development',
      'Custom React Development',
      'Shopify / E-commerce',
      'PHP Web Development',
      'Mobile App Development',
      'CMS Development',
    ],
  },
  {
    label: 'Marketing',
    children: [
      'SEO Services',
      'Digital Marketing',
      'Social Media Marketing',
      'Content Marketing',
      'Google Ads (PPC)',
      'Local SEO',
    ],
  },
  { label: 'Portfolio', children: null, href: '#portfolio' },
  { label: 'Contact', children: null, href: '#contact' },
]

/* ────────────────────────────────────────
   PROCESS TAB DATA
   ──────────────────────────────────────── */
const tabs = [
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'build', label: 'Develop', icon: Code2 },
  { id: 'grow', label: 'Market', icon: TrendingUp },
  { id: 'support', label: 'Support', icon: Store },
]

/* ────────────────────────────────────────
   OVERLAY COMPONENTS
   ──────────────────────────────────────── */
function DesignOverlay() {
  return (
    <div className="animate-fade-in-overlay absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center">
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-[340px] md:w-[400px]">
        <h3 className="text-base font-semibold mb-1 dark:text-white">Website Design & Branding</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Premium designs that build trust & convert</p>
        <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2 mb-4">
          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
        <div className="space-y-3">
          {['Custom Logo & Brand Kit', 'High-Converting Layouts', 'Mobile-First Responsive UI', 'Revision Until Perfect'].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    i === 0
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {i === 0 ? <Check className="w-3 h-3" /> : i + 1}
                </div>
                <span className={`text-sm ${i === 0 ? 'text-black dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                  {step}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

function BuildOverlay() {
  return (
    <div className="animate-fade-in-overlay absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center">
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-[340px] md:w-[400px]">
        <h3 className="text-base font-semibold mb-1 dark:text-white">Development & Launch</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Robust code, fast loading, secure hosting</p>
        <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2 mb-4">
          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '67%' }}></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Page Speed', value: '95+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'SSL Secured', value: 'Yes' },
            { label: 'CMS Ready', value: 'Live' },
          ].map((metric) => (
            <div key={metric.label} className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3 text-center">
              <p className="text-lg font-semibold text-black dark:text-white">{metric.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GrowOverlay() {
  return (
    <div className="animate-fade-in-overlay absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center">
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-[340px] md:w-[400px]">
        <h3 className="text-base font-semibold mb-1 dark:text-white">SEO & Digital Marketing</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Get found online, drive real traffic</p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-green-700 dark:text-green-400">SEO Audit Passed</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Page 1 ranking strategy active</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { name: 'Google My Business', status: 'Optimised', color: 'text-green-600 dark:text-green-400' },
            { name: 'On-Page SEO', status: 'Complete', color: 'text-green-600 dark:text-green-400' },
            { name: 'Social Media Setup', status: 'Active', color: 'text-green-600 dark:text-green-400' },
            { name: 'PPC Campaigns', status: 'Running', color: 'text-green-600 dark:text-green-400' },
          ].map((test) => (
            <div key={test.name} className="flex items-center justify-between py-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">{test.name}</span>
              <span className={`text-xs font-medium ${test.color}`}>{test.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SupportOverlay() {
  return (
    <div className="animate-fade-in-overlay absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center">
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-6 w-[340px] md:w-[400px]">
        <h3 className="text-base font-semibold mb-1 dark:text-white">Ongoing Support & Growth</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">We grow with your business, always</p>
        <div className="space-y-3 mb-5">
          {[
            'Dedicated Account Manager',
            'Monthly Performance Reports',
            'Priority Bug Fixes & Updates',
            '24/7 Technical Support',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-black dark:bg-white text-white dark:text-black py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  )
}

const overlays = {
  design: DesignOverlay,
  build: BuildOverlay,
  grow: GrowOverlay,
  support: SupportOverlay,
}

/* ────────────────────────────────────────
   STATS DATA
   ──────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Briefcase },
  { value: '6+', label: 'Years Experience', icon: Award },
  { value: '15+', label: 'Countries Served', icon: Globe },
  { value: '98%', label: 'Client Satisfaction', icon: Users },
]

/* ────────────────────────────────────────
   DROPDOWN COMPONENT
   ──────────────────────────────────────── */
function NavDropdown({ item, isOpen, onToggle, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!item.children) {
    return (
      <a href={item.href || '#'} className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
        {item.label}
      </a>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="animate-dropdown absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl py-2 z-50">
          {item.children.map((child) => (
            <a
              key={child}
              href="#"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors"
            >
              {child}
              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/* ────────────────────────────────────────
   QUOTE FORM COMPONENT
   ──────────────────────────────────────── */
function QuoteForm({ isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <>
      <div className="fixed inset-0 bg-black/30 dark:bg-black/50 z-40" onClick={onClose}></div>
      <div className="animate-slide-in-right fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold dark:text-white">Get Free Consultation</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer">
              <X className="w-5 h-5 dark:text-gray-300" />
            </button>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="john@business.com"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Required</label>
              <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all">
                <option value="">Select a service</option>
                <option>Website Design</option>
                <option>Web Development</option>
                <option>E-commerce Store</option>
                <option>SEO Services</option>
                <option>Digital Marketing</option>
                <option>Mobile App</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-sm dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

/* ────────────────────────────────────────
   MAIN APP
   ──────────────────────────────────────── */
export default function App() {
  const [activeTab, setActiveTab] = useState('design')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#portfolio' ? 'portfolio' : 'home'
    }
    return 'home'
  })
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    return 'light'
  })

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash === '#portfolio' ? 'portfolio' : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((t) => t.id === prev)
        return tabs[(currentIndex + 1) % tabs.length].id
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const ActiveOverlay = overlays[activeTab]

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">

      {/* ── TOP INFO BAR ── */}
      <div className="bg-black dark:bg-zinc-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Phone className="w-3 h-3" /> +91 98765 43210
            </a>
            <a href="mailto:hello@prayushstudios.com" className="hidden sm:flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Mail className="w-3 h-3" /> hello@prayushstudios.com
            </a>
          </div>
          <button
            onClick={() => setQuoteOpen(true)}
            className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Free Website Audit
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-50">
        {/* ── NAVIGATION ── */}
        <nav
          className="animate-fade-in-up px-6 py-4 flex items-center justify-between relative z-50"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-black stroke-black dark:fill-white dark:stroke-white" />
            <span className="text-lg font-semibold dark:text-white">Prayush Studios</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onToggle={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300 hover:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 hover:text-black" />
              )}
            </button>
            <button
              onClick={() => setQuoteOpen(true)}
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              className="cursor-pointer dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* ── MOBILE MENU ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-6 pb-4 space-y-1 animate-fade-in-up border-t border-gray-100 dark:border-zinc-800 pt-4" style={{ animationDelay: '0s' }}>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer list-none">
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <a key={child} href="#" className="block py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                          {child}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a href={item.href || '#'} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <button
              onClick={() => { setQuoteOpen(true); setMobileMenuOpen(false) }}
              className="w-full bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer mt-2"
            >
              Get Free Consultation
            </button>
          </div>
        )}

        {/* ── MAIN CONTENT ── */}
        {currentPage === 'home' ? (
          <>
            {/* ── HERO SECTION ── */}
        <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto text-center">
          {/* Trust Badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 mb-8"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            <div className="w-6 h-6 border border-gray-300 dark:border-zinc-700 rounded flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium text-black dark:text-white">
              Trusted by 500+ Businesses Across India
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-fade-in-up text-5xl md:text-6xl lg:text-[72px] font-normal leading-[1.1] tracking-tight mb-5"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <span className="block dark:text-white">Websites That Drive Growth</span>
            <span className="block bg-gradient-to-r from-black via-gray-500 to-gray-400 dark:from-white dark:via-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
              & Deliver Real Results.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-in-up text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            From web design and development to SEO and digital marketing — we help small
            businesses build a powerful online presence that converts visitors into customers.
          </p>

          {/* Dual CTAs */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <button
              onClick={() => setQuoteOpen(true)}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#"
              className="border border-gray-300 dark:border-zinc-700 text-black dark:text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors flex items-center gap-2"
            >
              View Our Work
            </a>
          </div>

          {/* Tab Bar */}
          <div
            className="animate-fade-in-up flex justify-center mb-8"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            {/* Mobile Tabs */}
            <div className="md:hidden bg-gray-100 dark:bg-zinc-900 rounded-lg p-1 grid grid-cols-2 gap-1 w-full max-w-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-zinc-900 rounded-lg p-1">
              {tabs.map((tab, index) => {
                const Icon = tab.icon
                return (
                  <div key={tab.id} className="flex items-center">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                    {index < tabs.length - 1 && (
                      <div className="w-px h-5 bg-gray-300 dark:bg-zinc-700 mx-1"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Video + Overlay */}
          <div
            className="animate-fade-in-up relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <ActiveOverlay />
          </div>
        </section>

        {/* ── STATS COUNTER ── */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="animate-count-up text-center p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800"
                  style={{ animationDelay: `${0.1 + i * 0.1}s`, opacity: 0 }}
                >
                  <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <p className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── SERVICE BENEFITS ── */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="animate-fade-in-up text-3xl md:text-4xl font-normal tracking-tight dark:text-white mb-4"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Why Businesses Choose Us
            </h2>
            <p
              className="animate-fade-in-up text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              We don't just build websites — we build digital growth engines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Built to Convert',
                desc: 'Every design decision is made to turn visitors into paying customers.',
                icon: TrendingUp,
              },
              {
                title: 'Fast & Mobile-First',
                desc: 'Lightning-fast load times and pixel-perfect on every device and screen.',
                icon: Globe,
              },
              {
                title: 'SEO-Ready Structure',
                desc: 'Built with clean code and optimised metadata to rank high on Google.',
                icon: Award,
              },
              {
                title: 'Affordable Plans',
                desc: 'Enterprise-quality websites at prices that work for small businesses.',
                icon: Briefcase,
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="animate-fade-in-up p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 transition-colors group"
                  style={{ animationDelay: `${0.1 + i * 0.1}s`, opacity: 0 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-black dark:group-hover:bg-white transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── CLIENT TRUST LOGOS ── */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <p className="text-center text-xs tracking-widest text-gray-400 dark:text-zinc-600 uppercase mb-8 font-medium">
            Trusted by businesses everywhere
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {['FreshBites', 'UrbanCraft', 'GreenLeaf', 'PeakFit', 'TechNova', 'Bloom & Co'].map((name, i) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-wider text-gray-300 dark:text-zinc-700 uppercase hover:text-gray-500 dark:hover:text-zinc-500 transition-colors"
                style={{ letterSpacing: `${0.1 + (i % 3) * 0.05}em` }}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

          </>
        ) : (
          <Portfolio />
        )}

        {/* ── FOOTER ── */}
        <footer className="border-t border-gray-100 dark:border-zinc-800 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-black stroke-black dark:fill-white dark:stroke-white" />
                  <span className="text-lg font-semibold dark:text-white">Prayush Studios</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  We help small businesses and startups build powerful, affordable websites that drive real growth and results.
                </p>
                <div className="flex items-center gap-3">
                  {['f', 'in', 'ig', 'yt'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-semibold text-gray-500 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold dark:text-white mb-4 uppercase tracking-wider">Services</h4>
                <ul className="space-y-2.5">
                  {['Website Design', 'Web Development', 'E-commerce Stores', 'SEO Services', 'Digital Marketing', 'Mobile Apps'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold dark:text-white mb-4 uppercase tracking-wider">Company</h4>
                <ul className="space-y-2.5">
                  {['About Us', 'Our Portfolio', 'Blog', 'Careers', 'Pricing', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold dark:text-white mb-4 uppercase tracking-wider">Get In Touch</h4>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> +91 98765 43210
                  </a>
                  <a href="mailto:hello@prayushstudios.com" className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> hello@prayushstudios.com
                  </a>
                  <div className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100 dark:border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 dark:text-zinc-600">
                © 2026 Prayush Studios. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {['Privacy', 'Terms', 'Sitemap'].map((link) => (
                  <a key={link} href="#" className="text-xs text-gray-400 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Prayush%20Studios%2C%20I%20need%20a%20website%20for%20my%20business"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-whatsapp-pulse fixed bottom-6 left-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-30"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </a>

      {/* ── QUOTE FORM PANEL ── */}
      <QuoteForm isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  )
}
