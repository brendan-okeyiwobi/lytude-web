// app/lytude-news/categories/[categoryId]/getCategory.ts

'use server';

import { cache } from 'react';
import { fetchWithState } from '@/utils/fetchWithState';
import { FullCategory } from '@/types/category';
import { News } from '@/types/news';

export const getCategoryData = cache(async (categoryId: string) => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_NEWS;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-ln?categories=${categoryId}&&p=${p}`;

  const { data, error, success } = await fetchWithState<News[]>(url);

  if (!success || !data || data.length === 0) {
    return { data: null, error };
  }

  return {
    data: data,
    error: null,
  };
});

export const getCategory = cache(async (categoryId: string) => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_NEWS_CATEGORIES;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/ln_get-categories?id=${categoryId}&&p=${p}`;

  const { data, error, success } = await fetchWithState<FullCategory[]>(url, {
    // ← add your headers here
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_AUTH}`,
    },
    // and if you still want ISR…
    next: { revalidate: 60 },
  });

  if (!success || !data || data.length === 0) {
    return { category: null, error };
  }

  return {
    category: data[0],
    error: null,
  };
});
