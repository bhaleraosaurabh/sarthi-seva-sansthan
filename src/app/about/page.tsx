import { Heart, Medal, Users } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function About() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
					<p className="text-xl max-w-3xl">
						Dedicated to serving humanity and creating positive change in our
						communities since 2019.
					</p>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-12">
						<div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
							<h2 className="text-2xl font-bold mb-4 text-red-600">
								Our Mission
							</h2>
							<p className="text-gray-600 mb-4">
								To work towards the comprehensive development and empowerment of
								marginalized and underprivileged communities through sustainable
								initiatives in education, healthcare, livelihood generation, and
								social welfare.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-start">
									<Heart
										className="mr-2 text-pink-600 flex-shrink-0 mt-1"
										size={20}
									/>
									<span>Promote quality education for all</span>
								</li>
								<li className="flex items-start">
									<Heart
										className="mr-2 text-pink-600 flex-shrink-0 mt-1"
										size={20}
									/>
									<span>Enhance healthcare accessibility</span>
								</li>
								<li className="flex items-start">
									<Heart
										className="mr-2 text-pink-600 flex-shrink-0 mt-1"
										size={20}
									/>
									<span>Support livelihood generation</span>
								</li>
							</ul>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
							<h2 className="text-2xl font-bold mb-4 text-red-600">
								Our Vision
							</h2>
							<p className="text-gray-600 mb-4">
								To create an equitable society where every individual has the
								opportunity to lead a life of dignity, self-reliance, and
								fulfillment.
							</p>
							<ul className="space-y-2 text-gray-600">
								<li className="flex items-start">
									<Medal
										className="mr-2 text-orange-500 flex-shrink-0 mt-1"
										size={20}
									/>
									<span>Foster sustainable development</span>
								</li>
								<li className="flex items-start">
									<Medal
										className="mr-2 text-orange-500 flex-shrink-0 mt-1"
										size={20}
									/>
									<span>Empower through social awareness</span>
								</li>
								<li className="flex items-start">
									<Medal
										className="mr-2 text-orange-500 flex-shrink-0 mt-1"
										size={20}
									/>
									<span>Collaborate for greater impact</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Leadership */}
			<section className="py-16 bg-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						Our Leadership
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<div className="aspect-auto mb-4 bg-gray-100 rounded-lg overflow-hidden">
								<Image
									src="/sanjeev_giri.jpeg"
									alt="Sanjeev Giri"
									className="w-full h-full object-contain"
									width={500}
									height={500}
								/>
							</div>
							<h3 className="text-xl font-semibold mb-2">Sanjeev Giri</h3>
							<p className="text-red-600 mb-4">Founder</p>
							<p className="text-gray-600">
								A compassionate leader who turned his personal struggles into a
								mission to serve humanity. His unwavering commitment to social
								service has transformed Shri Sarthi Seva Sansthan into a beacon
								of hope.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<div className="aspect-auto mb-4 bg-gray-100 rounded-lg overflow-hidden">
								<Image
									src="/avitesh_singh.jpeg"
									alt="Avitesh Singh"
									className="w-full h-full object-contain"
									width={500}
									height={500}
								/>
							</div>
							<h3 className="text-xl font-semibold mb-2">Avitesh Singh</h3>
							<p className="text-red-600 mb-4">President</p>
							<p className="text-gray-600">
								Known for his polite demeanor and unwavering commitment to
								helping others, Avitesh Singh has earned widespread admiration
								and respect through his tireless efforts in disaster management
								and healthcare accessibility.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Journey Timeline */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
					<div className="space-y-8">
						<div className="flex flex-col md:flex-row gap-4">
							<div className="md:w-1/4">
								<h3 className="text-2xl font-bold text-red-600">2019-2022</h3>
								<p className="text-gray-600">Early Years of Service</p>
							</div>
							<div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
								<p className="text-gray-600">
									Started as an informal initiative, focusing on basic support
									for the poor, accident victims, and animal welfare. Played a
									crucial role during the COVID-19 pandemic.
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="md:w-1/4">
								<h3 className="text-2xl font-bold text-pink-600">2023</h3>
								<p className="text-gray-600">Official Registration</p>
							</div>
							<div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
								<p className="text-gray-600">
									Achieved formal recognition through government registration,
									expanding our reach and impact through various welfare
									programs.
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="md:w-1/4">
								<h3 className="text-2xl font-bold text-orange-500">
									2024-2025
								</h3>
								<p className="text-gray-600">Growth & Impact</p>
							</div>
							<div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
								<p className="text-gray-600">
									Strengthened our initiatives in healthcare, education, and
									environmental conservation while expanding our reach to more
									communities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Join Us CTA */}
			<section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
					<p className="text-xl mb-8">
						Join us in our mission to create positive change
					</p>
					<Link
						href="/contact"
						className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full inline-flex items-center"
					>
						Volunteer With Us <Users className="ml-2" size={20} />
					</Link>
				</div>
			</section>
		</div>
	);
}
