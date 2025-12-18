import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import StoreProvider from "@/app/store/StoreProvider";

import AppNavbar from "@/components/app-navbar";
import AppFooter from "@/components/app-footer";
import AppBreadcrumb from "@/components/app-breadcrumb";

export const metadata = {
  metadataBase: new URL('https://www.wearcollective.store'),
  title: {
    default: 'WearCollective | Sustainable & Inclusive Fashion Store',
    template: '%s | WearCollective',
  },
  description: 'Discover sustainable, inclusive, and high-quality fashion at WearCollective. Shop curated collections for men, women, and kids that celebrate every body and expression.',
  keywords: ['sustainable fashion', 'inclusive clothing', 'wearcollective', 'online shop', 'men fashion', 'women fashion', 'kids clothing'],
  authors: [{ name: 'WearCollective Team' }],
  creator: 'WearCollective',
  publisher: 'WearCollective',
  openGraph: {
    title: 'WearCollective | Sustainable & Inclusive Fashion Store',
    description: 'Redefining fashion with high-quality, sustainable, and inclusive pieces for everyone.',
    url: 'https://www.wearcollective.store',
    siteName: 'WearCollective',
    images: [
      {
        url: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/brand_logo/logo_1920x1080px.jpg',
        width: 1200,
        height: 630,
        alt: 'WearCollective Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WearCollective | Sustainable & Inclusive Fashion Store',
    description: 'High-quality, sustainable, and inclusive fashion for everyone.',
    images: ['https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/brand_logo/logo_1920x1080px.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <StoreProvider>
          <AppNavbar />
          <AppBreadcrumb />
          <main>
            {children}
          </main>
          <AppFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
