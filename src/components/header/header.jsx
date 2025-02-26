import Nav from '../shared/nav';
import MobileNav from '../shared/mobile-nav';
import logo from '../../assets/images/shared/desktop/logo.svg';
import './header.css';
import { NavLink } from 'react-router';

const Header = () => {
	return (
		<header className='header container'>
			<NavLink to='/'>
				<img src={logo} alt='logo' className='header__logo' />
			</NavLink>
			<Nav />
			<a href='#demo' className='btn-primary header-signup'>
				Schedule a Demo
			</a>
			<MobileNav />
		</header>
	);
};

export default Header;
