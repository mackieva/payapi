import './about-content.css';

const AboutContent = () => {
	return (
		<>
			<div className='container'>
				<div className='page-title'>
					<h2 className='heading-h1-sm'>
						We empower innovators by delivering access to the financial system
					</h2>
				</div>
				<div className='about-copy'>
					<h3 className='heading-h3-lg'>Our Vision</h3>
					<p>
						Our main goal is to build beautiful consumer experiences along with
						developer-friendly infrastructure. The result is an intelligent tool
						that gives everyone the ability to create amazing products that
						solve big problems. We are deeply focused on democratizing financial
						services through technology.
					</p>
					<h3 className='heading-h3-lg'>Our Business</h3>
					<p>
						At the core of our platform is the technical infrastructure APIs
						that connect consumers. Our innovative product provides key insights
						for businesses and individuals, as well as robust reporting for
						traditional financial institutions and developers.
					</p>
				</div>
			</div>
			<div className='img-banner'></div>
			<div className='container'>
				<div className='about-stats'>
					<div className='about-stats__column'>
						<p className='description'>Team Members</p>
						<p className='heading-h1-sm stat'>300+</p>
					</div>
					<div className='about-stats__column'>
						<p className='description'>Offices in the US</p>
						<p className='heading-h1-sm stat'>3</p>
					</div>
					<div className='about-stats__column'>
						<p className='description'>Transactions analyzed</p>
						<p className='heading-h1-sm stat'>10M+</p>
					</div>
				</div>
				<div className='about-copy'>
					<h3 className='heading-h3-lg'>The Culture</h3>
					<p>
						We strongly believe there's always an opportunity to learn from each
						other outside of day-to-day work, whether it's company-wide
						offsites, internal hackathons, or co-worker meetups. We always value
						cross-team collaboration and diversity of thought, no matter the job
						title.
					</p>
					<h3 className='heading-h3-lg'>The People</h3>
					<p>
						We're all passionate about building a more efficient and inclusive
						financial infrastructure together. At PayAPI, we have diverse
						backgrounds and skills.
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutContent;
