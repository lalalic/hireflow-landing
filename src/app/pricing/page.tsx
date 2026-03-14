import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Simple, Transparent Pricing | HireFlow',
  description: 'HireFlow pricing plans: Free, Pro ($29/mo), and Agency ($99/mo). Start free, upgrade when you need more. AI-powered recruiting for every team size. HireFlow定价方案。',
  keywords: 'HireFlow pricing, AI recruiting pricing, recruiting tool cost, 招聘工具定价, HireFlow价格',
};

const plans = [
  {
    name: 'Free',
    nameZh: '免费版',
    price: '$0',
    period: '/month',
    description: 'For individuals getting started',
    descriptionZh: '个人入门',
    features: [
      '10 contacts',
      '5 AI messages/month',
      'Basic pipeline',
      '1 job posting',
    ],
    cta: 'Get Started Free',
    ctaZh: '免费开始',
    href: 'https://github.com/lalalic/hireflow',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Pro',
    nameZh: '专业版',
    price: '$29',
    period: '/month',
    description: 'For professional recruiters',
    descriptionZh: '专业招聘',
    features: [
      '500 contacts',
      'Unlimited AI messages',
      'Advanced pipeline + analytics',
      'Job templates',
      'Email composer',
      'Export contacts',
      'Salary benchmarks',
    ],
    cta: 'Start Pro Trial',
    ctaZh: '开始专业版试用',
    href: 'https://buy.stripe.com/5kQ3cvc0V6YE8xydQR',
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Agency',
    nameZh: '团队版',
    price: '$99',
    period: '/month',
    description: 'For teams & agencies',
    descriptionZh: '团队与猎头公司',
    features: [
      'Unlimited contacts',
      'Everything in Pro',
      'Team collaboration',
      'Custom branding',
      'Priority support',
      'API access',
    ],
    cta: 'Contact Sales',
    ctaZh: '联系销售',
    href: 'mailto:lalalic@139.com',
    highlighted: false,
    badge: null,
  },
];

const faqs = [
  {
    q: 'Can I switch plans? / 可以切换套餐吗？',
    a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. 可以！您可以随时升级或降级套餐，变更立即生效，费用按比例计算。',
  },
  {
    q: 'Is there a free trial? / 有免费试用吗？',
    a: 'Yes — every new user gets a 14-day Pro trial, no credit card required. Experience all Pro features risk-free. 有的——每位新用户都可获得14天专业版免费试用，无需信用卡。',
  },
  {
    q: 'What payment methods do you accept? / 接受哪些支付方式？',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex) via Stripe. All payments are secure and encrypted. 我们通过Stripe接受所有主流信用卡（Visa、Mastercard、Amex），所有支付安全加密。',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
              H
            </div>
            <span className="font-bold text-lg">HireFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
          </div>
          <a
            href="https://github.com/lalalic/hireflow"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
          >
            免费下载
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Pricing / 定价
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Start free, upgrade when you need more
            <br />
            免费开始，按需升级
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-xl bg-zinc-900 border ${
                plan.highlighted
                  ? 'border-blue-500 shadow-lg shadow-blue-500/10 scale-105'
                  : 'border-zinc-800'
              } flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-medium whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-0.5">{plan.name}</h3>
              <p className="text-sm text-zinc-500 mb-4">{plan.nameZh} · {plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-zinc-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-400 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                target={plan.href.startsWith('http') ? '_blank' : undefined}
                className={`block w-full py-3 rounded-lg text-center font-medium transition ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90'
                    : 'border border-zinc-700 hover:bg-zinc-800'
                }`}
              >
                {plan.cta} / {plan.ctaZh}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Row */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-zinc-800 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Enterprise / 企业定制
            </h3>
            <p className="text-zinc-400 text-sm">
              Need more? Enterprise plan from <span className="text-white font-semibold">$299/month</span>. White-label solution, dedicated support, custom integrations.
              <br />
              需要更多？企业版起步$299/月。白标方案、专属支持、定制集成。
            </p>
          </div>
          <a
            href="mailto:lalalic@139.com"
            className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition whitespace-nowrap"
          >
            Talk to Sales / 联系销售 →
          </a>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-green-400">30-Day Money-Back Guarantee</p>
              <p className="text-xs text-zinc-500">30天无条件退款保证 · No questions asked</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions / 常见问题
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800"
            >
              <summary className="cursor-pointer font-semibold flex items-center justify-between">
                {faq.q}
                <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-zinc-400 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Transform Your Recruiting? / 准备好改变招聘方式了吗？</h3>
          <p className="text-zinc-400 text-sm mb-6">
            Start with the free plan — no credit card required.
            <br />
            免费版即刻开始，无需信用卡。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lalalic/hireflow"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
              Get Started Free / 免费开始 →
            </a>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition"
            >
              Learn More / 了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              H
            </div>
            <span>HireFlow © 2026</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-white transition">首页 / Home</Link>
            <Link href="/blog" className="hover:text-white transition">博客 / Blog</Link>
            <Link href="/pricing" className="hover:text-white transition">定价 / Pricing</Link>
            <Link href="/privacy" className="hover:text-white transition">隐私政策 / Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">服务条款 / Terms</Link>
            <a href="https://github.com/lalalic/hireflow" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="mailto:lalalic@139.com" className="hover:text-white transition">联系我们 / Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
