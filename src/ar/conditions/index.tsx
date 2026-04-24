import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { conditionData } from '@/data/conditions'

export default function ConditionsPageAr() {
  return (
    <>
      <Head><title>الحالات النفسية — MindCheck</title></Head>
      <Navbar lang="ar" />
      <main dir="rtl" style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 20px 80px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#e8e0f5', marginBottom: '12px', textAlign: 'center' }}>
          الحالات النفسية
        </h1>
        <p style={{ textAlign: 'center', color: '#9d8fc0', marginBottom: '52px', fontSize: '1rem' }}>
          تعرف على الحالات المشمولة في التقييم
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {conditionData.map((c) => (
            <Link key={c.slug} href={`/ar/conditions/${c.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card card-hover" style={{ padding: '28px 24px', height: '100%' }}>
                <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: c.color, marginBottom: '18px', boxShadow: `0 0 12px ${c.color}60` }} />
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#e8e0f5', marginBottom: '10px' }}>{c.nameAr}</h2>
                <p style={{ fontSize: '0.85rem', color: '#9d8fc0', lineHeight: 1.75, marginBottom: '18px' }}>{c.taglineAr}</p>
                <span style={{ fontSize: '0.82rem', color: c.color, fontWeight: 600 }}>اقرأ المزيد ←</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
