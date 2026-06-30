import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt =
  'Cameron Hernando Clark — Miami, FL. Software engineer, director of marketing, and property manager.'

const fontDir = path.join(process.cwd(), 'app/fonts')

export default async function OpengraphImage() {
  const [cormorant, dmSans400, dmSans500] = await Promise.all([
    readFile(path.join(fontDir, 'cormorant-garamond-700.ttf')),
    readFile(path.join(fontDir, 'dm-sans-400.ttf')),
    readFile(path.join(fontDir, 'dm-sans-500.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          padding: '88px 96px',
          fontFamily: 'DM Sans',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 26, color: '#a3a3a3', letterSpacing: '-0.01em' }}>
            camc8.com
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#a3a3a3',
            }}
          >
            Miami · Florida
          </span>
        </div>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Cormorant',
              fontWeight: 700,
              fontSize: 108,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#171717',
            }}
          >
            Cameron Hernando Clark
          </div>
          <div style={{ width: 64, height: 2, background: '#d4d4d4', margin: '34px 0' }} />
          <div style={{ fontSize: 34, color: '#525252', letterSpacing: '-0.01em' }}>
            Software Engineer · Director of Marketing · Property Manager
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ fontSize: 24, color: '#737373' }}>
            Interesting problems don&apos;t stay in one lane.
          </span>
          <span style={{ fontSize: 22, color: '#a3a3a3' }}>github.com/camc8</span>
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
