// app/lytude-blog/[blogSlug]/page.tsx

import { notFound } from 'next/navigation';
import { getBlog } from './getBlog';
import type { Metadata } from 'next';
import BlogView from './BlogView';

// 🧠 REVALIDATE (ISR): Regenerates the page every 60 seconds
export const revalidate = 60; // (in seconds) – adjust as needed

// ✅ SEO Metadata (dynamic)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}): Promise<Metadata> {
  const { blogSlug } = await params;
  const { blog } = await getBlog(blogSlug);

  if (!blog) {
    return {
      title: 'Album Not Found',
      description: "Sorry, we couldn't find this Album content.",
      metadataBase: new URL(process.env.SITE_URL ?? ""),
    };
  }

  const title = `${blog.title} | Lytude Blog`;
  const description = `${blog.artistDetails.artistName} • ${blog.excerpt}`;
  const image = blog.coverImage;

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
          alt: `${blog.title}`,
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
export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params; // unwrap the Promise here
  const { blog, error } = await getBlog(blogSlug);

  if (!blog) {
    console.warn('[BlogPage] Error:', error);
    return notFound();
  }

  return <BlogView blog={blog} />;
}
