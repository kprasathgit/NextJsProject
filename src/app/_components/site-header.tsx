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
          <Link className="header-book" href="/contact">Plan your trip</Link>
        </nav>
      </div>
    </header>
  );
}
