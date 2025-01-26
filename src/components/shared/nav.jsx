import './nav.css';
import { NavLink } from 'react-router';
const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='nav__links'>
				<li>
					<NavLink to='/pricing'>Pricing</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/contact'>Contact</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
