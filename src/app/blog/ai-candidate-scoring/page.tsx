import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Score Candidates with AI: A Complete Guide - HireFlow Blog',
  description: 'Learn how to use AI-powered candidate scoring to evaluate talent objectively. Covers skill match, experience relevance, cultural fit, and score interpretation. 学习如何用AI评分系统客观评估人才。',
  keywords: 'AI candidate scoring, candidate evaluation, skill match, cultural fit, hiring automation, resume scoring, AI recruiting guide, 候选人评分, AI评估, 技能匹配, 文化适配',
};

export default function AICandidateScoringPage() {
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
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition">
            ← 返回博客 / Back to Blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                Guide
              </span>
              <span className="text-xs text-zinc-500">2026-03-14</span>
              <span className="text-xs text-zinc-600">·</span>
              <span className="text-xs text-zinc-500">7 min read / 7分钟阅读</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              How to Score Candidates with AI
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-2">
              A Complete Guide
            </p>
            <p className="text-lg text-zinc-500">
              如何用AI评分候选人：完整指南
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-base leading-relaxed">
            {/* Why AI Scoring */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why AI Scoring? / 为什么用AI评分？
              </h2>
              <p className="text-zinc-300 mb-4">
                Hiring decisions are among the most consequential choices a company makes — yet most organizations still rely on gut feeling and inconsistent manual reviews. A recruiter scanning 200 resumes will inevitably evaluate the first and last candidate differently, even with the best intentions. AI candidate scoring solves this by applying the same objective criteria to every applicant, producing a quantifiable score that reflects true fit. The result is faster shortlisting, reduced bias, and higher-quality hires. Studies show that structured, data-driven screening can improve quality-of-hire by up to 25% while cutting time-to-fill in half.
              </p>
              <p className="text-zinc-400">
                招聘决策是公司做出的最重要决定之一——然而大多数组织仍然依赖直觉和不一致的手动审查。一位招聘官筛选200份简历时，即使出于最好的意愿，也不可避免地会对第一位和最后一位候选人做出不同的评估。AI候选人评分通过对每位申请者应用相同的客观标准来解决这个问题，产生一个反映真实匹配度的可量化分数。结果是更快的候选人筛选、更少的偏见和更高质量的招聘。研究表明，结构化的数据驱动筛选可以将招聘质量提高25%，同时将招聘周期缩短一半。
              </p>
            </section>

            {/* The 3 Pillars */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The 3 Pillars of AI Candidate Scoring / AI候选人评分的三大支柱
              </h2>
              <p className="text-zinc-300 mb-4">
                Effective AI scoring isn&apos;t a single number pulled from thin air. It&apos;s built on three distinct pillars, each measuring a different dimension of candidate–role alignment:
              </p>
              <div className="space-y-4 mb-4">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <h3 className="font-semibold text-blue-400 mb-1">1. Skill Match / 技能匹配</h3>
                  <p className="text-zinc-300 text-sm">
                    Does the candidate possess the technical skills, certifications, and domain expertise required for the role? AI engines parse resumes using NLP to identify not just keyword matches but semantic equivalents — for example, recognizing that &quot;React Native&quot; experience is relevant to a &quot;Mobile Developer&quot; position even if the exact phrase isn&apos;t listed.
                  </p>
                  <p className="text-zinc-500 text-sm mt-1">
                    候选人是否具备该职位所需的技术技能、资格认证和领域专长？AI引擎使用NLP解析简历，不仅识别关键词匹配，还识别语义等价物——例如，识别出"React Native"经验与"移动开发者"职位相关，即使没有列出完全匹配的短语。
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <h3 className="font-semibold text-purple-400 mb-1">2. Experience Relevance / 经验相关性</h3>
                  <p className="text-zinc-300 text-sm">
                    Years of experience alone don&apos;t tell the full story. AI evaluates the quality and relevance of past roles — a candidate with 3 years at a high-growth startup may score higher for a fast-paced role than someone with 10 years in a slow-moving enterprise. Industry overlap, project complexity, and career trajectory all factor into this pillar.
                  </p>
                  <p className="text-zinc-500 text-sm mt-1">
                    仅凭工作年限并不能说明全部情况。AI评估过往角色的质量和相关性——一位在高增长创业公司工作3年的候选人，对于快节奏的岗位可能比在缓慢发展的大企业工作10年的人得分更高。行业重叠度、项目复杂性和职业发展轨迹都是这一支柱的评估因素。
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <h3 className="font-semibold text-green-400 mb-1">3. Cultural Fit / 文化适配</h3>
                  <p className="text-zinc-300 text-sm">
                    This is the most nuanced pillar. AI analyzes signals like communication style in cover letters, values expressed in personal projects, and alignment with the company&apos;s stated mission. While no algorithm can perfectly predict cultural fit, AI can surface patterns — such as a candidate&apos;s open-source contributions or volunteer work — that indicate shared values with the hiring organization.
                  </p>
                  <p className="text-zinc-500 text-sm mt-1">
                    这是最细致的支柱。AI分析诸如求职信中的沟通风格、个人项目中表达的价值观以及与公司使命的契合度等信号。虽然没有算法能完美预测文化适配，但AI可以发现模式——例如候选人的开源贡献或志愿者工作——表明与招聘组织共享的价值观。
                  </p>
                </div>
              </div>
            </section>

            {/* Setting Up Scoring Criteria */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Setting Up Your Scoring Criteria / 设置你的评分标准
              </h2>
              <p className="text-zinc-300 mb-4">
                The quality of AI scoring depends entirely on the quality of your input. Start by defining clear job requirements with weighted priorities. In HireFlow, you paste the full job description and the AI automatically extracts must-have vs. nice-to-have skills, seniority expectations, and industry context. You can then fine-tune weights: for a senior engineering role, you might weight Skill Match at 50%, Experience at 35%, and Cultural Fit at 15%. For a people-manager role, you might flip those ratios.
              </p>
              <p className="text-zinc-400 mb-4">
                AI评分的质量完全取决于你输入的质量。首先定义清晰的职位要求并设置加权优先级。在HireFlow中，你粘贴完整的职位描述，AI会自动提取必备技能与加分技能、资历期望和行业背景。然后你可以微调权重：对于高级工程师岗位，你可以将技能匹配设为50%、经验35%、文化适配15%。对于管理岗位，你可以反转这些比例。
              </p>
              <p className="text-zinc-300">
                <strong>Pro tip:</strong> Include 3–5 example traits of your top performers in the job description. For example: &quot;Our best engineers write clean, well-tested code and proactively mentor junior team members.&quot; AI scoring engines use these signals to calibrate Cultural Fit scoring with remarkable accuracy.
              </p>
              <p className="text-zinc-500 mt-1">
                <strong>专业建议：</strong>在职位描述中加入3-5个你最优秀员工的特征示例。例如："我们最好的工程师编写干净、经过充分测试的代码，并主动指导初级团队成员。"AI评分引擎利用这些信号以高精度校准文化适配评分。
              </p>
            </section>

            {/* Interpreting AI Scores */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Interpreting AI Scores / 解读AI评分
              </h2>
              <p className="text-zinc-300 mb-6">
                HireFlow generates scores on a 0–100 scale. Here&apos;s how to interpret them and what action to take at each level:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                  <span className="text-lg font-bold text-green-400 whitespace-nowrap">80–100</span>
                  <div>
                    <p className="text-zinc-300 text-sm font-semibold">Strong Match / 强匹配</p>
                    <p className="text-zinc-400 text-sm">Fast-track to interview. These candidates meet or exceed requirements across all three pillars. Reach out within 24 hours — top talent gets snapped up fast.</p>
                    <p className="text-zinc-500 text-sm">快速进入面试。这些候选人在三大支柱上都达到或超过要求。24小时内联系——顶尖人才很快会被抢走。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <span className="text-lg font-bold text-blue-400 whitespace-nowrap">60–79</span>
                  <div>
                    <p className="text-zinc-300 text-sm font-semibold">Good Fit / 良好匹配</p>
                    <p className="text-zinc-400 text-sm">Worth a closer look. These candidates are strong in most areas but may have gaps — perhaps lacking one nice-to-have skill or coming from an adjacent industry. Review the detailed breakdown before deciding.</p>
                    <p className="text-zinc-500 text-sm">值得仔细查看。这些候选人在大多数方面很强，但可能有差距——也许缺少一项加分技能或来自相邻行业。决定前查看详细分析。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                  <span className="text-lg font-bold text-yellow-400 whitespace-nowrap">40–59</span>
                  <div>
                    <p className="text-zinc-300 text-sm font-semibold">Partial Match / 部分匹配</p>
                    <p className="text-zinc-400 text-sm">Proceed with caution. These candidates match some criteria but have notable gaps. Consider only if your pipeline is thin or if they have exceptional strengths in one pillar that compensate for weaknesses in others.</p>
                    <p className="text-zinc-500 text-sm">谨慎推进。这些候选人符合部分标准但有明显差距。仅在你的候选人管道不足或他们在某一支柱上有突出优势可以弥补其他方面不足时考虑。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                  <span className="text-lg font-bold text-red-400 whitespace-nowrap">&lt; 40</span>
                  <div>
                    <p className="text-zinc-300 text-sm font-semibold">Weak Match / 弱匹配</p>
                    <p className="text-zinc-400 text-sm">Generally not recommended. Significant misalignment across multiple dimensions. Archive and keep in talent pool for different future roles where they may be a better fit.</p>
                    <p className="text-zinc-500 text-sm">通常不推荐。多个维度存在显著不匹配。归档并保留在人才库中，等待他们可能更适合的未来职位。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Common Mistakes to Avoid / 常见错误
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <p className="text-zinc-300 mb-1"><strong>❌ Treating AI scores as absolute truth</strong> — AI is a decision-support tool, not a decision-maker. Always review the qualitative assessment alongside the numeric score. A candidate scoring 72 with outstanding leadership experience may be better than a 85 who lacks team management skills your role demands.</p>
                  <p className="text-zinc-500 text-sm">把AI分数当作绝对真理——AI是决策辅助工具，而非决策者。始终将定性评估与数值分数一起审查。一位得分72但具有出色领导经验的候选人可能优于得分85但缺乏你岗位所需团队管理技能的候选人。</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <p className="text-zinc-300 mb-1"><strong>❌ Using vague job descriptions</strong> — &quot;Looking for a rockstar developer&quot; gives AI nothing to work with. Be specific: list technologies, years of experience, project types, and team dynamics. The more precise your input, the more accurate the scoring.</p>
                  <p className="text-zinc-500 text-sm">使用模糊的职位描述——"寻找一位明星开发者"让AI无从下手。要具体：列出技术栈、工作年限、项目类型和团队协作方式。你的输入越精确，评分就越准确。</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <p className="text-zinc-300 mb-1"><strong>❌ Ignoring the pillar breakdown</strong> — A composite score of 70 could mean balanced 70s across the board, or a 95 in skills with a 45 in cultural fit. Always drill into the sub-scores to understand the full picture before making decisions.</p>
                  <p className="text-zinc-500 text-sm">忽略支柱分项——综合70分可能意味着各项均衡的70分，也可能是技能95分但文化适配45分。在做决定前，始终深入子分数以了解全貌。</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <p className="text-zinc-300 mb-1"><strong>❌ Scoring without calibration</strong> — Run your first 10–20 candidates as a calibration batch. Compare AI scores against your own assessments to verify alignment, then adjust weights if needed. This initial investment pays dividends in accuracy.</p>
                  <p className="text-zinc-500 text-sm">不经校准就评分——将前10-20位候选人作为校准批次运行。将AI分数与你自己的评估进行比较以验证一致性，然后根据需要调整权重。这一初始投资将在准确性上获得回报。</p>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Getting Started with HireFlow / 开始使用HireFlow
              </h2>
              <p className="text-zinc-300 mb-4">
                HireFlow makes AI candidate scoring effortless. Simply create a job position, paste the job description, and add candidate resumes — HireFlow&apos;s multi-engine AI (GPT-4, Qwen, DeepSeek) scores each candidate on a 0–100 scale with detailed breakdowns across Skill Match, Experience Relevance, and Cultural Fit. All data stays on your device with our privacy-first architecture, so you can evaluate candidates without worrying about sensitive information leaving your control.
              </p>
              <p className="text-zinc-400 mb-4">
                HireFlow让AI候选人评分变得轻松。只需创建一个职位、粘贴职位描述并添加候选人简历——HireFlow的多引擎AI（GPT-4、通义千问、DeepSeek）会为每位候选人生成0-100分的评分，并提供技能匹配、经验相关性和文化适配的详细分析。所有数据通过我们的隐私优先架构保留在你的设备上，让你在评估候选人时无需担心敏感信息离开你的控制。
              </p>
              <p className="text-zinc-300">
                Three steps to your first AI score: <strong>1)</strong> Download HireFlow and add your AI API key. <strong>2)</strong> Create a position and paste the job description. <strong>3)</strong> Add a candidate resume and tap &quot;AI Score&quot; — results appear in seconds with actionable insights.
              </p>
              <p className="text-zinc-500 mt-1">
                获得你的第一个AI评分只需三步：<strong>1)</strong> 下载HireFlow并添加你的AI API密钥。<strong>2)</strong> 创建职位并粘贴职位描述。<strong>3)</strong> 添加候选人简历并点击"AI评分"——结果将在几秒钟内显示，并附带可操作的洞察。
              </p>
            </section>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
            <h3 className="text-xl font-bold mb-2">
              Ready to Score Smarter? / 准备好更智能地评分了吗？
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              HireFlow&apos;s AI scoring gives you objective, consistent candidate evaluations in seconds — not hours.
              <br />
              HireFlow的AI评分让你在几秒内获得客观、一致的候选人评估——而非数小时。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/lalalic/hireflow"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
              >
                Try HireFlow Today / 立即试用 →
              </a>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition"
              >
                了解更多 / Learn More
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link href="/blog" className="text-sm text-zinc-400 hover:text-blue-400 transition">
              ← 返回博客列表 / Back to Blog
            </Link>
          </div>
        </div>
      </article>

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
