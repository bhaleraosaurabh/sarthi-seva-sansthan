import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { Users } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
	const t = useTranslations("about");

	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
					<p className="text-xl max-w-3xl">{t("description")}</p>
				</div>
			</section>

			{/* Leadership */}
			<section className="py-16 bg-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						{t("leadership.title")}
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
							<h3 className="text-xl font-semibold mb-2">
								{t("leadership.sanjeev.name")}
							</h3>
							<p className="text-red-600 mb-4">
								{t("leadership.sanjeev.designation")}
							</p>
							<p className="text-gray-600">{t("leadership.sanjeev.bio")}</p>
							<p className="text-gray-600 mt-4">
								{t("leadership.sanjeev.inspiration")}
							</p>
							<h4 className="text-lg font-bold mt-6">
								{t("leadership.sanjeev.initiatives-title")}
							</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
								{t
									.raw("leadership.sanjeev.initiatives")
									.map((initiative: { title: string; description: string }) => {
										return (
											<li key={initiative.title}>
												<strong>{initiative.title}: </strong>
												{initiative.description}
											</li>
										);
									})}
							</ul>
							<p className="text-gray-600 mt-4">
								{t("leadership.sanjeev.commitment")}
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
							<h3 className="text-xl font-semibold mb-2">
								{t("leadership.avitesh.name")}
							</h3>
							<p className="text-red-600 mb-4">
								{t("leadership.avitesh.designation")}
							</p>
							<p className="text-gray-600">{t("leadership.avitesh.bio")}</p>
							<p className="text-gray-600 mt-4">
								{t("leadership.avitesh.inspiration")}
							</p>
							<h4 className="text-lg font-bold mt-6">
								{t("leadership.avitesh.initiatives-title")}
							</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
								{t
									.raw("leadership.avitesh.initiatives")
									.map((initiative: { title: string; description: string }) => {
										return (
											<li key={initiative.title}>
												<strong>{initiative.title}: </strong>
												{initiative.description}
											</li>
										);
									})}
							</ul>
							<p className="text-gray-600 mt-4">
								{t("leadership.avitesh.commitment")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Members Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-12">
						{t("members.title")}
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{t.raw("members.content").map(
							(member: {
								name: string;
								designation: string;
								image: string;
							}) => (
								<div key={member.name} className="text-center">
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
							),
						)}
					</div>
				</div>
			</section>

			{/* Journey Timeline */}
			<section className="py-16">
				<div className="max-w-4xl mx-auto p-6 space-y-6">
					<h1 className="text-3xl font-bold text-center">
						{t("journey.title")}
					</h1>

					<Card>
						<CardContent className="p-6 space-y-4">
							<p>{t("journey.description")}</p>
						</CardContent>
					</Card>

					{t.raw("journey.sections").map(
						(section: {
							title: string;
							content: { heading: string; points: string[] }[];
						}) => (
							<Card key={section.title}>
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
						),
					)}
				</div>
			</section>

			{/* Join Us CTA */}
			<section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">{t("joining.title")}</h2>
					<p className="text-xl mb-8">{t("joining.description")}</p>
					<Link
						href="/contact"
						className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full inline-flex items-center"
					>
						{t("joining.button")} <Users className="ml-2" size={20} />
					</Link>
				</div>
			</section>
		</div>
	);
}
