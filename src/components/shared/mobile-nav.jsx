import './mobile-nav.css';
import { NavLink } from 'react-router';
import mobileClose from '../../../public/images/close.svg';
import mobileOpen from '../../../public/images/menu.svg';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const MobileNav = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button className='mobile-open' onClick={() => setOpen(true)}>
				<img src={mobileOpen} alt='Stacked Line Mobile Menu Open Icon' />
			</button>
			{createPortal(
				<div className={`mobile-nav-container ${open ? 'active' : ''}`}>
					<button onClick={() => setOpen(false)} className='mobile-close'>
						<img src={mobileClose} alt='X Mobile Menu Close Icon' />
					</button>
					<nav className='mobile-nav'>
						<NavLink to='/pricing'>Pricing</NavLink>
						<NavLink to='/about'>About</NavLink>
						<NavLink to='/contact'>Contact</NavLink>
					</nav>
					<a href='#demo' className='btn-primary'>
						Schedule a Demo
					</a>
				</div>,
				document.body
			)}
		</>
	);
};

export default MobileNav;
