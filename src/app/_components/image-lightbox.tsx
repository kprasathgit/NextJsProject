"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LightboxImage = [string, string];

type ImageLightboxProps = {
	src: string;
	alt: string;
	className?: string;
	sizes?: string;
	gallery?: LightboxImage[];
	initialIndex?: number;
};

export function ImageLightbox({ src, alt, className, sizes = "100vw", gallery, initialIndex = 0 }: ImageLightboxProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const touchStartX = useRef<number | null>(null);
	const images = gallery ?? [[src, alt] as LightboxImage];
	const [currentSrc, currentAlt] = images[currentIndex] ?? images[0];
	const showPrevious = () => setCurrentIndex((index) => (index - 1 + images.length) % images.length);
	const showNext = () => setCurrentIndex((index) => (index + 1) % images.length);

	useEffect(() => {
		if (!isOpen || images.length < 2) return;

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "ArrowLeft") setCurrentIndex((index) => (index - 1 + images.length) % images.length);
			if (event.key === "ArrowRight") setCurrentIndex((index) => (index + 1) % images.length);
			if (event.key === "Escape") setIsOpen(false);
		}

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [images.length, isOpen]);

	function handleTouchStart(event: React.TouchEvent) {
		touchStartX.current = event.touches[0]?.clientX ?? null;
	}

	function handleTouchEnd(event: React.TouchEvent) {
		if (touchStartX.current === null) return;
		const distance = event.changedTouches[0].clientX - touchStartX.current;
		if (Math.abs(distance) > 50) {
			if (distance < 0) showNext();
			else showPrevious();
		}
		touchStartX.current = null;
	}

	return (
		<>
			<button
				className={className}
				type="button"
				onClick={() => {
					setCurrentIndex(initialIndex);
					setIsOpen(true);
				}}
				aria-label={`View ${alt} larger`}
			>
				<Image className="image-lightbox-background" src={src} alt="" fill sizes={sizes} loading="lazy" aria-hidden="true" />
				<Image src={src} alt={alt} fill sizes={sizes} loading="lazy" />
			</button>

			{isOpen && (
				<div className="lightbox" role="dialog" aria-modal="true" aria-label={alt}>
					<button
						className="lightbox-backdrop"
						type="button"
						onClick={() => setIsOpen(false)}
						aria-label="Close image viewer"
					/>
					<div className="lightbox-content" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
						<button
							className="lightbox-close"
							type="button"
							onClick={() => setIsOpen(false)}
						>
							Close
						</button>
						<Image src={currentSrc} alt={currentAlt} fill sizes="90vw" />
						{images.length > 1 && <div className="lightbox-indicator" aria-label={`Image ${currentIndex + 1} of ${images.length}`}>
							<span>{currentIndex + 1} / {images.length}</span>
							<div className="lightbox-dots">
								{images.map(([, imageAlt], index) => <button key={imageAlt} className={index === currentIndex ? "is-active" : ""} type="button" onClick={() => setCurrentIndex(index)} aria-label={`View image ${index + 1}`} />)}
							</div>
						</div>}
					</div>
				</div>
			)}
		</>
	);
}