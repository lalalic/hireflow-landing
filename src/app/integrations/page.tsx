import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations - HireFlow',
  description: 'Connect HireFlow with your favorite ATS, communication, and job board platforms. Integrate via REST API or pre-built connectors. 将HireFlow与您最喜欢的ATS、通讯和招聘平台连接。',
  keywords: 'HireFlow integrations, ATS integration, Greenhouse, Lever, Slack, LinkedIn, API, 集成, 对接',
};

interface Integration {
  name: string;
  icon: string;
  category: string;
  description: string;
  status: 'available' | 'coming-soon';
}

const integrations: Integration[] = [
  // ATS Systems
  {
    name: 'Greenhouse',
    icon: '🌱',
    category: 'ATS',
    description: 'Sync candidates, jobs, and scorecards bi-directionally with Greenhouse.',
    status: 'coming-soon',
  },
  {
    name: 'Lever',
    icon: '⚙️',
    category: 'ATS',
    description: 'Push AI-scored candidates and outreach data directly into Lever pipelines.',
    status: 'coming-soon',
  },
  {
    name: 'Workday',
    icon: '📋',
    category: 'ATS',
    description: 'Connect with Workday Recruiting to streamline enterprise hiring workflows.',
    status: 'coming-soon',
  },
  {
    name: 'BambooHR',
    icon: '🎋',
    category: 'ATS',
    description: 'Import job listings and export candidate evaluations to BambooHR.',
    status: 'coming-soon',
  },
  // Communication
  {
    name: 'Slack',
    icon: '💬',
    category: 'Communication',
    description: 'Get instant notifications on candidate scores, pipeline updates, and team mentions.',
    status: 'available',
  },
  {
    name: 'Microsoft Teams',
    icon: '🟦',
    category: 'Communication',
    description: 'Receive hiring alerts and collaborate on candidates within Teams channels.',
    status: 'coming-soon',
  },
  {
    name: 'Gmail',
    icon: '📧',
    category: 'Communication',
    description: 'Send AI-generated outreach emails directly from your Gmail account.',
    status: 'available',
  },
  {
    name: 'Outlook',
    icon: '📨',
    category: 'Communication',
    description: 'Integrate with Outlook for seamless email outreach and calendar scheduling.',
    status: 'coming-soon',
  },
  // Job Boards
  {
    name: 'LinkedIn',
    icon: '🔗',
    category: 'Job Board',
    description: 'Import candidate profiles and post jobs directly to LinkedIn.',
    status: 'available',
  },
  {
    name: 'Indeed',
    icon: '🔍',
    category: 'Job Board',
    description: 'Publish job listings to Indeed and import applicant data automatically.',
    status: 'coming-soon',
  },
  {
    name: 'Glassdoor',
    icon: '🚪',
    category: 'Job Board',
    description: 'Sync job postings and pull candidate applications from Glassdoor.',
    status: 'coming-soon',
  },
  {
    name: 'ZipRecruiter',
    icon: '⚡',
    category: 'Job Board',
    description: 'Distribute jobs across ZipRecruiter\'s network and track applicants.',
    status: 'coming-soon',
  },
];

export default function IntegrationsPage() {
  const categories = ['ATS', 'Communication', 'Job Board'] as const;

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
            Integrations / 集成
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            集成 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Integrations</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            将HireFlow与您已有的工具无缝连接，打造统一的招聘工作流
            <br />
            Connect HireFlow with the tools you already use for a unified recruiting workflow
          </p>
        </div>
      </section>

      {/* Integration Cards by Category */}
      {categories.map((category) => (
        <section key={category} className="max-w-5xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {category === 'ATS' && '📂 ATS Systems / ATS系统'}
            {category === 'Communication' && '💬 Communication / 通讯工具'}
            {category === 'Job Board' && '📌 Job Boards / 招聘平台'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {integrations
              .filter((i) => i.category === category)
              .map((integration) => (
                <div
                  key={integration.name}
                  className="group p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{integration.icon}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        integration.status === 'available'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-amber-500/10 text-amber-400'
                      }`}
                    >
                      {integration.status === 'available' ? 'Available' : 'Coming Soon'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{integration.name}</h3>
                  <span className="inline-block mb-3 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium w-fit">
                    {integration.category}
                  </span>
                  <p className="text-sm text-zinc-400 leading-relaxed flex-1">
                    {integration.description}
                  </p>
                </div>
              ))}
          </div>
        </section>
      ))}

      {/* API Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔌</span>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              REST API / 开发者API
            </h2>
          </div>
          <p className="text-zinc-300 mb-4 leading-relaxed">
            Build custom integrations with the HireFlow REST API. Programmatically manage candidates, trigger AI scoring, generate outreach messages, and pull pipeline analytics into your own systems.
          </p>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            使用HireFlow REST API构建自定义集成。通过编程方式管理候选人、触发AI评分、生成外联消息，并将管道分析数据拉取到您自己的系统中。
          </p>

          {/* Code Example */}
          <div className="rounded-xl bg-[#0A0F1C] border border-zinc-700 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-zinc-500 font-mono">api-example.sh</span>
            </div>
            <pre className="p-4 text-sm text-zinc-300 font-mono overflow-x-auto leading-relaxed">
{`# Score a candidate against a job
curl -X POST https://api.hireflow.app/v1/score \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "candidate_id": "cand_abc123",
    "job_id": "job_xyz789",
    "engines": ["gpt-4", "qwen", "deepseek"]
  }'

# Response
{
  "score": 87,
  "breakdown": {
    "skill_match": 92,
    "experience": 85,
    "culture_fit": 84
  },
  "recommendation": "Strong Match"
}`}
            </pre>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/lalalic/hireflow"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition text-center"
            >
              View API Docs / 查看API文档 →
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition text-center"
            >
              API定价 / API Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <h3 className="text-xl font-bold mb-2">
            需要自定义集成？ / Need a Custom Integration?
          </h3>
          <p className="text-zinc-400 text-sm mb-6">
            联系我们的团队，我们可以帮助您构建定制的集成方案。
            <br />
            Contact our team and we&apos;ll help you build a tailored integration.
          </p>
          <a
            href="mailto:lalalic@139.com"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
          >
            联系我们 / Contact Us →
          </a>
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
