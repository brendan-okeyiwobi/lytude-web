// app/lytude-blog/layout.tsx

import BlogHeader from "./components/BlogHeader";
import { getCategories } from "./blogGets";

// const fetchCategories = async (): Promise<Category[]> => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/lb_get-categories?p=${process.env.NEXT_PUBLIC_LYTUDE_BLOG_CATEGORIES}`,
//   );
//   if (!res.ok) return [];
//   return await res.json();
// };

// ✅ Make this an async function
export default async function LytudeBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categories = await fetchCategories();

  const { categories, error } = await getCategories();
  let cat = categories;
  if (!cat) {
    console.warn("[BlogLayout] Error:", error);
    cat = [];
  }

  return (
    <div>
      <BlogHeader categories={cat} />
      <main>{children}</main>
    </div>
  );
}
