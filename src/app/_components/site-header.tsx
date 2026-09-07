import Image from "next/image";
import Link from "next/link";
import { site } from "../_data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <Link className="brand-lockup" href="/" aria-label={`${site.name} home`}>
          <Image src="/images/logo.png" alt="Sree's Travels and Tourism logo" width={62} height={62} priority />
          <span><strong>SJ Sree&apos;s</strong><small>Tours &amp; Travels</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/tour-packages">Packages</Link>
          <Link href="/gallery">Gallery</Link>
          <a className="header-call" href={`tel:${site.phone}`} aria-label={`Call ${site.phone}`} title={`Call ${site.phone}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 3.5 9.1 3l2 4.7-1.7 1.4a13.5 13.5 0 0 0 5.5 5.5l1.4-1.7 4.7 2-.5 2.5c-.2 1-1.1 1.7-2.1 1.6C10.8 18.2 5.8 13.2 5 5.6c-.1-1 .6-1.9 1.6-2.1Z" />
            </svg>
            <span>Call</span>
          </a>
          <Link className="header-book" href="/contact">Plan your trip</Link>
        </nav>
      </div>
    </header>
  );
}
