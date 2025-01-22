import './nav.css';
const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='nav__links'>
				<li>
					<a href='#'>Pricing</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
