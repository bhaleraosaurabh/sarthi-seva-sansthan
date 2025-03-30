import {
	Building,
	Drop,
	FirstAid,
	FirstAidKit,
	Heart,
	PawPrint,
	TShirt,
	TreeEvergreen,
	Users,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Link from "next/link";

const serviceIcons = {
	blood_donation: Drop,
	education: Building,
	marriage_support: Users,
	medical_assistance: FirstAid,
	environmental_protection: TreeEvergreen,
	animal_welfare: PawPrint,
	essentials_for_poor: TShirt,
	road_accidents: FirstAidKit,
};

export default function Services() {
	const t = useTranslations("services-page");

	const services = Object.keys(serviceIcons);

	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-red-600 text-white text-center">
				<div className="max-w-7xl mx-auto px-4">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
					<p className="text-xl max-w-3xl mx-auto">{t("description")}</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((key) => {
							const Icon = serviceIcons[key as keyof typeof serviceIcons];
							return (
								<div
									key={key}
									className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
								>
									<Icon className="w-12 h-12 text-red-600 mb-4" />
									<h3 className="text-xl font-semibold mb-2">
										{t(`sections.${key}.title`)}
									</h3>
									<p className="text-gray-600 mb-4">
										{t(`sections.${key}.description`)}
									</p>
									<ul className="space-y-2 text-gray-600">
										<li className="flex items-center">
											<Heart className="mr-2 text-red-600" size={16} />
											{t(`sections.${key}.features.feature_1`)}
										</li>
										<li className="flex items-center">
											<Heart className="mr-2 text-red-600" size={16} />
											{t(`sections.${key}.features.feature_2`)}
										</li>
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white text-center">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
					<p className="text-xl mb-8">{t("cta.description")}</p>
					<Link
						href="/contact"
						className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-full inline-flex items-center"
					>
						{t("cta.button")}
						<Heart className="ml-2" size={20} />
					</Link>
				</div>
			</section>
		</div>
	);
}
