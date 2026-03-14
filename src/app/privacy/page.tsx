import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">H</div>
            <span className="font-bold text-lg">HireFlow</span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition">
            ← 返回首页
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy / 隐私政策</h1>
        <p className="text-zinc-400 text-sm mb-8">Last updated: March 14, 2026 / 最后更新：2026年3月14日</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Overview / 概述</h2>
            <p>HireFlow (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;the app&rdquo;) is an AI-powered recruiting assistant. We are committed to protecting your privacy and being transparent about how we handle data.</p>
            <p className="mt-2">HireFlow（以下简称"我们"）是一款AI智能招聘助手。我们致力于保护您的隐私，并对数据处理方式保持透明。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Data Storage / 数据存储</h2>
            <p><strong>All your data is stored locally on your device.</strong> HireFlow uses SQLite and AsyncStorage for on-device data storage. We do NOT upload, sync, or transmit your contact data, candidate information, or recruitment records to any server.</p>
            <p className="mt-2"><strong>您的所有数据都存储在您的设备本地。</strong>HireFlow 使用 SQLite 和 AsyncStorage 进行设备端数据存储。我们不会上传、同步或传输您的联系人数据、候选人信息或招聘记录到任何服务器。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. AI Services / AI服务</h2>
            <p>When you use AI features (candidate scoring, message generation, interview questions), the following data may be sent to your chosen AI provider:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
              <li>Job descriptions and requirements</li>
              <li>Candidate profile summaries (name, skills, experience)</li>
              <li>Message generation prompts</li>
            </ul>
            <p className="mt-2">Supported AI providers: OpenAI, Alibaba DashScope (Qwen), DeepSeek. You provide your own API key, giving you full control over which provider processes your data.</p>
            <p className="mt-2">当您使用AI功能时，以下数据可能会发送到您选择的AI提供商：职位描述、候选人简介摘要、消息生成提示。您使用自己的API密钥，完全控制哪个提供商处理您的数据。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data We Do NOT Collect / 我们不收集的数据</h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-400">
              <li>Personal identification (we don&apos;t have accounts or logins)</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or tracking data</li>
              <li>Contact lists from your phone</li>
            </ul>
            <p className="mt-2">我们不收集：个人身份信息、位置数据、设备标识符、使用分析数据、手机通讯录。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Payments / 支付</h2>
            <p>Payments are processed by Stripe. We do not store credit card numbers or payment details. Stripe&apos;s privacy policy applies: <a href="https://stripe.com/privacy" className="text-blue-400 hover:underline" target="_blank">stripe.com/privacy</a></p>
            <p className="mt-2">支付由 Stripe 处理。我们不存储信用卡号或支付详情。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Third-Party Services / 第三方服务</h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-400">
              <li><strong>OpenAI</strong> — AI text generation (<a href="https://openai.com/privacy" className="text-blue-400 hover:underline" target="_blank">privacy policy</a>)</li>
              <li><strong>Alibaba DashScope</strong> — AI text generation (Qwen)</li>
              <li><strong>DeepSeek</strong> — AI text generation</li>
              <li><strong>Stripe</strong> — Payment processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Data Deletion / 数据删除</h2>
            <p>Since all data is stored locally on your device, you can delete all data at any time by uninstalling the app or clearing app data in your device settings.</p>
            <p className="mt-2">由于所有数据都存储在您的设备本地，您可以随时通过卸载应用或清除应用数据来删除所有数据。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children / 儿童隐私</h2>
            <p>HireFlow is not intended for users under 17 years of age. We do not knowingly collect data from children.</p>
            <p className="mt-2">HireFlow 不面向17岁以下用户。我们不会故意收集儿童数据。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact / 联系方式</h2>
            <p>If you have questions about this privacy policy, contact us at: <a href="mailto:lalalic@139.com" className="text-blue-400 hover:underline">lalalic@139.com</a></p>
            <p className="mt-2">如有隐私政策相关问题，请联系：<a href="mailto:lalalic@139.com" className="text-blue-400 hover:underline">lalalic@139.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes / 变更</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.</p>
            <p className="mt-2">我们可能会不时更新此隐私政策。变更将在此页面发布并更新日期。</p>
          </section>
        </div>
      </div>

      <footer className="py-8 px-4 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 HireFlow · <Link href="/" className="hover:text-white transition">首页</Link></p>
      </footer>
    </main>
  );
}
