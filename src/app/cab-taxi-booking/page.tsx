import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = { title: "Kodaikanal Cab and Taxi Booking", description: "Book a Kodaikanal cab or taxi for local sightseeing, station transfers and outstation travel." };
export default function CabPage() { return <main><PageIntro eyebrow="Your ride in the hills" title={<>Kodaikanal cab<br /><em>and taxi booking.</em></>} text="Tell us your pickup point, date and destination. We will suggest a comfortable vehicle and a practical route." image="/images/property-exterior.jpeg" /><section className="content-section page-width split-copy"><div><p className="eyebrow accent">Useful for</p><h2>Airport transfers.<br />Sightseeing.<br /><em>Everything between.</em></h2></div><div className="feature-points"><p>✓ Kodaikanal local sightseeing</p><p>✓ Pickup and drop arrangements</p><p>✓ Family and couple travel</p><p>✓ Flexible full-day bookings</p><BookingActions label="Book a cab" /></div></section></main>; }
