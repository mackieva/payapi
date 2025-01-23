import './who-we-work-with.css';

import tesla from '../../assets/images/shared/desktop/tesla.svg';
import microsoft from '../../assets/images/shared/desktop/microsoft.svg';
import hp from '../../assets/images/shared/desktop/hewlett-packard.svg';
import oracle from '../../assets/images/shared/desktop/oracle.svg';
import google from '../../assets/images/shared/desktop/google.svg';
import nvidia from '../../assets/images/shared/desktop/nvidia.svg';

const WhoWeWorkWith = () => {
	return (
		<div className='wwww'>
			<div className='container wwww__container'>
				<div>
					<h3 className='heading-h2'>Who we work with</h3>
					<p>
						Today, millions of people around the world have successfully
						connected their accounts to apps they love using our API. We provide
						developers with the tools they need to create easy and accessible
						experiences for their users.{' '}
					</p>
					<a href='#' className='btn-secondary--light'>
						About Us
					</a>
				</div>
				<div className='wwww__container-logos'>
					<img src={tesla} alt='Tesla logo' style={{ justifySelf: 'end' }} />
					<img src={microsoft} alt='Microsoft logo' />
					<img
						src={hp}
						alt='Hewlett Packard logo'
						style={{ justifySelf: 'start' }}
					/>
					<img src={oracle} alt='Oracle logo' style={{ justifySelf: 'end' }} />
					<img src={google} alt='Google logo' />
					<img
						src={nvidia}
						alt='Nvidia logo'
						style={{ justifySelf: 'start' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default WhoWeWorkWith;
