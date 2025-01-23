import twitter from '../../assets/images/shared/desktop/twitter.svg';
import facebook from '../../assets/images/shared/desktop/facebook.svg';
import linkedin from '../../assets/images/shared/desktop/linkedin.svg';
import './social.css';

const Social = () => {
	return (
		<div className='social__links'>
			<a href='#'>
				<img src={twitter} alt='Twitter Logo' />
			</a>
			<a href='#'>
				<img src={facebook} alt='Facebook Logo' />
			</a>
			<a href='#'>
				<img src={linkedin} alt='LinkedIn Logo' />
			</a>
		</div>
	);
};

export default Social;
