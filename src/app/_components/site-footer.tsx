import Link from "next/link";
import { site } from "../_data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer-new">
      <div className="page-width footer-grid">
        <div><p className="footer-brand">SJ Sree&apos;s</p><p className="footer-muted">Tours &amp; Travels</p><p className="footer-copy">Your local travel partner for Kodaikanal sightseeing, stays and comfortable journeys.</p></div>
        <div><p className="footer-label">Explore</p><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/gallery">Gallery</Link></div>
        <div><p className="footer-label">Reach us</p><a href={`tel:${site.phone}`}>{site.phone}</a><a href={site.whatsappUrl}>WhatsApp booking</a><a href={site.instagram}>Instagram</a></div>
        <div><p className="footer-label">Visit</p><p>{site.address}</p><p>{site.location}</p></div>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Local travel. Thoughtfully arranged.</span></div>
    </footer>
  );
}
