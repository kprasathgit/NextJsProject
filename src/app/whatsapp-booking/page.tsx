import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = { title: "WhatsApp Booking", description: "Book Kodaikanal tours, taxis, Tempo Travellers and rooms through WhatsApp." };
export default function WhatsAppPage() { return <main><PageIntro eyebrow="Fast, simple booking" title={<>Message us.<br /><em>Start travelling.</em></>} text="WhatsApp your travel dates, group size and preferred service. We will help you choose the right arrangement." image="/images/foggy-view.jpeg" /><section className="content-section page-width whatsapp-panel"><p className="eyebrow accent">Include these details</p><h2>Make your enquiry<br /><em>easy to answer.</em></h2><div className="enquiry-list"><span>01 · Travel dates</span><span>02 · Number of travellers</span><span>03 · Service you need</span><span>04 · Pickup location</span></div><BookingActions label="Open WhatsApp booking" /></section></main>; }
