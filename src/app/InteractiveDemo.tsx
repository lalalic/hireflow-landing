'use client';

import { useState } from 'react';

const tabs = [
  { key: 'scoring', label: 'AI Scoring', icon: '🤖' },
  { key: 'outreach', label: 'Smart Outreach', icon: '✉️' },
  { key: 'pipeline', label: 'Pipeline', icon: '📊' },
] as const;

type Tab = (typeof tabs)[number]['key'];

function ScoringTab() {
  return (
    <div className="space-y-4">
      {/* Candidate Card */}
      <div className="bg-zinc-800/80 rounded-xl p-4 border border-zinc-700/50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">张</div>
            <div>
              <div className="font-semibold text-sm">张明华</div>
              <div className="text-xs text-zinc-400">高级前端工程师 · 字节跳动</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center">
              <span className="text-green-400 font-bold text-lg">92</span>
            </div>
            <span className="text-[10px] text-green-400 mt-0.5">优秀匹配</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'].map((s) => (
            <span key={s} className="px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 text-[11px] border border-blue-500/20">
              {s}
            </span>
          ))}
        </div>

        {/* AI Analysis */}
        <div className="bg-zinc-900/60 rounded-lg p-3 border border-zinc-700/30">
          <div className="text-[10px] text-blue-400 font-medium mb-1.5 flex items-center gap-1">
            <span>✨</span> AI 分析摘要
          </div>
          <p className="text-[11px] text-zinc-300 leading-relaxed">
            候选人拥有6年前端开发经验，React和TypeScript技术栈与职位高度匹配。
            有大厂背景，团队协作能力强。建议优先联系。
          </p>
        </div>
      </div>

      {/* Mini score breakdown */}
      <div className="bg-zinc-800/80 rounded-xl p-4 border border-zinc-700/50">
        <div className="text-xs text-zinc-400 mb-3 font-medium">评分细项</div>
        <div className="space-y-2.5">
          {[
            { label: '技能匹配', score: 95, color: 'from-green-500 to-emerald-500' },
            { label: '工作经验', score: 88, color: 'from-blue-500 to-cyan-500' },
            { label: '教育背景', score: 90, color: 'from-purple-500 to-pink-500' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-[11px] text-zinc-400 w-16 shrink-0">{item.label}</span>
              <div className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <span className="text-[11px] text-zinc-300 w-7 text-right">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutreachTab() {
  const [platform, setPlatform] = useState<'email' | 'linkedin' | 'wechat'>('email');

  const messages: Record<string, string> = {
    email: `张明华，你好！

我是ABC科技的招聘负责人。看到您在字节跳动担任高级前端工程师，非常欣赏您在React和大规模应用方面的经验。

我们正在寻找一位技术Lead来带领前端团队，薪资范围60-80K，弹性工作制。

方便本周简短聊15分钟吗？

期待您的回复 🙏`,
    linkedin: `Hi 明华，

注意到你在前端技术栈方面的深厚功底，特别是React生态。我们团队正在做一个很有挑战性的项目，技术氛围不错 👋

感兴趣的话可以聊聊？`,
    wechat: `明华你好！我是ABC科技的HR小李 ✋

看到你的技术背景跟我们在招的前端Lead很匹配，想跟你聊聊～

方便加个微信不？可以先了解下我们的项目和团队 😊`,
  };

  return (
    <div className="space-y-4">
      {/* Platform selector */}
      <div className="flex gap-1.5 bg-zinc-800/80 rounded-lg p-1 border border-zinc-700/50">
        {([
          { key: 'email', label: '📧 Email', },
          { key: 'linkedin', label: '💼 LinkedIn' },
          { key: 'wechat', label: '💬 微信' },
        ] as const).map((p) => (
          <button
            key={p.key}
            onClick={() => setPlatform(p.key)}
            className={`flex-1 py-1.5 rounded-md text-[11px] font-medium transition-all ${
              platform === p.key
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                : 'text-zinc-400 hover:text-zinc-300 border border-transparent'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Target info */}
      <div className="bg-zinc-800/80 rounded-xl p-3 border border-zinc-700/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">张</div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium">发送给：张明华</div>
          <div className="text-[10px] text-zinc-400">高级前端工程师 · 匹配度 92分</div>
        </div>
        <div className="px-2 py-0.5 rounded bg-green-500/15 text-green-400 text-[10px]">AI生成</div>
      </div>

      {/* Message preview */}
      <div className="bg-zinc-800/80 rounded-xl p-4 border border-zinc-700/50">
        <div className="text-[10px] text-zinc-500 mb-2 flex items-center justify-between">
          <span>消息预览</span>
          <span className="text-blue-400">✨ AI已优化</span>
        </div>
        <div className="text-[11px] text-zinc-300 leading-relaxed whitespace-pre-line">
          {messages[platform]}
        </div>
      </div>
    </div>
  );
}

function PipelineTab() {
  const columns = [
    {
      title: '已发现',
      color: 'border-zinc-500',
      dotColor: 'bg-zinc-400',
      candidates: [
        { name: '王小明', role: '后端' },
        { name: '李思琪', role: '设计' },
      ],
    },
    {
      title: '已联系',
      color: 'border-blue-500',
      dotColor: 'bg-blue-400',
      candidates: [
        { name: '张明华', role: '前端' },
      ],
    },
    {
      title: '面试中',
      color: 'border-purple-500',
      dotColor: 'bg-purple-400',
      candidates: [
        { name: '赵雨晨', role: '全栈' },
        { name: '陈晓峰', role: '前端' },
      ],
    },
    {
      title: '已录用',
      color: 'border-green-500',
      dotColor: 'bg-green-400',
      candidates: [
        { name: '刘子涵', role: '前端' },
      ],
    },
  ];

  return (
    <div className="space-y-3">
      <div className="bg-zinc-800/80 rounded-xl p-3 border border-zinc-700/50">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-medium">前端技术Lead - ABC科技</div>
          <div className="text-[10px] text-zinc-400">6 位候选人</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {columns.map((col) => (
            <div key={col.title} className={`rounded-lg bg-zinc-900/60 border-t-2 ${col.color} p-2`}>
              <div className="flex items-center gap-1 mb-2">
                <span className={`w-1.5 h-1.5 rounded-full ${col.dotColor}`} />
                <span className="text-[10px] text-zinc-400">{col.title}</span>
              </div>
              <div className="space-y-1.5">
                {col.candidates.map((c) => (
                  <div key={c.name} className="bg-zinc-800 rounded-md px-2 py-1.5 border border-zinc-700/50">
                    <div className="text-[10px] font-medium text-zinc-200 truncate">{c.name}</div>
                    <div className="text-[9px] text-zinc-500">{c.role}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '本周新增', value: '3', icon: '📥' },
          { label: '回复率', value: '67%', icon: '📈' },
          { label: '平均周期', value: '18天', icon: '⏱️' },
        ].map((stat) => (
          <div key={stat.label} className="bg-zinc-800/80 rounded-xl p-3 border border-zinc-700/50 text-center">
            <div className="text-sm mb-0.5">{stat.icon}</div>
            <div className="text-sm font-bold text-white">{stat.value}</div>
            <div className="text-[10px] text-zinc-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<Tab>('scoring');

  return (
    <section id="demo" className="py-20 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          See HireFlow in Action
        </h2>
        <p className="text-zinc-400 text-center mb-12 text-lg">
          看看 HireFlow 怎么用
        </p>

        <div className="flex justify-center">
          {/* Phone mockup */}
          <div className="relative w-full max-w-[360px]">
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/10 blur-sm" />

            {/* Phone frame */}
            <div className="relative rounded-[2.5rem] border border-zinc-700/80 bg-[#111111] p-3 shadow-2xl shadow-blue-500/5">
              {/* Notch */}
              <div className="flex justify-center mb-2">
                <div className="w-28 h-6 rounded-full bg-zinc-900 border border-zinc-800" />
              </div>

              {/* Screen area */}
              <div className="rounded-[1.8rem] bg-[#0a0a0a] overflow-hidden min-h-[480px]">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-2 text-[10px] text-zinc-500">
                  <span>14:26</span>
                  <div className="flex items-center gap-1">
                    <span>●●●●○</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Tab bar */}
                <div className="flex mx-3 mb-3 bg-zinc-800/60 rounded-lg p-0.5 border border-zinc-700/40">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex-1 py-2 rounded-md text-[11px] font-medium transition-all duration-200 ${
                        activeTab === tab.key
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30 shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                      }`}
                    >
                      <span className="mr-1">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="px-3 pb-4">
                  {activeTab === 'scoring' && <ScoringTab />}
                  {activeTab === 'outreach' && <OutreachTab />}
                  {activeTab === 'pipeline' && <PipelineTab />}
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center mt-2">
                <div className="w-28 h-1 rounded-full bg-zinc-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
