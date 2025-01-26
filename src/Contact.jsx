import './Contact.css';
import Header from './components/header/header';
import ContactContent from './components/contact/contact-content';
import PreFooter from './components/shared/pre-footer';
import Footer from './components/footer/footer';
import { useEffect } from 'react';

const Contact = () => {
	useEffect(() => {
		document.body.className = 'contact';
	}, []);
	return (
		<>
			<Header />
			<ContactContent />
			<PreFooter />
			<Footer />
		</>
	);
};

export default Contact;
