"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Objectives() {
	const objectivesKeys = [
		"promoteEducation",
		"enhanceHealthcareAccess",
		"supportLivelihoodGeneration",
		"upliftMarginalizedGroups",
		"fosterSustainableDevelopment",
		"empowerThroughSocialAwareness",
		"collaborateForImpact",
	];
	const t = useTranslations("objectives");
	return (
		<div>
			<section className="relative py-20 bg-red-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
					<p className="text-xl max-w-3xl">{t("description")}</p>
				</div>
			</section>
			<section className="py-12 px-6 md:px-12 lg:px-24">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{objectivesKeys.map((key) => (
						<Card key={key} className="shadow-md bg-white">
							<CardHeader>
								<CardTitle className="text-lg font-semibold text-primary">
									{t(`${key}.title`)}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700">{t(`${key}.description`)}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
