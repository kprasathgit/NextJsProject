import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { site, siteUrl } from "./_data/site";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SJ Sree's Tours & Travels | Kodaikanal Tours, Taxi & Rooms",
    template: "%s | SJ Sree's Tours & Travels",
  },
  description: "Book Kodaikanal tours, sightseeing taxis, Tempo Travellers and comfortable rooms with SJ Sree's Tours & Travels.",
  keywords: ["Kodaikanal tours", "Kodaikanal taxi", "Kodaikanal tour packages", "Kodaikanal rooms", "Tempo Traveller Kodaikanal"],
  openGraph: {
    title: "SJ Sree's Tours & Travels | Explore Kodaikanal",
    description: "Local Kodaikanal sightseeing, cabs, group travel and peaceful rooms arranged by one trusted team.",
    type: "website",
    siteName: "SJ Sree's Tours & Travels",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><SiteHeader />{children}<a className="floating-whatsapp" href={site.whatsappUrl} aria-label="Book with SJ Sree's Tours and Travels on WhatsApp">WhatsApp</a><SiteFooter /></body>
    </html>
  );
}
