import ScheduleDemo from '../shared/schedule-demo';
import cellPhone from '../../assets/images/home/desktop/illustration-phone-mockup.svg';
import './hero.css';

const Hero = () => {
	return (
		<div className='container'>
			<div className='hero__container'>
				<div className='hero__container-copy'>
					<h2 className='heading-h1-lg'>
						Start building with our APIs for absolutely free.
					</h2>
					<ScheduleDemo />
				</div>
				<div className='hero__container-phone'>
					<img src={cellPhone} className='hero-phone' alt='Cell Phone' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
