import {
	Building,
	Car,
	Drop,
	FirstAid,
	Heart,
	PawPrint,
	TreeEvergreen,
	Users,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Services() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
					<p className="text-xl max-w-3xl">
						Comprehensive support and assistance for those in need through our
						various initiatives.
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Blood Donation */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<Drop className="w-12 h-12 text-red-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Blood Donation Support
							</h3>
							<p className="text-gray-600 mb-4">
								Organizing blood donation drives and maintaining a network of
								donors to ensure timely availability of blood for patients in
								need.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-red-600" size={16} />
									Regular donation camps
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-red-600" size={16} />
									Emergency support
								</li>
							</ul>
						</div>

						{/* Education */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<Building className="w-12 h-12 text-pink-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">The Uddan Campaign</h3>
							<p className="text-gray-600 mb-4">
								Free education initiative for children from slum areas,
								providing them with opportunities for a better future.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-pink-600" size={16} />
									Quality education
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-pink-600" size={16} />
									Learning materials
								</li>
							</ul>
						</div>

						{/* Marriage Support */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<Users className="w-12 h-12 text-orange-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Marriage Support</h3>
							<p className="text-gray-600 mb-4">
								Economic assistance for marriages of orphaned and financially
								weak daughters.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-orange-500" size={16} />
									Financial aid
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-orange-500" size={16} />
									Ceremony support
								</li>
							</ul>
						</div>

						{/* Medical Assistance */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<FirstAid className="w-12 h-12 text-yellow-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Medical Assistance</h3>
							<p className="text-gray-600 mb-4">
								Healthcare support for destitute and financially weak
								individuals.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-yellow-500" size={16} />
									Treatment support
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-yellow-500" size={16} />
									Medicine provision
								</li>
							</ul>
						</div>

						{/* Environmental Protection */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<TreeEvergreen className="w-12 h-12 text-green-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Har Gaon Peepal Abhiyan
							</h3>
							<p className="text-gray-600 mb-4">
								Environmental conservation initiative promoting tree planting
								and ecological awareness.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-green-600" size={16} />
									Tree plantation
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-green-600" size={16} />
									Environmental education
								</li>
							</ul>
						</div>

						{/* Animal Welfare */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
							<PawPrint className="w-12 h-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Bezubaan Ki Awaaz</h3>
							<p className="text-gray-600 mb-4">
								Animal welfare initiative providing care and support for street
								animals.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-blue-600" size={16} />
									Animal feeding
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-blue-600" size={16} />
									Medical care
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Additional Services */}
			<section className="py-16 bg-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						Additional Support Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<Car className="w-12 h-12 text-red-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Accident Victim Support
							</h3>
							<p className="text-gray-600">
								Immediate first aid and support for road accident victims,
								including:
							</p>
							<ul className="mt-4 space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-red-600" size={16} />
									Emergency response
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-red-600" size={16} />
									Medical assistance
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-red-600" size={16} />
									Family coordination
								</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<Users className="w-12 h-12 text-pink-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Essential Support</h3>
							<p className="text-gray-600">
								Distribution of essential items to the needy, including:
							</p>
							<ul className="mt-4 space-y-2 text-gray-600">
								<li className="flex items-center">
									<Heart className="mr-2 text-pink-600" size={16} />
									Blankets and warm clothing
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-pink-600" size={16} />
									Food supplies
								</li>
								<li className="flex items-center">
									<Heart className="mr-2 text-pink-600" size={16} />
									Basic necessities
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">Need Our Support?</h2>
					<p className="text-xl mb-8">
						We're here to help. Reach out to us today.
					</p>
					<Link
						href="/contact"
						className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full inline-flex items-center"
					>
						Contact Us <Heart className="ml-2" size={20} />
					</Link>
				</div>
			</section>
		</div>
	);
}
