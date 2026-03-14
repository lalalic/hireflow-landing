import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Batch Resume Screener — HireFlow | Screen Multiple Resumes at Once',
  description:
    'Paste multiple resumes separated by --- and a job description to get batch AI scoring with score distribution, rankings, and aggregate stats. Free to try.',
  keywords: [
    'batch resume screening',
    'bulk resume scoring',
    'AI resume screener',
    'hiring automation',
    'HireFlow batch',
    'recruitment AI',
  ],
  openGraph: {
    title: 'Batch Resume Screener — HireFlow',
    description:
      'Screen multiple resumes at once with AI. Get scores, breakdowns, and aggregate stats instantly.',
    url: 'https://hireflow-landing-beryl.vercel.app/services/batch',
    type: 'website',
  },
};

export default function BatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
