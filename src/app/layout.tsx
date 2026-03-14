import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HireFlow — AI智能招聘助手 | AI Recruiting Assistant',
  description: 'AI驱动的招聘助手。智能评分候选人，生成外联消息，批量评估人才。数据100%本地存储。免费开始。',
  keywords: 'AI招聘, 智能招聘, 招聘助手, recruit, AI recruiting, talent management, HireFlow',
  openGraph: {
    title: 'HireFlow — AI智能招聘助手',
    description: 'AI驱动的招聘助手。智能评分、外联消息生成、批量评估。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
