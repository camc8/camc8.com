import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Cormorant_Garamond, Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://camc8.com'),
  title: {
    default: 'Cameron Hernando Clark — Miami, FL',
    template: '%s | Cameron Hernando Clark',
  },
  description:
    'Cameron Hernando Clark (Cameron Clark) is a Miami, Florida software engineer, director of marketing for assisted living and memory care, and property manager.',
  applicationName: 'Cameron Hernando Clark',
  referrer: 'origin-when-cross-origin',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  // Add GOOGLE_SITE_VERIFICATION (Search Console) and/or BING_SITE_VERIFICATION
  // as env vars to emit the verification meta tags. Omitted when unset.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${dmSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white text-neutral-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
