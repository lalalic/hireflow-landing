import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-XXXXXXXXXX'; // TODO: Replace with real GA4 ID

export const metadata: Metadata = {
  title: 'HireFlow — AI智能招聘助手 | AI Recruiting Assistant',
  description: 'AI驱动的招聘助手。智能评分候选人，生成外联消息，批量评估人才。数据100%本地存储。免费开始。',
  keywords: 'AI招聘, 智能招聘, 招聘助手, recruit, AI recruiting, talent management, HireFlow, 人工智能招聘, HR工具',
  metadataBase: new URL('https://hireflow-landing-beryl.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HireFlow — AI智能招聘助手',
    description: 'AI驱动的招聘助手。智能评分、外联消息生成、批量评估。免费10个联系人。',
    type: 'website',
    locale: 'zh_CN',
    siteName: 'HireFlow',
    url: 'https://hireflow-landing-beryl.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HireFlow — AI智能招聘助手',
    description: 'AI驱动的招聘助手。智能评分、外联消息生成、批量评估。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HireFlow',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS',
  description: 'AI驱动的招聘助手。智能评分候选人，生成外联消息，批量评估人才。',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'CNY', name: '免费版' },
    { '@type': 'Offer', price: '199', priceCurrency: 'CNY', name: 'Pro版' },
    { '@type': 'Offer', price: '699', priceCurrency: 'CNY', name: '企业版' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '56',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
