import './Home.css';
import Hero from './components/home/hero';
import WhoWeWorkWith from './components/home/who-we-work-with';
import Features from './components/home/features';
import Footer from './components/footer/footer';
import PreFooter from './components/shared/pre-footer';

const Home = () => {
	return (
		<>
			<Hero />
			<WhoWeWorkWith />
			<Features />
			<PreFooter />
			<Footer />
		</>
	);
};

export default Home;
