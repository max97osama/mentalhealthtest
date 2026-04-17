import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import { questions, answerOptions } from '@/data/questions'

export default function TestPage() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [current, setCurrent] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const total = questions.length
  const q = questions[current]
  const progress = Math.round((Object.keys(answers).length / total) * 100)
  const answered = answers[q.id] !== undefined

  function select(value: number) {
    setAnswers((prev) => ({ ...prev, [q.id]: value }))
  }

  function goNext() {
    if (current < total - 1) setCurrent(current + 1)
  }

  function goPrev() {
    if (current > 0) setCurrent(current - 1)
  }

  async function submit() {
    const unanswered = questions.filter((q) => answers[q.id] === undefined)
    if (unanswered.length > 0) {
      setError(`Please answer all questions. ${unanswered.length} question(s) remaining.`)
      setCurrent(questions.findIndex((q) => answers[q.id] === undefined))
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      })
      const data = await res.json()
      if (data.id) {
        router.push(`/results/${data.id}`)
      } else {
        setError('Submission failed. Please try again.')
        setSubmitting(false)
      }
    } catch {
      setError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  const conditionColors: Record<string, string> = {
    depression: '#7c3fd4',
    anxiety: '#3b82f6',
    ptsd: '#ef4444',
    bipolar: '#f59e0b',
    ocd: '#10b981',
    schizophrenia: '#8b5cf6',
    adhd: '#f97316',
    eating: '#ec4899',
  }

  return (
    <>
      <Head>
        <title>Mental Health Assessment — MindCheck</title>
      </Head>
      <Navbar lang="en" />

      <main style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 20px 80px' }}>
        {/* Progress header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: '#9d8fc0' }}>
              Question {current + 1} of {total}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#a78bfa', fontWeight: 600 }}>
              {progress}% complete
            </span>
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #6d28d9, #a78bfa)' }}
            />
          </div>
        </div>

        {/* Condition badge */}
        <div style={{ marginBottom: '20px' }}>
          <span style={{
            display: 'inline-block',
            background: `${conditionColors[q.condition]}20`,
            border: `1px solid ${conditionColors[q.condition]}50`,
            color: conditionColors[q.condition],
            borderRadius: '999px',
            padding: '4px 14px',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {q.condition.toUpperCase()}
          </span>
        </div>

        {/* Question card */}
        <div className="card" style={{ padding: '36px 32px', marginBottom: '28px', minHeight: '180px' }}>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
            color: '#e8e0f5',
            lineHeight: 1.6,
          }}>
            {q.text}
          </p>
        </div>

        {/* Answer options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          {answerOptions.map((opt) => (
            <button
              key={opt.value}
              className={`option-btn${answers[q.id] === opt.value ? ' selected' : ''}`}
              onClick={() => select(opt.value)}
            >
              <span style={{
                display: 'inline-block',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: answers[q.id] === opt.value ? '2px solid #8b5cf6' : '2px solid #2a2a3d',
                background: answers[q.id] === opt.value ? '#6d28d9' : 'transparent',
                marginRight: '12px',
                verticalAlign: 'middle',
                flexShrink: 0,
              }} />
              {opt.label}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <button
            className="btn-outline"
            onClick={goPrev}
            disabled={current === 0}
            style={{ opacity: current === 0 ? 0.4 : 1 }}
          >
            ← Previous
          </button>

          {current < total - 1 ? (
            <button
              className="btn-primary"
              onClick={goNext}
              disabled={!answered}
              style={{ opacity: !answered ? 0.5 : 1 }}
            >
              Next →
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={submit}
              disabled={submitting}
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', minWidth: '160px' }}
            >
              {submitting ? 'Submitting...' : 'Submit Results'}
            </button>
          )}
        </div>

        {error && (
          <p style={{ color: '#ef4444', fontSize: '0.87rem', marginTop: '20px', textAlign: 'center' }}>
            {error}
          </p>
        )}

        {/* Quick nav dots */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginTop: '40px',
          justifyContent: 'center',
        }}>
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: i === current
                  ? '#8b5cf6'
                  : answers[questions[i].id] !== undefined
                  ? '#5b2d9e'
                  : '#2a2a3d',
                transition: 'background 0.2s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </main>
    </>
  )
}
