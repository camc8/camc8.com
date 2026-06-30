import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cameron Hernando Clark — Miami, FL',
  description:
    'Cameron Hernando Clark is a Miami, Florida software engineer, director of marketing for assisted living and memory care at DOS Healthcare, and property manager.',
  keywords: [
    'Cameron Hernando Clark',
    'Cameron Clark',
    'Cameron H. Clark',
    'Cam Clark',
    'Cameron Clark Miami',
    'Cameron Clark Miami FL',
    'Cameron Clark Miami Florida',
    'Cameron Hernando Clark Miami',
    'Cameron Clark Florida',
    'Cameron Clark software engineer',
    'Cameron Clark developer',
    'Cameron Hernando Clark software engineer',
    'Cameron Clark DOS Healthcare',
    'Cameron Clark director of marketing',
    'Cameron Clark assisted living',
    'Cameron Clark senior care Miami',
    'Cameron Clark memory care',
    'Cameron Clark property management Miami',
    'Cameron Clark AI',
    'camc8',
    'camc8.com',
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
      'Cameron Hernando Clark is a Miami-based software engineer, director of marketing for assisted living and memory care, and property manager.',
    url: 'https://camc8.com',
    siteName: 'Cameron Hernando Clark',
    locale: 'en_US',
    type: 'profile',
    firstName: 'Cameron',
    lastName: 'Clark',
    username: 'camc8',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cameron Hernando Clark — Miami, FL',
    description:
      'Cameron Hernando Clark is a Miami-based software engineer, director of marketing for assisted living and memory care, and property manager.',
  },
}

const SITE_URL = 'https://camc8.com'
const PERSON_ID = `${SITE_URL}/#person`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Cameron Hernando Clark',
      alternateName: 'Cameron Clark',
      description:
        'Personal site of Cameron Hernando Clark — Miami, FL software engineer, director of marketing for assisted living, and property manager.',
      inLanguage: 'en-US',
      publisher: { '@id': PERSON_ID },
      author: { '@id': PERSON_ID },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: 'Cameron Hernando Clark — Miami, FL',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': PERSON_ID },
      mainEntity: { '@id': PERSON_ID },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Cameron Hernando Clark',
      givenName: 'Cameron',
      additionalName: 'Hernando',
      familyName: 'Clark',
      alternateName: ['Cameron Clark', 'Cameron H. Clark', 'Cam Clark'],
      url: SITE_URL,
      mainEntityOfPage: SITE_URL,
      image: `${SITE_URL}/images/cameron-clark.jpg`,
      email: 'mailto:cameronhclark1@gmail.com',
      description:
        'Cameron Hernando Clark (Cameron Clark) is a Miami, Florida software engineer, director of marketing for assisted living and memory care, and property manager.',
      jobTitle: [
        'Software Engineer',
        'Director of Marketing',
        'Community Relations Director',
        'Property Manager',
      ],
      worksFor: [{ '@type': 'Organization', name: 'DOS Healthcare' }],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Miami',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Miami, Florida',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Miami',
          addressRegion: 'FL',
          addressCountry: 'US',
        },
      },
      workLocation: {
        '@type': 'Place',
        name: 'Miami, Florida',
      },
      nationality: { '@type': 'Country', name: 'United States' },
      knowsLanguage: ['English'],
      knowsAbout: [
        'Software Engineering',
        'Web Development',
        'TypeScript',
        'React',
        'Next.js',
        'Assisted Living Placement',
        'Memory Care Placement',
        'Senior Care Marketing',
        'Property Management',
        'Artificial Intelligence',
      ],
      sameAs: ['https://github.com/camc8'],
    },
  ],
}

const roles = [
  {
    title: 'Software Engineer',
    description:
      'Full-stack web development with TypeScript, React, and Next.js on Node.js and serverless cloud infrastructure — designing data models, building APIs, and shipping products used by real people.',
  },
  {
    title: 'Director of Marketing',
    description:
      'Director of Marketing for assisted living and memory care — driving referral growth and community relations for senior care placement across South Florida.',
  },
  {
    title: 'Property Management',
    description:
      'Owner-operator focused on residential and commercial property management in the Miami area.',
  },
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
            Miami, FL — software engineer, director of marketing, and property
            manager. I work across industries because interesting problems
            don&apos;t stay in one lane.
          </p>
        </section>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            About
          </h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed max-w-xl">
            <p>
              Cameron Hernando Clark — usually just Cameron Clark — is based in
              Miami, Florida, where he works as a software engineer, a director
              of marketing in assisted living and memory care, and a property
              manager. He builds full-stack web applications with TypeScript,
              React, and Next.js, leads referral growth and community relations
              for senior care placement across South Florida, and operates
              residential and commercial property in the Miami area.
            </p>
            <p>
              Whether the work is shipping software, growing a senior-living
              referral network, or managing property, Cameron Clark moves across
              industries because the most interesting problems rarely stay in
              one lane. Based in Miami, FL, he can be reached at{' '}
              <a
                href="mailto:cameronhclark1@gmail.com"
                className="text-neutral-900 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
              >
                cameronhclark1@gmail.com
              </a>{' '}
              or on{' '}
              <a
                href="https://github.com/camc8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
              >
                GitHub
              </a>
              .
            </p>
          </div>
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
