import logo from '../../assets/images/shared/desktop/logo.svg';
import Nav from '../shared/nav';
import Social from '../shared/social';
import { NavLink } from 'react-router';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div className='container footer__items'>
				<NavLink to='/'>
					<img src={logo} alt='logo' className='header__logo' />
				</NavLink>
				<Nav />
				<Social />
			</div>
		</footer>
	);
};

export default Footer;
