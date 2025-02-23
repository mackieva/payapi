'use server';
import { contactSchema } from './validators';

export function contactFormAction(prevState, formData) {
	const data = Object.fromEntries(formData);
	const validatedData = contactSchema.safeParse(data);

	if (!validatedData.success) {
		return {
			errors: validatedData.error.flatten().fieldErrors,
			data: data,
		};
	}

	const subscribed = formData.get('signup');

	const { name, email, company, title, message } = validatedData.data;

	const submittedInfo = {
		name,
		email,
		company,
		title,
		message,
		title,
		subscribed,
	};

	return {
		success: true,
		data: validatedData.data,
	};
}
