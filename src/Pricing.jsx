import './Pricing.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import PreFooter from './components/shared/pre-footer';
import PricingContent from './components/pricing/pricing-content';

const Pricing = () => {
	return (
		<>
			<Header />
			<PricingContent />
			<PreFooter />
			<Footer />
		</>
	);
};

export default Pricing;
