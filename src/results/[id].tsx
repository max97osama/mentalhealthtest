import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import Navbar from '@/components/Navbar'
import pool from '@/lib/db'
import { conditionData } from '@/data/conditions'
import { conditionMaxScores, Condition } from '@/data/questions'

type ResultRow = {
  verdict: 'good' | 'warn' | 'danger'
  depression_score: number
  anxiety_score: number
  ptsd_score: number
  bipolar_score: number
  ocd_score: number
  schizophrenia_score: number
  adhd_score: number
  eating_score: number
  flagged_conditions: string[]
  created_at: string
}

type Props = { result: ResultRow }

const verdictConfig = {
  good: {
    icon: '✅',
    label: 'You look good',
    sub: 'Your responses do not indicate significant signs of the assessed conditions. Keep taking care of yourself.',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.3)',
  },
  warn: {
    icon: '⚠️',
    label: 'You might want to see a doctor',
    sub: 'Your responses suggest some areas of concern. Consider speaking with a mental health professional for a proper evaluation.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.3)',
  },
  danger: {
    icon: '🚨',
    label: 'Please see a doctor as soon as possible',
    sub: 'Your responses indicate significant distress in one or more areas. Please reach out to a mental health professional or emergency services right away.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.3)',
  },
}

const scoreKeys: { key: keyof ResultRow; condition: Condition }[] = [
  { key: 'depression_score', condition: 'depression' },
  { key: 'anxiety_score', condition: 'anxiety' },
  { key: 'ptsd_score', condition: 'ptsd' },
  { key: 'bipolar_score', condition: 'bipolar' },
  { key: 'ocd_score', condition: 'ocd' },
  { key: 'schizophrenia_score', condition: 'schizophrenia' },
  { key: 'adhd_score', condition: 'adhd' },
  { key: 'eating_score', condition: 'eating' },
]

export default function ResultsPage({ result }: Props) {
  const v = verdictConfig[result.verdict]
  const flagged = result.flagged_conditions || []

  return (
    <>
      <Head>
        <title>Your Results — MindCheck</title>
      </Head>
      <Navbar lang="en" />

      <main style={{ maxWidth: '740px', margin: '0 auto', padding: '48px 20px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#e8e0f5', textAlign: 'center', marginBottom: '36px' }}>
          Your Assessment Results
        </h1>

        <div style={{ background: v.bg, border: `2px solid ${v.border}`, borderRadius: '16px', padding: '36px 32px', textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{v.icon}</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.7rem', color: v.color, marginBottom: '14px' }}>
            {v.label}
          </h2>
          <p style={{ color: '#9d8fc0', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            {v.sub}
          </p>
        </div>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#e8e0f5', marginBottom: '24px' }}>
          Condition Breakdown
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '56px' }}>
          {scoreKeys.map(({ key, condition }) => {
            const raw = result[key] as number
            const max = conditionMaxScores[condition] * 4
            const pct = Math.min(100, Math.round((raw / max) * 100))
            const info = conditionData.find((c) => c.slug === condition)!
            const isFlagged = flagged.includes(condition)
            return (
              <div key={condition} className="card" style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: info.color, boxShadow: `0 0 8px ${info.color}80` }} />
                    <span style={{ fontWeight: 600, color: '#e8e0f5', fontSize: '0.95rem' }}>{info.name}</span>
                    {isFlagged && (
                      <span style={{ fontSize: '0.7rem', background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '4px', padding: '2px 8px', fontWeight: 600 }}>
                        FLAGGED
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#9d8fc0' }}>{pct}%</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: `${pct}%`, background: isFlagged ? 'linear-gradient(90deg, #ef4444, #f87171)' : `linear-gradient(90deg, ${info.color}aa, ${info.color})` }} />
                </div>
                {isFlagged && (
                  <div style={{ marginTop: '10px' }}>
                    <Link href={`/conditions/${condition}`} style={{ fontSize: '0.8rem', color: '#a78bfa', textDecoration: 'none' }}>
                      Learn about {info.name} →
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {result.verdict === 'danger' && (
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '14px', padding: '28px 24px', marginBottom: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#ef4444', marginBottom: '14px', fontSize: '1.2rem' }}>
              🆘 Immediate Help Resources
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '0.9rem', color: '#9d8fc0' }}>🌍 <strong style={{ color: '#e8e0f5' }}>International Association for Suicide Prevention:</strong> https://www.iasp.info/resources/Crisis_Centres/</li>
              <li style={{ fontSize: '0.9rem', color: '#9d8fc0' }}>🇺🇸 <strong style={{ color: '#e8e0f5' }}>US Crisis Line:</strong> Call or text 988</li>
              <li style={{ fontSize: '0.9rem', color: '#9d8fc0' }}>🇬🇧 <strong style={{ color: '#e8e0f5' }}>UK Samaritans:</strong> 116 123</li>
              <li style={{ fontSize: '0.9rem', color: '#9d8fc0' }}>🇪🇬 <strong style={{ color: '#e8e0f5' }}>Egypt Mental Health Hotline:</strong> 08008880700</li>
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/test" className="btn-outline">Retake Test</Link>
          <Link href="/conditions" className="btn-primary">Explore Conditions</Link>
        </div>
      </main>
    </>
  )
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string }
  try {
    const res = await pool.query('SELECT * FROM results WHERE id = $1', [id])
    if (res.rows.length === 0) return { notFound: true }
    const result = { ...res.rows[0], created_at: res.rows[0].created_at.toISOString() }
    return { props: { result } }
  } catch {
    return { notFound: true }
  }
}
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string }
  try {
    const res = await pool.query('SELECT * FROM results WHERE id = $1', [id])
    if (res.rows.length === 0) return { notFound: true }
    const result = { ...res.rows[0], created_at: res.rows[0].created_at.toISOString() }
    return { props: { result } }
  } catch {
    return { notFound: true }
  }
}