import GalleryGrid from "@/components/gallery";
import { promises as fs } from "fs";
import path from "node:path";

const images = [
	{
		url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
		title: "Education Initiative",
	},
	{
		url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3",
		title: "Blood Donation Camp",
	},
	{
		url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3",
		title: "Tree Plantation Drive",
	},
	{
		url: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-4.0.3",
		title: "Animal Care",
	},
	{
		url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3",
		title: "Community Service",
	},
	{
		url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3",
		title: "Medical Camp",
	},
	{
		url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3",
		title: "Education Program",
	},
	{
		url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3",
		title: "Community Support",
	},
];

export default async function Gallery() {
	const imageDirectory = path.join(process.cwd(), "/public/gallery");
	const imageFilenames = await fs.readdir(imageDirectory);

	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
					<p className="text-xl max-w-3xl">
						Moments captured during our various initiatives and activities.
					</p>
				</div>
			</section>
			<GalleryGrid images={imageFilenames} />
		</div>
	);
}
