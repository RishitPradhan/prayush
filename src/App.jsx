import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Portfolio from './Portfolio'
import ServiceTemplate from './pages/ServiceTemplate'
import LegalTemplate from './pages/LegalTemplate'
import Contact from './pages/Contact'
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
  Send
} from 'lucide-react'

/* ────────────────────────────────────────
   NAV DROPDOWN DATA
   ──────────────────────────────────────── */
const navItems = [
  {
    label: 'Design',
    children: [
      { label: 'Website Design', href: '/services/website-design' },
      { label: 'Logo Design', href: '/services/logo-design' },
      { label: 'Landing Page Design', href: '/services/landing-page-design' },
    ],
  },
  {
    label: 'Development',
    children: [
      { label: 'Website Development', href: '/services/website-development' },
    ],
  },
  {
    label: 'Marketing',
    children: [
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Google Ads', href: '/services/google-ads' },
    ],
  },
  { label: 'Portfolio', children: null, href: '/portfolio' },
  { label: 'Contact', children: null, href: '/contact' },
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
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${i === 0
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
      <Link to={item.href || '#'} className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
        {item.label}
      </Link>
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
            <Link
              key={child.label}
              to={child.href}
              onClick={onClose}
              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-colors group"
            >
              {child.label}
              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
            </Link>
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
                placeholder="+91 78548 27613"
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
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('design')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [quoteOpen, setQuoteOpen] = useState(false)

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    return 'light'
  })

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
      <ScrollToTop />



      <div className="max-w-7xl mx-auto relative z-50">
        {/* ── NAVIGATION ── */}
        <nav
          className="animate-fade-in-up px-6 py-4 grid grid-cols-2 lg:grid-cols-3 items-center relative z-50"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 justify-self-start cursor-pointer hover:opacity-90 transition-opacity">
            <img
              src="/logo.jpeg"
              alt="Prayush Studios"
              className="h-9 w-auto dark:invert dark:hue-rotate-180"
            />
            <span className="text-lg font-semibold tracking-tight dark:text-white">Prayush Studios</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-8 justify-self-center">
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
          <div className="hidden lg:flex items-center gap-4 justify-self-end">
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
            <Link
              to="/contact"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer inline-block"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden justify-self-end">
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
                        <Link key={child.label} to={child.href} onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link to={item.href || '#'} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer mt-2"
            >
              Get Free Consultation
            </Link>
          </div>
        )}

        {/* ── MAIN CONTENT ── */}
        <Routes>
          <Route path="/" element={
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
                  <Link
                    to="/contact"
                    className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
                          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${activeTab === tab.id
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
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all cursor-pointer ${activeTab === tab.id
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



            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/:slug" element={<ServiceTemplate setQuoteOpen={setQuoteOpen} />} />
          <Route path="/legal/:slug" element={<LegalTemplate />} />
          <Route path="/contact" element={<Contact setQuoteOpen={setQuoteOpen} />} />
        </Routes>

        {/* ── FOOTER ── */}
        <footer className="border-t border-gray-100 dark:border-zinc-800 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/logo.jpeg"
                    alt="Prayush Studios"
                    className="h-9 w-auto dark:invert dark:hue-rotate-180"
                  />
                  <span className="text-lg font-semibold tracking-tight dark:text-white">Prayush Studios</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  We help small businesses and startups build powerful, affordable websites that drive real growth and results.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.instagram.com/prayushstudios?igsh=MTN6N2JkZjA1bDhkYQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#ig-gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <defs>
                        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f09433" />
                          <stop offset="25%" stopColor="#e6683c" />
                          <stop offset="50%" stopColor="#dc2743" />
                          <stop offset="75%" stopColor="#cc2366" />
                          <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    @prayushstudios
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold dark:text-white mb-4 uppercase tracking-wider">Services</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Website Design', href: '/services/website-design' },
                    { label: 'Website Development', href: '/services/website-development' },
                    { label: 'Landing Page Design', href: '/services/landing-page-design' },
                    { label: 'Logo & Branding', href: '/services/logo-design' },
                    { label: 'SEO Services', href: '/services/seo' },
                    { label: 'Social Media', href: '/services/social-media' },
                    { label: 'Google Ads', href: '/services/google-ads' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold dark:text-white mb-4 uppercase tracking-wider">Company</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Our Portfolio', href: '/portfolio' },
                    { label: 'Contact Us', href: '/contact' },
                    { label: 'Privacy Policy', href: '/legal/privacy' },
                    { label: 'Terms of Service', href: '/legal/terms' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link to={item.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold dark:text-white mb-4 uppercase tracking-wider">Get In Touch</h4>
                <div className="space-y-3">
                  <a href="tel:+917854827613" className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> +91 78548 27613
                  </a>
                  <a href="mailto:prayushstudios@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> prayushstudios@gmail.com
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
                {[
                  { label: 'Privacy', href: '/privacy' },
                  { label: 'Terms', href: '/terms' },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="text-xs text-gray-400 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a
        href="https://wa.me/917854827613?text=Hi%20Prayush%20Studios%2C%20I%20need%20a%20website%20for%20my%20business"
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
