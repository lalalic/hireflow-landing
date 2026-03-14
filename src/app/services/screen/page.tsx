'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ScoreResult {
  score: number;
  recommendation: string;
  breakdown: {
    skillMatch: number;
    experienceRelevance: number;
    overallFit: number;
  };
  strengths: string[];
  improvements: string[];
}

const DEFAULT_RESUME = `John Smith
Skills: React, TypeScript, Node.js, Python, AWS
Experience: 5 years as Senior Frontend Developer at TechCorp
Education: BS Computer Science, MIT`;

const DEFAULT_JOB = `Senior Frontend Engineer
Requirements: React, TypeScript, 4+ years experience, team leadership
Company: HireFlow Inc`;

function parseCandidate(text: string) {
  const lines = text.trim().split('\n');
  const name = lines[0]?.trim() || 'Unknown';

  let skills: string[] = [];
  let experience = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith('skills:')) {
      skills = trimmed
        .slice(7)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
    if (trimmed.toLowerCase().startsWith('experience:')) {
      experience = trimmed.slice(11).trim();
    }
  }

  return { name, skills, experience };
}

function parseJob(text: string) {
  const lines = text.trim().split('\n');
  const title = lines[0]?.trim() || 'Unknown Position';

  let requirements: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.toLowerCase().startsWith('requirements:')) {
      requirements = trimmed
        .slice(13)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
  }

  return { title, requirements };
}

function getScoreColor(score: number) {
  if (score >= 80) return { bg: 'bg-green-100', text: 'text-green-700', ring: 'ring-green-500', bar: 'bg-green-500' };
  if (score >= 60) return { bg: 'bg-blue-100', text: 'text-blue-700', ring: 'ring-blue-500', bar: 'bg-blue-500' };
  if (score >= 40) return { bg: 'bg-yellow-100', text: 'text-yellow-700', ring: 'ring-yellow-500', bar: 'bg-yellow-500' };
  return { bg: 'bg-red-100', text: 'text-red-700', ring: 'ring-red-500', bar: 'bg-red-500' };
}

function getRecommendationLabel(rec: string) {
  const map: Record<string, { label: string; color: string }> = {
    strong_match: { label: 'Strong Match', color: 'bg-green-100 text-green-800' },
    good_match: { label: 'Good Match', color: 'bg-blue-100 text-blue-800' },
    partial_match: { label: 'Partial Match', color: 'bg-yellow-100 text-yellow-800' },
    weak_match: { label: 'Weak Match', color: 'bg-red-100 text-red-800' },
  };
  return map[rec] || { label: rec, color: 'bg-gray-100 text-gray-800' };
}

function BreakdownBar({ label, value }: { label: string; value: number }) {
  const colors = getScoreColor(value);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-700 ease-out ${colors.bar}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function ScreenPage() {
  const [resumeText, setResumeText] = useState('');
  const [jobText, setJobText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ScoreResult | null>(null);

  useEffect(() => {
    document.title = 'AI Resume Screener — HireFlow';
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const rText = resumeText.trim() || DEFAULT_RESUME;
    const jText = jobText.trim() || DEFAULT_JOB;

    const candidate = parseCandidate(rText);
    const job = parseJob(jText);

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('https://hireflow-api-mu.vercel.app/api/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer demo-hireflow-2026',
        },
        body: JSON.stringify({ candidate, job }),
      });

      if (!res.ok) {
        throw new Error(`API returned ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setResumeText('');
    setJobText('');
    setResult(null);
    setError('');
  }

  const scoreColors = result ? getScoreColor(result.score) : null;
  const recBadge = result ? getRecommendationLabel(result.recommendation) : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-600">
            HireFlow
          </Link>
          <Link
            href="/services"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← All Services
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            AI Resume Screener
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Paste a resume and job description to get instant AI scoring
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Resume Textarea */}
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Candidate Resume
              </label>
              <textarea
                id="resume"
                rows={8}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
                placeholder={DEFAULT_RESUME}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
            </div>

            {/* Job Textarea */}
            <div>
              <label
                htmlFor="job"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Job Description
              </label>
              <textarea
                id="job"
                rows={8}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
                placeholder={DEFAULT_JOB}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
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
                Screening…
              </span>
            ) : (
              'Screen Now'
            )}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="animate-fadeIn space-y-8">
            {/* Score + Recommendation */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gray-50 rounded-2xl">
              {/* Circular Score */}
              <div
                className={`flex-shrink-0 w-28 h-28 rounded-full flex items-center justify-center ring-4 ${scoreColors?.bg} ${scoreColors?.ring}`}
              >
                <span className={`text-4xl font-bold ${scoreColors?.text}`}>
                  {result.score}
                </span>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${recBadge?.color}`}
                >
                  {recBadge?.label}
                </span>
                <p className="mt-2 text-gray-600 text-sm">
                  Overall match score out of 100
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Score Breakdown
              </h2>
              <BreakdownBar label="Skill Match" value={result.breakdown.skillMatch} />
              <BreakdownBar
                label="Experience Relevance"
                value={result.breakdown.experienceRelevance}
              />
              <BreakdownBar label="Overall Fit" value={result.breakdown.overallFit} />
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-green-800 mb-3">
                  Strengths
                </h2>
                <ul className="space-y-2">
                  {result.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                      <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-green-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="bg-orange-50 rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-orange-800 mb-3">
                  Areas for Improvement
                </h2>
                <ul className="space-y-2">
                  {result.improvements.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-orange-700">
                      <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reset */}
            <div className="text-center">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Screen Another
              </button>
            </div>

            {/* CTA */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <p className="text-blue-800 font-medium">
                Want unlimited screenings?{' '}
                <Link href="/services" className="underline hover:text-blue-600">
                  Get HireFlow Pro →
                </Link>
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-400">
          Powered by{' '}
          <a
            href="https://hireflow-api-mu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
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
