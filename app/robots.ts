import type { MetadataRoute } from 'next'

const BASE_URL = 'https://camc8.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /dos is a private e-business card (noindex). It stays crawlable so the
        // noindex directive is honored, but it is kept out of the sitemap.
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
