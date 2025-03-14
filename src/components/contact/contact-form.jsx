'use client';

import { useActionState } from 'react';
import { contactFormAction } from '../../lib/actions';
import { ToastContainer, toast } from 'react-toastify';
const ContactForm = () => {
	const initialState = {
		errors: {},
		success: false,
		data: {
			name: '',
			email: '',
			company: '',
			title: '',
			message: '',
			signup: null,
		},
		name: '',
	};
	const [state, formAction] = useActionState(contactFormAction, initialState);

	if (state.success === true) {
		toast(
			`Thank you for getting in touch ${state.name}!  We've received your message and will be in touch with you as soon as we can.`,
			{
				className: 'p-0 w-[400px] border border-purple-600/40',
			}
		);
	}

	return (
		<>
			<form action={formAction}>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='Name'
					defaultValue={state?.data?.name}
					className={state?.errors?.name ? 'input-error' : ''}
				/>
				{state?.errors?.name && <p className='error'>{state.errors.name}</p>}
				<input
					type='email'
					name='email'
					id='email'
					placeholder='Email Address'
					defaultValue={state?.data?.email}
					className={state?.errors?.email ? 'input-error' : ''}
				/>
				{state?.errors?.email && <p className='error'>{state.errors.email}</p>}
				<input
					type='text'
					name='company'
					id='company'
					placeholder='Company Name'
					defaultValue={state?.data?.company}
					className={state?.errors?.company ? 'input-error' : ''}
				/>
				{state?.errors?.company && (
					<p className='error'>{state.errors.company}</p>
				)}
				<input
					type='text'
					name='title'
					id='title'
					placeholder='Title'
					defaultValue={state?.data?.title}
					className={state?.errors?.title ? 'input-error' : ''}
				/>
				{state?.errors?.title && <p className='error'>{state.errors.title}</p>}
				<textarea
					name='message'
					id='message'
					placeholder='Message'
					defaultValue={state?.data?.message}
					className={state?.errors?.message ? 'input-error' : ''}
				/>
				{state?.errors?.message && (
					<p className='error'>{state.errors.message}</p>
				)}
				<label htmlFor='signup' className='check-container'>
					Stay up-to-date with company announcements and updates to our API
					<input
						type='checkbox'
						name='signup'
						id='signup'
						defaultValue={state?.value?.signup}
					/>
					<span className='checkmark'></span>
				</label>
				<button className='btn-secondary--dark' type='submit'>
					Submit
				</button>
			</form>
			<ToastContainer />
		</>
	);
};

export default ContactForm;
