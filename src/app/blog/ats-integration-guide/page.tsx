import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to ATS Integration with AI Tools - HireFlow Blog',
  description: 'Learn how to integrate Applicant Tracking Systems with AI recruiting tools — API connections, data flow, top ATS platforms, and step-by-step implementation. ATS与AI工具集成终极指南。',
  keywords: 'ATS integration, applicant tracking system, AI recruiting, API integration, hiring automation, ATS系统集成, 招聘管理系统, AI招聘工具',
};

export default function ATSIntegrationGuidePage() {
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
              The Ultimate Guide to ATS Integration with AI Tools
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-2">
              Connect Your Applicant Tracking System to AI-Powered Recruiting
            </p>
            <p className="text-lg text-zinc-500">
              ATS与AI工具集成终极指南：连接你的招聘管理系统与AI招聘
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-8 text-base leading-relaxed">
            {/* What is ATS */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                What is an ATS? / 什么是ATS？
              </h2>
              <p className="text-zinc-300 mb-4">
                An Applicant Tracking System (ATS) is the backbone of modern recruitment operations. It&apos;s a software application that manages the entire hiring pipeline — from job posting and candidate sourcing to interview scheduling and offer management. Over 98% of Fortune 500 companies use an ATS, and small-to-mid-sized businesses are rapidly adopting them as well. An ATS stores candidate profiles, tracks application status, facilitates collaboration among hiring teams, and ensures compliance with employment regulations. Think of it as the operating system for your recruiting department.
              </p>
              <p className="text-zinc-400">
                招聘管理系统（ATS）是现代招聘运营的支柱。它是一款管理整个招聘流程的软件——从职位发布和候选人寻源到面试安排和录用管理。超过98%的财富500强公司使用ATS，中小型企业也在迅速采用。ATS存储候选人档案、跟踪申请状态、促进招聘团队协作，并确保符合就业法规。可以将其视为招聘部门的操作系统。
              </p>
            </section>

            {/* Why AI + ATS */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why AI + ATS Matters / 为什么AI+ATS很重要
              </h2>
              <p className="text-zinc-300 mb-4">
                While an ATS excels at organizing data and managing workflows, it lacks intelligence. Traditional ATS platforms can&apos;t evaluate candidate quality, predict hiring outcomes, or generate personalized outreach. This is where AI integration becomes transformative. By connecting AI tools like HireFlow to your ATS, you unlock automated candidate scoring, intelligent resume parsing that goes beyond keyword matching, predictive analytics for time-to-hire and offer acceptance rates, and AI-generated interview questions tailored to each role. The combination turns your ATS from a passive database into an active recruiting partner.
              </p>
              <p className="text-zinc-400">
                虽然ATS擅长组织数据和管理工作流，但它缺乏智能。传统ATS平台无法评估候选人质量、预测招聘结果或生成个性化外联。这正是AI集成变得具有变革性的地方。通过将HireFlow等AI工具连接到你的ATS，你可以解锁自动候选人评分、超越关键词匹配的智能简历解析、招聘周期和录用接受率的预测分析，以及为每个职位量身定制的AI生成面试问题。这种组合将你的ATS从被动数据库变为主动的招聘伙伴。
              </p>
            </section>

            {/* API Integrations */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                API Integrations &amp; Data Flow / API集成与数据流
              </h2>
              <p className="text-zinc-300 mb-4">
                Modern ATS-AI integrations typically work through RESTful APIs or webhook-based event systems. When a new candidate enters your ATS, a webhook fires and sends the candidate data to the AI engine. The AI processes the resume, scores the candidate against job requirements, and pushes the results back into the ATS — all in real time. Data flow follows a secure pipeline: candidate data is extracted from the ATS via OAuth-authenticated API calls, processed through the AI scoring engine with encryption in transit and at rest, and results are written back as custom fields or notes in the ATS record. HireFlow&apos;s privacy-first architecture ensures that sensitive candidate data never leaves your infrastructure when using local AI models.
              </p>
              <p className="text-zinc-400">
                现代ATS-AI集成通常通过RESTful API或基于Webhook的事件系统工作。当新候选人进入你的ATS时，Webhook触发并将候选人数据发送到AI引擎。AI处理简历，根据职位要求为候选人评分，并将结果实时推回ATS。数据流遵循安全管道：候选人数据通过OAuth认证的API调用从ATS中提取，通过加密传输和静态加密的AI评分引擎处理，结果作为自定义字段或备注写回ATS记录。HireFlow的隐私优先架构确保在使用本地AI模型时，敏感的候选人数据永远不会离开你的基础设施。
              </p>
            </section>

            {/* Top ATS Platforms */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Top ATS Platforms for AI Integration / 适合AI集成的顶级ATS平台
              </h2>
              <p className="text-zinc-300 mb-4">
                Not all ATS platforms are equally ready for AI integration. Here are the leading platforms with robust API ecosystems: <strong>Greenhouse</strong> offers a comprehensive Harvest API with webhook support and custom fields — ideal for AI scoring integration. <strong>Lever</strong> provides a well-documented REST API with real-time data sync capabilities. <strong>Workday Recruiting</strong> targets enterprise customers with extensive API endpoints and HRIS integration. <strong>iCIMS</strong> features a marketplace of pre-built AI integrations. <strong>BambooHR</strong> is popular among SMBs with a straightforward API. For the Chinese market, platforms like <strong>Moka</strong> and <strong>北森 (Beisen)</strong> offer increasingly sophisticated APIs for AI tool integration, making cross-border ATS-AI workflows possible.
              </p>
              <p className="text-zinc-400">
                并非所有ATS平台都同样准备好进行AI集成。以下是拥有强大API生态系统的领先平台：<strong>Greenhouse</strong>提供全面的Harvest API，支持Webhook和自定义字段——非常适合AI评分集成。<strong>Lever</strong>提供文档完善的REST API，具有实时数据同步能力。<strong>Workday Recruiting</strong>面向企业客户，提供广泛的API端点和HRIS集成。<strong>iCIMS</strong>拥有预构建AI集成的市场。<strong>BambooHR</strong>在中小企业中很受欢迎，API简单直观。在中国市场，<strong>Moka</strong>和<strong>北森</strong>等平台提供越来越成熟的API用于AI工具集成，使跨境ATS-AI工作流成为可能。
              </p>
            </section>

            {/* Implementation Steps */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Implementation Steps / 实施步骤
              </h2>
              <p className="text-zinc-300 mb-4">
                Successfully integrating AI with your ATS requires a structured approach. <strong>Step 1: Audit your current ATS.</strong> Evaluate its API capabilities, webhook support, and custom field options. <strong>Step 2: Define your data model.</strong> Map which candidate fields will be sent to the AI engine and where results will be stored. <strong>Step 3: Set up authentication.</strong> Configure OAuth 2.0 tokens or API keys with appropriate scopes and rate limits. <strong>Step 4: Build the integration pipeline.</strong> Create webhook listeners for new applications, implement retry logic for failed API calls, and set up error monitoring. <strong>Step 5: Test with real data.</strong> Run parallel scoring — human and AI side by side — to calibrate the AI model and build trust. <strong>Step 6: Roll out gradually.</strong> Start with one department or job family, gather feedback, and expand. With tools like HireFlow, much of this complexity is abstracted away, letting you connect your ATS in minutes rather than weeks.
              </p>
              <p className="text-zinc-400">
                成功将AI与ATS集成需要结构化的方法。<strong>第一步：审计你当前的ATS。</strong>评估其API能力、Webhook支持和自定义字段选项。<strong>第二步：定义数据模型。</strong>映射哪些候选人字段将发送到AI引擎以及结果将存储在哪里。<strong>第三步：设置认证。</strong>配置具有适当范围和速率限制的OAuth 2.0令牌或API密钥。<strong>第四步：构建集成管道。</strong>为新申请创建Webhook监听器，实现失败API调用的重试逻辑，并设置错误监控。<strong>第五步：使用真实数据测试。</strong>并行运行评分——人工和AI并行——以校准AI模型并建立信任。<strong>第六步：逐步推广。</strong>从一个部门或职位系列开始，收集反馈，然后扩展。使用HireFlow等工具，大部分复杂性都被抽象化了，让你可以在几分钟而非几周内连接你的ATS。
              </p>
            </section>

            {/* Conclusion */}
            <section>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Conclusion / 结论
              </h2>
              <p className="text-zinc-300 mb-4">
                ATS integration with AI tools is no longer optional for competitive recruiting teams — it&apos;s a strategic imperative. The organizations that connect their talent data with intelligent AI processing will screen candidates faster, reduce bias in evaluations, and make data-driven hiring decisions that outperform gut-feel approaches. Whether you&apos;re using Greenhouse, Lever, or a regional platform like Moka, the path to AI-enhanced recruiting starts with understanding your ATS API capabilities and choosing the right AI partner. HireFlow is designed to make this journey as smooth as possible, with privacy-first architecture and multi-engine AI scoring that integrates with your existing workflow.
              </p>
              <p className="text-zinc-400">
                对于有竞争力的招聘团队来说，ATS与AI工具的集成已不再是可选项——而是战略必需。将人才数据与智能AI处理相连接的组织将更快地筛选候选人、减少评估中的偏见，并做出优于凭直觉的数据驱动招聘决策。无论你使用的是Greenhouse、Lever还是Moka等区域平台，AI增强招聘之路始于了解你的ATS API能力并选择合适的AI合作伙伴。HireFlow旨在使这一旅程尽可能顺畅，采用隐私优先架构和多引擎AI评分，与你现有的工作流程集成。
              </p>
            </section>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-transparent" />

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
            <h3 className="text-xl font-bold mb-2">
              Ready to Connect Your ATS? / 准备好连接你的ATS了吗？
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              HireFlow integrates with leading ATS platforms to bring AI-powered scoring and outreach to your existing workflow.
              <br />
              HireFlow与领先的ATS平台集成，将AI驱动的评分和外联引入你现有的工作流程。
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
