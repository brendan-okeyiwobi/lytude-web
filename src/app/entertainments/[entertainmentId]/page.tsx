// app/entertainments/[entertainmentId]/page.tsx

import { notFound } from 'next/navigation';
import { getEntertainment } from './getEntertainment';
import type { Metadata } from 'next';
import WorkDetailView from './EntertainmentView';

// 🧠 REVALIDATE (ISR): Regenerates the page every 60 seconds
export const revalidate = 60;

// ✅ SEO Metadata (dynamic)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ entertainmentId: string }>;
}): Promise<Metadata> {
  const { entertainmentId } = await params;
  const { entertainment } = await getEntertainment(entertainmentId);

  if (!entertainment) {
    return {
      title: 'Entertainment Not Found',
      description: 'Sorry, we couldn’t find this entertainment content.',
      metadataBase: new URL('https://lytude.com'),
    themeColor: "#ff0000",
    };
  }

  return {
    title: `${entertainment.name} | Lytude`,
    description: entertainment.description,
    metadataBase: new URL('https://lytude.com'),
    themeColor: "#ff0000",
  };
}

// ✅ Actual Page Component
export default async function EntertainmentPage({
  params,
}: {
  params: Promise<{ entertainmentId: string }>;
}) {
  // unwrap the params promise
  const { entertainmentId } = await params;

  const { entertainment, error } = await getEntertainment(entertainmentId);

  if (!entertainment) {
    console.warn('[EntertainmentPage] Error:', error);
    return notFound();
  }

  return <WorkDetailView {...entertainment} />;
}
