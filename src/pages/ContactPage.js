import React, { useState } from "react";

const FORM_ENDPOINT =
	"https://public.herotofu.com/v1/6cd9ee40-2797-11ed-9d54-c9f9d2b00e7b";
const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	if (submitted) {
		return (
			<>
				<h2>Thank you!</h2>
				<div>We'll be in touch soon.</div>
			</>
		);
	}

	return (
		<form
			action={FORM_ENDPOINT}
			onSubmit={handleSubmit}
			method="POST"
			target="_blank"
		>
			<div>
				<input type="text" placeholder="Your name" name="name" required />
			</div>
			<div>
				<input type="email" placeholder="Email" name="email" required />
			</div>
			<div>
				<textarea placeholder="Your message" name="message" required />
			</div>
			<div>
				<button type="submit"> Send a message </button>
			</div>
		</form>
	);
};

export default ContactForm;
