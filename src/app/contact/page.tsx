import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Envelope,
	FacebookLogo,
	InstagramLogo,
	MapPin,
	Phone,
	TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";

// Dynamically import the Map component with no SSR
// const ContactMap = dynamic(() => import("@/components/map"), {
// 	ssr: true,
// 	loading: () => (
// 		<div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
// 			<div className="animate-pulse text-gray-500">Loading map...</div>
// 		</div>
// 	),
// });

export default function Contact() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
					<p className="text-xl max-w-3xl">
						Get in touch with us to learn more about our initiatives or to
						contribute to our cause.
					</p>
				</div>
			</section>

			{/* Contact Information */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="border-2 border-red-100 hover:border-red-200 transition-colors">
							<CardHeader>
								<div className="flex items-center gap-4">
									<div className="p-3 bg-red-50 rounded-lg">
										<MapPin className="h-6 w-6 text-red-600" />
									</div>
									<div>
										<CardTitle>Visit Us</CardTitle>
										<CardDescription>Our Location</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">Ballia, Uttar Pradesh, India</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-red-100 hover:border-red-200 transition-colors">
							<CardHeader>
								<div className="flex items-center gap-4">
									<div className="p-3 bg-red-50 rounded-lg">
										<Envelope className="h-6 w-6 text-red-600" />
									</div>
									<div>
										<CardTitle>Email Us</CardTitle>
										<CardDescription>Get in Touch</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<a
									href="mailto:shrisarthisevasansthan@gmail.com"
									className="text-red-600 hover:underline"
								>
									shrisarthisevasansthan@gmail.com
								</a>
							</CardContent>
						</Card>

						<Card className="border-2 border-red-100 hover:border-red-200 transition-colors">
							<CardHeader>
								<div className="flex items-center gap-4">
									<div className="p-3 bg-red-50 rounded-lg">
										<Phone className="h-6 w-6 text-red-600" />
									</div>
									<div>
										<CardTitle>Call Us</CardTitle>
										<CardDescription>Speak with Us</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">+91 8400834051</p>
								{/* <p className="text-sm text-gray-500 mt-1">
									Available 9 AM - 6 PM IST
								</p> */}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-16 bg-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Find Us on Map</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Visit our office to learn more about our initiatives and how you
							can contribute to our cause.
						</p>
					</div>
					{/* <div className="rounded-lg shadow-lg overflow-hidden">
						<ContactMap />
					</div> */}
				</div>
			</section>

			{/* Social Media */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
					<div className="flex justify-center gap-8">
						<a
							href="https://www.facebook.com/share/1KnMEixm8R/"
							// className="group"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
								<FacebookLogo className="h-8 w-8 text-red-600" />
							</div>
							<span className="block mt-2 text-sm text-gray-600">Facebook</span>
						</a>
						<a
							href="https://x.com/shrisarthi"
							// className="group"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors flex">
								<TwitterLogo className="h-8 w-8 text-red-600" />
							</div>
							<span className="block mt-2 text-sm text-gray-600">Twitter</span>
						</a>
						<a
							href="https://www.instagram.com/shrisarthisewasansthan"
							// className="group"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
								<InstagramLogo className="h-8 w-8 text-red-600" />
							</div>
							<span className="block mt-2 text-sm text-gray-600">
								Instagram
							</span>
						</a>
					</div>
				</div>
			</section>

			{/* Working Hours */}
			{/* <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">Working Hours</h2>
					<p className="text-xl mb-8">
						We're here to help during the following hours:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
						<div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
							<h3 className="font-semibold mb-2">Weekdays</h3>
							<p>Monday - Friday</p>
							<p>9:00 AM - 6:00 PM</p>
						</div>
						<div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
							<h3 className="font-semibold mb-2">Weekends</h3>
							<p>Saturday</p>
							<p>10:00 AM - 4:00 PM</p>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
}
