import './features.css';
import ui from '../../assets/images/home/desktop/illustration-easy-to-implement.svg';
import phones from '../../assets/images/home/desktop/illustration-simple-ui.svg';
import finances from '../../assets/images/home/desktop/icon-personal-finances.svg';
import banking from '../../assets/images/home/desktop/icon-banking-and-coverage.svg';
import consumer from '../../assets/images/home/desktop/icon-consumer-payments.svg';

const Features = () => {
	return (
		<div className='features'>
			<div className='container'>
				<div className='features-grid'>
					<div className='image image-l'>
						<img src={ui} alt='Coding Windo' />
					</div>
					<div className='copy'>
						<h3 className='heading-h2'>Easy to implement</h3>
						<p>
							Our API comes with just a few lines of code. You’ll be up and
							running in no time. We built our documentation page to integrate
							payments functionality with ease.
						</p>
					</div>
				</div>
				<div className='features-grid'>
					<div className='copy'>
						<h3 className='heading-h2'>Simple UI &amp; UX</h3>
						<p>
							Our pre-built form is easy to integrate in your app or website’s
							checkout flow and designed to optimize conversion.
						</p>
					</div>
					<div className='image image-r'>
						<img src={phones} alt='Coding Windo' />
					</div>
				</div>
				<div className='features-grid-three'>
					<div className='flex-center'>
						<img src={finances} alt='Bag of money and coins icon' />
						<h4 className='heading-h3-sm'>Personal Finances</h4>
						<p>
							Consolidate financial data from multiple sources and categorize
							transactions up to 2 years of history. Analyze reports to
							reconcile activities in your account.{' '}
						</p>
					</div>
					<div className='flex-center'>
						<img src={banking} alt='line graph and bar chart icon' />
						<h4 className='heading-h3-sm'>Banking &amp; Coverage</h4>
						<p>
							With our platform, you can speed up account onboarding and support
							ongoing payments for checking, savings, credit card, and brokerage
							accounts.
						</p>
					</div>
					<div className='flex-center'>
						<img src={consumer} alt='credit card icon' />
						<h4 className='heading-h3-sm'>Consumer Payments</h4>
						<p>
							It’s easier to set up secure bank payments with us through a flow
							designed with the user experience in mind. Customers could
							instantly authenticate their account.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
