import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { ImageLightbox } from "../_components/image-lightbox";
import { PageIntro } from "../_components/page-intro";
import { galleryImages } from "../_data/site";

export const metadata: Metadata = {
	title: "Kodaikanal Room and Hotel Booking",
	description:
		"Explore comfortable rooms and peaceful stays in Kodaikanal with SJ Sree's Tours & Travels.",
};

export default function RoomPage() {
	return (
		<main>
			<PageIntro
				eyebrow="A peaceful place to return to"
				title={
					<>
						Room booking in
						<br />
						<em>Kodaikanal.</em>
					</>
				}
				text="Browse the property, ask about availability and plan a comfortable stay close to Kodaikanal's green surroundings."
				image="/images/room-1.jpeg"
			/>
			<section className="content-section page-width split-copy">
				<div>
					<p className="eyebrow accent">Your stay</p>
					<h2>
						Comfortable.
						<br />
						<em>Calm. Local.</em>
					</h2>
					<BookingActions label="Ask about rooms" />
				</div>
				<div className="room-highlights">
					<p>✓ Clean, comfortable rooms</p>
					<p>✓ Shared living and dining spaces</p>
					<p>✓ Peaceful green surroundings</p>
					<p>✓ Suitable for families and groups</p>
				</div>
			</section>
			<section className="room-strip page-width">
				{galleryImages.slice(0, 6).map(([src, alt]) => (
					<div key={src}>
						<ImageLightbox
							src={src}
							alt={alt}
							className="image-lightbox"
							sizes="(max-width: 700px) 50vw, 16vw"
						/>
					</div>
				))}
			</section>
		</main>
	);
}
