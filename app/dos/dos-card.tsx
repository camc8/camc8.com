'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const PHONE = '3058020002'
const PHONE_DISPLAY = '(305) 802-0002'
const EMAIL = 'caclark@doshealthcare.com'
const COMPANY_1 = 'Sugarmill'
const COMPANY_1_URL = 'https://themanorsofcitrus.com/locations/sugarmill-manor-assisted-living/'
const COMPANY_2 = 'The Gardens'
const COMPANY_2_URL = 'https://themanorsofcitrus.com/locations/crystal-gem-manor-assisted-living/'

const C = {
  bg:            'oklch(97% 0.012 75)',
  card:          'oklch(99% 0.008 70)',
  textPrimary:   'oklch(18% 0.01 60)',
  textSecondary: 'oklch(50% 0.01 60)',
  textMuted:     'oklch(68% 0.01 60)',
  accent:        'oklch(62% 0.09 70)',
  rule:          'oklch(88% 0.012 70)',
  btnBg:         'oklch(22% 0.01 60)',
} as const

const dm: React.CSSProperties = { fontFamily: "var(--font-dm-sans, 'DM Sans'), sans-serif" }
const cg: React.CSSProperties = { fontFamily: "'Cormorant Garamond', 'var(--font-cormorant)', serif" }

function saveContact() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Cameron Hernando Clark',
    'N:Clark;Cameron Hernando;;;',
    'TITLE:Community Relations Director',
    `ORG:${COMPANY_1} & ${COMPANY_2}`,
    `TEL;TYPE=CELL:+1${PHONE}`,
    `EMAIL:${EMAIL}`,
    'END:VCARD',
  ].join('\r\n')
  const blob = new Blob([vcard], { type: 'text/vcard' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Cameron_Hernando_Clark.vcf'
  a.click()
  URL.revokeObjectURL(url)
}

export default function DosCard() {
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    html.style.backgroundColor = C.bg
    body.style.backgroundColor = C.bg
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    return () => {
      html.style.backgroundColor = ''
      body.style.backgroundColor = ''
      html.style.overflow = ''
      body.style.overflow = ''
    }
  }, [])

  return (
    // Mobile: h-dvh stretch fills viewport. Desktop: auto-height centered.
    <div
      className="h-dvh sm:h-auto sm:min-h-screen overflow-hidden flex items-stretch sm:items-center justify-center px-4 py-4 sm:py-16"
      style={{ background: C.bg, ...dm }}
    >
      <div className="w-full max-w-[340px] flex flex-col">
        {/* Mobile: flex-1 stretches card to fill. Desktop: flex-none = natural height. */}
        <div
          className="flex-1 sm:flex-none flex flex-col rounded-3xl overflow-hidden"
          style={{ background: C.card, border: `1px solid ${C.rule}` }}
        >

          {/* Header — tighter padding fits iPhone SE */}
          <div
            className="flex flex-col items-center text-center"
            style={{ padding: '28px 32px 24px' }}
          >
            {/* Photo — object-contain shows full image, bg fills letterbox area */}
            <div
              className="rounded-full overflow-hidden shrink-0 mb-6"
              style={{ width: 88, height: 88, border: `1px solid ${C.rule}`, background: C.card }}
            >
              <Image
                src="/images/cameron-clark.jpg"
                alt="Cameron Hernando Clark"
                width={88}
                height={88}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Name */}
            <h1
              style={{
                ...cg,
                fontWeight: 400,
                fontSize: 34,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: C.textPrimary,
                marginBottom: 18,
              }}
            >
              Cameron<br />Hernando Clark
            </h1>

            {/* Gold rule */}
            <div style={{ width: 32, height: 1, background: C.accent, margin: '0 auto 18px' }} />

            {/* Title block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ ...dm, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.textSecondary }}>
                Community Relations Director
              </span>
              <span style={{ ...cg, fontStyle: 'italic', fontSize: 15, color: C.textMuted, letterSpacing: '0.01em' }}>
                Assisted Living &amp; Memory Care Placement
              </span>
              <span style={{ ...dm, fontSize: 10.5, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.accent, marginTop: 2 }}>
                <a href={COMPANY_1_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{COMPANY_1}</a>
                {' & '}
                <a href={COMPANY_2_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{COMPANY_2}</a>
              </span>
            </div>
          </div>

          {/* Spacer above actions — grows on mobile, capped on desktop */}
          <div className="flex-1 sm:max-h-8" />

          {/* Actions */}
          <div style={{ padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href={`sms:+1${PHONE}`}
                style={{
                  ...dm, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8, height: 46, borderRadius: 12, background: C.btnBg, color: '#fff',
                  textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Text
              </a>
              <a
                href={`tel:+1${PHONE}`}
                style={{
                  ...dm, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 8, height: 46, borderRadius: 12, background: C.btnBg, color: '#fff',
                  textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call
              </a>
            </div>
            <button
              onClick={saveContact}
              style={{
                ...dm, width: '100%', height: 40, borderRadius: 12, background: 'transparent',
                border: `1px solid ${C.rule}`, color: C.textSecondary, fontSize: 12,
                fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Save Contact
            </button>
          </div>

          {/* Spacer below actions — mirrors spacer above */}
          <div className="flex-1 sm:max-h-8" />

          {/* Contact list */}
          <div
            className="sm:pt-5"
            style={{ paddingLeft: 32, paddingRight: 32, paddingBottom: 24, display: 'flex', flexDirection: 'column' }}
          >
            <a
              href={`mailto:${EMAIL}`}
              style={{
                ...dm, display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 12, padding: '12px 0', textDecoration: 'none', color: C.textSecondary,
                fontSize: 13.5, fontWeight: 400,
              }}
            >
              <span style={{ width: 16, flexShrink: 0, color: C.textMuted, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              {EMAIL}
            </a>
            <a
              href={`tel:+1${PHONE}`}
              style={{
                ...dm, display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 12, padding: '12px 0', textDecoration: 'none', color: C.textSecondary,
                fontSize: 13.5, fontWeight: 400,
              }}
            >
              <span style={{ width: 16, flexShrink: 0, color: C.textMuted, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              {PHONE_DISPLAY}
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
