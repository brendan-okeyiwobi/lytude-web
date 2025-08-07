// app/lytude-news/page.tsx

import React from "react";
import NewsLandingPageView from "./components/NewsLandingPageView";
import { getNews } from "./newsGets";

export async function generateMetadata() {
  return {
    title: "Lytude News",
    description:
      "Short stories, tutorials, tips and tricks and more. Dive into versatile content",
    metadataBase: new URL("https://lytude.com"),
  };
}

const NewsLandingPage = async () => {
  const { news, error } = await getNews();
  let n = news;
  if (!n) {
    console.warn("[NewsPage] Error:", error);
    n = [];
  }

  return (
    <main>
      <NewsLandingPageView news={n} />
    </main>
  );
};

export default NewsLandingPage;
