// app/lytude-blog/categories/[categoryId]/page.tsx

import { notFound } from 'next/navigation';
import { getCategoryData, getCategory } from './getCategory';
import type { Metadata } from 'next';
import BlogCategoriesView from './blogCategoryView';

// 🧠 REVALIDATE (ISR): Regenerates the page every 60 seconds
export const revalidate = 60; // (in seconds) – adjust as needed

// ✅ SEO Metadata (dynamic)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}): Promise<Metadata> {
  const { categoryId } = await params; // unwrap the Promise here
  const { category } = await getCategory(categoryId);

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'Sorry, we couldn’t find this category, yet',
      metadataBase: new URL('https://lytude.com'),
    };
  }

  return {
    title: `${category.name} | Lytude`,
    description: category.description,
    metadataBase: new URL('https://lytude.com'),
  };
}

// ✅ Actual Page Component
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params; // unwrap the Promise here
  const { category, error } = await getCategory(categoryId);
  let { data } = await getCategoryData(categoryId);

  if (!data) {
    data = [];
    console.warn('Nothing found', error);
  }

  if (!category) {
    return notFound();
  }

  return <BlogCategoriesView blogs={data} />;
}
