import './About.css';
import Header from './components/header/header';
import AboutContent from './components/about/about-content';
import PreFooter from './components/shared/pre-footer';
import Footer from './components/footer/footer';
import { useEffect } from 'react';

const About = () => {
	useEffect(() => {
		document.body.className = 'about';
	}, []);
	return (
		<>
			<Header />
			<AboutContent />
			<PreFooter />
			<Footer />
		</>
	);
};

export default About;
