import React, { useState } from "react";
import "../styles/ContactPage.css";

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
				<h2>Dziękujemy!</h2>
				<div>Wkrótce się z Tobą skontaktujemy.</div>
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
			<div className="formWrapper">
				<div>
					<input type="text" placeholder="Imię" name="name" required />
				</div>
				<div>
					<input type="email" placeholder="E-mail" name="email" required />
				</div>
				<div>
					<textarea placeholder="Twoja wiadomość" name="message" required />
				</div>
				<div>
					<button type="submit"> Wyślij wiadomość </button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
