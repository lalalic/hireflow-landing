'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ── Types ─────────────────────────────────────────────────────────────────── */

interface RankedCandidate {
  rank: number;
  name: string;
  score: number;
  grade: string;
  key_matches: string[];
  gaps: string[];
}

interface MatchSummary {
  total_candidates: number;
  qualified_count: number;
  average_score: number;
  top_skills_in_demand: string[];
}

interface MatchResult {
  rankings: RankedCandidate[];
  summary: MatchSummary;
}

interface CandidateEntry {
  id: number;
  name: string;
  resume: string;
}

/* ── Helpers ───────────────────────────────────────────────────────────────── */

const DEFAULT_JOB = `Senior Frontend Engineer
Requirements: React, TypeScript, 4+ years experience, team leadership, system design
Company: HireFlow Inc`;

const DEFAULT_CANDIDATES: CandidateEntry[] = [
  {
    id: 1,
    name: 'Alice Chen',
    resume: `Skills: React, TypeScript, Next.js, Node.js, GraphQL, AWS
Experience: 6 years as Senior Frontend Developer at TechCorp. Led a team of 5.
Education: MS Computer Science, Stanford`,
  },
  {
    id: 2,
    name: 'Bob Martinez',
    resume: `Skills: Vue.js, JavaScript, CSS, Python
Experience: 3 years as Frontend Developer at StartupXYZ
Education: BS Information Technology`,
  },
];

function getGradeColor(grade: string) {
  const map: Record<string, string> = {
    A: 'bg-green-500/20 text-green-400 ring-green-500/40',
    B: 'bg-blue-500/20 text-blue-400 ring-blue-500/40',
    C: 'bg-yellow-500/20 text-yellow-400 ring-yellow-500/40',
    D: 'bg-orange-500/20 text-orange-400 ring-orange-500/40',
    F: 'bg-red-500/20 text-red-400 ring-red-500/40',
  };
  return map[grade] || 'bg-gray-500/20 text-gray-400 ring-gray-500/40';
}

function getScoreBarColor(score: number) {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-blue-500';
  if (score >= 40) return 'bg-yellow-500';
  return 'bg-red-500';
}

let nextId = 3;

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function MatchPage() {
  const [jobText, setJobText] = useState('');
  const [candidates, setCandidates] = useState<CandidateEntry[]>([
    { id: 1, name: '', resume: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);
  const [dots, setDots] = useState('');

  /* Animated dots */
  function startDots() {
    let count = 0;
    const iv = setInterval(() => {
      count = (count + 1) % 4;
      setDots('.'.repeat(count));
    }, 400);
    return iv;
  }

  /* Candidate management */
  function addCandidate() {
    if (candidates.length >= 5) return;
    setCandidates((prev) => [...prev, { id: nextId++, name: '', resume: '' }]);
  }

  function removeCandidate(id: number) {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  }

  function updateCandidate(id: number, field: 'name' | 'resume', value: string) {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  }

  /* Submit */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    const iv = startDots();

    const jd = jobText.trim() || DEFAULT_JOB;

    const filledCandidates = candidates.filter(
      (c) => c.name.trim() || c.resume.trim(),
    );

    const payload =
      filledCandidates.length > 0
        ? filledCandidates.map((c) => ({
            name: c.name.trim() || `Candidate ${c.id}`,
            resume: c.resume.trim() || 'No resume provided',
          }))
        : DEFAULT_CANDIDATES.map((c) => ({ name: c.name, resume: c.resume }));

    try {
      const res = await fetch('https://hireflow-api-mu.vercel.app/api/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer demo-hireflow-2026',
        },
        body: JSON.stringify({ jobDescription: jd, candidates: payload }),
      });

      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data: MatchResult = await res.json();
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
    setCandidates([{ id: nextId++, name: '', resume: '' }]);
    setResult(null);
    setError('');
  }

  /* ── Render ──────────────────────────────────────────────────────────────── */

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
            AI Candidate Matcher
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Paste a job description and candidate resumes — get ranked results
            with AI grades, key matches, and skill gaps
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10 space-y-6">
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
              rows={5}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
              placeholder={DEFAULT_JOB}
              value={jobText}
              onChange={(e) => setJobText(e.target.value)}
            />
          </div>

          {/* Candidates */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold text-gray-300">
                Candidates ({candidates.length}/5)
              </label>
              {candidates.length < 5 && (
                <button
                  type="button"
                  onClick={addCandidate}
                  className="text-sm px-3 py-1 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition"
                >
                  + Add Candidate
                </button>
              )}
            </div>

            <div className="space-y-4">
              {candidates.map((c, idx) => (
                <div
                  key={c.id}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Candidate {idx + 1}
                    </span>
                    {candidates.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeCandidate(c.id)}
                        className="text-xs text-red-400 hover:text-red-300 transition"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={
                      DEFAULT_CANDIDATES[idx]?.name || `Candidate name`
                    }
                    value={c.name}
                    onChange={(e) => updateCandidate(c.id, 'name', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <textarea
                    rows={4}
                    placeholder={
                      DEFAULT_CANDIDATES[idx]?.resume ||
                      'Paste resume text here…'
                    }
                    value={c.resume}
                    onChange={(e) =>
                      updateCandidate(c.id, 'resume', e.target.value)
                    }
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
                  />
                </div>
              ))}
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
                Matching{dots}
              </span>
            ) : (
              'Match Candidates'
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
            {/* Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-white">
                  {result.summary.total_candidates}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Total Candidates
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400">
                  {result.summary.qualified_count}
                </div>
                <div className="text-sm text-gray-400 mt-1">Qualified</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {result.summary.average_score}
                </div>
                <div className="text-sm text-gray-400 mt-1">Avg Score</div>
              </div>
            </div>

            {/* Top Skills in Demand */}
            {result.summary.top_skills_in_demand.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Top Skills in Demand
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.summary.top_skills_in_demand.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Ranked Candidates */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Rankings</h2>
              {result.rankings.map((c) => (
                <div
                  key={c.rank}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Rank badge */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg font-bold text-gray-300">
                      #{c.rank}
                    </div>

                    {/* Name + Grade */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {c.name}
                      </h3>
                    </div>

                    {/* Grade pill */}
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 text-lg font-bold ${getGradeColor(c.grade)}`}
                    >
                      {c.grade}
                    </span>

                    {/* Score */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {c.score}
                      </div>
                      <div className="text-xs text-gray-500">/ 100</div>
                    </div>
                  </div>

                  {/* Score bar */}
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ease-out ${getScoreBarColor(c.score)}`}
                      style={{ width: `${c.score}%` }}
                    />
                  </div>

                  {/* Matches & Gaps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {c.key_matches.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">
                          Key Matches
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {c.key_matches.map((m, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-green-500/15 text-green-400 text-xs"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {c.gaps.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 mb-2">
                          Skill Gaps
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {c.gaps.map((g, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 text-xs"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reset + CTA */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Match Again
              </button>
              <div className="text-center p-4 bg-blue-900/20 border border-blue-800/50 rounded-xl">
                <p className="text-blue-300 font-medium">
                  Need to match more than 5 candidates?{' '}
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
