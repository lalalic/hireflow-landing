import Link from 'next/link';

const COURSE_MODULES = [
  {
    number: '01',
    title: '招聘行业现状与AI机遇',
    lessons: ['传统招聘的痛点分析', 'AI招聘工具全景图', '为什么现在是最佳时机', 'ROI计算：AI招聘的投资回报'],
    duration: '45分钟',
  },
  {
    number: '02',
    title: 'HireFlow实战：从0到1搭建AI招聘系统',
    lessons: ['安装与配置3大AI引擎', '创建第一个招聘职位', '候选人管理全流程', '数据导入与批量处理'],
    duration: '60分钟',
  },
  {
    number: '03',
    title: 'AI候选人评分：精准匹配的秘密',
    lessons: ['评分算法原理解析', '自定义评分维度', '批量评分与排序', '实战：从100份简历中找到Top 5'],
    duration: '50分钟',
  },
  {
    number: '04',
    title: '智能外联：让回复率翻3倍',
    lessons: ['外联消息的黄金结构', 'AI消息生成最佳实践', '不同场景的沟通模板', 'A/B测试与持续优化'],
    duration: '45分钟',
  },
  {
    number: '05',
    title: 'AI面试：高效筛选候选人',
    lessons: ['AI面试问题生成策略', '技术面试 vs 行为面试', '面试评估打分体系', '实战：完整面试流程演示'],
    duration: '50分钟',
  },
  {
    number: '06',
    title: '进阶：打造你的AI招聘工作流',
    lessons: ['多职位并行管理', 'Pro/Agency版高级功能', '数据分析与招聘报表', '团队协作最佳实践'],
    duration: '40分钟',
  },
];

const TESTIMONIALS = [
  { name: '张经理', role: 'HR总监 · 科技公司', text: '用了HireFlow之后，我的招聘效率提升了5倍。以前筛选100份简历要3天，现在10分钟搞定。' },
  { name: '李女士', role: '猎头顾问', text: '课程内容非常实用，特别是AI外联消息的部分，我的候选人回复率从15%提升到了45%。' },
  { name: '王总', role: '创业公司CEO', text: '作为创业公司，招聘预算有限。这个课程教会我用AI工具替代招聘团队，节省了每月¥50,000+。' },
];

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">H</div>
            <span className="font-bold text-lg">HireFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition">首页</Link>
            <a href="#modules" className="hover:text-white transition">课程大纲</a>
            <a href="#pricing" className="hover:text-white transition">价格</a>
          </div>
          <a href="#pricing" className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium hover:opacity-90 transition">
            立即报名
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            限时优惠 · 已有200+学员加入
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI招聘实战课
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
              6小时掌握AI招聘全流程
            </span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            从零基础到精通AI招聘工具 · 实战案例教学 · 终身更新
            <br />
            帮你节省80%招聘时间，提升3倍候选人回复率
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#pricing"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/20">
              ¥199 立即报名 →
            </a>
            <a href="#modules"
              className="px-8 py-4 rounded-xl border border-zinc-700 text-white font-semibold text-lg hover:bg-zinc-900 transition">
              查看课程大纲
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 text-center">
            {[
              { value: '6', label: '课时' },
              { value: '30+', label: '实战案例' },
              { value: '200+', label: '学员' },
              { value: '4.9', label: '评分' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-amber-400">{s.value}</div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">谁适合这门课？</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '👩‍💼', title: 'HR经理', desc: '想用AI提升招聘效率，每天节省3小时' },
              { emoji: '🎯', title: '猎头顾问', desc: '提高候选人匹配度和回复率，赚更多佣金' },
              { emoji: '🚀', title: '创业团队', desc: '没有专职HR，用AI工具解决招聘难题' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modules" className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">课程大纲</h2>
          <p className="text-zinc-400 text-center mb-12">6大模块 · 24节课 · 5小时视频 · 30+实战案例</p>

          <div className="space-y-4">
            {COURSE_MODULES.map((module) => (
              <div key={module.number} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0">
                    {module.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{module.title}</h3>
                      <span className="text-xs text-zinc-500">{module.duration}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {module.lessons.map((lesson) => (
                        <div key={lesson} className="flex items-center gap-2 text-sm text-zinc-400">
                          <span className="text-amber-500">▸</span> {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">学员评价</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">你将获得</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎬', title: '5小时高清视频', desc: '系统化教学，可反复观看' },
              { icon: '📋', title: '30+实战模板', desc: '外联消息、面试问题、评分模板' },
              { icon: '🔄', title: '终身免费更新', desc: '课程持续更新，新功能第一时间教学' },
              { icon: '💬', title: '专属学员社群', desc: '和200+HR/猎头交流，共享资源' },
              { icon: '📱', title: 'HireFlow Pro 7天试用', desc: '免费体验Pro版全部功能' },
              { icon: '📄', title: '结业证书', desc: '完成课程获得AI招聘师认证' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-zinc-900/30">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">限时优惠价</h2>
          <p className="text-zinc-400 mb-12">原价¥499 · 限时早鸟价</p>

          <div className="max-w-md mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                限时优惠 · 省¥300
              </div>
              <div className="mb-6">
                <div className="text-zinc-500 text-sm line-through mb-1">原价 ¥499</div>
                <div className="text-5xl font-bold text-amber-400">¥199</div>
                <div className="text-zinc-400 text-sm mt-2">一次购买 · 终身访问</div>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {[
                  '6大模块 · 24节课 · 5小时视频',
                  '30+实战案例和模板',
                  '终身免费更新',
                  '专属学员社群',
                  'HireFlow Pro 7天试用',
                  'AI招聘师结业证书',
                  '30天无理由退款',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-amber-400">✓</span> {item}
                  </li>
                ))}
              </ul>

              <a href="https://buy.stripe.com/6oU14ndKJbCY5lm3cf"
                className="block w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/20">
                立即报名 ¥199 →
              </a>
              <p className="text-xs text-zinc-500 mt-4">30天无理由退款 · 安全支付</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="space-y-4">
            {[
              { q: '没有技术背景，能学会吗？', a: '完全可以！课程从零基础开始，手把手教学，不需要任何编程知识。' },
              { q: '课程包含什么格式？', a: '高清视频教学 + 文字教材 + 实战模板 + 学员社群，多种形式帮助你掌握。' },
              { q: '能退款吗？', a: '支持30天无理由退款，如果课程不符合预期，全额退款，零风险。' },
              { q: '课程会更新吗？', a: '是的！随着HireFlow新功能发布，课程会持续更新，一次购买终身免费更新。' },
              { q: '有学员社群吗？', a: '有！加入200+ HR/猎头学员社群，分享经验、模板，互相帮助成长。' },
            ].map((item) => (
              <div key={item.q} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-zinc-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">准备好用AI改变招聘方式了吗？</h2>
          <p className="text-zinc-400 mb-8">加入200+学员，6小时掌握AI招聘全流程</p>
          <a href="https://buy.stripe.com/6oU14ndKJbCY5lm3cf"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/20">
            ¥199 立即报名 →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 HireFlow · <Link href="/" className="hover:text-white transition">首页</Link> · AI招聘实战课</p>
      </footer>
    </main>
  );
}
