import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Home from './Home.jsx';
import Pricing from './Pricing.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
