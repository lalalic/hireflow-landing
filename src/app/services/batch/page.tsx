'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface ScoredResult {
  index: number;
  score: number;
  breakdown: {
    skillMatch: number;
    experienceRelevance: number;
    overallFit: number;
  };
  strengths: string[];
  improvements: string[];
  recommendation: string;
}

interface ScoreDistribution {
  '0-20': number;
  '21-40': number;
  '41-60': number;
  '61-80': number;
  '81-100': number;
}

interface AggregateStats {
  average_score: number;
  highest_score: number;
  lowest_score: number;
  score_distribution: ScoreDistribution;
}

interface BatchResult {
  results: ScoredResult[];
  aggregate: AggregateStats;
  count: number;
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */

const DEFAULT_JOB = `Senior Frontend Engineer
Requirements: React, TypeScript, 4+ years experience, team leadership
Company: HireFlow Inc`;

const DEFAULT_RESUMES = `Alice Chen
Skills: React, TypeScript, Next.js, Node.js, GraphQL, AWS
Experience: 6 years as Senior Frontend Developer at TechCorp
Education: MS Computer Science, Stanford
---
Bob Martinez
Skills: Vue.js, JavaScript, CSS, Python
Experience: 3 years as Frontend Developer at StartupXYZ
Education: BS Information Technology
---
Carol Wang
Skills: React, TypeScript, Redux, Jest, Docker, Kubernetes
Experience: 5 years Full Stack Engineer at BigTech. Led migration to React 18.
Education: BS Computer Science, MIT`;

function getScoreColor(score: number) {
  if (score >= 80)
    return { text: 'text-green-400', bar: 'bg-green-500', bg: 'bg-green-500/15' };
  if (score >= 60)
    return { text: 'text-blue-400', bar: 'bg-blue-500', bg: 'bg-blue-500/15' };
  if (score >= 40)
    return { text: 'text-yellow-400', bar: 'bg-yellow-500', bg: 'bg-yellow-500/15' };
  return { text: 'text-red-400', bar: 'bg-red-500', bg: 'bg-red-500/15' };
}

function getRecLabel(rec: string) {
  const map: Record<string, { label: string; cls: string }> = {
    strong_match: { label: 'Strong Match', cls: 'bg-green-500/15 text-green-400' },
    good_match: { label: 'Good Match', cls: 'bg-blue-500/15 text-blue-400' },
    partial_match: { label: 'Partial Match', cls: 'bg-yellow-500/15 text-yellow-400' },
    weak_match: { label: 'Weak Match', cls: 'bg-red-500/15 text-red-400' },
  };
  return map[rec] || { label: rec, cls: 'bg-gray-500/15 text-gray-400' };
}

const DIST_KEYS: (keyof ScoreDistribution)[] = [
  '0-20',
  '21-40',
  '41-60',
  '61-80',
  '81-100',
];

const DIST_COLORS = [
  'bg-red-500',
  'bg-orange-500',
  'bg-yellow-500',
  'bg-blue-500',
  'bg-green-500',
];

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function BatchPage() {
  const [jobText, setJobText] = useState('');
  const [resumesText, setResumesText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<BatchResult | null>(null);
  const [dots, setDots] = useState('');

  function startDots() {
    let count = 0;
    const iv = setInterval(() => {
      count = (count + 1) % 4;
      setDots('.'.repeat(count));
    }, 400);
    return iv;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    const iv = startDots();

    const jd = jobText.trim() || DEFAULT_JOB;
    const raw = resumesText.trim() || DEFAULT_RESUMES;
    const resumes = raw
      .split(/^---+$/m)
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    if (resumes.length === 0) {
      clearInterval(iv);
      setDots('');
      setLoading(false);
      setError('No resumes found. Separate multiple resumes with ---');
      return;
    }

    const items = resumes.map((resume) => ({ resume, jobDescription: jd }));

    try {
      const res = await fetch(
        'https://hireflow-api-mu.vercel.app/api/batch-score',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer demo-hireflow-2026',
          },
          body: JSON.stringify({ items }),
        },
      );

      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data: BatchResult = await res.json();
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      clearInterval(iv);
      setDots('');
      setLoading(false);
    }
  }

  function handleReset() {
    setJobText('');
    setResumesText('');
    setResult(null);
    setError('');
  }

