"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Envelope,
	FacebookLogo,
	InstagramLogo,
	MapPin,
	Phone,
	TwitterLogo,
	YoutubeLogo,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ContactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	contact: z
		.string()
		.min(10, "Invalid phone number")
		.max(15, "Invalid phone number"),
	bloodGroup: z.string().min(1, "Blood group is required"),
	address: z.string().min(1, "Address is required"),
});

export default function Contact() {
	const form = useForm({
		resolver: zodResolver(ContactSchema),
		defaultValues: { name: "", contact: "", bloodGroup: "", address: "" },
	});
	const t = useTranslations("contact");
	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
		setLoading(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (res.ok) {
				toast({
					title: t("success_message"),
					description: t("success_message_description"),
				});
				form.reset(); // Reset form after successful submission
			} else {
				toast({
					title: t("error"),
					description: t("error_message"),
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: t("error"),
				description: t("error_message"),
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};
	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
					<p className="text-xl max-w-3xl">{t("description")}</p>
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
										<CardTitle>{t("visit")}</CardTitle>
										<CardDescription>{t("visit_description")}</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">{t("address")}</p>
							</CardContent>
						</Card>

						<Card className="border-2 border-red-100 hover:border-red-200 transition-colors">
							<CardHeader>
								<div className="flex items-center gap-4">
									<div className="p-3 bg-red-50 rounded-lg">
										<Envelope className="h-6 w-6 text-red-600" />
									</div>
									<div>
										<CardTitle>{t("email")}</CardTitle>
										<CardDescription>{t("email_description")}</CardDescription>
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
										<CardTitle>{t("call")}</CardTitle>
										<CardDescription>{t("call_description")}</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">{t("phone")}</p>
								{/* <p className="text-sm text-gray-500 mt-1">
									Available 9 AM - 6 PM IST
								</p> */}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			<section className="py-16 bg-red-50">
				<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<Card>
						<CardHeader>
							<CardTitle>{t("form_title")}</CardTitle>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{t("name")}</FormLabel>
												<FormControl>
													<Input
														placeholder={t("name_placeholder")}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="contact"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{t("contact")}</FormLabel>
												<FormControl>
													<Input
														placeholder={t("contact_palceholder")}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="bloodGroup"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{t("blood_group")}</FormLabel>
												<FormControl>
													<Input
														placeholder={t("blood_group_placeholder")}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="address"
										render={({ field }) => (
											<FormItem>
												<FormLabel>{t("form_address")}</FormLabel>
												<FormControl>
													<Input
														placeholder={t("form_address_placeholder")}
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<Button type="submit" disabled={loading}>
										{loading ? t("sending") : t("submit")}
									</Button>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Social Media */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-8">{t("social_title")}</h2>
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
							<span className="block mt-2 text-sm text-gray-600">
								{t("facebook")}
							</span>
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
							<span className="block mt-2 text-sm text-gray-600">
								{t("twitter")}
							</span>
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
								{t("instagram")}
							</span>
						</a>
						<a
							href="https://www.youtube.com/@shrisarthisevasansthan."
							// className="group"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
								<InstagramLogo className="h-8 w-8 text-red-600" />
							</div>
							<span className="block mt-2 text-sm text-gray-600">
								{t("instagram")}
							</span>
						</a>
						<a
							href="https://www.instagram.com/shrisarthisewasansthan"
							// className="group"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
								<YoutubeLogo className="h-8 w-8 text-red-600" />
							</div>
							<span className="block mt-2 text-sm text-gray-600">
								{t("youtube")}
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
