import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
	title: "Kodaikanal Tempo Traveller Booking",
	description:
		"Book a Tempo Traveller in Kodaikanal for family trips, group tours and sightseeing.",
};

export default function TempoPage() {
	return (
		<main>
			<PageIntro
				eyebrow="Bring everyone along"
				title={
					<>
						Tempo Traveller
						<br />
						<em>for your group.</em>
					</>
				}
				text="Keep your group together with a spacious vehicle, local driver and a sightseeing plan that does not feel rushed."
				image="/images/garden-view.jpeg"
			/>
			<section className="content-section page-width split-copy">
				<div>
					<p className="eyebrow accent">Built for groups</p>
					<h2>
						More seats.
						<br />
						<em>More stories.</em>
					</h2>
				</div>
				<div>
					<p>
						Tempo Traveller booking is ideal for families, friends, school groups and
						corporate teams visiting Kodaikanal together.
					</p>
					<p>
						Share your group size and travel dates on WhatsApp for vehicle availability
						and a tailored quote.
					</p>
					<BookingActions label="Check availability" />
				</div>
			</section>
		</main>
	);
}
