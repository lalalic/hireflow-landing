'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQItem {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
}

interface FAQSection {
  title: string;
  titleEn: string;
  icon: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: '基本问题',
    titleEn: 'General',
    icon: '💡',
    items: [
      {
        q: 'HireFlow 是什么？',
        qEn: 'What is HireFlow?',
        a: 'HireFlow 是一款AI驱动的智能招聘助手App。它帮助HR和招聘经理通过AI自动评分候选人、生成个性化外联消息、推荐面试问题，将招聘效率提升10倍。所有数据100%存储在您的设备本地，确保隐私安全。',
        aEn: 'HireFlow is an AI-powered recruiting assistant app. It helps HR professionals and hiring managers automatically score candidates, generate personalized outreach messages, and recommend interview questions — boosting recruiting efficiency by 10x. All data is stored 100% locally on your device for privacy.',
      },
      {
        q: 'HireFlow 适合谁使用？',
        qEn: 'Who is HireFlow for?',
        a: '适合独立招聘顾问、HR专员、招聘经理、猎头顾问、创业公司创始人等任何需要高效管理候选人的人。无论是管理10个还是500个候选人，HireFlow都能显著提升您的工作效率。',
        aEn: 'It\'s designed for independent recruiters, HR specialists, hiring managers, headhunters, and startup founders — anyone who needs to efficiently manage candidates. Whether you manage 10 or 500 candidates, HireFlow significantly boosts your productivity.',
      },
      {
        q: 'HireFlow 支持哪些平台？',
        qEn: 'What platforms does HireFlow support?',
        a: '目前支持 iOS 平台（iPhone 和 iPad）。HireFlow 基于 React Native 开发，Android 版本已在开发中，预计很快推出。您也可以通过源码自行编译运行。',
        aEn: 'Currently available on iOS (iPhone and iPad). Built with React Native, the Android version is under development and coming soon. You can also build from source.',
      },
    ],
  },
  {
    title: 'AI 功能',
    titleEn: 'AI Features',
    icon: '🤖',
    items: [
      {
        q: 'AI候选人评分是如何工作的？',
        qEn: 'How does AI candidate scoring work?',
        a: 'AI会分析候选人的技能、工作经验、教育背景等信息，与职位要求进行匹配度分析，输出0-100分的评分以及详细的评估报告。评分结果包括技能匹配度、经验相关性、文化适配性等维度。支持单个评分和批量评分模式。',
        aEn: 'The AI analyzes candidate skills, work experience, and education against job requirements, producing a 0-100 score with a detailed assessment report. Scoring covers skill match, experience relevance, and cultural fit dimensions. Both single and batch scoring modes are supported.',
      },
      {
        q: 'HireFlow 支持哪些AI模型？',
        qEn: 'What AI providers does HireFlow support?',
        a: '支持三大AI引擎：OpenAI（GPT-4o-mini）、阿里通义千问（qwen-turbo）、DeepSeek（deepseek-chat）。您可以根据需求随时在设置中切换AI引擎。每个引擎都针对招聘场景做了优化。',
        aEn: 'Three AI engines are supported: OpenAI (GPT-4o-mini), Alibaba Qwen (qwen-turbo), and DeepSeek (deepseek-chat). You can switch between engines anytime in settings. Each engine is optimized for recruiting scenarios.',
      },
      {
        q: 'AI评分准确吗？',
        qEn: 'Is the AI scoring accurate?',
        a: 'AI评分基于大语言模型的深度理解能力，能够准确分析技能匹配度和经验相关性。准确度取决于您提供的职位描述详细程度和候选人信息完整度。建议将AI评分作为辅助参考，结合您的专业判断做最终决策。',
        aEn: 'AI scoring leverages deep language model understanding to accurately analyze skill matches and experience relevance. Accuracy depends on how detailed your job description and candidate profiles are. We recommend using AI scores as a reference alongside your professional judgment.',
      },
      {
        q: '如何配置API密钥？',
        qEn: 'How do I set up my API key?',
        a: '在App设置页面中选择"AI设置"，选择您要使用的AI引擎，然后输入对应的API Key即可。API Key存储在您的设备本地，不会上传到任何服务器。您可以从OpenAI、阿里云或DeepSeek官网获取API Key。',
        aEn: 'Go to Settings → AI Settings, select your preferred AI engine, and enter the corresponding API key. Keys are stored locally on your device and never uploaded. You can obtain API keys from the OpenAI, Alibaba Cloud, or DeepSeek websites.',
      },
    ],
  },
  {
    title: '隐私与安全',
    titleEn: 'Privacy & Security',
    icon: '🔒',
    items: [
      {
        q: '数据存储在哪里？',
        qEn: 'Where is my data stored?',
        a: '所有数据100%存储在您的设备本地。HireFlow使用SQLite数据库和AsyncStorage进行数据存储。候选人信息、招聘记录、设置等数据都不会上传到任何云端服务器。',
        aEn: 'All data is stored 100% locally on your device. HireFlow uses SQLite and AsyncStorage for data storage. Candidate information, recruitment records, and settings are never uploaded to any cloud server.',
      },
      {
        q: '我的数据有加密保护吗？',
        qEn: 'Is my data encrypted?',
        a: '是的。设备端数据受到iOS系统级别的数据保护和加密机制保护。API密钥等敏感信息使用安全存储（SecureStore）进行加密保存。使用AI功能时，数据通过HTTPS加密传输到AI服务商。',
        aEn: 'Yes. On-device data is protected by iOS system-level data protection and encryption. Sensitive information like API keys are encrypted using SecureStore. When using AI features, data is transmitted via HTTPS to AI providers.',
      },
      {
        q: 'HireFlow 符合GDPR要求吗？',
        qEn: 'Is HireFlow GDPR compliant?',
        a: 'HireFlow的设计理念就是数据最小化和本地存储优先。由于数据完全存储在用户设备上，不存在服务端数据收集问题。您可以随时通过卸载App来删除所有数据。使用AI功能时发送的数据遵循各AI服务商的数据处理政策。',
        aEn: 'HireFlow is designed with data minimization and local-first storage. Since data is stored entirely on user devices, there\'s no server-side data collection. You can delete all data anytime by uninstalling the app. Data sent during AI usage follows each provider\'s data processing policies.',
      },
    ],
  },
  {
    title: '定价与订阅',
    titleEn: 'Pricing & Subscription',
    icon: '💰',
    items: [
      {
        q: '免费版有哪些限制？',
        qEn: 'What are the free plan limits?',
        a: '免费版可管理最多10个联系人，每月5条AI生成消息。包含AI候选人评分、基本招聘流程管理、CSV导入等核心功能。对于个人小规模招聘完全够用。',
        aEn: 'The free plan allows up to 10 contacts and 5 AI-generated messages per month. It includes AI candidate scoring, basic pipeline management, and CSV import. Perfect for individual small-scale recruiting.',
      },
      {
        q: 'Pro版有什么额外功能？',
        qEn: 'What additional features does Pro offer?',
        a: 'Pro版支持500个联系人、无限AI消息生成、批量AI评分、高级数据分析和图表、优先技术支持等。价格为¥199/月或¥699/年企业版。支持Stripe安全支付。',
        aEn: 'Pro supports 500 contacts, unlimited AI messages, batch AI scoring, advanced analytics and charts, and priority support. Priced at ¥199/month or ¥699/year for Enterprise. Payments processed securely via Stripe.',
      },
      {
        q: '如何取消订阅？',
        qEn: 'How do I cancel my subscription?',
        a: '您可以随时在App内的设置页面或通过Apple ID管理订阅中取消。取消后，您仍可使用Pro功能直到当前计费周期结束，之后自动降级为免费版。已存储的数据不会被删除。',
        aEn: 'You can cancel anytime in the app\'s settings or via Apple ID subscription management. After cancellation, Pro features remain available until the end of the current billing period, then you\'ll be downgraded to the free plan. Stored data is never deleted.',
      },
      {
        q: '是否支持退款？',
        qEn: 'What is the refund policy?',
        a: '通过Apple App Store订阅的用户，退款按照Apple的退款政策处理。通过Stripe支付的用户，在购买后7天内可以联系我们申请全额退款。请发送邮件至 lalalic@139.com。',
        aEn: 'For App Store subscriptions, refunds follow Apple\'s refund policy. For Stripe payments, you can request a full refund within 7 days of purchase. Contact us at lalalic@139.com.',
      },
    ],
  },
  {
    title: '技术与使用',
    titleEn: 'Technical',
    icon: '⚙️',
    items: [
      {
        q: '可以离线使用吗？',
        qEn: 'Can I use HireFlow offline?',
        a: '大部分功能可以离线使用，包括联系人管理、招聘流程管理、数据查看等。AI功能（评分、消息生成、面试问题）需要网络连接来调用AI服务。',
        aEn: 'Most features work offline, including contact management, pipeline management, and data viewing. AI features (scoring, message generation, interview questions) require an internet connection to call AI services.',
      },
      {
        q: '可以导出我的数据吗？',
        qEn: 'Can I export my data?',
        a: '可以。HireFlow支持将联系人和招聘数据导出为CSV文件，方便在Excel、Google Sheets等工具中使用，或迁移到其他系统。',
        aEn: 'Yes. HireFlow supports exporting contacts and recruitment data as CSV files, making it easy to use in Excel, Google Sheets, or migrate to other systems.',
      },
      {
        q: '支持哪些数据导入格式？',
        qEn: 'What import formats are supported?',
        a: '目前支持CSV文件导入。系统会自动解析姓名、邮箱、电话、公司、职位、技能等字段。只需确保CSV文件包含表头行，系统会智能匹配列名。',
        aEn: 'Currently CSV file import is supported. The system automatically parses name, email, phone, company, position, and skills fields. Just make sure your CSV has a header row — the system will intelligently match column names.',
      },
      {
        q: 'HireFlow 支持哪些语言？',
        qEn: 'What languages does HireFlow support?',
        a: '界面支持中文和英文双语。AI功能（候选人评分、消息生成、面试问题生成）也同时支持中英文输出。系统会根据您的设备语言自动选择，您也可以在设置中手动切换。',
        aEn: 'The interface supports both Chinese and English. AI features (scoring, message generation, interview questions) also support bilingual output. The system auto-detects your device language, and you can manually switch in settings.',
      },
      {
        q: 'HireFlow 是开源的吗？',
        qEn: 'Is HireFlow open source?',
        a: '是的！HireFlow在GitHub上开源，您可以查看源代码、提交问题反馈或贡献代码。访问 github.com/lalalic/hireflow 了解更多。',
        aEn: 'Yes! HireFlow is open source on GitHub. You can view the source code, submit issues, or contribute. Visit github.com/lalalic/hireflow to learn more.',
      },
    ],
  },
];

