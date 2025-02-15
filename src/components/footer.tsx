import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-red-600 text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<p>Ballia, Uttar Pradesh</p>
						<p>Email: shrisarthisevasansthan@gmail.com</p>
						<p>Phone: +91 8400834051</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/about" className="hover:underline">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:underline">
									Our Services
								</Link>
							</li>
							<li>
								<Link href="/gallery" className="hover:underline">
									Gallery
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<Link
								href="https://www.facebook.com/p/Sarthi-Seva-Sansthan-%E0%A4%B8%E0%A4%BE%E0%A4%B0%E0%A4%A5%E0%A5%80-%E0%A4%B8%E0%A5%87%E0%A4%B5%E0%A4%BE-%E0%A4%B8%E0%A4%82%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%A8-100077989894794/"
								className="hover:text-red-200"
								target="_blank"
							>
								Facebook
							</Link>
							<Link
								href="https://x.com/shrisarthi"
								className="hover:text-red-200"
								target="_blank"
							>
								Twitter
							</Link>
							<Link
								href="https://www.instagram.com/shrisarthisewasansthan"
								className="hover:text-red-200"
								target="_blank"
							>
								Instagram
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-red-500 text-center">
					<p className="flex items-center justify-center gap-2">
						<span>Made by</span>
						<Link href={"https://saurabhbhalerao.com"}> Saurabh Bhalerao</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
