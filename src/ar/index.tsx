import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { conditionData } from '@/data/conditions'

export default function HomeAr() {
  return (
    <>
      <Head>
        <title>اختبار الصحة النفسية — MindCheck</title>
        <meta name="description" content="تقييم مجاني ومدروس علمياً للاكتئاب والقلق وما بعد الصدمة وثنائي القطب والوسواس القهري والفصام وفرط الحركة واضطرابات الأكل." />
      </Head>
      <Navbar lang="ar" />

      <main dir="rtl" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 80px' }}>
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
            letterSpacing: '0.03em',
          }}>
            مجاني · مجهول الهوية · مستند علمياً
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            fontWeight: 700,
            color: '#e8e0f5',
            lineHeight: 1.25,
            marginBottom: '24px',
          }}>
            افهم{' '}
            <span style={{ color: '#a78bfa', textShadow: '0 0 30px rgba(167,139,250,0.4)' }}>
              صحتك النفسية
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#9d8fc0', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.9 }}>
            أجب على 80 سؤالاً يغطي 8 حالات نفسية. احصل على تقييم شخصي وإرشاد واضح حول ما إذا كنت بحاجة إلى متخصص.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ar/test" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
              ابدأ التقييم ←
            </Link>
            <Link href="/ar/conditions" className="btn-outline">
              تصفح الحالات
            </Link>
          </div>
        </section>

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
          <p style={{ fontSize: '0.87rem', color: '#9d8fc0', lineHeight: 1.75 }}>
            <strong style={{ color: '#c4b5fd' }}>تنبيه:</strong> هذا التقييم لأغراض إعلامية فقط وليس تشخيصاً سريرياً. لا ينبغي أن تحل النتائج محل استشارة أخصائي الصحة النفسية المرخص.
          </p>
        </div>

        <section style={{ marginBottom: '72px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.9rem', color: '#e8e0f5', marginBottom: '36px', textAlign: 'center' }}>
            كيف يعمل
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📋', title: 'أجب على الأسئلة', desc: '80 سؤالاً مصمماً باستخدام مقاييس سريرية راسخة مثل PHQ-9 وGAD-7 وPCL-5 وغيرها.' },
              { icon: '🔬', title: 'احصل على التقييم', desc: 'تساهم كل إجابة في نتائج 8 حالات صحة نفسية مختلفة.' },
              { icon: '📊', title: 'اقرأ نتائجك', desc: 'احصل على حكم واضح: جيد، أو راقب، أو زر طبيباً — مع تفاصيل حالة محددة.' },
            ].map((step, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{step.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#c4b5fd', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#9d8fc0', lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.9rem', color: '#e8e0f5', marginBottom: '12px', textAlign: 'center' }}>
            الحالات المشمولة
          </h2>
          <p style={{ textAlign: 'center', color: '#9d8fc0', fontSize: '0.9rem', marginBottom: '36px' }}>اضغط على أي حالة لمعرفة المزيد</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '16px' }}>
            {conditionData.map((c) => (
              <Link key={c.slug} href={`/ar/conditions/${c.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card card-hover" style={{ padding: '22px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: c.color, flexShrink: 0, boxShadow: `0 0 10px ${c.color}60` }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e0f5' }}>{c.nameAr}</div>
                    <div style={{ fontSize: '0.75rem', color: '#5a5275', marginTop: '3px' }}>{c.taglineAr.split('—')[0].trim()}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #2a2a3d', padding: '24px', textAlign: 'center', color: '#5a5275', fontSize: '0.82rem' }}>
        MindCheck © {new Date().getFullYear()} · ليس بديلاً عن المساعدة المتخصصة · إذا كنت في أزمة، يرجى الاتصال بخدمات الطوارئ.
      </footer>
    </>
  )
}
