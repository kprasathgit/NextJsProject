import type { Metadata } from "next";
import { BookingActions } from "../_components/booking-actions";
import { ImageLightbox } from "../_components/image-lightbox";
import { PageIntro } from "../_components/page-intro";
import { galleryImages, roomTypes, site } from "../_data/site";

export const metadata: Metadata = {
	title: "Kodaikanal Room and Hotel Booking",
	description:
		"Explore comfortable rooms and peaceful stays in Kodaikanal with SJ Sree's Tours & Travels.",
};

const roomGallery = galleryImages.slice(0, 6);

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
			<section className="content-section room-types-section">
				<div className="page-width">
					<p className="eyebrow accent">Rooms available to ask about</p>
					<h2>Choose your <em>stay.</em></h2>
					<div className="room-types-grid">
						{roomTypes.map((room) => <div className="room-type" key={room}><span>{room}</span><small>{site.openingHours}</small></div>)}
					</div>
				</div>
			</section>
			<section className="room-strip page-width">
				{roomGallery.map(([src, alt], index) => (
					<div key={src}>
						<ImageLightbox
							src={src}
							alt={alt}
							className="image-lightbox"
							sizes="(max-width: 700px) 50vw, 16vw"
							gallery={roomGallery}
							initialIndex={index}
						/>
					</div>
				))}
			</section>
		</main>
	);
}
