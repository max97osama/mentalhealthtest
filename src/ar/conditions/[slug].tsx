import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Navbar from '@/components/navbar'
import { conditionData, ConditionInfo } from '@/data/conditions'

type Props = { condition: ConditionInfo }

export default function ConditionPageAr({ condition: c }: Props) {
  return (
    <>
      <Head>
        <title>{c.nameAr} — MindCheck</title>
        <meta name="description" content={c.taglineAr} />
      </Head>
      <Navbar lang="ar" />

      <main dir="rtl" style={{ maxWidth: '800px', margin: '0 auto', padding: '52px 20px 80px' }}>
        <Link href="/ar/conditions" style={{ fontSize: '0.85rem', color: '#9d8fc0', textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>
          ← جميع الحالات
        </Link>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ width: '48px', height: '5px', borderRadius: '3px', background: c.color, marginBottom: '20px', boxShadow: `0 0 16px ${c.color}70` }} />
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#e8e0f5', marginBottom: '14px' }}>{c.nameAr}</h1>
          <p style={{ fontSize: '1.1rem', color: c.color, fontStyle: 'italic', marginBottom: '24px' }}>{c.taglineAr}</p>
          <p style={{ color: '#9d8fc0', lineHeight: 1.9, fontSize: '0.97rem' }}>{c.descriptionAr}</p>
        </div>

        <Section title="الأعراض الرئيسية" color={c.color}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.symptomsAr.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#9d8fc0', fontSize: '0.93rem', lineHeight: 1.7 }}>
                <span style={{ color: c.color, flexShrink: 0, marginTop: '2px' }}>◆</span>{s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="الأسباب الشائعة" color={c.color}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.causesAr.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#9d8fc0', fontSize: '0.93rem', lineHeight: 1.7 }}>
                <span style={{ color: c.color, flexShrink: 0, marginTop: '2px' }}>◆</span>{s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="خيارات العلاج" color={c.color}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.treatmentAr.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#9d8fc0', fontSize: '0.93rem', lineHeight: 1.7 }}>
                <span style={{ color: c.color, flexShrink: 0, marginTop: '2px' }}>◆</span>{s}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="حقائق مهمة" color={c.color}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {c.factsAr.map((f, i) => (
              <div key={i} style={{ background: `${c.color}10`, border: `1px solid ${c.color}30`, borderRadius: '10px', padding: '16px' }}>
                <p style={{ fontSize: '0.88rem', color: '#c4b5fd', lineHeight: 1.7 }}>{f}</p>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ marginTop: '52px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Link href="/ar/test" className="btn-primary">ابدأ التقييم ←</Link>
          <Link href="/ar/conditions" className="btn-outline">← جميع الحالات</Link>
        </div>
      </main>
    </>
  )
}

function Section({ title, color, children }: { title: string;color: string;children: React.ReactNode }) {
  return (
    <div className="card" style={{ padding: '28px 28px', marginBottom: '20px' }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: color, marginBottom: '20px' }}>{title}</h2>
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