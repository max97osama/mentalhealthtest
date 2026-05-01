import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

type Question = {
  id: number
  text: string
  condition: string
}

const questionsAr: Question[] = [
  { id: 1, text: 'أشعر بقلة الاهتمام أو المتعة في الأشياء التي كنت أستمتع بها.', condition: 'depression' },
  { id: 2, text: 'أشعر بالحزن أو اليأس أو الفراغ معظم اليوم.', condition: 'depression' },
  { id: 3, text: 'أعاني من صعوبة في النوم أو أنام أكثر من اللازم.', condition: 'depression' },
  { id: 4, text: 'أشعر بالتعب أو انعدام الطاقة معظم الأيام.', condition: 'depression' },
  { id: 5, text: 'أعاني من ضعف الشهية أو أفرط في الأكل دون شعور بالجوع.', condition: 'depression' },
  { id: 6, text: 'أشعر بأنني فاشل أو عديم القيمة.', condition: 'depression' },
  { id: 7, text: 'أجد صعوبة في التركيز على الأشياء مثل القراءة أو مشاهدة التلفاز.', condition: 'depression' },
  { id: 8, text: 'ألاحظ أنني أتحرك أو أتكلم ببطء أكثر من المعتاد، أو أشعر بالأرق والتوتر.', condition: 'depression' },
  { id: 9, text: 'راودتني أفكار بأنني أفضل ميتًا أو أفكار في إيذاء نفسي.', condition: 'depression' },
  { id: 10, text: 'أشعر بالخدر العاطفي أو الانفصال عن الأشخاص المقربين مني.', condition: 'depression' },
  { id: 11, text: 'أشعر بالتوتر أو القلق أو الانزعاج في معظم الأيام.', condition: 'anxiety' },
  { id: 12, text: 'لا أستطيع إيقاف القلق أو التحكم فيه.', condition: 'anxiety' },
  { id: 13, text: 'أقلق كثيرًا بشأن أشياء مختلفة.', condition: 'anxiety' },
  { id: 14, text: 'أجد صعوبة في الاسترخاء حتى عندما يتوفر لي الوقت.', condition: 'anxiety' },
  { id: 15, text: 'أشعر بالأرق لدرجة يصعب معها الجلوس بهدوء.', condition: 'anxiety' },
  { id: 16, text: 'أصبح سريع الانزعاج أو التهيج.', condition: 'anxiety' },
  { id: 17, text: 'أخشى أن يحدث شيء مروع دون أن أعرف السبب.', condition: 'anxiety' },
  { id: 18, text: 'أعاني من نوبات مفاجئة من الخوف الشديد أو أعراض جسدية (تسارع القلب، التعرق، الرعشة).', condition: 'anxiety' },
  { id: 19, text: 'أتجنب مواقف أو أماكن معينة لأنها تسبب لي القلق.', condition: 'anxiety' },
  { id: 20, text: 'يؤثر قلقي على مسؤولياتي اليومية أو علاقاتي.', condition: 'anxiety' },
  { id: 21, text: 'تراودني ذكريات أو صور مزعجة ومتكررة لتجربة مؤلمة من الماضي.', condition: 'ptsd' },
  { id: 22, text: 'أعاني من كوابيس متكررة تتعلق بحدث صادم.', condition: 'ptsd' },
  { id: 23, text: 'أشعر فجأة كأن التجربة الصادمة تحدث مرة أخرى (استرجاع).', condition: 'ptsd' },
  { id: 24, text: 'أشعر بضيق شديد عندما يذكرني شيء بتجربة صادمة.', condition: 'ptsd' },
  { id: 25, text: 'أتجنب التفكير في المشاعر المرتبطة بالحدث الصادم.', condition: 'ptsd' },
  { id: 26, text: 'أتجنب الأشخاص أو الأماكن أو الأشياء التي تذكرني بالصدمة.', condition: 'ptsd' },
  { id: 27, text: 'أشعر بالبعد العاطفي أو الانفصال عن الآخرين.', condition: 'ptsd' },
  { id: 28, text: 'أكون في حالة تأهب مستمر وأستجيب بشكل مبالغ فيه للمفاجآت.', condition: 'ptsd' },
  { id: 29, text: 'أجد صعوبة في الشعور بالمشاعر الإيجابية كالسعادة أو الحب.', condition: 'ptsd' },
  { id: 30, text: 'أُلقي اللوم على نفسي أو على الآخرين بسبب حدث صادم مررت به.', condition: 'ptsd' },
  { id: 31, text: 'أمر بفترات من الارتفاع غير العادي في المزاج أو السعادة المفرطة التي تبدو خارجة عن السيطرة.', condition: 'bipolar' },
  { id: 32, text: 'خلال فترات المزاج المرتفع، أحتاج لنوم أقل لكنني لا أزال أشعر بالطاقة.', condition: 'bipolar' },
  { id: 33, text: 'أتكلم أكثر من المعتاد أو أشعر بضغط لمواصلة الكلام في فترات معينة.', condition: 'bipolar' },
  { id: 34, text: 'تتسارع أفكاري وتقفز من فكرة إلى أخرى بسرعة كبيرة.', condition: 'bipolar' },
  { id: 35, text: 'خلال فترات المزاج المرتفع أتصرف باندفاع أو أتخذ قرارات متهورة أندم عليها لاحقًا.', condition: 'bipolar' },
  { id: 36, text: 'أعاني من فترات انخفاض شديد في المزاج تتناوب مع فترات ارتفاع شديد.', condition: 'bipolar' },
  { id: 37, text: 'لاحظ المقربون مني تغيرات كبيرة في سلوكي أو مستوى طاقتي.', condition: 'bipolar' },
  { id: 38, text: 'مررت بفترات شعرت فيها بأن لدي قدرات خاصة أو مهمة مهمة.', condition: 'bipolar' },
  { id: 39, text: 'عشت فترات من زيادة النشاط الهادف أو الاضطراب تستمر لأيام.', condition: 'bipolar' },
  { id: 40, text: 'تؤثر تقلبات مزاجي بشكل كبير على عملي أو علاقاتي أو حياتي اليومية.', condition: 'bipolar' },
  { id: 41, text: 'تراودني أفكار أو صور أو دوافع غير مرغوب فيها ومتكررة تبدو اقتحامية.', condition: 'ocd' },
  { id: 42, text: 'أقوم بسلوكيات متكررة (الغسيل، الفحص، الترتيب) لتقليل القلق.', condition: 'ocd' },
  { id: 43, text: 'أقضي أكثر من ساعة يوميًا في هذه الأفكار أو السلوكيات.', condition: 'ocd' },
  { id: 44, text: 'أشعر بحاجة ماسة لترتيب الأشياء بطريقة محددة.', condition: 'ocd' },
  { id: 45, text: 'أتحقق من الأشياء مرارًا (الأقفال، الموقد، الأجهزة) حتى لو كنت أعلم أنها بخير.', condition: 'ocd' },
  { id: 46, text: 'أشعر بضيق شديد إذا لم أستطع إتمام طقسًا أو روتينًا معينًا.', condition: 'ocd' },
  { id: 47, text: 'أخشى التلوث من الجراثيم أو الأوساخ وأغسل يديّ بشكل مفرط.', condition: 'ocd' },
  { id: 48, text: 'تراودني أفكار غير مرغوب فيها بإيذاء نفسي أو الآخرين رغم أنني لا أريد تنفيذها.', condition: 'ocd' },
  { id: 49, text: 'أحتفظ بأشياء لا أحتاجها لأن التخلص منها يسبب لي ضيقًا شديدًا.', condition: 'ocd' },
  { id: 50, text: 'تتدخل أفكاري أو سلوكياتي المتكررة في حياتي اليومية أو علاقاتي.', condition: 'ocd' },
  { id: 51, text: 'سمعت أصواتًا لا يسمعها الآخرون.', condition: 'schizophrenia' },
  { id: 52, text: 'رأيت أشياء يقول الآخرون إنها غير موجودة.', condition: 'schizophrenia' },
  { id: 53, text: 'أعتقد أن أشخاصًا يتآمرون ضدي أو يحاولون إيذائي.', condition: 'schizophrenia' },
  { id: 54, text: 'أشعر أن رسائل موجهة لي عبر التلفاز أو الراديو أو من غرباء.', condition: 'schizophrenia' },
  { id: 55, text: 'لديّ معتقدات يجدها الآخرون غريبة أو مستحيلة.', condition: 'schizophrenia' },
  { id: 56, text: 'أفكاري تبدو غير منظمة أو لا معنى لها حتى بالنسبة لي.', condition: 'schizophrenia' },
  { id: 57, text: 'أشعر بتبلد عاطفي مع ردود فعل ضعيفة تجاه ما يثير المشاعر عادةً.', condition: 'schizophrenia' },
  { id: 58, text: 'أجد صعوبة في الكلام بوضوح أو البقاء في الموضوع.', condition: 'schizophrenia' },
  { id: 59, text: 'أشعر أن أفكاري يتحكم فيها أو يُدخلها قوة خارجية.', condition: 'schizophrenia' },
  { id: 60, text: 'أنسحب من الأنشطة الاجتماعية وفقدت الدافع للاعتناء بنفسي.', condition: 'schizophrenia' },
  { id: 61, text: 'أجد صعوبة في الحفاظ على انتباهي في المهام أو الأنشطة.', condition: 'adhd' },
  { id: 62, text: 'أرتكب أخطاء غير مقصودة في عملي بسبب عدم الانتباه.', condition: 'adhd' },
  { id: 63, text: 'أفقد الأشياء الضرورية للمهام بشكل متكرر (المفاتيح، الهاتف، المستندات).', condition: 'adhd' },
  { id: 64, text: 'أتشتت بسهولة بسبب أفكار غير ذات صلة أو محفزات خارجية.', condition: 'adhd' },
  { id: 65, text: 'أنسى الأنشطة أو الالتزامات اليومية بشكل منتظم.', condition: 'adhd' },
  { id: 66, text: 'أتململ أو أنقر أو أشعر بالأرق عند الجلوس لفترات طويلة.', condition: 'adhd' },
  { id: 67, text: 'أشعر أن محركًا يدفعني وأجد صعوبة في التباطؤ أو الاسترخاء.', condition: 'adhd' },
  { id: 68, text: 'أقاطع الآخرين أو أجيب قبل اكتمال السؤال بشكل متكرر.', condition: 'adhd' },
  { id: 69, text: 'أجد صعوبة في تنظيم المهام أو الأنشطة أو المقتنيات.', condition: 'adhd' },
  { id: 70, text: 'أؤجل أو أتجنب المهام التي تتطلب جهدًا ذهنيًا مستمرًا.', condition: 'adhd' },
  { id: 71, text: 'أخشى زيادة الوزن أو أن أصبح بديناً بشكل مفرط.', condition: 'eating' },
  { id: 72, text: 'أقيّد تناول الطعام بشكل صارم حتى عندما أعلم أنني نحيل للغاية.', condition: 'eating' },
  { id: 73, text: 'آكل كميات كبيرة في وقت قصير وأشعر بفقدان السيطرة أثناء ذلك.', condition: 'eating' },
  { id: 74, text: 'بعد الأكل أحاول التعويض بالتقيؤ أو استخدام الملينات أو ممارسة الرياضة بشكل مفرط.', condition: 'eating' },
  { id: 75, text: 'أفكر في الطعام والسعرات الحرارية أو وزن جسمي باستمرار طوال اليوم.', condition: 'eating' },
  { id: 76, text: 'أربط شكل جسمي أو وزني بقيمتي الذاتية بشكل كبير.', condition: 'eating' },
  { id: 77, text: 'أتجنب الأكل مع الآخرين أو أُخفي عاداتي الغذائية.', condition: 'eating' },
  { id: 78, text: 'أشعر بذنب شديد أو خجل بعد الأكل.', condition: 'eating' },
  { id: 79, text: 'عانيت من أعراض جسدية مرتبطة بعاداتي الغذائية (تساقط الشعر، الدوخة، الضعف).', condition: 'eating' },
  { id: 80, text: 'تؤثر عاداتي الغذائية بشكل كبير على حياتي اليومية أو عملي أو علاقاتي.', condition: 'eating' },
]

