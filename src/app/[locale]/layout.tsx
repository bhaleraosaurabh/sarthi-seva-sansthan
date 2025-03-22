import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shri Sarthi Seva Sansthan",
	description: "Empowering Communities Since 2019",
};

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<NextIntlClientProvider locale={locale}>
					<div className="min-h-screen flex flex-col">
						<Navbar />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
