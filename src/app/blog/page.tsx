import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog / 博客 - HireFlow',
  description: 'Insights on AI recruiting, talent acquisition, and hiring best practices. AI招聘、人才获取和招聘最佳实践的洞察与文章。',
};

interface BlogPost {
  slug: string;
  title: string;
  titleZh: string;
  excerpt: string;
  excerptZh: string;
  date: string;
  readTime: string;
  tag: string;
}

const posts: BlogPost[] = [
  {
    slug: 'ai-recruiting-future',
    title: 'The Future of AI-Powered Recruiting',
    titleZh: 'AI驱动招聘的未来',
    excerpt: 'How artificial intelligence is transforming talent acquisition — from candidate screening to automated outreach and data-driven hiring decisions.',
    excerptZh: '人工智能如何改变人才获取——从候选人筛选到自动化外联和数据驱动的招聘决策。',
    date: '2026-03-14',
    readTime: '8 min / 8分钟',
    tag: 'AI Recruiting',
  },
  {
    slug: 'ai-candidate-scoring',
    title: 'How to Score Candidates with AI: A Complete Guide',
    titleZh: '如何用AI评分候选人：完整指南',
    excerpt: 'A step-by-step guide to using AI-powered candidate scoring to identify top talent faster and more objectively than traditional methods.',
    excerptZh: '一份使用AI候选人评分的分步指南，帮助你比传统方法更快、更客观地识别顶尖人才。',
    date: '2026-03-12',
    readTime: '6 min / 6分钟',
    tag: 'Guide',
  },
  {
    slug: 'recruiter-email-templates',
    title: '5 Email Templates Every Recruiter Needs',
    titleZh: '每个招聘官都需要的5个邮件模板',
    excerpt: 'Proven outreach email templates that get responses — from initial contact to follow-ups and interview scheduling.',
    excerptZh: '经过验证的外联邮件模板——从初次联系到跟进和面试安排，帮助你获得更高回复率。',
    date: '2026-03-10',
    readTime: '5 min / 5分钟',
    tag: 'Templates',
  },
  {
    slug: 'cross-border-hiring',
    title: 'Cross-Border Hiring Made Easy: How AI Bridges the Gap Between Chinese and Western Talent Markets',
    titleZh: '跨境招聘变简单：AI如何连接中西方人才市场',
    excerpt: 'How AI tools simplify cross-border recruitment — auto-translation, cultural matching, salary benchmarking, and compliance across US and China markets.',
    excerptZh: 'AI工具如何简化跨境招聘——自动翻译、文化匹配、薪资基准对标以及中美市场合规。',
    date: '2026-03-14',
    readTime: '7 min / 7分钟',
    tag: 'Cross-Border',
  },
  {
    slug: 'building-diverse-teams',
    title: 'Building Diverse Teams with AI: Reducing Bias in Hiring',
    titleZh: '用AI构建多元化团队：减少招聘中的偏见',
    excerpt: 'Learn how AI recruiting tools reduce unconscious bias through standardized evaluations, blind resume screening, and structured assessments.',
    excerptZh: '了解AI招聘工具如何通过标准化评估、盲筛简历和结构化评估来减少无意识偏见。',
    date: '2026-03-14',
    readTime: '7 min / 7分钟',
    tag: 'Diversity & Inclusion',
  },
];

export default function BlogPage() {
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
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition">
            ← 返回首页 / Back
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Blog / 博客
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            博客 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            AI招聘洞察、实战技巧与行业趋势
            <br />
            Insights on AI recruiting, best practices &amp; industry trends
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                  {post.tag}
                </span>
                <span className="text-xs text-zinc-500">{post.date}</span>
                <span className="text-xs text-zinc-600">·</span>
                <span className="text-xs text-zinc-500">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-500 mb-3">{post.titleZh}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-2 flex-1">
                {post.excerpt}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {post.excerptZh}
              </p>
              <span className="text-sm text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                阅读更多 / Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <h3 className="text-xl font-bold mb-2">试试 HireFlow / Try HireFlow</h3>
          <p className="text-zinc-400 text-sm mb-6">
            免费开始使用AI智能招聘助手，提升你的招聘效率。
            <br />
            Start using the AI-powered recruiting assistant for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lalalic/hireflow"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
              免费下载 / Download Free
            </a>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition"
            >
              了解更多 / Learn More
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
            <Link href="/privacy" className="hover:text-white transition">隐私政策 / Privacy</Link>
            <Link href="/pricing" className="hover:text-white transition">定价 / Pricing</Link>
            <Link href="/terms" className="hover:text-white transition">服务条款 / Terms</Link>
            <a href="https://github.com/lalalic/hireflow" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="mailto:lalalic@139.com" className="hover:text-white transition">联系我们 / Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
