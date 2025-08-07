// app/lytude-news/[newsSlug]/page.tsx

import { notFound } from 'next/navigation';
import { getNews } from './getNews';
import type { Metadata } from 'next';
import NewsView from './newsView';
import DateUtil from '@/utils/dateUtil';

// 🧠 REVALIDATE (ISR): Regenerates the page every 60 seconds
export const revalidate = 60; // (in seconds) – adjust as needed

// ✅ SEO Metadata (dynamic)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ newsSlug: string }>;
}): Promise<Metadata> {
  const { newsSlug } = await params;
  const { news } = await getNews(newsSlug);

  if (!news) {
    return {
      title: 'Album Not Found',
      description: "Sorry, we couldn't find this Album content.",
      metadataBase: new URL(process.env.SITE_URL ?? ""),
    };
  }

  const title = `${news.title} | Lytude Blog`;
  const description = `${DateUtil.getYear(news._createdDate)} • ${news.artistDetails.artistName} • ${news.excerpt}`;
  const image = news.coverImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image, // full URL
          width: 1028,
          height: 1028,
          alt: `${news.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    // Optional, only if using relative image URLs:
    // metadataBase: new URL(process.env.SITE_URL ?? ""),
  };
}


// ✅ Actual Page Component
export default async function NewsPage({
  params,
}: {
  params: Promise<{ newsSlug: string }>;
}) {
  const { newsSlug } = await params; // unwrap the Promise here
  const { news, error } = await getNews(newsSlug);

  if (!news) {
    console.warn('[NewsPage] Error:', error);
    return notFound();
  }

  return <NewsView news={news} />;
}
