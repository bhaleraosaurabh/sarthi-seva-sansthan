"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

function GalleryGrid({ images }: { images: string[] }) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	return (
		<>
			{/* Gallery Grid */}
			<section className="py-16">
				<ScrollArea className="h-[500px]">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{images.map((image, index) => (
								<div
									key={index.toString()}
									className="relative group cursor-pointer"
									onClick={() => setSelectedImage(`/gallery/${image}`)}
									onKeyDown={() => setSelectedImage(`/gallery/${image}`)}
								>
									<div className="aspect-square overflow-hidden rounded-lg">
										<img
											src={`/gallery/${image}`}
											alt={image}
											className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
										/>
									</div>
									{/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
										<div className="p-4 w-full">
											<h3 className="text-white font-semibold">
												{image.title}
											</h3>
										</div>
									</div> */}
								</div>
							))}
						</div>
					</div>
				</ScrollArea>
			</section>

			{/* Lightbox */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
					<button
						type="button"
						onClick={() => setSelectedImage(null)}
						className="absolute top-4 right-4 text-white hover:text-red-400"
					>
						<X size={32} />
					</button>
					<img
						src={selectedImage}
						alt="Enlarged view"
						className="max-w-full max-h-[90vh] object-contain"
					/>
				</div>
			)}
		</>
	);
}

export default GalleryGrid;
