import ContactEmail from "@/emails/ContactEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const { name, contact, bloodGroup, address } = await req.json();

		if (!name || !contact || !bloodGroup || !address) {
			return new Response(
				JSON.stringify({ error: "All fields are required" }),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}
		const { data, error } = await resend.emails.send({
			from: "no-reply@shrisarthisevasansthan.com",
			to: "shrisarthisevasansthan@gmail.com",
			subject: "New Contact Form Submission",
			react: ContactEmail({ name, contact, bloodGroup, address }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}
		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
