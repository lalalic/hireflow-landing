import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Candidate Matcher — HireFlow | Rank & Score Candidates Instantly',
  description:
    'Paste a job description and up to 5 candidate resumes to get instant AI-powered rankings, grades, skill matches, and gap analysis. Free to try.',
  keywords: [
    'AI candidate matching',
    'resume ranking',
    'candidate scoring',
    'hiring automation',
    'HireFlow matcher',
    'AI recruitment',
  ],
  openGraph: {
    title: 'AI Candidate Matcher — HireFlow',
    description:
      'Rank and score candidates against any job description with AI. Get grades, key matches, and skill gap analysis instantly.',
    url: 'https://hireflow-landing-beryl.vercel.app/services/match',
    type: 'website',
  },
};

export default function MatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
