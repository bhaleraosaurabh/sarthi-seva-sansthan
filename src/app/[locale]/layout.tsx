import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { routing } from "@/i18n/routing";
import { TipJar } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import Image from "next/image";
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
						<Popover>
							<PopoverTrigger className="fixed right-4 bottom-4 bg-red-300 rounded-full p-2 cursor-pointer">
								<TipJar size={32} />
							</PopoverTrigger>
							<PopoverContent className="p-0">
								<Image
									src={"/help_image.jpeg"}
									alt={""}
									width={400}
									height={300}
								/>
								<div className="p-4 flex justify-center items-center gap-1 flex-col text-sm">
									<p>A/C no: 680601010050364</p>
									<p>IFSC code: UBIN0568066</p>
									<p>Branch: Nagra, Ballia-221711(U.P)</p>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
