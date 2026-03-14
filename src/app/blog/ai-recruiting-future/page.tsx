import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Future of AI-Powered Recruiting: How Technology is Transforming Talent Acquisition - HireFlow Blog',
  description: 'Explore how AI recruiting technology is transforming talent acquisition — from automated candidate screening and AI-powered outreach to data-driven hiring decisions. 探索AI招聘技术如何改变人才获取。',
  keywords: 'AI recruiting, talent acquisition, candidate screening, automated outreach, AI hiring, 人工智能招聘, 候选人筛选, 自动化外联',
};

export default function AIRecruitingFuturePage() {
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
                AI Recruiting
              </span>
              <span className="text-xs text-zinc-500">2026-03-14</span>
              <span className="text-xs text-zinc-600">·</span>
              <span className="text-xs text-zinc-500">8 min read / 8分钟阅读</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              The Future of AI-Powered Recruiting
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-2">
              How Technology is Transforming Talent Acquisition
            </p>
            <p className="text-lg text-zinc-500">
              AI驱动招聘的未来：技术如何改变人才获取
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
                The recruiting landscape is undergoing a fundamental transformation. Artificial intelligence is no longer a futuristic concept in talent acquisition — it&apos;s a present-day reality that&apos;s reshaping how companies find, evaluate, and hire top talent. From AI-powered candidate screening to automated outreach and predictive analytics, the tools available to recruiters today would have seemed like science fiction just a decade ago.
              </p>
              <p className="text-zinc-400">
                招聘领域正在经历一场根本性的变革。人工智能在人才获取中已不再是未来概念——它是一个正在重塑企业如何发现、评估和录用顶尖人才的现实。从AI驱动的候选人筛选到自动化外联和预测分析，今天招聘官可用的工具在十年前看来就像科幻小说。
              </p>
            </section>

            {/* Current State */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Current State of Recruiting / 招聘现状
              </h2>
              <p className="text-zinc-300 mb-4">
                Traditional recruiting is time-consuming and often inconsistent. Recruiters spend an average of 23 hours screening resumes for a single hire. Manual processes lead to unconscious bias, missed candidates, and slow time-to-fill metrics. In a competitive talent market, these inefficiencies can cost companies their best prospects. The sheer volume of applications — sometimes hundreds per position — makes it nearly impossible to give each candidate the attention they deserve.
              </p>
              <p className="text-zinc-400">
                传统招聘既耗时又常常不一致。招聘官平均花费23个小时为一个职位筛选简历。手动流程导致无意识偏见、遗漏候选人和招聘周期过长。在竞争激烈的人才市场中，这些低效可能让公司失去最优秀的候选人。每个职位动辄数百份申请的庞大数量，使得几乎不可能给予每位候选人应有的关注。
              </p>
            </section>

            {/* AI in Candidate Screening */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI in Candidate Screening / AI候选人筛选
              </h2>
              <p className="text-zinc-300 mb-4">
                AI-powered candidate screening represents one of the most impactful applications of artificial intelligence in recruiting. Modern AI systems can analyze resumes, evaluate skill matches, and score candidates against job requirements in seconds — a process that would take human recruiters hours or even days. These systems use natural language processing to understand context, not just keywords, resulting in more accurate and nuanced evaluations. Tools like HireFlow leverage multiple AI engines including GPT-4, Qwen, and DeepSeek to provide comprehensive 0-100 scoring with detailed assessment reports covering skill match, experience relevance, and cultural fit.
              </p>
              <p className="text-zinc-400">
                AI驱动的候选人筛选是人工智能在招聘领域最具影响力的应用之一。现代AI系统可以在几秒钟内分析简历、评估技能匹配度并根据职位要求为候选人评分——这个过程人工招聘官需要数小时甚至数天。这些系统利用自然语言处理来理解上下文，而不仅仅是关键词，从而产生更准确、更细致的评估。像HireFlow这样的工具利用包括GPT-4、通义千问和DeepSeek在内的多个AI引擎，提供全面的0-100分评分和涵盖技能匹配度、经验相关性和文化适配性的详细评估报告。
              </p>
            </section>

            {/* Automated Outreach */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automated Outreach / 自动化外联
              </h2>
              <p className="text-zinc-300 mb-4">
                Personalized outreach at scale has always been the holy grail of recruiting. AI makes this possible by generating tailored messages that reference specific aspects of a candidate&apos;s background, skills, and career trajectory. Rather than sending generic templates that candidates immediately recognize (and ignore), AI-crafted outreach feels genuinely personal. The result? Response rates that are 2-3x higher than traditional templates. AI can also optimize send times, suggest follow-up cadences, and even adapt messaging tone based on the candidate&apos;s communication style and seniority level.
              </p>
              <p className="text-zinc-400">
                规模化的个性化外联一直是招聘的圣杯。AI通过生成引用候选人背景、技能和职业轨迹具体方面的定制消息使这成为可能。与候选人一眼就能识别（并忽略）的通用模板不同，AI撰写的外联消息感觉真正个性化。结果？回复率比传统模板高2-3倍。AI还可以优化发送时间、建议跟进节奏，甚至根据候选人的沟通风格和资历级别调整消息语气。
              </p>
            </section>

            {/* Data-Driven Decisions */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data-Driven Hiring Decisions / 数据驱动的招聘决策
              </h2>
              <p className="text-zinc-300 mb-4">
                One of AI&apos;s greatest strengths in recruiting is its ability to remove subjectivity from the evaluation process. By analyzing candidates against objective criteria, AI scoring systems provide consistent, bias-aware assessments. This doesn&apos;t mean removing human judgment — rather, it means giving recruiters better data to inform their decisions. Predictive analytics can identify which candidates are most likely to accept offers, succeed in roles, and stay long-term, helping organizations make smarter investments in talent. Visual pipeline analytics transform raw recruiting data into actionable insights, showing bottleneck stages, conversion rates, and time-to-hire trends.
              </p>
              <p className="text-zinc-400">
                AI在招聘中最大的优势之一是能够消除评估过程中的主观性。通过根据客观标准分析候选人，AI评分系统提供一致的、意识到偏见的评估。这并不意味着消除人工判断——而是意味着给招聘官更好的数据来支持他们的决策。预测分析可以识别哪些候选人最有可能接受offer、在岗位上取得成功并长期留任，帮助组织在人才方面做出更明智的投资。可视化的招聘管道分析将原始招聘数据转化为可操作的洞察，显示瓶颈阶段、转化率和招聘周期趋势。
              </p>
            </section>

            {/* Human Judgment */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Role of Human Judgment / 人工判断的角色
              </h2>
              <p className="text-zinc-300 mb-4">
                Despite AI&apos;s impressive capabilities, the most effective recruiting strategies combine artificial intelligence with human expertise. AI excels at processing large volumes of data, identifying patterns, and maintaining consistency. Humans excel at evaluating cultural fit nuances, reading between the lines in conversations, building authentic relationships, and making final judgment calls that require emotional intelligence. The ideal model is one where AI handles the labor-intensive screening and scoring, freeing recruiters to focus on what they do best: connecting with people, understanding motivations, and selling opportunities.
              </p>
              <p className="text-zinc-400">
                尽管AI能力令人印象深刻，但最有效的招聘策略是将人工智能与人类专业知识相结合。AI擅长处理大量数据、识别模式和保持一致性。人类擅长评估文化适配的细微差别、在对话中读懂言外之意、建立真实关系，以及做出需要情商的最终判断。理想的模式是让AI处理劳动密集型的筛选和评分，让招聘官专注于他们最擅长的事情：与人建立联系、理解动机和推销机会。
              </p>
            </section>

            {/* Future Trends */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Future Trends / 未来趋势
              </h2>
              <p className="text-zinc-300 mb-4">
                Looking ahead, several exciting trends are emerging in AI recruiting. Multi-modal AI will analyze video interviews, assessing communication skills and presentation alongside traditional resume data. Privacy-first architectures will become the standard, with tools storing sensitive candidate data locally rather than in the cloud — an approach already pioneered by platforms like HireFlow. Multi-language AI capabilities will break down barriers in global recruiting, enabling seamless evaluation of candidates regardless of the language their resume is written in. We&apos;ll also see AI-generated interview questions tailored to each candidate&apos;s unique background, making the interview process more efficient and revealing.
              </p>
              <p className="text-zinc-400">
                展望未来，AI招聘领域正在出现几个令人兴奋的趋势。多模态AI将分析视频面试，在传统简历数据之外评估沟通技能和演示能力。隐私优先的架构将成为标准，工具将敏感的候选人数据存储在本地而非云端——这是HireFlow等平台已经率先采用的方法。多语言AI能力将打破全球招聘的障碍，实现对候选人的无缝评估，无论其简历使用何种语言。我们还将看到根据每位候选人独特背景量身定制的AI生成面试问题，使面试过程更加高效和有洞察力。
              </p>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Conclusion / 结论
              </h2>
              <p className="text-zinc-300 mb-4">
                The future of recruiting is intelligent, efficient, and human-centered. AI doesn&apos;t replace recruiters — it empowers them. By automating repetitive tasks like candidate screening and outreach generation, AI frees recruiting professionals to focus on strategic, high-value activities: building relationships, negotiating offers, and shaping organizational culture. The companies that embrace AI recruiting tools today will have a significant competitive advantage in the talent wars of tomorrow. The question is no longer whether to adopt AI in recruiting, but how quickly you can integrate it into your workflow.
              </p>
              <p className="text-zinc-400">
                招聘的未来是智能的、高效的、以人为中心的。AI不会取代招聘官——而是赋能他们。通过自动化候选人筛选和外联消息生成等重复性任务，AI让招聘专业人士能够专注于战略性的高价值活动：建立关系、谈判offer和塑造组织文化。今天拥抱AI招聘工具的公司，将在明天的人才争夺战中拥有显著的竞争优势。问题不再是是否在招聘中采用AI，而是你能多快地将其整合到你的工作流程中。
              </p>
            </section>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
            <h3 className="text-xl font-bold mb-2">
              Ready to Transform Your Recruiting? / 准备好改变你的招聘方式了吗？
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              HireFlow combines AI candidate scoring, automated outreach, and interview question generation in one privacy-first app.
              <br />
              HireFlow将AI候选人评分、自动化外联和面试问题生成集成在一个隐私优先的应用中。
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
