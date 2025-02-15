"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-red-600 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<img
								src="/logo.png"
								alt="Shri Sarthi Seva Sansthan"
								className="h-12 w-12"
							/>
							<span className="ml-2 text-lg font-semibold">
								Shri Sarthi Seva Sansthan
							</span>
						</Link>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<Link href="/" className="hover:bg-red-700 px-3 py-2 rounded-md">
								Home
							</Link>
							<Link
								href="/about"
								className="hover:bg-red-700 px-3 py-2 rounded-md"
							>
								About
							</Link>
							<Link
								href="/services"
								className="hover:bg-red-700 px-3 py-2 rounded-md"
							>
								Services
							</Link>
							<Link
								href="/gallery"
								className="hover:bg-red-700 px-3 py-2 rounded-md"
							>
								Gallery
							</Link>
							<Link
								href="/contact"
								className="hover:bg-red-700 px-3 py-2 rounded-md"
							>
								Contact
							</Link>
						</div>
					</div>

					<div className="md:hidden">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="p-2"
						>
							{isOpen ? <X size={24} /> : <List size={24} />}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="/"
							className="block hover:bg-red-700 px-3 py-2 rounded-md"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="block hover:bg-red-700 px-3 py-2 rounded-md"
						>
							About
						</Link>
						<Link
							href="/services"
							className="block hover:bg-red-700 px-3 py-2 rounded-md"
						>
							Services
						</Link>
						<Link
							href="/gallery"
							className="block hover:bg-red-700 px-3 py-2 rounded-md"
						>
							Gallery
						</Link>
						<Link
							href="/contact"
							className="block hover:bg-red-700 px-3 py-2 rounded-md"
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
