import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
	const t = useTranslations("footer");

	return (
		<footer className="bg-red-600 text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
						<p>{t("address")}</p>
						<p>{t("email")}</p>
						<p>{t("phone")}</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/about" className="hover:underline">
									{t("aboutUs")}
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:underline">
									{t("ourServices")}
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:underline">
									{t("objectives")}
								</Link>
							</li>
							<li>
								<Link href="/gallery" className="hover:underline">
									{t("gallery")}
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									{t("contact")}
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">{t("followUs")}</h3>
						<div className="flex space-x-4">
							<Link
								href="https://www.facebook.com/share/1KnMEixm8R/"
								className="hover:text-red-200 cursor-pointer"
								target="_blank"
							>
								{t("facebook")}
							</Link>
							<Link
								href="https://x.com/shrisarthi"
								className="hover:text-red-200 cursor-pointer"
								target="_blank"
							>
								{t("twitter")}
							</Link>
							<Link
								href="https://www.instagram.com/shrisarthisewasansthan"
								className="hover:text-red-200 cursor-pointer"
								target="_blank"
							>
								{t("instagram")}
							</Link>
							<Link
								href="https://www.youtube.com/@shrisarthisevasansthan."
								className="hover:text-red-200 cursor-pointer"
								target="_blank"
							>
								{t("youtube")}
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-red-500 text-center flex justify-center items-center gap-4">
					<p className="flex items-center justify-center gap-2">
						<span>{t("madeBy")}</span>
						<Link href="https://saurabhbhalerao.com">{t("developerName")}</Link>
					</p>
					<p className="flex items-center justify-center gap-2">
						<span>{t("advisor")}</span>
						<Link href="https://www.linkedin.com/in/abhinandan-mishra-b47688277/">
							{t("advisorName")}
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
