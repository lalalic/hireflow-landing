import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog — HireFlow | Version History & New Features',
  description:
    'Track every update to HireFlow. See new features, improvements, and fixes across all versions — from AI scoring in v1.0 to team collaboration in v1.8.',
  openGraph: {
    title: 'Changelog — HireFlow',
    description: 'Full version history of HireFlow AI recruiting assistant.',
  },
};

type BadgeType = 'NEW' | 'IMPROVED' | 'FIX';

interface Feature {
  icon: string;
  name: string;
  desc: string;
  badge: BadgeType;
}

interface Version {
  version: string;
  date: string;
  title: string;
  latest?: boolean;
  features: Feature[];
}

const badgeStyles: Record<BadgeType, string> = {
  NEW: 'bg-green-500/10 text-green-400 border-green-500/20',
  IMPROVED: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  FIX: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const versions: Version[] = [
  {
    version: '1.8',
    date: 'March 2026',
    title: 'Team Collaboration & Kanban',
    latest: true,
    features: [
      { icon: '👥', name: 'Team Collaboration', desc: 'Invite team members, assign roles, and collaborate on hiring pipelines in real-time.', badge: 'NEW' },
      { icon: '📋', name: 'Kanban Board', desc: 'Drag-and-drop candidate cards across pipeline stages with a visual Kanban board view.', badge: 'NEW' },
      { icon: '📊', name: 'Reports Dashboard', desc: 'Track key recruiting metrics — time-to-hire, source effectiveness, pipeline velocity, and more.', badge: 'NEW' },
      { icon: '📅', name: 'Availability Calendar', desc: 'Candidates and interviewers can share availability windows for seamless scheduling.', badge: 'NEW' },
    ],
  },
  {
    version: '1.7',
    date: 'February 2026',
    title: 'Templates & Assessments',
    features: [
      { icon: '📄', name: 'Document Templates', desc: 'Create reusable offer letter, rejection, and follow-up email templates with merge fields.', badge: 'NEW' },
      { icon: '🧪', name: 'Skill Assessments', desc: 'Build and send custom skill assessments to candidates directly from HireFlow.', badge: 'NEW' },
      { icon: '💬', name: 'Interview Feedback', desc: 'Structured interview scorecards with competency ratings and collaborative notes.', badge: 'NEW' },
    ],
  },
  {
    version: '1.6',
    date: 'January 2026',
    title: 'Comparison & Referrals',
    features: [
      { icon: '⚖️', name: 'Candidate Comparison', desc: 'Side-by-side comparison view to evaluate multiple candidates against the same role.', badge: 'NEW' },
      { icon: '🔍', name: 'Job Board Search', desc: 'Search and import candidates from major job boards without leaving HireFlow.', badge: 'NEW' },
      { icon: '🤝', name: 'Referral System', desc: 'Track employee referrals with attribution, status updates, and bonus eligibility.', badge: 'NEW' },
    ],
  },
  {
    version: '1.5',
    date: 'December 2025',
    title: 'Analytics & Benchmarks',
    features: [
      { icon: '💰', name: 'Salary Benchmark', desc: 'AI-powered salary recommendations based on role, location, experience, and market data.', badge: 'NEW' },
      { icon: '📈', name: 'Enhanced Analytics', desc: 'Deeper pipeline analytics with conversion rates, bottleneck identification, and trend charts.', badge: 'IMPROVED' },
      { icon: '👥', name: 'Contact Groups', desc: 'Organize contacts into custom groups and talent pools for targeted outreach.', badge: 'NEW' },
    ],
  },
  {
    version: '1.4',
    date: 'November 2025',
    title: 'AI Email & Scheduling',
    features: [
      { icon: '✉️', name: 'AI Email Composer', desc: 'Generate personalized outreach emails with AI that adapts tone and content to each candidate.', badge: 'NEW' },
      { icon: '📅', name: 'Interview Scheduler', desc: 'Send scheduling links, sync with calendar apps, and manage interview slots automatically.', badge: 'NEW' },
      { icon: '⏱️', name: 'Activity Timeline', desc: 'Full interaction history for every candidate — emails, calls, notes, and status changes.', badge: 'NEW' },
    ],
  },
  {
    version: '1.3',
    date: 'October 2025',
    title: 'Bulk Import & Templates',
    features: [
      { icon: '📝', name: 'Bulk Text Import', desc: 'Paste unstructured text (LinkedIn profiles, resume snippets) and AI extracts structured data.', badge: 'NEW' },
      { icon: '📋', name: 'Job Templates', desc: 'Save and reuse job description templates with pre-configured requirements and scoring criteria.', badge: 'NEW' },
      { icon: '🔎', name: 'Advanced Filters', desc: 'Filter candidates by score, skills, experience, location, pipeline stage, and custom tags.', badge: 'IMPROVED' },
    ],
  },
  {
    version: '1.2',
    date: 'September 2025',
    title: 'Notifications & Dark Mode',
    features: [
      { icon: '🔔', name: 'Push Notifications', desc: 'Get notified when candidates respond, interviews are scheduled, or pipeline stages change.', badge: 'NEW' },
      { icon: '🌙', name: 'Dark Mode', desc: 'Full dark mode support that respects your system preference, easy on the eyes during late-night recruiting.', badge: 'NEW' },
      { icon: '📤', name: 'CSV Export', desc: 'Export candidate data, pipeline reports, and analytics to CSV for external reporting.', badge: 'NEW' },
    ],
  },
  {
    version: '1.1',
    date: 'August 2025',
    title: 'AI Chat & Multi-language',
    features: [
      { icon: '💬', name: 'AI Chat', desc: 'Ask HireFlow\'s AI assistant anything — get hiring advice, draft messages, or analyze candidates conversationally.', badge: 'NEW' },
      { icon: '🌐', name: 'Multi-language Support', desc: 'Full Chinese and English bilingual interface with AI that evaluates resumes in both languages.', badge: 'NEW' },
      { icon: '⭐', name: 'Premium Features', desc: 'Unlock higher contact limits, unlimited AI messages, and advanced analytics with Pro and Enterprise plans.', badge: 'NEW' },
    ],
  },
  {
    version: '1.0',
    date: 'July 2025',
    title: 'Launch — Core App',
    features: [
      { icon: '👤', name: 'Contact Management', desc: 'Add, organize, and manage candidate contacts with detailed profiles and custom fields.', badge: 'NEW' },
      { icon: '💼', name: 'Job Management', desc: 'Create job postings with descriptions, requirements, and link them to candidate pipelines.', badge: 'NEW' },
      { icon: '🤖', name: 'AI Candidate Scoring', desc: 'Evaluate candidates against job requirements with AI-powered 0-100 scoring and detailed analysis.', badge: 'NEW' },
      { icon: '📊', name: 'Pipeline View', desc: 'Visual pipeline with 9 stages from Discovery to Hired — track every candidate\'s journey.', badge: 'NEW' },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
              H
            </div>
            <span className="font-bold text-lg">HireFlow</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="/#features" className="hover:text-white transition">Features</a>
            <a href="/case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="/pricing" className="hover:text-white transition">Pricing</a>
            <a href="/changelog" className="text-white transition">Changelog</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
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
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            v1.8 is live — Team Collaboration
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Changelog
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Every feature, improvement, and fix we&apos;ve shipped — from day one to the latest release.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-12">
            {versions.map((v, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1 w-[47px] h-[47px] rounded-full border-2 hidden md:flex items-center justify-center text-xs font-bold ${
                    v.latest
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-zinc-700 bg-zinc-900 text-zinc-500'
                  }`}
                >
                  {v.version}
                </div>

                <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden">
                  {/* Version header */}
                  <div className="p-6 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="md:hidden text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        v{v.version}
                      </span>
                      <h2 className="text-xl font-bold">{v.title}</h2>
                      {v.latest && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                          LATEST
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-zinc-500">{v.date}</span>
                  </div>

                  {/* Features */}
                  <div className="divide-y divide-zinc-800/50">
                    {v.features.map((f, j) => (
                      <div key={j} className="p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-xl flex-shrink-0">
                          {f.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-sm font-semibold">{f.name}</h3>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${badgeStyles[f.badge]}`}
                            >
                              {f.badge}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay on the cutting edge of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI recruiting
            </span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Download HireFlow today and get every update automatically.
          </p>
          <a
            href="https://github.com/lalalic/hireflow"
            target="_blank"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:opacity-90 transition"
          >
            Download HireFlow →
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
          <div className="flex gap-6">
            <a href="https://github.com/lalalic/hireflow" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="/case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="/changelog" className="hover:text-white transition">Changelog</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/pricing" className="hover:text-white transition">Pricing</a>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
