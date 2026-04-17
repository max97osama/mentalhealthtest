import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { conditionData } from '@/data/conditions'

export default function Home() {
  return (
    <>
      <Head>
        <title>MindCheck — Mental Health Self-Assessment</title>
        <meta name="description" content="A free, scientifically-informed self-assessment for depression, anxiety, PTSD, bipolar, OCD, schizophrenia, ADHD, and eating disorders." />
      </Head>
      <Navbar lang="en" />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 80px' }}>
        {/* Hero */}
        <section style={{ textAlign: 'center', padding: '80px 0 60px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(109,40,217,0.15)',
            border: '1px solid #5b2d9e',
            borderRadius: '999px',
            padding: '6px 18px',
            fontSize: '0.82rem',
            color: '#a78bfa',
            marginBottom: '28px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            Free · Anonymous · Scientifically Informed
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            fontWeight: 700,
            color: '#e8e0f5',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}>
            Understand Your <br />
            <span style={{ color: '#a78bfa', textShadow: '0 0 30px rgba(167,139,250,0.4)' }}>
              Mental Health
            </span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#9d8fc0',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            Answer 80 questions across 8 conditions. Get a personal assessment and clear guidance on whether you should speak to a professional.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/test" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
              Start Assessment →
            </Link>
            <Link href="/conditions" className="btn-outline">
              Browse Conditions
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{
          background: 'rgba(91,45,158,0.1)',
          border: '1px solid #3d1a72',
          borderRadius: '12px',
          padding: '18px 24px',
          marginBottom: '60px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>⚠️</span>
          <p style={{ fontSize: '0.87rem', color: '#9d8fc0', lineHeight: 1.65 }}>
            <strong style={{ color: '#c4b5fd' }}>Disclaimer:</strong> This assessment is for informational purposes only and is not a clinical diagnosis. Results should not replace consultation with a licensed mental health professional.
          </p>
        </div>

        {/* How it works */}
        <section style={{ marginBottom: '72px' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.9rem',
            color: '#e8e0f5',
            marginBottom: '36px',
            textAlign: 'center',
          }}>
            How It Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📋', title: 'Answer Questions', desc: '80 questions designed using established clinical scales like PHQ-9, GAD-7, PCL-5, and more.' },
              { icon: '🔬', title: 'Get Scored', desc: 'Each answer contributes to scores across 8 different mental health conditions.' },
              { icon: '📊', title: 'Read Your Results', desc: 'Receive a clear verdict: good, monitor, or see a doctor — with specific condition insights.' },
            ].map((step, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{step.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#c4b5fd', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#9d8fc0', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions covered */}
        <section>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.9rem',
            color: '#e8e0f5',
            marginBottom: '12px',
            textAlign: 'center',
          }}>
            Conditions Covered
          </h2>
          <p style={{ textAlign: 'center', color: '#9d8fc0', fontSize: '0.9rem', marginBottom: '36px' }}>
            Tap any condition to learn more
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '16px' }}>
            {conditionData.map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card card-hover"
                  style={{ padding: '22px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}
                >
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: c.color,
                    flexShrink: 0,
                    boxShadow: `0 0 10px ${c.color}60`,
                  }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e0f5' }}>{c.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#5a5275', marginTop: '3px' }}>{c.tagline.split('—')[0].trim()}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer style={{
        borderTop: '1px solid #2a2a3d',
        padding: '24px',
        textAlign: 'center',
        color: '#5a5275',
        fontSize: '0.82rem',
      }}>
        MindCheck © {new Date().getFullYear()} · Not a substitute for professional help · If you are in crisis, please contact emergency services.
      </footer>
    </>
  )
}
