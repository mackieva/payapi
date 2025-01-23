import cellPhone from '../../assets/images/home/desktop/illustration-phone-mockup.svg';
import './hero.css';

const Hero = () => {
	return (
		<div className='container'>
			<div className='hero__container'>
				<div>
					<h2 className='heading-h1-lg'>
						Start building with our APIs for absolutely free.
					</h2>
					<form className='email-signup'>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Enter email address'
						/>
						<button type='submit' className='btn-primary'>
							Schedule a Demo
						</button>
						<p className='footnote'>
							Have any questions? <a href='#'>Contact Us</a>
						</p>
					</form>
				</div>
				<div className='hero__container-phone'>
					<img src={cellPhone} className='hero-phone' alt='Cell Phone' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
