import './contact-content.css';
import LogoGrid from '../shared/logo-grid';

const ContactContent = () => {
	return (
		<div className='container'>
			<div className='page-title'>
				<h2 className='heading-h1-sm'>
					Submit a help request and we’ll get in touch shortly.
				</h2>
			</div>
			<div className='contact__container'>
				<div className='contact__container-form'>
					<form>
						<input type='text' name='name' id='name' placeholder='Name' />
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email Address'
						/>
						<input
							type='text'
							name='company'
							id='company'
							placeholder='Company Name'
						/>
						<input type='text' name='title' id='title' placeholder='Title' />
						<textarea name='message' id='message' placeholder='Message' />
						<label htmlFor='signup'>
							<input type='checkbox' name='signup' id='signup' />
							Stay up-to-date with company announcements and updates to our API
						</label>
						<button className='btn-secondary--dark' type='submit'>
							Submit
						</button>
					</form>
				</div>
				<div className='contact__container-copy'>
					<p className='heading-h4'>
						Join the thousands of innovators already building with us
					</p>
					<LogoGrid />
				</div>
			</div>
		</div>
	);
};

export default ContactContent;
