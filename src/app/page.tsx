import InteractiveDemo from './InteractiveDemo';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">H</div>
            <span className="font-bold text-lg">HireFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition">功能</a>
            <a href="#demo" className="hover:text-white transition">演示</a>
            <a href="#how" className="hover:text-white transition">使用方法</a>
            <a href="/pricing" className="hover:text-white transition">定价</a>
            <a href="/services" className="hover:text-white transition">Services</a>
            <a href="/course" className="hover:text-amber-400 text-amber-400/80 transition font-medium">AI招聘课 🔥</a>
            <a href="/case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="/changelog" className="hover:text-white transition">Changelog</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/integrations" className="hover:text-white transition">Integrations</a>
            <a href="/testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="/faq" className="hover:text-white transition">FAQ</a>
          </div>
          <a href="https://github.com/lalalic/hireflow" target="_blank" className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition">
            免费下载
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            免费开始 · 数据100%本地存储
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI智能招聘助手
            <br />
            <span className="gradient-text">让招聘效率提升10倍</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            一键评分候选人 · 智能生成外联消息 · AI面试问题推荐
            <br />
            支持OpenAI、通义千问、DeepSeek，中英文双语
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://github.com/lalalic/hireflow" target="_blank"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:opacity-90 transition glow">
              立即免费下载
            </a>
            <a href="#how"
              className="px-8 py-4 rounded-xl border border-zinc-700 text-white font-semibold text-lg hover:bg-zinc-900 transition">
              了解更多 →
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 text-zinc-400 text-sm">
            <div><span className="text-2xl font-bold text-white">3</span> AI引擎支持</div>
            <div><span className="text-2xl font-bold text-white">10</span> 免费人才配额</div>
            <div><span className="text-2xl font-bold text-white">100%</span> 隐私安全</div>
            <div><span className="text-2xl font-bold text-white">中英</span> 双语支持</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            为什么选择 <span className="gradient-text">HireFlow</span>
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
            AI驱动的完整招聘工具链，从人才发现到录用全流程覆盖
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI候选人评分', desc: 'AI分析候选人技能、经验与职位匹配度，0-100分精准评分' },
              { icon: '✉️', title: '智能外联消息', desc: 'AI根据候选人背景自动生成个性化外联邮件和消息' },
              { icon: '🎯', title: '面试问题生成', desc: 'AI根据职位要求和候选人简历自动生成针对性面试问题' },
              { icon: '📊', title: '可视化招聘流程', desc: '从发现→联系→筛选→面试→录用，9个阶段全程可视化' },
              { icon: '🔒', title: '数据本地存储', desc: '所有人才数据存储在你的设备上，100%隐私安全' },
              { icon: '🌐', title: '中英文双语', desc: '界面、AI评分、消息生成均支持中英文，适合全球化招聘' },
            ].map((f, i) => (
              <div key={i} className="feature-card p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 transition-all duration-300">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">3步开始</span>智能招聘
          </h2>

          <div className="space-y-12">
            {[
              { step: '01', title: '添加人才', desc: '手动输入或CSV批量导入候选人信息。只需姓名和邮箱即可开始。', icon: '👤' },
              { step: '02', title: '创建职位', desc: '输入职位名称和公司，AI会帮你做剩下的匹配工作。', icon: '💼' },
              { step: '03', title: 'AI智能匹配', desc: '一键评分所有候选人，查看排名，生成外联消息，安排面试。', icon: '⚡' },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <div>
                  <div className="text-blue-400 text-sm font-mono mb-1">STEP {s.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <InteractiveDemo />

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            简单透明的 <span className="gradient-text">定价</span>
          </h2>
          <p className="text-zinc-400 text-center mb-16">免费开始，按需升级</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-1">免费版</h3>
              <p className="text-sm text-zinc-400 mb-4">个人试用</p>
              <div className="mb-6"><span className="text-4xl font-bold">¥0</span><span className="text-zinc-400">/月</span></div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-400">
                {['10个联系人', '5条AI消息/月', '基础AI评分', '本地数据存储', '中英文界面'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://github.com/lalalic/hireflow" target="_blank"
                className="block w-full py-3 rounded-lg border border-zinc-700 text-center font-medium hover:bg-zinc-800 transition">
                免费下载
              </a>
            </div>

            {/* Pro */}
            <div className="relative p-8 rounded-xl bg-zinc-900 border border-blue-500 glow scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-medium">
                最受欢迎
              </div>
              <h3 className="text-xl font-semibold mb-1">专业版</h3>
              <p className="text-sm text-zinc-400 mb-4">专业招聘</p>
              <div className="mb-6"><span className="text-4xl font-bold">¥199</span><span className="text-zinc-400">/月</span></div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-400">
                {['500个联系人', '无限AI消息', '高级AI分析', '批量候选人评分', 'AI面试问题', '优先技术支持'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/6oU14ndKJbCY5lm3cf" target="_blank"
                className="block w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-center font-medium hover:opacity-90 transition">
                立即升级
              </a>
            </div>

            {/* Agency */}
            <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-1">企业版</h3>
              <p className="text-sm text-zinc-400 mb-4">团队&猎头</p>
              <div className="mb-6"><span className="text-4xl font-bold">¥699</span><span className="text-zinc-400">/月</span></div>
              <ul className="space-y-3 mb-8 text-sm text-zinc-400">
                {['无限联系人', '专业版全部功能', 'API接入', '团队协作', '专属客户经理', 'SLA保障'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/8x228rg0R0Yk29abII" target="_blank"
                className="block w-full py-3 rounded-lg border border-zinc-700 text-center font-medium hover:bg-zinc-800 transition">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">常见问题</h2>
          <div className="space-y-6">
            {[
              { q: 'HireFlow是什么？', a: 'HireFlow是一款AI驱动的招聘助手App。支持智能候选人评分、外联消息生成、面试问题推荐等功能，帮助HR和招聘经理提升10倍招聘效率。' },
              { q: '数据安全吗？', a: '所有数据存储在你的设备本地（SQLite），不会上传到任何服务器。AI功能通过你自己的API Key调用，完全可控。' },
              { q: '支持哪些AI模型？', a: '支持OpenAI（GPT-4o-mini）、阿里通义千问（qwen-turbo）、DeepSeek（deepseek-chat）三大AI引擎，可随时切换。' },
              { q: '免费版有什么限制？', a: '免费版可管理10个联系人，每月5条AI消息。对于个人小规模招聘完全够用。升级专业版可获得500个联系人和无限AI消息。' },
              { q: '支持哪些平台？', a: '目前支持iOS。基于React Native开发，Android版本即将推出。' },
              { q: '可以批量导入候选人吗？', a: '可以。支持CSV文件批量导入，一键解析姓名、邮箱、公司、技能等信息。' },
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {faq.q}
                  <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What Recruiters Say / <span className="gradient-text">招聘官的评价</span>
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
            Trusted by recruiters worldwide / 全球招聘官信赖之选
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "HireFlow cut our screening time by 80%. The AI scoring is scary accurate — it surfaces candidates we would have missed manually. HireFlow将我们的筛选时间缩短了80%。AI评分精准得惊人——它能发现我们手动筛选会遗漏的候选人。",
                name: "Sarah Chen",
                title: "Tech Recruiter",
                company: "NovaTech Labs",
                initials: "SC",
              },
              {
                quote: "We rolled HireFlow out across 12 hiring managers. The consistency in candidate evaluation has been a game-changer for our DEI initiatives. 我们在12位招聘经理中推广了HireFlow。候选人评估的一致性对我们的多元化招聘计划来说是变革性的。",
                name: "Michael Rodriguez",
                title: "HR Director",
                company: "Pinnacle Industries",
                initials: "MR",
              },
              {
                quote: "Finally a tool that works seamlessly in both Chinese and English. My bilingual candidates get evaluated fairly regardless of which language their resume is in. 终于有一个能在中英文之间无缝切换的工具。我的双语候选人无论简历用哪种语言都能得到公正评估。",
                name: "刘明 (Ming Liu)",
                title: "Independent Recruiter",
                company: "明途猎聘",
                initials: "ML",
              },
              {
                quote: "I run a 15-person agency and HireFlow paid for itself in the first week. The AI-generated outreach messages get 3x the response rate of our old templates. 我经营着一家15人的猎头公司，HireFlow在第一周就收回了成本。AI生成的外联消息回复率是我们旧模板的3倍。",
                name: "James Whitfield",
                title: "Agency Owner",
                company: "Whitfield Talent Partners",
                initials: "JW",
              },
              {
                quote: "During peak campus recruiting season, I evaluated 500+ candidates in a single afternoon. Without HireFlow, that would have taken our team two weeks. 在校招高峰期，我一个下午就评估了500多位候选人。没有HireFlow的话，我们团队需要两周才能完成。",
                name: "Amanda Torres",
                title: "Campus Recruiter",
                company: "Redwood University",
                initials: "AT",
              },
              {
                quote: "For C-suite searches, discretion and precision matter. HireFlow's local data storage and nuanced AI analysis give me confidence when presenting shortlists to boards. 在高管猎聘中，保密性和精准度至关重要。HireFlow的本地数据存储和细致的AI分析让我在向董事会提交候选人名单时充满信心。",
                name: "Daniel Tan",
                title: "Executive Headhunter",
                company: "Apex Search Asia",
                initials: "DT",
              },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col gap-4">
                <div className="flex gap-1 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.title} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Hiring Smarter Today / 今天开始智能招聘
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of recruiters using AI to find the best talent / 加入数千名使用AI寻找最佳人才的招聘官
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#"
              className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold text-lg hover:bg-blue-50 transition">
              Download Free / 免费下载
            </a>
            <a href="#pricing"
              className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition">
              View Pricing / 查看定价
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            准备好提升<span className="gradient-text">招聘效率</span>了吗？
          </h2>
          <p className="text-zinc-400 mb-8">免费下载，立即体验AI智能招聘的魅力</p>
          <a href="https://github.com/lalalic/hireflow" target="_blank"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:opacity-90 transition glow">
            免费下载 HireFlow →
          </a>
        </div>
      </section>

      {/* Course Promo */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-4">
                新课上线 🎓
              </div>
              <h3 className="text-2xl font-bold mb-2">AI招聘实战课</h3>
              <p className="text-zinc-400 text-sm">6大模块 · 24节课 · 5小时视频 · 30+实战案例<br/>从零基础到精通AI招聘，¥199一次购买终身更新</p>
            </div>
            <a href="/course" className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:opacity-90 transition whitespace-nowrap shadow-lg shadow-amber-500/20">
              查看课程 →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">H</div>
            <span>HireFlow © 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/lalalic/hireflow" target="_blank" className="hover:text-white transition">GitHub</a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white transition">Twitter</a>
            <a href="/course" className="hover:text-white transition">AI招聘课</a>
            <a href="/case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="/changelog" className="hover:text-white transition">Changelog</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/pricing" className="hover:text-white transition">Pricing</a>
            <a href="/faq" className="hover:text-white transition">FAQ</a>
            <a href="/privacy" className="hover:text-white transition">隐私政策</a>
            <a href="/terms" className="hover:text-white transition">服务条款</a>
            <a href="mailto:lalalic@139.com" className="hover:text-white transition">联系我们</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
