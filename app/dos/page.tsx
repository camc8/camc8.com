import type { Metadata, Viewport } from 'next'
import DosCard from './dos-card'

export const metadata: Metadata = {
  title: { absolute: 'Cameron Hernando Clark — DOS Healthcare' },
  description:
    'Cameron Hernando Clark — Community Relations Director for assisted living and memory care placement at Sugarmill & The Gardens. Call (305) 802-0002 or email caclark@doshealthcare.com.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: 'Cameron Hernando Clark — Community Relations Director',
    description:
      'Assisted Living & Memory Care Placement · Sugarmill & The Gardens · (305) 802-0002 · caclark@doshealthcare.com',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cameron Hernando Clark — Community Relations Director',
    description:
      'Assisted Living & Memory Care Placement · Sugarmill & The Gardens · (305) 802-0002 · caclark@doshealthcare.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f4ed',
}

export default function DosPage() {
  return <DosCard />
}
