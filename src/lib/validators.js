import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, "This field can't be empty"),
	email: z
		.string()
		.email('Please use a valid email address')
		.min(1, "This field can't be empty"),
	company: z.string().min(1, "This field can't be empty"),
	title: z.string().min(1, "This field can't be empty"),
	message: z.string().min(1, "This field can't be empty"),
});
