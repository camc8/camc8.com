import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt =
  'Cameron Hernando Clark — Community Relations Director, Assisted Living & Memory Care Placement. Sugarmill & The Gardens. (305) 802-0002 · caclark@doshealthcare.com'

// Warm palette mirrored from the DOS e-business card (oklch values converted to hex)
const C = {
  outer: '#f1ece1',
  card: '#fdfbf5',
  textPrimary: '#211e19',
  textSecondary: '#6e685f',
  textMuted: '#a49d92',
  accent: '#a9803f',
  rule: '#e6e0d4',
}

const fontDir = path.join(process.cwd(), 'app/fonts')
const publicDir = path.join(process.cwd(), 'public')

export default async function DosOpengraphImage() {
  const [cormorant, dmSans400, dmSans500, photo] = await Promise.all([
    readFile(path.join(fontDir, 'cormorant-garamond-700.ttf')),
    readFile(path.join(fontDir, 'dm-sans-400.ttf')),
    readFile(path.join(fontDir, 'dm-sans-500.ttf')),
    readFile(path.join(publicDir, 'images/cameron-clark.jpg')),
  ])
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: C.outer,
          padding: 48,
          fontFamily: 'DM Sans',
        }}
      >
        {/* Card */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 64,
            background: C.card,
            border: `1px solid ${C.rule}`,
            borderRadius: 32,
            padding: '64px 72px',
          }}
        >
          {/* Photo */}
          <img
            src={photoSrc}
            width={300}
            height={300}
            style={{
              width: 300,
              height: 300,
              borderRadius: 300,
              objectFit: 'cover',
              border: `1px solid ${C.rule}`,
              flexShrink: 0,
            }}
          />

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                fontFamily: 'Cormorant',
                fontWeight: 700,
                fontSize: 72,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                color: C.textPrimary,
              }}
            >
              Cameron Hernando Clark
            </div>

            <div style={{ width: 44, height: 2, background: C.accent, margin: '26px 0' }} />

            <div
              style={{
                fontSize: 23,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: C.textSecondary,
              }}
            >
              Community Relations Director
            </div>
            <div
              style={{
                fontFamily: 'Cormorant',
                fontWeight: 700,
                fontSize: 32,
                color: C.textMuted,
                marginTop: 8,
              }}
            >
              Assisted Living &amp; Memory Care Placement
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: C.accent,
                marginTop: 12,
              }}
            >
              Sugarmill &amp; The Gardens
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', gap: 36, marginTop: 40, color: C.textSecondary }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 24 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (305) 802-0002
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 24 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                caclark@doshealthcare.com
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Cormorant', data: cormorant, style: 'normal', weight: 700 },
        { name: 'DM Sans', data: dmSans400, style: 'normal', weight: 400 },
        { name: 'DM Sans', data: dmSans500, style: 'normal', weight: 500 },
      ],
    },
  )
}
