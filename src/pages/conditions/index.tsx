import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { conditionData } from '@/data/conditions'

export default function ConditionsPage() {
  return (
    <>
      <Head>
        <title>Mental Health Conditions — MindCheck</title>
      </Head>
      <Navbar lang="en" />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 20px 80px' }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#e8e0f5',
          marginBottom: '12px',
          textAlign: 'center',
        }}>
          Mental Health Conditions
        </h1>
        <p style={{ textAlign: 'center', color: '#9d8fc0', marginBottom: '52px', fontSize: '1rem' }}>
          Learn about the conditions covered in our assessment
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {conditionData.map((c) => (
            <Link key={c.slug} href={`/conditions/${c.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '28px 24px', height: '100%' }}>
                <div style={{
                  width: '40px', height: '4px', borderRadius: '2px',
                  background: c.color,
                  marginBottom: '18px',
                  boxShadow: `0 0 12px ${c.color}60`,
                }} />
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.25rem',
                  color: '#e8e0f5',
                  marginBottom: '10px',
                }}>
                  {c.name}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#9d8fc0', lineHeight: 1.65, marginBottom: '18px' }}>
                  {c.tagline}
                </p>
                <span style={{ fontSize: '0.82rem', color: c.color, fontWeight: 600 }}>
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
