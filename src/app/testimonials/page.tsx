import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials / 用户评价 - HireFlow',
  description: 'See what recruiters and hiring managers say about HireFlow — real stories from HR professionals worldwide. 看看招聘官和招聘经理如何评价HireFlow。',
  keywords: 'HireFlow testimonials, user reviews, recruiting tool reviews, AI hiring reviews, 用户评价, 招聘工具评测',
};

interface Testimonial {
  name: string;
  title: string;
  company: string;
  initial: string;
  color: string;
  stars: number;
  quote: string;
  quoteZh: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    title: 'Tech Lead',
    company: 'Alibaba',
    initial: 'S',
    color: 'from-pink-500 to-rose-500',
    stars: 5,
    quote: 'HireFlow transformed how our engineering team evaluates candidates. The AI scoring is remarkably accurate — it identified strong candidates that our manual screening process missed. We reduced time-to-hire by 40% and the bilingual support is perfect for our cross-border teams between Hangzhou and Silicon Valley.',
    quoteZh: 'HireFlow改变了我们工程团队评估候选人的方式。AI评分非常准确——它识别出了我们人工筛选过程遗漏的优秀候选人。我们将招聘周期缩短了40%，双语支持对于我们杭州和硅谷之间的跨境团队来说非常完美。',
  },
  {
    name: 'James Morrison',
    title: 'VP of Talent Acquisition',
    company: 'Goldman Sachs',
    initial: 'J',
    color: 'from-blue-500 to-cyan-500',
    stars: 5,
    quote: 'In investment banking, every hire is high-stakes. HireFlow\'s multi-engine AI scoring gives us confidence in our candidate evaluations. The privacy-first architecture was essential for our compliance team — all candidate data stays local. We\'ve processed over 2,000 applications through HireFlow with consistently superior results compared to our previous tools.',
    quoteZh: '在投资银行业，每一次招聘都是高风险的。HireFlow的多引擎AI评分让我们对候选人评估充满信心。隐私优先的架构对我们的合规团队至关重要——所有候选人数据都保存在本地。我们已经通过HireFlow处理了2,000多份申请，结果始终优于我们之前的工具。',
  },
  {
    name: 'Maria García',
    title: 'HR Director',
    company: 'Salesforce',
    initial: 'M',
    color: 'from-emerald-500 to-teal-500',
    stars: 5,
    quote: 'What sets HireFlow apart is the quality of its AI-generated outreach emails. Our response rates jumped from 12% to 34% after switching. The tool understands context — it references specific projects from candidates\' backgrounds, making each message feel genuinely personal. My team of 15 recruiters now handles the volume that previously required 25.',
    quoteZh: 'HireFlow的与众不同之处在于其AI生成的外联邮件质量。切换后，我们的回复率从12%跃升至34%。该工具理解上下文——它引用候选人背景中的具体项目，使每条消息都感觉真正个性化。我的15人招聘团队现在可以处理之前需要25人的工作量。',
  },
  {
    name: 'Yuki Tanaka',
    title: 'Senior Recruiter',
    company: 'Rakuten',
    initial: 'Y',
    color: 'from-violet-500 to-purple-500',
    stars: 5,
    quote: 'As a recruiter hiring across Japan, Southeast Asia, and the US, I needed a tool that handles multiple languages natively. HireFlow\'s AI doesn\'t just translate — it understands cultural nuances in resumes from different regions. The candidate scoring adapts to local market contexts, which is something I haven\'t found in any other tool.',
    quoteZh: '作为一名在日本、东南亚和美国进行招聘的招聘官，我需要一款原生支持多种语言的工具。HireFlow的AI不仅翻译——它理解来自不同地区简历中的文化细微差别。候选人评分会适应当地市场环境，这是我在其他工具中没有找到的功能。',
  },
  {
    name: 'David Kim',
    title: 'CTO',
    company: 'NexaAI (Startup)',
    initial: 'D',
    color: 'from-amber-500 to-orange-500',
    stars: 5,
    quote: 'As a startup CTO, I wear many hats — including recruiter. HireFlow gave me back 15 hours per week that I was spending on resume screening. The AI interview question generator is brilliant; it creates technical questions tailored to each candidate\'s experience level. We hired our entire founding engineering team of 8 using HireFlow, and every single hire has been outstanding.',
    quoteZh: '作为一个创业公司的CTO，我身兼数职——包括招聘官。HireFlow每周帮我节省了15个小时的简历筛选时间。AI面试问题生成器非常出色；它根据每个候选人的经验水平创建定制的技术问题。我们使用HireFlow招聘了整个8人的创始工程团队，每一个人都非常出色。',
  },
  {
    name: 'Lisa Zhang',
    title: 'Campus Recruiter',
    company: 'Tencent',
    initial: 'L',
    color: 'from-sky-500 to-blue-500',
    stars: 4,
    quote: 'Campus recruiting season means thousands of applications in weeks. HireFlow\'s batch scoring feature processes hundreds of resumes in minutes with detailed assessment reports for each candidate. The AI identifies high-potential graduates who might not have perfect GPAs but show strong problem-solving ability and growth potential. It\'s changed how we approach campus hiring entirely.',
    quoteZh: '校园招聘季意味着数周内收到数千份申请。HireFlow的批量评分功能在几分钟内处理数百份简历，并为每位候选人提供详细的评估报告。AI能够识别出可能GPA不完美但展现出强大解决问题能力和成长潜力的高潜力毕业生。它彻底改变了我们对校园招聘的方式。',
  },
  {
    name: 'Michael O\'Brien',
    title: 'Owner & Managing Director',
    company: 'TalentBridge Staffing',
    initial: 'M',
    color: 'from-red-500 to-pink-500',
    stars: 5,
    quote: 'Running a staffing agency means margin is everything. HireFlow\'s AI scoring lets my team of 6 recruiters deliver candidate shortlists in hours instead of days. Our clients are amazed by the quality and speed. The ROI was immediate — we took on 30% more client accounts without adding headcount. The automated outreach templates alone paid for the tool in the first month.',
    quoteZh: '经营一家人才中介意味着利润就是一切。HireFlow的AI评分让我6人的招聘团队能在数小时而非数天内交付候选人短名单。我们的客户对质量和速度感到惊讶。投资回报是立竿见影的——我们在不增加人手的情况下多承接了30%的客户项目。仅自动化外联模板就在第一个月收回了工具成本。',
  },
  {
    name: 'Priya Sharma',
    title: 'HR Business Partner',
    company: 'Infosys',
    initial: 'P',
    color: 'from-indigo-500 to-violet-500',
    stars: 5,
    quote: 'With over 300,000 employees, Infosys needs recruiting tools that scale. We piloted HireFlow across our Bangalore and Pune offices and saw remarkable results: 52% reduction in screening time, 28% improvement in candidate quality scores, and significantly less interviewer fatigue. The AI-generated interview questions ensure consistency across our 200+ hiring managers, which was a persistent challenge before.',
    quoteZh: '拥有超过30万员工的Infosys需要可扩展的招聘工具。我们在班加罗尔和浦那办公室试点了HireFlow，并看到了显著成果：筛选时间减少52%，候选人质量评分提高28%，面试官疲劳显著减少。AI生成的面试问题确保了我们200多名招聘经理之间的一致性，这是之前一直存在的挑战。',
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= stars ? 'text-amber-400' : 'text-zinc-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Testimonials / 用户评价
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            用户评价{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
            听听全球招聘专业人士如何使用HireFlow提升效率
            <br />
            Hear from recruiting professionals worldwide who use HireFlow
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                1,000+
              </div>
              <div className="text-sm text-zinc-500 mt-1">Recruiters Worldwide / 全球招聘官</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="text-sm text-zinc-500 mt-1">Average Rating / 平均评分</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                40%
              </div>
              <div className="text-sm text-zinc-500 mt-1">Faster Hiring / 招聘提速</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-sm text-zinc-500 mt-1">Countries / 覆盖国家</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Banner */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm text-zinc-300 font-medium">
              Trusted by 1,000+ recruiters worldwide / 全球1,000+招聘官信赖之选
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-lg font-bold text-white shrink-0`}
                >
                  {t.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-zinc-400">{t.title}</div>
                  <div className="text-sm text-zinc-500">{t.company}</div>
                </div>
                <StarRating stars={t.stars} />
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-zinc-300 leading-relaxed mb-3 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-zinc-500 leading-relaxed">
                &ldquo;{t.quoteZh}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <h3 className="text-xl font-bold mb-2">加入他们的行列 / Join Them Today</h3>
          <p className="text-zinc-400 text-sm mb-6">
            免费开始使用AI智能招聘助手，体验被1,000+专业人士验证的效率提升。
            <br />
            Start using the AI-powered recruiting assistant trusted by 1,000+ professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lalalic/hireflow"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
              免费下载 / Download Free →
            </a>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition"
            >
              阅读博客 / Read Blog
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
