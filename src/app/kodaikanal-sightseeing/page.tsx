import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { PageIntro } from "../_components/page-intro";
import { sightseeingPlaces } from "../_data/site";

export const metadata: Metadata = {
	title: "Kodaikanal Sightseeing",
	description:
		"Book a local Kodaikanal sightseeing taxi and explore the most beautiful places in the hills.",
};

export default function SightseeingPage() {
	return (
		<main>
			<PageIntro
				eyebrow="The places worth the drive"
				title={
					<>
						See the best of
						<br />
						<em>Kodaikanal.</em>
					</>
				}
				text="We plan comfortable sightseeing routes for families, couples and groups, with time to stop, explore and enjoy the hills."
			/>
			<section className="content-section page-width sightseeing-layout">
				<div>
					<p className="eyebrow accent">Popular stops</p>
					<h2>
						One beautiful
						<br />
						<em>view after another.</em>
					</h2>
					<BookingActions label="Book sightseeing" />
				</div>
				<ol className="place-list">
					{sightseeingPlaces.map((place, index) => (
						<li key={place}>
							<span>0{index + 1}</span>
							{place}
						</li>
					))}
				</ol>
			</section>
		</main>
	);
}
