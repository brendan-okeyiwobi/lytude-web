'use client';

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";

// Define the type for your context value
interface PageContextType {
  pageId: string;
}

// Create the context with a default value
const PageContext = createContext<PageContextType | undefined>(undefined);

// Define the mapping type
type PageIdMap = { [key: string]: string };

// Define the provider props
interface PageProviderProps {
  children: ReactNode;
}

// Define the provider component
export function PageProvider({ children }: PageProviderProps) {
  const pathname = usePathname(); // ✅ get current route

  const pageIdMap: PageIdMap = {
    "/": "home",
    "/about": "about",
    "/entertainments": "entertainments",
    "/contact": "contact",
    "/works": "entertainments",
    "/lytude-news": "news",
    "/lytude-blog": "blogs",
  };

  const pageId = pageIdMap[pathname] || "404";

  return (
    <PageContext.Provider value={{ pageId }}>
      {children}
    </PageContext.Provider>
  );
}

// Custom hook to access the pageId anywhere
export default function usePage(): PageContextType {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
}
