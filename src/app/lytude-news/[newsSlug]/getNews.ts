// app/lytude-news/[newsSlug]/getNews.ts

'use server';

import { cache } from 'react';
import { fetchWithState } from '@/utils/fetchWithState';
import { FullNews } from '@/types/news';

export const getNews = cache(async (newsSlog: string) => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_NEWS;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-ln?p=${p}&&slug=${newsSlog}&&page=true`;

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
    news: data[0],
    error: null,
  };
});
