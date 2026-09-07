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
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <div className="floating-contact" aria-label="Contact SJ Sree's Tours and Travels">
          <a
            className="floating-call"
            href={`tel:${site.phone}`}
            aria-label={`Call SJ Sree's Tours and Travels at ${site.phone}`}
            title={`Call ${site.phone}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 3.5 9.1 3l2 4.7-1.7 1.4a13.5 13.5 0 0 0 5.5 5.5l1.4-1.7 4.7 2-.5 2.5c-.2 1-1.1 1.7-2.1 1.6C10.8 18.2 5.8 13.2 5 5.6c-.1-1 .6-1.9 1.6-2.1Z" />
            </svg>
          </a>
          <a
            className="floating-whatsapp"
            href={site.whatsappUrl}
            aria-label="Book with SJ Sree's Tours and Travels on WhatsApp"
            title="WhatsApp booking"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Zm-8.3 18.1h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.3a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.7.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.6s1.2 3 1.4 3.2c.2.2 2.3 3.5 5.6 4.9 2.1.9 2.5.7 3 .7.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.3-.3-.4-.5-.5Z" />
            </svg>
          </a>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
