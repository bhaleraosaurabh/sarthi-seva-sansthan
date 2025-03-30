import ContactEmail from "@/emails/ContactEmail";
import { Resend } from "resend";

export const runtime = "edge"; // Use the Edge runtime for better performance

export async function POST(req: Request) {
	try {
		const { name, contact, bloodGroup, address } = await req.json();

		if (!name || !contact || !bloodGroup || !address) {
			return new Response(
				JSON.stringify({ error: "All fields are required" }),
				{ status: 400 },
			);
		}

		const resend = new Resend(process.env.RESEND_API_KEY);

		const emailHtml = ContactEmail({ name, contact, bloodGroup, address });

		await resend.emails.send({
			from: "shrisarthisevasansthan@gmail.com",
			to: "shrisarthisevasansthan@gmail.com",
			subject: "New Contact Form Submission",
			react: emailHtml,
		});

		return new Response(
			JSON.stringify({ message: "Email sent successfully!" }),
			{ status: 200 },
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to send email" }), {
			status: 500,
		});
	}
}
