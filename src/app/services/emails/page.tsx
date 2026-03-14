'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type EmailType = 'outreach' | 'followup' | 'rejection' | 'offer';
type Tone = 'formal' | 'casual' | 'friendly';
type Language = 'english' | 'chinese';

interface EmailResult {
  subject: string;
  template: string;
}

export default function EmailGeneratorPage() {
  const [type, setType] = useState<EmailType>('outreach');
  const [candidateName, setCandidateName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [tone, setTone] = useState<Tone>('formal');
  const [language, setLanguage] = useState<Language>('english');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'AI Email Generator | HireFlow';
  }, []);

  const handleGenerate = async () => {
    if (!candidateName.trim() || !position.trim() || !company.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://hireflow-api-mu.vercel.app/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer demo-hireflow-2026',
        },
        body: JSON.stringify({ type, candidateName, position, company, tone, language }),
      });
      const data = await res.json();
      setResult({ subject: data.subject, template: data.template });
    } catch {
      setError('Failed to generate email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    const fullEmail = `Subject: ${result.subject}\n\n${result.template}`;
    await navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setResult(null);
    setCopied(false);
    setError('');
  };

  const toneOptions: { value: Tone; label: string }[] = [
    { value: 'formal', label: 'Formal' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
  ];

  const languageOptions: { value: Language; label: string }[] = [
    { value: 'english', label: 'English' },
    { value: 'chinese', label: 'Chinese' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
            ← Back to HireFlow
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            AI Email Generator
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Generate professional recruitment emails in seconds
          </p>
        </div>

        {!result ? (
          /* Form */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <div className="space-y-6">
              {/* Email Type */}
              <div>
                <label htmlFor="email-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Type
                </label>
                <select
                  id="email-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as EmailType)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option value="outreach">Outreach</option>
                  <option value="followup">Follow-up</option>
                  <option value="rejection">Rejection</option>
                  <option value="offer">Offer</option>
                </select>
              </div>

              {/* Candidate Name */}
              <div>
                <label htmlFor="candidate-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Candidate Name
                </label>
                <input
                  id="candidate-name"
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. John Smith"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <input
                  id="position"
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="e.g. Senior Software Engineer"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Inc."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Tone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tone
                </label>
                <div className="flex gap-2">
                  {toneOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setTone(opt.value)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                        tone === opt.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <div className="flex gap-2">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setLanguage(opt.value)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                        language === opt.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating...
                  </>
                ) : (
                  'Generate Email'
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-6">
            {/* Email Preview Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Email Header Bar */}
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-400 ml-2">New Message</span>
              </div>

              {/* Subject Line */}
              <div className="px-6 py-4 border-b border-gray-100 bg-blue-50">
                <span className="text-sm font-medium text-gray-400 mr-2">Subject:</span>
                <span className="text-sm font-semibold text-gray-900">{result.subject}</span>
              </div>

              {/* Email Body */}
              <div className="px-6 py-6">
                <div className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                  {result.template}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Generate Another
              </button>
            </div>

            {/* Usage Counter */}
            <p className="text-center text-sm text-gray-400">
              1 of 5 free emails used today
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100">
              <p className="text-gray-700 font-medium">
                Need unlimited emails?{' '}
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Try HireFlow Pro →
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-10">
          Powered by HireFlow AI API
        </p>
      </div>
    </div>
  );
}
