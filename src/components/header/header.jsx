import Nav from '../shared/nav';
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
			<a href='#' className='btn-primary'>
				Schedule a Demo
			</a>
		</header>
	);
};

export default Header;
