import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://touchthepeak.lk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
        url: 'https://touchthepeak.lk/companies',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
      url: 'https://touchthepeak.lk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}