  const maxDist = result
    ? Math.max(...DIST_KEYS.map((k) => result.aggregate.score_distribution[k]), 1)
    : 1;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-400">
            HireFlow
          </Link>
          <Link
            href="/services"
            className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
          >
            ← All Services
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Batch Resume Screener
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Paste multiple resumes separated by{' '}
            <code className="px-1.5 py-0.5 bg-gray-800 rounded text-blue-400 text-sm">
              ---
            </code>{' '}
            and get instant AI scoring for all of them
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Description */}
            <div>
              <label
                htmlFor="job"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Job Description
              </label>
              <textarea
                id="job"
                rows={10}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
                placeholder={DEFAULT_JOB}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
              />
            </div>

            {/* Resumes */}
            <div>
              <label
                htmlFor="resumes"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Resumes{' '}
                <span className="text-gray-500 font-normal">
                  (separate with ---)
                </span>
              </label>
              <textarea
                id="resumes"
                rows={10}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
                placeholder={DEFAULT_RESUMES}
                value={resumesText}
                onChange={(e) => setResumesText(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Screening Batch{dots}
              </span>
            ) : (
              'Screen All Resumes'
            )}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-8 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="animate-fadeIn space-y-8">
            {/* Aggregate Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white">
                  {result.count}
                </div>
                <div className="text-sm text-gray-400 mt-1">Resumes</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {result.aggregate.average_score}
                </div>
                <div className="text-sm text-gray-400 mt-1">Avg Score</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400">
                  {result.aggregate.highest_score}
                </div>
                <div className="text-sm text-gray-400 mt-1">Highest</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-red-400">
                  {result.aggregate.lowest_score}
                </div>
                <div className="text-sm text-gray-400 mt-1">Lowest</div>
              </div>
            </div>

            {/* Score Distribution */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Score Distribution
              </h3>
              <div className="flex items-end gap-3 h-32">
                {DIST_KEYS.map((key, i) => {
                  const val = result.aggregate.score_distribution[key];
                  const pct = (val / maxDist) * 100;
                  return (
                    <div
                      key={key}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <span className="text-xs font-semibold text-gray-300">
                        {val}
                      </span>
                      <div className="w-full flex items-end" style={{ height: '80px' }}>
                        <div
                          className={`w-full rounded-t ${DIST_COLORS[i]} transition-all duration-700`}
                          style={{
                            height: `${Math.max(pct, 4)}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">{key}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Individual Results */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Individual Scores
              </h2>
              {result.results
                .slice()
                .sort((a, b) => b.score - a.score)
                .map((r, idx) => {
                  const colors = getScoreColor(r.score);
                  const rec = getRecLabel(r.recommendation);
                  return (
                    <div
                      key={r.index}
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-400">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <span className="text-sm text-gray-500">
                            Resume #{r.index + 1}
                          </span>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${rec.cls}`}
                        >
                          {rec.label}
                        </span>
                        <div className={`text-2xl font-bold ${colors.text}`}>
                          {r.score}
                          <span className="text-sm text-gray-500"> / 100</span>
                        </div>
                      </div>

                      {/* Score bar */}
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-700 ease-out ${colors.bar}`}
                          style={{ width: `${r.score}%` }}
                        />
                      </div>

                      {/* Breakdown */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Skill Match', val: r.breakdown.skillMatch },
                          {
                            label: 'Experience',
                            val: r.breakdown.experienceRelevance,
                          },
                          { label: 'Overall Fit', val: r.breakdown.overallFit },
                        ].map((b) => (
                          <div key={b.label} className="text-center">
                            <div className="text-lg font-semibold text-gray-200">
                              {b.val}%
                            </div>
                            <div className="text-xs text-gray-500">
                              {b.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Strengths & Improvements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {r.strengths.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-green-400 mb-2">
                              Strengths
                            </h4>
                            <ul className="space-y-1">
                              {r.strengths.map((s, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-green-300"
                                >
                                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {r.improvements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-orange-400 mb-2">
                              Improvements
                            </h4>
                            <ul className="space-y-1">
                              {r.improvements.map((s, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-orange-300"
                                >
                                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Reset + CTA */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Screen Another Batch
              </button>
              <div className="text-center p-4 bg-blue-900/20 border border-blue-800/50 rounded-xl">
                <p className="text-blue-300 font-medium">
                  Need to screen more than 5 resumes per batch?{' '}
                  <Link
                    href="/services"
                    className="underline hover:text-blue-200"
                  >
                    Get HireFlow Pro →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
          Powered by{' '}
          <a
            href="https://hireflow-api-mu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            HireFlow AI API
          </a>
        </div>
      </footer>

      {/* Fade-in animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
