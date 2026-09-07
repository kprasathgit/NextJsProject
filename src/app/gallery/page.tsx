import type { Metadata } from "next";
import { ImageLightbox } from "../_components/image-lightbox";
import { galleryImages } from "../_data/site";
import { PageIntro } from "../_components/page-intro";

export const metadata: Metadata = {
	title: "Kodaikanal Travel and Property Gallery",
	description:
		"See rooms, common spaces, surroundings and Kodaikanal views from SJ Sree's Tours & Travels.",
};

export default function GalleryPage() {
	return (
		<main>
			<PageIntro
				eyebrow="See before you arrive"
				title={
					<>
						A glimpse of
						<br />
						<em>your Kodai stay.</em>
					</>
				}
				text="Browse real photos of the rooms, spaces and surroundings available through SJ Sree's Tours & Travels."
				image="/images/terrace-view.jpeg"
			/>
			<section className="content-section page-width full-gallery">
				{galleryImages.map(([src, alt], index) => (
					<figure
						key={src}
						className={`full-gallery-item full-gallery-item-${index + 1}`}
					>
						<ImageLightbox
							src={src}
							alt={alt}
							className="image-lightbox"
							sizes="(max-width: 700px) 50vw, 25vw"
						/>
						<figcaption>{alt}</figcaption>
					</figure>
				))}
			</section>
		</main>
	);
}
