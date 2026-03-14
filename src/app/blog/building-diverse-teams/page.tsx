import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Diverse Teams with AI: Reducing Bias in Hiring - HireFlow Blog',
  description: 'Learn how AI-powered recruiting tools can help reduce unconscious bias, standardize evaluations, and build more diverse teams. 了解AI招聘工具如何减少无意识偏见、标准化评估并建立更多元化的团队。',
  keywords: 'diversity hiring, AI bias reduction, inclusive recruiting, blind resume screening, structured assessments, 多元化招聘, AI减少偏见, 盲筛简历, 结构化评估',
};

export default function BuildingDiverseTeamsPage() {
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
                Diversity & Inclusion
              </span>
              <span className="text-xs text-zinc-500">2026-03-14</span>
              <span className="text-xs text-zinc-600">·</span>
              <span className="text-xs text-zinc-500">7 min read / 7分钟阅读</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Building Diverse Teams with AI
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-2">
              Reducing Bias in Hiring
            </p>
            <p className="text-lg text-zinc-500">
              用AI构建多元化团队：减少招聘中的偏见
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-base leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Introduction / 引言
              </h2>
              <p className="text-zinc-300 mb-4">
                Diversity and inclusion have become central priorities for organizations worldwide. Research consistently shows that diverse teams outperform homogeneous ones — companies in the top quartile for ethnic diversity are 36% more likely to achieve above-average profitability. Yet despite good intentions, unconscious bias continues to undermine hiring decisions. AI-powered recruiting tools offer a powerful pathway to more equitable hiring by standardizing evaluations and reducing the influence of subjective judgments.
              </p>
              <p className="text-zinc-400">
                多元化与包容性已成为全球组织的核心优先事项。研究一致表明，多元化团队的表现优于同质化团队——在种族多元化方面处于前四分之一的公司，实现高于平均盈利能力的可能性高出36%。然而，尽管意图良好，无意识偏见仍在持续影响招聘决策。AI驱动的招聘工具通过标准化评估和减少主观判断的影响，为更公平的招聘提供了一条强大的路径。
              </p>
            </section>

            {/* The Problem of Unconscious Bias */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Problem of Unconscious Bias / 无意识偏见的问题
              </h2>
              <p className="text-zinc-300 mb-4">
                Unconscious bias affects every stage of traditional recruiting. Studies show that resumes with stereotypically &quot;white-sounding&quot; names receive 50% more callbacks than identical resumes with minority-associated names. Gender bias leads to women being evaluated more harshly for the same qualifications. Age, education pedigree, and even hobbies listed on a resume can trigger biased judgments. These biases are not intentional — they are deeply ingrained cognitive shortcuts that even well-meaning recruiters cannot fully control. The result is a hiring pipeline that systematically filters out qualified candidates from underrepresented groups.
              </p>
              <p className="text-zinc-400">
                无意识偏见影响着传统招聘的每一个环节。研究表明，带有典型"白人姓名"的简历比带有少数族裔相关姓名的相同简历多获得50%的回复。性别偏见导致女性在相同资质下受到更严格的评价。年龄、教育背景，甚至简历上列出的爱好，都可能触发带有偏见的判断。这些偏见不是有意的——它们是根深蒂固的认知捷径，即使善意的招聘官也无法完全控制。最终结果是一个系统性地将来自代表性不足群体的合格候选人过滤掉的招聘管道。
              </p>
            </section>

            {/* How AI Can Help */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                How AI Standardizes Evaluations / AI如何标准化评估
              </h2>
              <p className="text-zinc-300 mb-4">
                AI recruiting tools address bias by applying consistent evaluation criteria to every candidate. Unlike human reviewers who may unconsciously weigh factors differently from one resume to the next, AI scoring systems evaluate each candidate against the same objective benchmarks. HireFlow&apos;s multi-engine AI scoring — powered by GPT-4, Qwen, and DeepSeek — analyzes skills, experience, and role fit using standardized rubrics, producing transparent 0-100 scores with detailed breakdowns. This consistency ensures that a candidate&apos;s evaluation depends on their qualifications, not on who reviews their resume or when it&apos;s reviewed.
              </p>
              <p className="text-zinc-400">
                AI招聘工具通过对每位候选人应用一致的评估标准来解决偏见问题。与可能在不同简历之间无意识地以不同权重衡量因素的人工审查者不同，AI评分系统根据相同的客观基准评估每位候选人。HireFlow的多引擎AI评分——由GPT-4、通义千问和DeepSeek驱动——使用标准化的评估标准分析技能、经验和岗位适配度，生成透明的0-100分评分和详细的分项报告。这种一致性确保候选人的评估取决于其资质，而不是谁审查了他们的简历或何时被审查。
              </p>
            </section>

            {/* Blind Resume Screening */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Blind Resume Screening / 盲筛简历
              </h2>
              <p className="text-zinc-300 mb-4">
                One of the most effective strategies for reducing bias is blind resume screening — removing identifying information such as names, photos, ages, and educational institutions before evaluation. AI makes this practical at scale. Automated systems can strip demographic indicators while preserving the substantive content that matters: skills, accomplishments, and relevant experience. When recruiters see only qualifications, their assessments become dramatically more equitable. Organizations that have adopted blind screening report up to 46% increases in the diversity of candidates advancing to interviews.
              </p>
              <p className="text-zinc-400">
                减少偏见最有效的策略之一是盲筛简历——在评估前移除姓名、照片、年龄和教育机构等识别信息。AI使这一做法在大规模上变得可行。自动化系统可以去除人口统计指标，同时保留真正重要的实质性内容：技能、成就和相关经验。当招聘官只看到资质时，他们的评估会显著更加公平。采用盲筛的组织报告称，进入面试阶段的候选人多元化程度提高了多达46%。
              </p>
            </section>

            {/* Structured Assessments */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Structured Assessments / 结构化评估
              </h2>
              <p className="text-zinc-300 mb-4">
                AI enables structured assessment frameworks that go beyond resume screening. AI-generated interview questions tailored to specific role requirements ensure every candidate faces the same evaluation criteria. This eliminates the variance introduced by unstructured interviews, where different interviewers may focus on entirely different aspects. Structured assessments also produce comparable data across candidates, making it easier to justify hiring decisions with objective evidence. HireFlow&apos;s AI interview question generator creates role-specific, standardized question sets that help interviewers focus on competencies rather than gut feelings.
              </p>
              <p className="text-zinc-400">
                AI支持超越简历筛选的结构化评估框架。针对特定岗位要求定制的AI生成面试问题确保每位候选人面对相同的评估标准。这消除了非结构化面试中引入的差异——在非结构化面试中，不同的面试官可能关注完全不同的方面。结构化评估还能产生跨候选人的可比较数据，使招聘决策更容易用客观证据来证明。HireFlow的AI面试问题生成器创建针对特定岗位的标准化问题集，帮助面试官关注能力而非直觉。
              </p>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Best Practices for AI-Driven Diversity Hiring / AI驱动多元化招聘的最佳实践
              </h2>
              <p className="text-zinc-300 mb-4">
                To maximize the impact of AI on diversity hiring, organizations should follow these best practices: First, audit your AI tools regularly to ensure they are not perpetuating existing biases present in historical training data. Second, combine AI screening with blind evaluation processes for maximum impact. Third, use structured AI-generated interview frameworks consistently across all candidates. Fourth, track diversity metrics at every pipeline stage to identify and address drop-off points. Fifth, maintain human oversight — AI should augment, not replace, the final decision. Finally, ensure your job descriptions use inclusive language; AI tools can help flag exclusionary terms that may discourage diverse applicants from applying.
              </p>
              <p className="text-zinc-400">
                为了最大限度地发挥AI对多元化招聘的影响，组织应遵循以下最佳实践：第一，定期审计AI工具，确保它们不会延续历史训练数据中存在的既有偏见。第二，将AI筛选与盲评流程相结合以获得最大效果。第三，对所有候选人一致使用结构化的AI面试框架。第四，在管道的每个阶段跟踪多元化指标，以识别和解决流失点。第五，保持人工监督——AI应该增强而非取代最终决策。最后，确保职位描述使用包容性语言；AI工具可以帮助标记可能阻碍多元化申请人投递的排斥性用语。
              </p>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Conclusion / 结论
              </h2>
              <p className="text-zinc-300 mb-4">
                Building diverse teams is both a moral imperative and a business advantage. AI-powered recruiting tools like HireFlow provide the technological foundation to make equitable hiring a reality — not just an aspiration. By standardizing evaluations, enabling blind screening, and structuring assessments around objective criteria, AI helps organizations tap into the full breadth of available talent. The future of hiring is not just smarter — it&apos;s fairer.
              </p>
              <p className="text-zinc-400">
                建立多元化团队既是道德使命，也是商业优势。像HireFlow这样的AI驱动招聘工具提供了技术基础，使公平招聘成为现实——而不仅仅是期望。通过标准化评估、实现盲筛和围绕客观标准构建评估体系，AI帮助组织挖掘所有可用人才的全部潜力。招聘的未来不仅更智能——而且更公平。
              </p>
            </section>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
            <h3 className="text-xl font-bold mb-2">
              Ready to Build More Diverse Teams? / 准备好建立更多元化的团队了吗？
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              HireFlow&apos;s AI scoring provides consistent, bias-aware evaluations for every candidate.
              <br />
              HireFlow的AI评分为每位候选人提供一致的、意识到偏见的评估。
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
