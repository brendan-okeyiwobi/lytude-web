// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { PageProvider } from '@/components/PageContext';
import LoadingIndicator from "@/components/LoadingIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `Lytude is a creative hub for content, entertainment and development. Founded by Nzubechukwu Brendan Okey-iwobi, Lytude runs a music streaming
                    service called Soundlytude, where you can exclusively accesss DJ bon26's catalogue and music from other licensed artists. Alongside this,
                    Lytude features YouTube videos, blogs, and News. In the future, Lytude plans to expand into gaming through Gamelytude,
                    bringing new forms of interactive entertainment to its growing community.`
export const metadata: Metadata = {
  title: "Lytude",
  description: description,
  icons: {
    icon: [
      { url: '/favicons/lytude-favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicons/lytude-favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicons/lytude-favicon/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: '/favicons/lytude-favicon/apple-touch-icon.png',
  },
  manifest: '/favicons/lytude-favicon/site.webmanifest',
};

// export const viewport = {
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: '#FF0000' },
//     { media: '(prefers-color-scheme: dark)', color: '#000000' },
//   ],
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PageProvider>
          <LoadingIndicator />
          <Header />
          {children}
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
