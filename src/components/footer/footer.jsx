import logo from '../../assets/images/shared/desktop/logo.svg';
import Nav from '../shared/nav';
import Social from '../shared/social';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div className='container footer__items'>
				<img src={logo} alt='logo' className='header__logo' />
				<Nav />
				<Social />
			</div>
		</footer>
	);
};

export default Footer;
