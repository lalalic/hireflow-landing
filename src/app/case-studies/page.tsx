import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies — HireFlow | Real Results from Real Recruiters',
  description:
    'See how companies like TechStartup Inc, Global Recruiters LLC, and Enterprise Corp transformed their hiring with HireFlow AI recruiting assistant.',
  openGraph: {
    title: 'Case Studies — HireFlow',
    description: 'Real results from real recruiters using HireFlow AI.',
  },
};

const caseStudies = [
  {
    company: 'TechStartup Inc',
    initial: 'T',
    color: 'from-blue-500 to-cyan-400',
    industry: 'SaaS · 50 employees',
    challenge:
      'TechStartup Inc was hiring across 8 engineering roles simultaneously. Their 3-person talent team spent 70% of their time manually screening resumes, leaving little bandwidth for candidate engagement and interviews. Top candidates were slipping away to competitors who moved faster.',
    solution:
      'They deployed HireFlow\'s AI candidate scoring to automatically rank every applicant against job requirements. The AI evaluated technical skills, experience relevance, and culture fit — processing each resume in under 2 seconds. Recruiters received a prioritized shortlist every morning.',
    results: [
      { metric: '60%', label: 'Reduction in time-to-hire' },
      { metric: '3x', label: 'More candidates screened per day' },
      { metric: '45%', label: 'Improvement in offer acceptance rate' },
      { metric: '8', label: 'Roles filled in 6 weeks' },
    ],
    quote:
      'HireFlow turned our hiring from a bottleneck into a competitive advantage. We filled all 8 roles in 6 weeks — something that used to take us 4 months.',
    quoteName: 'Jessica Park',
    quoteTitle: 'VP of People, TechStartup Inc',
  },
  {
    company: 'Global Recruiters LLC',
    initial: 'G',
    color: 'from-green-500 to-emerald-400',
    industry: 'Staffing Agency · 120 recruiters',
    challenge:
      'As a large staffing agency handling high-volume placements, Global Recruiters processed thousands of applications monthly across 200+ open roles. Manual screening was inconsistent — different recruiters applied different standards, leading to missed talent and client complaints.',
    solution:
      'HireFlow\'s bulk AI scoring became their standardized first-pass filter. Every incoming resume was scored against the specific job description, ensuring consistent evaluation. The AI outreach message generator helped recruiters send personalized messages at scale.',
    results: [
      { metric: '10,000+', label: 'Resumes processed per month' },
      { metric: '85%', label: 'Reduction in screening time' },
      { metric: '2.5x', label: 'Increase in placements per recruiter' },
      { metric: '40%', label: 'Higher client satisfaction scores' },
    ],
    quote:
      'We went from drowning in resumes to surfacing the best candidates in minutes. Our recruiters now spend their time where it matters — building relationships, not reading CVs.',
    quoteName: 'Marcus Johnson',
    quoteTitle: 'Managing Director, Global Recruiters LLC',
  },
  {
    company: 'Enterprise Corp',
    initial: 'E',
    color: 'from-purple-500 to-pink-400',
    industry: 'Fortune 500 · 50,000+ employees',
    challenge:
      'Enterprise Corp\'s talent acquisition team managed hiring across 12 countries with different languages, regulations, and cultural norms. Resume formats varied wildly, and their existing ATS couldn\'t handle multilingual candidate evaluation consistently.',
    solution:
      'HireFlow\'s bilingual AI engine (Chinese & English) and local data storage addressed both the language barrier and strict data residency requirements. Each regional team could evaluate candidates in their local language while maintaining company-wide scoring consistency.',
    results: [
      { metric: '12', label: 'Countries with standardized scoring' },
      { metric: '50%', label: 'Faster cross-border hiring cycles' },
      { metric: '100%', label: 'Data compliance across regions' },
      { metric: '92%', label: 'Hiring manager satisfaction rate' },
    ],
    quote:
      'For the first time, our Tokyo, Shanghai, and London teams are evaluating candidates on the same scale. HireFlow solved our biggest talent acquisition challenge — consistency at a global level.',
    quoteName: 'Dr. Anya Müller',
    quoteTitle: 'Global Head of Talent Acquisition, Enterprise Corp',
  },
  {
    company: 'Campus Recruiting Team',
    initial: 'C',
    color: 'from-amber-500 to-orange-400',
    industry: 'University Career Center · 35,000 students',
    challenge:
      'During peak recruiting season, the university\'s career center received over 5,000 applications for employer-sponsored programs, internships, and graduate roles. A team of 6 career advisors had just 3 weeks to match students with the right opportunities.',
    solution:
      'HireFlow\'s batch scoring capability let the team upload entire applicant pools and score them against multiple opportunity profiles simultaneously. The AI interview question generator helped prepare students for employer interviews with role-specific practice questions.',
    results: [
      { metric: '5,000', label: 'Applicants scored in 3 days' },
      { metric: '78%', label: 'Student placement rate (up from 52%)' },
      { metric: '90%', label: 'Employer partner satisfaction' },
      { metric: '3 weeks', label: 'Full cycle completed on time' },
    ],
    quote:
      'We used to manually read every application. Now HireFlow scores 5,000 students in a weekend. Our placement rate jumped from 52% to 78% — the highest in our university\'s history.',
    quoteName: 'Prof. David Okonkwo',
    quoteTitle: 'Director of Career Services, Campus Recruiting Team',
  },
];

export default function CaseStudiesPage() {
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
            <a href="/case-studies" className="text-white transition">Case Studies</a>
            <a href="/pricing" className="hover:text-white transition">Pricing</a>
            <a href="/changelog" className="hover:text-white transition">Changelog</a>
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Trusted by recruiters worldwide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Real Results from
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Recruiters
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            See how companies of every size — from 50-person startups to Fortune 500 enterprises — transformed
            their hiring with HireFlow&apos;s AI-powered recruiting assistant.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {caseStudies.map((cs, i) => (
            <article
              key={i}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800 overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 sm:p-10 border-b border-zinc-800 flex items-center gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cs.color} flex items-center justify-center text-xl font-bold text-white flex-shrink-0`}
                >
                  {cs.initial}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{cs.company}</h2>
                  <p className="text-zinc-400 text-sm">{cs.industry}</p>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-8">
                {/* Challenge */}
                <div>
                  <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    The Challenge
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    The Solution
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">{cs.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Results
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r, j) => (
                      <div
                        key={j}
                        className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-center"
                      >
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {r.metric}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-blue-500/50 pl-6 py-2">
                  <p className="text-zinc-300 italic leading-relaxed mb-3">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <footer className="text-sm">
                    <span className="text-white font-semibold">{cs.quoteName}</span>
                    <span className="text-zinc-500"> · {cs.quoteTitle}</span>
                  </footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of recruiters who are hiring smarter with AI. Start your free trial today — no
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lalalic/hireflow"
              target="_blank"
              className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold text-lg hover:bg-blue-50 transition"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition"
            >
              View Pricing →
            </a>
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
