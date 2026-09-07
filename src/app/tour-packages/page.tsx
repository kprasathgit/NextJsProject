import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
	title: "Kodaikanal Tour Packages",
	description:
		"Plan a Kodaikanal tour package with local sightseeing, cabs and stays from SJ Sree's Tours & Travels.",
};

const packages = [
	{
		name: "Kodai essentials",
		days: "1 day",
		places: "Lake · Coaker's Walk · Bryant Park · Pillar Rocks",
	},
	{
		name: "Weekend in the hills",
		days: "2 days / 1 night",
		places: "Sightseeing · Local food · Comfortable room stay",
	},
	{
		name: "Slow Kodai escape",
		days: "3 days / 2 nights",
		places: "Full sightseeing · Flexible travel · Stay arrangement",
	},
];

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
					{packages.map((item, index) => (
						<article className="package-card" key={item.name}>
							<span className="service-index">0{index + 1}</span>
							<p className="eyebrow accent">{item.days}</p>
							<h2>{item.name}</h2>
							<p>{item.places}</p>
							<BookingActions label="Ask for price" />
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
