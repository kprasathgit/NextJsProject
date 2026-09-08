"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "../_data/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutsidePress(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("pointerdown", handleOutsidePress);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePress);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="page-width header-inner">
        <Link className="brand-lockup" href="/" aria-label={`${site.name} home`} onClick={() => setIsMenuOpen(false)}>
          <Image src="/images/logo.png" alt="Sree's Travels and Tourism logo" width={62} height={62} priority />
          <span><strong>SJ Sree&apos;s</strong><small>Tours &amp; Travels</small></span>
        </Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="mobile-navigation" className={`main-nav${isMenuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/tour-packages" onClick={() => setIsMenuOpen(false)}>Packages</Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        </nav>
        <div className="header-actions">
          <a className="header-call" href={`tel:${site.phone}`} aria-label={`Call ${site.phone}`} title={`Call ${site.phone}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 3.5 9.1 3l2 4.7-1.7 1.4a13.5 13.5 0 0 0 5.5 5.5l1.4-1.7 4.7 2-.5 2.5c-.2 1-1.1 1.7-2.1 1.6C10.8 18.2 5.8 13.2 5 5.6c-.1-1 .6-1.9 1.6-2.1Z" />
            </svg>
            <span>Call</span>
          </a>
          <Link className="header-book" href="/contact" onClick={() => setIsMenuOpen(false)}>Plan your trip</Link>
        </div>
      </div>
    </header>
  );
}
