import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that a valid locale is used
	if (!locale || !routing.locales.includes(locale as "en" | "hi")) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: {
			...(await import(`../dictionaries/${locale}/navigation.json`)).default,
			...(await import(`../dictionaries/${locale}/homepage.json`)).default,
			...(await import(`../dictionaries/${locale}/objectives.json`)).default,
			...(await import(`../dictionaries/${locale}/footer.json`)).default,
			...(await import(`../dictionaries/${locale}/services.json`)).default,
			...(await import(`../dictionaries/${locale}/contact.json`)).default,
			...(await import(`../dictionaries/${locale}/about.json`)).default,
		},
	};
});
