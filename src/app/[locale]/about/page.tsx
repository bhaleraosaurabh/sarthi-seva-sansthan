import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function About() {
	const members = [
		{
			name: "Dhan Ji Pandey",
			designation: "Treasurer",
			image: "/dhan_ji_pandey.jpg",
		},
		{
			name: "Priyanka Kumari",
			designation: "",
			image: "/priyanka_kumari.jpg",
		},
		{
			name: "Abhishek Singh",
			designation: "",
			image: "/abhishek_singh.jpg",
		},
		{
			name: "Rohit Sharma",
			designation: "",
			image: "/rohit_sharma.jpg",
		},
		{
			name: "Prince Giri",
			designation: "",
			image: "/prince_giri.jpg",
		},
		{
			name: "Shikha",
			designation: "Designation 4",
			image: "/shikha.jpg",
		},
	];
	const sections = [
		{
			title: "2019–2022: Early Years of Service",
			content: [
				{
					heading: "Foundation and Motivation",
					points: [
						"The organization began informally under the leadership of Sanjeev Giri.",
						"Initial efforts focused on providing basic support to the poor, assisting accident victims, and feeding street animals.",
					],
				},
				{
					heading: "Community Impact",
					points: [
						"Distributed food, clothing, and medicines to needy families.",
						"Assisted flood-affected families in Ballia, providing shelter and rehabilitation.",
						"Promoted blood donation and encouraged individuals to contribute to saving lives.",
					],
				},
				{
					heading: "COVID-19 Relief Efforts",
					points: [
						"Distributed food, masks, and sanitizers.",
						"Facilitated transportation for stranded migrant workers and continued feeding stray animals.",
					],
				},
			],
		},
		{
			title: "2023: Official Registration and Formalization",
			content: [
				{
					heading: "Government Registration",
					points: [
						"In 2023, Shri Sarthi Seva Sansthan was officially registered.",
					],
				},
				{
					heading: "Expanded Efforts",
					points: [
						"Advocated for the establishment of a medical college in Ballia.",
						"Organized large-scale blood donation drives, flood relief efforts, and community support programs.",
					],
				},
			],
		},
		{
			title: "2024: Strengthening the Mission",
			content: [
				{
					heading: "Healthcare and Advocacy",
					points: [
						"Continued the fight for improved healthcare facilities in Ballia.",
						"Assisted numerous individuals with medical needs.",
					],
				},
			],
		},
		{
			title: "2025: Continuing the Legacy of Service",
			content: [
				{
					heading: "Enhanced Operations",
					points: [
						"By 2025, Shri Sarthi Seva Sansthan has become a well-respected name in the region.",
					],
				},
				{
					heading: "Future Vision",
					points: [
						"Aiming to build educational and vocational training centers for the poor.",
						"Expanding environmental programs to combat climate change.",
					],
				},
			],
		},
	];
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

			{/* Members Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">Our Members</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{members.map((member, index) => (
							<div key={index.toString()} className="text-center">
								<div className="w-40 h-40 mx-auto bg-gray-100 rounded-full overflow-hidden">
									<Image
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover"
										width={160}
										height={160}
									/>
								</div>
								<h3 className="text-xl font-semibold mt-4">{member.name}</h3>
								<p className="text-red-600">{member.designation}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Journey Timeline */}
			<section className="py-16">
				<div className="max-w-4xl mx-auto p-6 space-y-6">
					<h1 className="text-3xl font-bold text-center">
						Journey of Shri Sarthi Seva Sansthan (2019–2025)
					</h1>

					<Card>
						<CardContent className="p-6 space-y-4">
							<p>
								Shri Sarthi Seva Sansthan, founded by Sanjeev Giri in 2019, is a
								grassroots organization born out of a deep commitment to social
								welfare. Despite starting as an unregistered initiative, the
								Sansthan quickly gained recognition for its impactful work in
								Ballia and surrounding regions. Officially registered under the
								government in 2023, the organization continues its mission to
								serve society in 2025, with an expanded vision and reach.
							</p>
						</CardContent>
					</Card>

					{sections.map((section, index) => (
						<Card key={index.toString()}>
							<CardContent className="p-6 space-y-4">
								<h2 className="text-2xl font-semibold">{section.title}</h2>
								<Separator />
								{section.content.map((item, i) => (
									<div key={i.toString()} className="space-y-2">
										<h3 className="text-xl font-medium">{item.heading}</h3>
										<ul className="list-disc list-inside space-y-1">
											{item.points.map((point, j) => (
												<li key={j.toString()}>{point}</li>
											))}
										</ul>
									</div>
								))}
							</CardContent>
						</Card>
					))}
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
