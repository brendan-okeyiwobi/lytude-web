// app/lytude-blog/[blogSlug]/getBlog.ts

'use server';

import { cache } from 'react';
import { fetchWithState } from '@/utils/fetchWithState';
import { FullBlog } from '@/types/blog';

export const getBlog = cache(async (blogSlog: string) => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_BLOG;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-lb?p=${p}&&slug=${blogSlog}&&page=true`;

  const { data, error, success } = await fetchWithState<FullBlog[]>(url, {
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_AUTH}`,
    },
    // ISR…
    next: { revalidate: 60 },
  });

  if (!success || !data || data.length === 0) {
    return { blog: null, error };
  }

  return {
    blog: data[0],
    error: null,
  };
});
