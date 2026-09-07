"use client";

import Image from "next/image";
import { useState } from "react";

type ImageLightboxProps = {
	src: string;
	alt: string;
	className?: string;
	sizes?: string;
};

export function ImageLightbox({ src, alt, className, sizes = "100vw" }: ImageLightboxProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				className={className}
				type="button"
				onClick={() => setIsOpen(true)}
				aria-label={`View ${alt} larger`}
			>
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
					<div className="lightbox-content">
						<button
							className="lightbox-close"
							type="button"
							onClick={() => setIsOpen(false)}
						>
							Close
						</button>
						<Image src={src} alt={alt} fill sizes="90vw" />
					</div>
				</div>
			)}
		</>
	);
}