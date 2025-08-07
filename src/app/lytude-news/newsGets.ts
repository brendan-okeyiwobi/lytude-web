// app/lytude-news/newsGets.ts

'use server';

import { cache } from 'react';
import { fetchWithState } from '@/utils/fetchWithState';
import { FullNews } from '@/types/news';
import { FullCategory } from '@/types/category';

export const getNews = cache(async () => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_NEWS;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-ln?p=${p}`;

  const { data, error, success } = await fetchWithState<FullNews[]>(url, {
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_AUTH}`,
    },
    // ISR…
    next: { revalidate: 60 },
  });

  if (!success || !data || data.length === 0) {
    return { news: null, error };
  }

  return {
    news: data,
    error: null,
  };
});

export const getCategories = cache(async () => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_NEWS_CATEGORIES;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/ln_get-categories?p=${p}`;

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
    categories: data,
    error: null,
  };
});
