import Nav from '../shared/nav';
import logo from '../../assets/images/shared/desktop/logo.svg';
import './header.css';

const Header = () => {
	return (
		<header className='header container'>
			<img src={logo} alt='logo' className='header__logo' />
			<Nav />
			<a href='#' className='btn-primary'>
				Schedule a Demo
			</a>
		</header>
	);
};

export default Header;
