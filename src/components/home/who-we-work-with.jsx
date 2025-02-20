import './who-we-work-with.css';
import LogoGrid from '../shared/logo-grid';

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
					<a href='/about' className='btn-secondary--light'>
						About Us
					</a>
				</div>
				<LogoGrid color='white' />
			</div>
		</div>
	);
};

export default WhoWeWorkWith;
