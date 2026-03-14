import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Services — HireFlow | Resume Screening, Email Generation, Recruitment API',
  description:
    'AI-powered recruitment tools: resume screening, email generation, and REST API. Automate hiring with HireFlow AI services.',
  keywords: [
    'AI resume screening',
    'AI email generator',
    'recruitment API',
    'hiring automation',
    'HireFlow services',
  ],
  openGraph: {
    title: 'HireFlow AI Services',
    description:
      'AI-powered recruitment tools — API, resume screening, email generation, and custom solutions.',
    url: 'https://hireflow-landing-beryl.vercel.app/services',
    type: 'website',
  },
};

const services = [
  {
    icon: '📄',
    title: 'AI Resume Screening',
    desc: 'Upload resumes + job descriptions → get instant AI scoring. Save hours screening candidates.',
    price: 'From $0.50/screen',
    cta: 'Try Now',
    href: '/services/screen',
  },
  {
    icon: '🎯',
    title: 'AI Candidate Matcher',
    desc: 'Rank multiple candidates against a job description. Get AI grades, key matches, and skill gap analysis.',
    price: 'From $1/match',
    cta: 'Try Now',
    href: '/services/match',
  },
  {
    icon: '📊',
    title: 'Batch Resume Screener',
    desc: 'Screen multiple resumes at once. Paste resumes separated by --- and get scores, breakdowns, and distribution stats.',
    price: 'From $0.30/resume',
    cta: 'Try Now',
    href: '/services/batch',
  },
  {
    icon: '✉️',
    title: 'AI Email Generator',
    desc: 'Generate professional recruitment emails in seconds. Outreach, follow-ups, offers, rejections.',
    price: 'From $1/email',
    cta: 'Try Now',
    href: '/services/emails',
  },
  {
    icon: '🔗',
    title: 'Recruitment API',
    desc: 'Integrate AI scoring and email generation into your own tools via REST API.',
    price: 'From $0/month',
    cta: 'View Docs',
    href: 'https://hireflow-api-mu.vercel.app',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    features: ['100 calls/hour', 'Basic endpoints'],
    popular: false,
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: ['500 calls/hour', 'All endpoints', 'Email support'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    features: ['2,500 calls/hour', 'Priority access', 'Phone support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/mo',
    features: ['Unlimited', 'Custom models', 'SLA', 'Dedicated support'],
    popular: false,
  },
];

const faqs = [
  {
    q: 'How does AI scoring work?',
    a: 'Our algorithm analyzes skills match (40%), experience relevance (35%), and overall fit (25%). Each resume is compared against the job description using advanced NLP models to produce a 0–100 compatibility score with detailed breakdowns.',
  },
  {
    q: 'What languages are supported?',
    a: 'English and Chinese (Simplified). Both scoring and email generation work in both languages, so you can evaluate bilingual candidates seamlessly.',
  },
  {
    q: 'Can I try before buying?',
    a: 'Yes! Use the API key `demo-hireflow-2026` for free access to all endpoints. The Free tier also gives you 100 calls per hour at no cost.',
  },
  {
    q: 'How accurate is the scoring?',
    a: 'Our AI scoring has been validated against thousands of recruiter decisions with 85%+ accuracy. The model is continuously refined with new data to improve precision.',
  },
];

const customSolutions = [
  { label: 'Custom AI chatbots', range: '$3K–10K' },
  { label: 'Mobile app development', range: '$5K–25K' },
  { label: 'API integration', range: '$2K–8K' },
  { label: 'Full recruitment platform', range: '$15K–50K' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ───── Hero ───── */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            HireFlow AI Services
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered recruitment tools — API, resume screening, email
            generation, and custom solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hireflow-api-mu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white text-blue-900 font-semibold text-lg hover:bg-blue-50 transition"
            >
              Try Free API
            </a>
            <a
              href="mailto:lalalic@139.com"
              className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ───── Services Cards ───── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const isExternal = s.href.startsWith('http');
              return (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col"
                >
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                    {s.desc}
                  </p>
                  <p className="text-blue-600 font-semibold mb-6">{s.price}</p>
                  <a
                    href={s.href}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="inline-block text-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    {s.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── API Pricing ───── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            API Pricing
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Start free, scale as you grow
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 flex flex-col bg-white border ${
                  p.popular
                    ? 'border-blue-600 shadow-xl scale-[1.03]'
                    : 'border-gray-200 shadow-sm'
                } transition-all duration-300`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-400">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:lalalic@139.com?subject=HireFlow API - ${p.name}`}
                  className={`block w-full py-3 rounded-lg text-center font-medium transition ${
                    p.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Custom Solutions ───── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need something custom?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build AI-powered recruitment tools for enterprises. React Native
            apps, custom APIs, landing pages, and more.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
            {customSolutions.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50"
              >
                <span className="text-blue-600 font-bold text-lg">•</span>
                <div>
                  <div className="font-medium">{c.label}</div>
                  <div className="text-sm text-gray-500">{c.range}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:lalalic@139.com?subject=Custom Project Inquiry"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group p-6 rounded-xl bg-white border border-gray-200 shadow-sm"
              >
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t border-gray-200 py-8 px-4 text-center text-sm text-gray-400">
        <a href="/" className="hover:text-gray-600 transition">
          ← Back to HireFlow Home
        </a>{' '}
        · HireFlow © 2026
      </footer>
    </main>
  );
}
