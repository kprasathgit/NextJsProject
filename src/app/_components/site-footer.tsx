import Link from "next/link";
import { site } from "../_data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer-new">
      <div className="page-width footer-grid">
        <div><p className="footer-brand">SJ Sree&apos;s</p><p className="footer-muted">Tours &amp; Travels</p><p className="footer-copy">Your local travel partner for Kodaikanal sightseeing, stays and comfortable journeys.</p></div>
        <div><p className="footer-label">Explore</p><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/gallery">Gallery</Link></div>
        <div><p className="footer-label">Reach us</p><a className="footer-simple-contact" href={`tel:${site.phone}`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5 9.1 3l2 4.7-1.7 1.4a13.5 13.5 0 0 0 5.5 5.5l1.4-1.7 4.7 2-.5 2.5c-.2 1-1.1 1.7-2.1 1.6C10.8 18.2 5.8 13.2 5 5.6c-.1-1 .6-1.9 1.6-2.1Z" /></svg><span>{site.phone}</span></a><a className="footer-simple-contact" href={`mailto:${site.email}`}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m4 7 8 6 8-6" /></svg><span>{site.email}</span></a><a className="footer-simple-contact" href={site.whatsappUrl}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Z" /></svg><span>WhatsApp booking</span></a><a className="footer-simple-contact" href={site.instagram}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg><span>Instagram</span></a></div>
        <div><p className="footer-label">Visit</p><p>{site.address}</p><p>{site.location}</p><p>Google Business Profile link coming soon</p></div>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Local travel. Thoughtfully arranged.</span></div>
    </footer>
  );
}
