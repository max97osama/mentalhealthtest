import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = { lang?: 'en' | 'ar' }

export default function Navbar({ lang = 'en' }: Props) {
  const router = useRouter()
  const isAr = lang === 'ar'
  const base = isAr ? '/ar' : ''
  const opposite = isAr ? router.asPath.replace(/^\/ar/, '') || '/' : '/ar' + router.asPath

  return (
    <nav
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        background: 'rgba(10,10,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2a2a3d',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href={base + '/'}
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: '1.2rem',
          color: '#a78bfa',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        {isAr ? 'اختبار الصحة النفسية' : 'MindCheck'}
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
        <Link href={base + '/'} style={linkStyle(router.pathname === base + '/' || router.pathname === '/')}>
          {isAr ? 'الرئيسية' : 'Home'}
        </Link>
        <Link href={base + '/test'} style={linkStyle(router.pathname.includes('/test'))}>
          {isAr ? 'الاختبار' : 'Take Test'}
        </Link>
        <Link href={base + '/conditions'} style={linkStyle(router.pathname.includes('/conditions'))}>
          {isAr ? 'الحالات' : 'Conditions'}
        </Link>
        <Link
          href={opposite}
          style={{
            fontSize: '0.85rem',
            color: '#9d8fc0',
            textDecoration: 'none',
            border: '1px solid #2a2a3d',
            borderRadius: '6px',
            padding: '4px 12px',
            transition: 'all 0.2s',
          }}
        >
          {isAr ? 'EN' : 'عربي'}
        </Link>
      </div>
    </nav>
  )
}

function linkStyle(active: boolean): React.CSSProperties {
  return {
    color: active ? '#c4b5fd' : '#9d8fc0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: active ? 600 : 400,
    borderBottom: active ? '2px solid #8b5cf6' : '2px solid transparent',
    paddingBottom: '2px',
    transition: 'all 0.2s',
  }
}
