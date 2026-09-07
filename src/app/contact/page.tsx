import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";
import { site } from "../_data/site";

export const metadata: Metadata = {
	title: "Contact SJ Sree's Tours & Travels",
	description:
		"Contact SJ Sree's Tours & Travels for Kodaikanal tours, taxis, rooms and travel bookings.",
};

export default function ContactPage() {
	return (
		<main>
			<PageIntro
				eyebrow="Let us plan it with you"
				title={
					<>
						Your Kodaikanal
						<br />
						<em>starts here.</em>
					</>
				}
				text="Send your dates and requirements. Our team will reply with the right option for your trip."
				image="/images/terrace-view.jpeg"
			/>

			<section className="content-section page-width contact-grid">
				<div>
					<p className="eyebrow accent">Contact details</p>
					<h2>
						Come to the
						<br />
						<em>hills.</em>
					</h2>

					<div className="contact-details">
						<p>
							<strong>Call</strong>
							<a href={`tel:${site.phone}`}>{site.phone}</a>
						</p>
						<p>
							<strong>WhatsApp</strong>
							<a href={site.whatsappUrl}>{site.whatsapp}</a>
						</p>
						<p>
							<strong>Address</strong>
							<span>{site.address}</span>
						</p>
						<p>
							<strong>Instagram</strong>
							<a href={site.instagram}>@sj_tours_kodai</a>
						</p>
					</div>
				</div>

				<div className="enquiry-panel">
					<p className="eyebrow">Quick enquiry</p>
					<p>
						Tell us what you need and we will continue the conversation on
						WhatsApp.
					</p>
					<BookingActions label="Start WhatsApp enquiry" />
				</div>
			</section>
		</main>
	);
}
