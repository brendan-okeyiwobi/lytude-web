// app/lytude-news/layout.tsx

import NewsHeader from "./components/NewsHeader";
import { getCategories } from "./newsGets";

// ✅ Make this an async function
export default async function LytudeNewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { categories, error } = await getCategories();
  let cat = categories;
  if (!cat) {
    console.warn("[NewsLayout] Error:", error);
    cat = [];
  }

  return (
    <div>
      <NewsHeader categories={cat} />
      <main>{children}</main>
    </div>
  );
}
