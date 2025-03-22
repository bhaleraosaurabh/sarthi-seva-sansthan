import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Text,
} from "@react-email/components";

interface ContactEmailProps {
	name: string;
	contact: string;
	bloodGroup: string;
}

export default function ContactEmail({
	name,
	contact,
	bloodGroup,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Body style={{ backgroundColor: "#f9fafb", padding: "20px" }}>
				<Container
					style={{
						backgroundColor: "#ffffff",
						padding: "20px",
						borderRadius: "8px",
					}}
				>
					<Heading>New Contact Form Submission</Heading>
					<Text>
						<strong>Name:</strong> {name}
					</Text>
					<Text>
						<strong>Contact Number:</strong> {contact}
					</Text>
					<Text>
						<strong>Blood Group:</strong> {bloodGroup}
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
