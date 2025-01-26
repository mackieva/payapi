import './Home.css';
import Header from './components/header/header';
import Hero from './components/home/hero';
import WhoWeWorkWith from './components/home/who-we-work-with';
import Features from './components/home/features';
import Footer from './components/footer/footer';
import PreFooter from './components/shared/pre-footer';
import { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		document.body.className = 'home';
	}, []);
	return (
		<>
			<Header />
			<Hero />
			<WhoWeWorkWith />
			<Features />
			<PreFooter />
			<Footer />
		</>
	);
};

export default Home;