function FAQItemCard({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-base leading-relaxed">{item.q}</h3>
          <p className="text-sm text-zinc-500 mt-1">{item.qEn}</p>
        </div>
        <span
          className={`text-zinc-500 text-xl mt-1 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-3">
          <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent" />
          <p className="text-zinc-300 leading-relaxed text-sm pt-2">{item.a}</p>
          <p className="text-zinc-500 leading-relaxed text-sm">{item.aEn}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    faqData.forEach((section, si) => {
      section.items.forEach((_, ii) => {
        all[`${si}-${ii}`] = true;
      });
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

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
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            FAQ / 常见问题
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            常见问题解答
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Frequently Asked Questions
          </p>
          <p className="text-sm text-zinc-500 mt-3">
            找不到答案？请发邮件至{' '}
            <a href="mailto:lalalic@139.com" className="text-blue-400 hover:underline">
              lalalic@139.com
            </a>
          </p>
        </div>
      </section>

      {/* Controls */}
      <div className="max-w-3xl mx-auto px-4 mb-8 flex justify-end gap-3">
        <button
          onClick={expandAll}
          className="text-xs text-zinc-500 hover:text-zinc-300 transition px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700"
        >
          全部展开 / Expand All
        </button>
        <button
          onClick={collapseAll}
          className="text-xs text-zinc-500 hover:text-zinc-300 transition px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700"
        >
          全部折叠 / Collapse All
        </button>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-3xl mx-auto px-4 pb-20 space-y-12">
        {faqData.map((section, si) => (
          <section key={si}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{section.icon}</span>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="text-sm text-zinc-500">{section.titleEn}</p>
              </div>
            </div>
            <div className="space-y-3">
              {section.items.map((item, ii) => (
                <FAQItemCard
                  key={ii}
                  item={item}
                  isOpen={!!openItems[`${si}-${ii}`]}
                  onToggle={() => toggleItem(`${si}-${ii}`)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <h3 className="text-xl font-bold mb-2">还有其他问题？ / Still have questions?</h3>
          <p className="text-zinc-400 text-sm mb-6">
            我们很乐意为您解答。发送邮件或在GitHub上提交Issue。
            <br />
            We&apos;re happy to help. Email us or open a GitHub issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lalalic@139.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
            >
              发送邮件 / Email Us
            </a>
            <a
              href="https://github.com/lalalic/hireflow/issues"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-zinc-700 text-white font-semibold hover:bg-zinc-900 transition"
            >
              GitHub Issues
            </a>
          </div>
        </div>
      </div>

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
