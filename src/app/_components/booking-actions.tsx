import { site } from "../_data/site";

export function BookingActions({ label = "Book on WhatsApp" }: { label?: string }) {
  return <div className="booking-actions"><a className="button button-coral" href={site.whatsappUrl}>{label}</a><a className="phone-link" href={`tel:${site.phone}`}>Call {site.phone}</a></div>;
}
