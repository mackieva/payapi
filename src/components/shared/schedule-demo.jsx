import './schedule-demo.css';

const ScheduleDemo = () => {
	return (
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
	);
};

export default ScheduleDemo;
