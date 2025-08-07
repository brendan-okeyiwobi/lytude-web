// app/lytude-blog/getBlogs.ts

'use server';

import { cache } from 'react';
import { fetchWithState } from '@/utils/fetchWithState';
import { FullBlog } from '@/types/blog';
import { FullCategory } from '@/types/category';

export const getBlogs = cache(async () => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_BLOG;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-lb?p=${p}`;

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
    blogs: data,
    error: null,
  };
});


export const getCategories = cache(async () => {
  const p = process.env.NEXT_PUBLIC_LYTUDE_BLOG_CATEGORIES;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/lb_get-categories/categories?p=${p}`;

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
