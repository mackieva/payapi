import './pricing-content.css';

const PricingContent = () => {
	return (
		<div className='container'>
			<div className='page-title'>
				<h2 className='heading-h1-sm'>Pricing</h2>
			</div>
			<div className='pricing__table'>
				<div className='pricing__table-column'>
					<h3 className='heading-h3-lg'>Free Plan</h3>
					<p>
						Build and test using our core set of products with up to 100 API
						requests
					</p>
					<p className='heading-h1-sm cost'>$0.00</p>
					<ul>
						<li className='included'>Transactions</li>
						<li className='included'>Auth</li>
						<li className='included'>Identity</li>
						<li>Investments</li>
						<li>Assets</li>
						<li>Liabilities</li>
						<li>Income</li>
					</ul>
					<a href='#' className='btn-secondary--dark'>
						Request Access
					</a>
				</div>
				<div className='pricing__table-column'>
					<h3 className='heading-h3-lg'>Basic Plan</h3>
					<p>
						Launch your project with unlimited requests and no contractual
						minimums
					</p>
					<p className='heading-h1-sm cost'>$249.00</p>
					<ul>
						<li className='included'>Transactions</li>
						<li className='included'>Auth</li>
						<li className='included'>Identity</li>
						<li className='included'>Investments</li>
						<li className='included'>Assets</li>
						<li>Liabilities</li>
						<li>Income</li>
					</ul>
					<a href='#' className='btn-secondary--dark'>
						Request Access
					</a>
				</div>
				<div className='pricing__table-column'>
					<h3 className='heading-h3-lg'>Premium Plan</h3>
					<p>
						Get tailored solutions, volume pricing, and dedicated support for
						your team
					</p>
					<p className='heading-h1-sm cost'>$499.00</p>
					<ul>
						<li className='included'>Transactions</li>
						<li className='included'>Auth</li>
						<li className='included'>Identity</li>
						<li className='included'>Investments</li>
						<li className='included'>Assets</li>
						<li className='included'>Liabilities</li>
						<li className='included'>Income</li>
					</ul>
					<a href='#' className='btn-secondary--dark'>
						Request Access
					</a>
				</div>
			</div>
		</div>
	);
};

export default PricingContent;
