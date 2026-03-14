export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Terms of Service / 服务条款</h1>
        <p className="text-gray-500 mb-8">Last updated: March 14, 2026 | 最后更新：2026年3月14日</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms / 接受条款</h2>
            <p className="mb-2">
              By downloading, installing, or using HireFlow (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the App.
            </p>
            <p className="text-gray-600">
              下载、安装或使用 HireFlow（&quot;本应用&quot;）即表示您同意受本服务条款的约束。如果您不同意，请勿使用本应用。
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service / 服务描述</h2>
            <p className="mb-2">
              HireFlow is an AI-powered recruiting assistant that helps users manage candidates, score resumes against job requirements, and generate outreach messages. The App stores all user data locally on the device.
            </p>
            <p className="text-gray-600">
              HireFlow 是一款AI智能招聘助手，帮助用户管理候选人、根据职位要求评分简历、生成外联消息。本应用将所有用户数据存储在设备本地。
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts / 用户账户</h2>
            <p className="mb-2">
              HireFlow does not require account registration. All data is stored locally on your device. If you subscribe to a premium plan, your subscription is managed through Apple&apos;s App Store or Google Play, and Stripe for payment processing.
            </p>
            <p className="text-gray-600">
              HireFlow 不要求注册账户。所有数据存储在您的设备本地。如果您订阅高级计划，您的订阅由 Apple App Store 或 Google Play 管理，支付通过 Stripe 处理。
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Subscription Plans / 订阅计划</h2>
            <div className="mb-2">
              <p className="mb-2">HireFlow offers the following plans:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Free</strong> — 10 contacts, 5 AI messages per month</li>
                <li><strong>Pro ($29/month)</strong> — 500 contacts, unlimited AI messages</li>
                <li><strong>Agency ($99/month)</strong> — Unlimited contacts, team features</li>
                <li><strong>Enterprise ($299/month)</strong> — White-label, API access, priority support</li>
              </ul>
            </div>
            <p className="text-gray-600">
              订阅将自动续费，除非在当前周期结束前至少24小时取消。您可以在设备的订阅设置中管理和取消订阅。
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. AI Services / AI服务</h2>
            <p className="mb-2">
              HireFlow uses third-party AI services (OpenAI, DashScope, DeepSeek) for text generation features. Users provide their own API keys. AI-generated content is provided &quot;as-is&quot; and you are responsible for reviewing and verifying all AI outputs before use.
            </p>
            <p className="text-gray-600">
              HireFlow 使用第三方AI服务（OpenAI、DashScope、DeepSeek）进行文本生成功能。用户提供自己的API密钥。AI生成的内容按&quot;原样&quot;提供，您有责任在使用前审核和验证所有AI输出。
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Acceptable Use / 使用规范</h2>
            <div className="mb-2">
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the App for any unlawful purpose</li>
                <li>Send spam or unsolicited messages using AI-generated content</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
                <li>Use the App to discriminate against candidates based on protected characteristics</li>
                <li>Violate any applicable employment or data protection laws</li>
              </ul>
            </div>
            <p className="text-gray-600">
              您同意不将本应用用于任何非法目的、发送垃圾邮件、尝试逆向工程，或用于基于受保护特征的候选人歧视。
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Intellectual Property / 知识产权</h2>
            <p className="mb-2">
              The App and its original content, features, and functionality are owned by HireFlow and are protected by copyright, trademark, and other intellectual property laws. Your candidate data and AI-generated messages belong to you.
            </p>
            <p className="text-gray-600">
              本应用及其原创内容、功能由 HireFlow 所有，受版权、商标和其他知识产权法保护。您的候选人数据和AI生成的消息归您所有。
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Disclaimer / 免责声明</h2>
            <p className="mb-2">
              The App is provided &quot;as is&quot; without warranty of any kind. We do not guarantee that AI-generated scores, analyses, or messages will be accurate, complete, or suitable for any particular purpose. Hiring decisions should not be based solely on AI recommendations.
            </p>
            <p className="text-gray-600">
              本应用按&quot;原样&quot;提供，不作任何形式的保证。我们不保证AI生成的评分、分析或消息的准确性、完整性或适用性。招聘决策不应仅基于AI建议。
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability / 责任限制</h2>
            <p className="mb-2">
              In no event shall HireFlow be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to loss of data, loss of business opportunities, or hiring decisions made using the App.
            </p>
            <p className="text-gray-600">
              在任何情况下，HireFlow 均不对因使用本应用而产生的任何间接、附带、特殊、后果性或惩罚性损害承担责任。
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to Terms / 条款变更</h2>
            <p className="mb-2">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of the App after changes constitutes acceptance of the new terms.
            </p>
            <p className="text-gray-600">
              我们保留随时修改这些条款的权利。更改将发布在此页面上并更新日期。在更改后继续使用本应用即表示接受新条款。
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact / 联系方式</h2>
            <p className="mb-2">
              For questions about these Terms, contact us at:
            </p>
            <p className="font-medium">lalalic@139.com</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-400">
          <p>© 2026 HireFlow. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-gray-600">Privacy Policy</a>
            <a href="/" className="hover:text-gray-600">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}
