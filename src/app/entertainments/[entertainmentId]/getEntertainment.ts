// app/entertainments/[entertainmentId]/getEntertainment.ts
'use server';

import { cache } from 'react';
import { fetchWithState } from '@/utils/fetchWithState';

type Entertainment = {
  _id: string;
  name: string;
  description: string;
  themeColor: string;
  heroTextColor: string;
  logo: string; 
  heroImage: string; 
};

export const getEntertainment = cache(async (entertainmentId: string) => {
  const password = process.env.NEXT_PUBLIC_ENTERTAINMENTS;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/get-entertainments?p=${password}&&id=${entertainmentId}`;

  const { data, error, success } = await fetchWithState<Entertainment[]>(url, {
    // ← add your headers here
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_AUTH}`,
    },
    // and if you still want ISR…
    next: { revalidate: 60 },
  });
  if (!success || !data || data.length === 0) {
    return { entertainment: null, error };
  }

  return {
    entertainment: data[0],
    error: null,
  };
});
