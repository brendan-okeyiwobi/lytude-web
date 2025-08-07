// app/api/get-lb/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ln_get-categories?p=${process.env.NEXT_PUBLIC_LYTUDE_NEWS_CATEGORIES}`, {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_AUTH}`,
      },
      next: { revalidate: 60 }, // optional, for caching
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ success: false, error: data.message || 'Failed to fetch' }, { status: res.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Internal server error. ' + err }, { status: 500 });
  }
}
