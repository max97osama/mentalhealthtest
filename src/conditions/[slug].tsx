import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Navbar from '@/components/Navbar'
import { conditionData, ConditionInfo } from '@/data/conditions'

type Props = { condition: ConditionInfo }

export default function ConditionPage({ condition: c }: Props) {
  return (
    <>
      <Head>
        <title>{c.name} — MindCheck</title>
        <meta name="description" content={c.tagline} />
      </Head>
      <Navbar lang="en" />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '52px 20px 80px' }}>
        <Link href="/conditions" style={{ fontSize: '0.85rem', color: '#9d8fc0', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>
          ← All Conditions
        </Link>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ width: '48px', height: '5px', borderRadius: '3px', background: c.color, marginBottom: '20px', boxShadow: `0 0 16px ${c.color}70` }} />
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#e8e0f5', marginBottom: '14px' }}>
            {c.name}
          </h1>
          <p style={{ fontSize: '1.1rem', color: c.color, fontStyle: 'italic', marginBottom: '24px' }}>{c.tagline}</p>
          <p style={{ color: '#9d8fc0', lineHeight: 1.8, fontSize: '0.97rem' }}>{c.description}</p>
        </div>

        <Section title="Key Symptoms" color={c.color}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.symptoms.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#9d8fc0', fontSize: '0.93rem', lineHeight: 1.6 }}>
                <span style={{ color: c.color, flexShrink: 0, marginTop: '2px' }}>◆</span>
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Common Causes" color={c.color}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.causes.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#9d8fc0', fontSize: '0.93rem', lineHeight: 1.6 }}>
                <span style={{ color: c.color, flexShrink: 0, marginTop: '2px' }}>◆</span>
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Treatment Options" color={c.color}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.treatment.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#9d8fc0', fontSize: '0.93rem', lineHeight: 1.6 }}>
                <span style={{ color: c.color, flexShrink: 0, marginTop: '2px' }}>◆</span>
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Key Facts" color={c.color}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {c.facts.map((f, i) => (
              <div key={i} style={{ background: `${c.color}10`, border: `1px solid ${c.color}30`, borderRadius: '10px', padding: '16px' }}>
                <p style={{ fontSize: '0.88rem', color: '#c4b5fd', lineHeight: 1.6 }}>{f}</p>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ marginTop: '52px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Link href="/test" className="btn-primary">Take the Assessment →</Link>
          <Link href="/conditions" className="btn-outline">← All Conditions</Link>
        </div>
      </main>
    </>
  )
}

function Section({ title, color, children }: { title: string;color: string;children: React.ReactNode }) {
  return (
    <div className="card" style={{ padding: '28px 28px', marginBottom: '20px' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: color, marginBottom: '20px' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: conditionData.map((c) => ({ params: { slug: c.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const condition = conditionData.find((c) => c.slug === params?.slug)
  if (!condition) return { notFound: true }
  return { props: { condition } }
}