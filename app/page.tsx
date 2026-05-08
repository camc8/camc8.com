import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cameron Hernando Clark — Miami, FL',
  description:
    'Cameron Hernando Clark is a Miami, Florida entrepreneur and technologist — software engineer, senior care placement director at DOS Healthcare, property manager, and AI company founder.',
  keywords: [
    'Cameron Hernando Clark',
    'Cameron Clark',
    'Cameron H. Clark',
    'Cameron Clark Miami',
    'Cameron Hernando Clark Miami',
    'Cameron Clark Florida',
    'Cameron Clark software engineer',
    'Cameron Clark DOS Healthcare',
    'Cameron Clark senior care Miami',
    'Cameron Clark property management Miami',
    'Cameron Clark AI',
    'camc8',
  ],
  authors: [{ name: 'Cameron Hernando Clark', url: 'https://camc8.com' }],
  creator: 'Cameron Hernando Clark',
  publisher: 'Cameron Hernando Clark',
  metadataBase: new URL('https://camc8.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: 'Cameron Hernando Clark — Miami, FL',
    description:
      'Cameron Hernando Clark is a Miami-based software engineer, senior care placement director, property manager, and AI entrepreneur.',
    url: 'https://camc8.com',
    siteName: 'Cameron Hernando Clark',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Cameron Hernando Clark — Miami, FL',
    description:
      'Cameron Hernando Clark is a Miami-based software engineer, senior care placement director, property manager, and AI entrepreneur.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cameron Hernando Clark',
  alternateName: ['Cameron Clark', 'Cameron H. Clark', 'Cam Clark'],
  url: 'https://camc8.com',
  email: 'cameronhclark1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  jobTitle: [
    'Software Engineer',
    'Community Relations Director',
    'Property Manager',
    'AI Entrepreneur',
  ],
  worksFor: [
    { '@type': 'Organization', name: 'DOS Healthcare' },
  ],
  knowsAbout: [
    'Software Engineering',
    'Web Development',
    'Assisted Living Placement',
    'Memory Care Placement',
    'Senior Care',
    'Property Management',
    'Artificial Intelligence',
  ],
  sameAs: ['https://github.com/camc8'],
}

const roles = [
  {
    title: 'Software Engineer',
    description:
      'Full-stack web development — React, TypeScript, Node.js, and cloud infrastructure. Building products used by real people.',
  },
  // {
  //   title: 'Community Relations Director',
  //   description:
  //     'Senior care placement specialist at DOS Healthcare in Miami, FL — helping South Florida families find assisted living and memory care.',
  // },
  {
    title: 'Property Management',
    description:
      'Owner-operator focused on residential and commercial property management in the Miami area.',
  },
  // {
  //   title: 'AI Entrepreneur',
  //   description:
  //     'Founder of an AI company building tools that automate workflows and create new leverage for businesses.',
  // },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-20">
          <span className="font-mono text-sm text-neutral-500 tracking-tight">
            camc8.com
          </span>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a
              href="mailto:cameronhclark1@gmail.com"
              className="hover:text-neutral-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/camc8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-20">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-neutral-900 mb-4">
            Cameron<br className="sm:hidden" /> Hernando Clark
          </h1>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
            Miami, FL — software engineer,{' '}
            {/* senior care placement director, */}
            property manager{/* , and AI company founder */}.{' '}
            I work across industries because interesting problems don&apos;t stay in one lane.
          </p>
        </section>

        {/* Roles */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            What I Do
          </h2>
          <div className="space-y-8">
            {roles.map((role) => (
              <div key={role.title} className="group">
                <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-1">
                  {role.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            Projects
          </h2>
          <div className="space-y-8">
            <div className="group">
              <a
                href="https://supafleet.camc8.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-serif text-lg font-semibold text-neutral-900 mb-1 hover:text-neutral-600 transition-colors"
              >
                Supafleet
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                  <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                </svg>
              </a>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Open-source self-hosted Supabase fleet manager. Run multiple isolated Supabase instances on a single VPS with wildcard subdomains, real-time logs, and a single dashboard.
              </p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://github.com/camc8/supafleet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="https://supafleet.camc8.com/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  Live demo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-neutral-100 pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
            Get in Touch
          </h2>
          <a
            href="mailto:cameronhclark1@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-200 rounded-lg px-4 py-2.5 hover:bg-neutral-50 hover:border-neutral-300 transition-all"
          >
            cameronhclark1@gmail.com
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-400"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-100">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Cameron Hernando Clark · Miami, FL
          </p>
        </footer>
      </div>
    </>
  )
}