const conditionNamesAr: Record<string, string> = {
  depression: 'الاكتئاب',
  anxiety: 'القلق',
  ptsd: 'ما بعد الصدمة',
  bipolar: 'ثنائي القطب',
  ocd: 'الوسواس القهري',
  schizophrenia: 'الفصام',
  adhd: 'فرط الحركة',
  eating: 'اضطرابات الأكل',
}

const conditionColors: Record<string, string> = {
  depression: '#7c3fd4', anxiety: '#3b82f6', ptsd: '#ef4444',
  bipolar: '#f59e0b', ocd: '#10b981', schizophrenia: '#8b5cf6',
  adhd: '#f97316', eating: '#ec4899',
}

const arAnswerOptions = [
  { label: 'أبداً', value: 0 },
  { label: 'نادراً', value: 1 },
  { label: 'أحياناً', value: 2 },
  { label: 'غالباً', value: 3 },
  { label: 'دائماً', value: 4 },
]

export default function TestPageAr() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [current, setCurrent] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const total = questionsAr.length
  const q = questionsAr[current]
  const progress = Math.round((Object.keys(answers).length / total) * 100)
  const answered = answers[q.id] !== undefined

  function select(value: number) {
    setAnswers((prev) => ({ ...prev, [q.id]: value }))
  }

  async function submit() {
    const unanswered = questionsAr.filter((q) => answers[q.id] === undefined)
    if (unanswered.length > 0) {
      setError(`يرجى الإجابة على جميع الأسئلة. ${unanswered.length} سؤال متبقي.`)
      setCurrent(questionsAr.findIndex((q) => answers[q.id] === undefined))
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
        router.push(`/ar/results/${data.id}`)
      } else {
        setError('فشل الإرسال. يرجى المحاولة مرة أخرى.')
        setSubmitting(false)
      }
    } catch {
      setError('خطأ في الشبكة. يرجى المحاولة مرة أخرى.')
      setSubmitting(false)
    }
  }

  return (
    <>
      <Head><title>تقييم الصحة النفسية — MindCheck</title></Head>
      <Navbar lang="ar" />

      <main dir="rtl" style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 20px 80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: '#9d8fc0' }}>سؤال {current + 1} من {total}</span>
            <span style={{ fontSize: '0.85rem', color: '#a78bfa', fontWeight: 600 }}>{progress}% مكتمل</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #6d28d9, #a78bfa)' }} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <span style={{
            display: 'inline-block',
            background: `${conditionColors[q.condition]}20`,
            border: `1px solid ${conditionColors[q.condition]}50`,
            color: conditionColors[q.condition],
            borderRadius: '999px',
            padding: '4px 14px',
            fontSize: '0.78rem',
            fontWeight: 600,
          }}>
            {conditionNamesAr[q.condition]}
          </span>
        </div>

        <div className="card" style={{ padding: '36px 32px', marginBottom: '28px', minHeight: '180px' }}>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', color: '#e8e0f5', lineHeight: 1.9 }}>
            {q.text}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          {arAnswerOptions.map((opt) => (
            <button
              key={opt.value}
              className={`option-btn${answers[q.id] === opt.value ? ' selected' : ''}`}
              onClick={() => select(opt.value)}
            >
              <span style={{
                display: 'inline-block', width: '22px', height: '22px', borderRadius: '50%',
                border: answers[q.id] === opt.value ? '2px solid #8b5cf6' : '2px solid #2a2a3d',
                background: answers[q.id] === opt.value ? '#6d28d9' : 'transparent',
                marginLeft: '12px', verticalAlign: 'middle', flexShrink: 0,
              }} />
              {opt.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <button className="btn-outline" onClick={() => setCurrent(current - 1)} disabled={current === 0} style={{ opacity: current === 0 ? 0.4 : 1 }}>
            → السابق
          </button>
          {current < total - 1 ? (
            <button className="btn-primary" onClick={() => setCurrent(current + 1)} disabled={!answered} style={{ opacity: !answered ? 0.5 : 1 }}>
              ← التالي
            </button>
          ) : (
            <button className="btn-primary" onClick={submit} disabled={submitting} style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', minWidth: '160px' }}>
              {submitting ? 'جارٍ الإرسال...' : 'إرسال النتائج'}
            </button>
          )}
        </div>

        {error && <p style={{ color: '#ef4444', fontSize: '0.87rem', marginTop: '20px', textAlign: 'center' }}>{error}</p>}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '40px', justifyContent: 'center' }}>
          {questionsAr.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: '10px', height: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              background: i === current ? '#8b5cf6' : answers[questionsAr[i].id] !== undefined ? '#5b2d9e' : '#2a2a3d',
              transition: 'background 0.2s',
            }} />
          ))}
        </div>
      </main>
    </>
  )
}
