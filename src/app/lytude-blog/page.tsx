// app/lytude-blog/page.tsx

import React from "react";
import BlogLandingPageView from "./components/BlogLandingPageView";
import { getBlogs } from "./blogGets";

// const fetchBlogs = async (): Promise<Blog[]> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-lb?p=${process.env.NEXT_PUBLIC_LYTUDE_BLOG}`);
//   if (!res.ok) return [];
//   return await res.json(); // JSON is already an array of Blog
// };

export async function generateMetadata() {
  return {
    title: "Lytude Blog",
    description:
      "Short stories, tutorials, tips and tricks and more. Dive into versatile content",
    metadataBase: new URL("https://lytude.com"),
  };
}

const BlogLandingPage = async () => {
  // const blogs = await fetchBlogs();

  const { blogs, error } = await getBlogs();
  let b = blogs
  if (!b) {
    console.warn("[BlogPage] Error:", error);
    b = [];
  }

  return (
    <main>
      <BlogLandingPageView blogs={b} />
    </main>
  );
};

export default BlogLandingPage;
