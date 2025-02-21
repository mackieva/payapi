import './contact-content.css';
import LogoGrid from '../shared/logo-grid';
import ContactForm from './contact-form';

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
					<ContactForm />
				</div>
				<div className='contact__container-copy'>
					<p className='heading-h4'>
						Join the thousands of innovators that are already building with us
					</p>
					<LogoGrid />
				</div>
			</div>
		</div>
	);
};

export default ContactContent;
