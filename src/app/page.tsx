import {
	ArrowRight,
	Building,
	FirstAid,
	Heart,
	TreeEvergreen,
	Users,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-[600px] flex items-center justify-center text-white">
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3")',
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-900/90" />
				</div>
				<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Empowering Communities Since 2019
					</h1>
					<p className="text-xl md:text-2xl mb-8">
						Together we can create a better future for all
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Link
							href="/contact"
							className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full inline-flex items-center"
						>
							Join Our Mission <ArrowRight className="ml-2" size={20} />
						</Link>
						<Link
							href="/about"
							className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full inline-flex items-center"
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>

			{/* Impact Numbers */}
			<section className="py-16 bg-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
							<p className="text-gray-600">Lives Touched</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
							<p className="text-gray-600">Blood Donations</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="text-4xl font-bold text-orange-500 mb-2">
								200+
							</div>
							<p className="text-gray-600">Marriages Supported</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="text-4xl font-bold text-yellow-500 mb-2">
								100+
							</div>
							<p className="text-gray-600">Trees Planted</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Initiatives */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						Our Key Initiatives
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<Building className="w-12 h-12 text-red-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">The Uddan Campaign</h3>
							<p className="text-gray-600">
								Free education for children from slum areas
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<FirstAid className="w-12 h-12 text-pink-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Medical Assistance</h3>
							<p className="text-gray-600">
								Healthcare support for the underprivileged
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<Heart className="w-12 h-12 text-orange-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Marriage Support</h3>
							<p className="text-gray-600">
								Assistance for orphaned and helpless daughters
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<TreeEvergreen className="w-12 h-12 text-yellow-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Har Gaon Peepal</h3>
							<p className="text-gray-600">
								Environmental conservation initiative
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Join Us in Making a Difference
					</h2>
					<p className="text-xl mb-8">
						Your support can help us reach more people in need
					</p>
					<Link
						href="/contact"
						className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full inline-flex items-center"
					>
						Get Involved <Users className="ml-2" size={20} />
					</Link>
				</div>
			</section>
		</div>
	);
}
