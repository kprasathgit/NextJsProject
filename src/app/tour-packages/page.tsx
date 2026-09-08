import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";
import { tourPackages } from "../_data/site";

export const metadata: Metadata = {
	title: "Kodaikanal Tour Packages",
	description:
		"Plan a Kodaikanal tour package with local sightseeing, cabs and stays from SJ Sree's Tours & Travels.",
};

export default function PackagesPage() {
	return (
		<main>
			<PageIntro
				eyebrow="Made around your pace"
				title={
					<>
						Kodaikanal
						<br />
						<em>tour packages.</em>
					</>
				}
				text="Start with a simple package or ask us to shape a private itinerary around your family, friends or group."
				image="/images/garden-view.jpeg"
			/>
			<section className="content-section page-width">
				<div className="package-grid">
					{tourPackages.map((item, index) => (
						<article className="package-card" key={item.name}>
							<span className="service-index">0{index + 1}</span>
							<p className="eyebrow accent">{item.subtitle}</p>
							<h2>{item.name}</h2>
							<ul className="package-places">
								{item.places.map((place) => <li key={place}>{place}</li>)}
							</ul>
							<BookingActions label="Ask about this tour" />
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
