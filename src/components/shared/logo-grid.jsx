import './logo-grid.css';

import tesla from '../../assets/images/shared/desktop/tesla.svg';
import microsoft from '../../assets/images/shared/desktop/microsoft.svg';
import hp from '../../assets/images/shared/desktop/hewlett-packard.svg';
import oracle from '../../assets/images/shared/desktop/oracle.svg';
import google from '../../assets/images/shared/desktop/google.svg';
import nvidia from '../../assets/images/shared/desktop/nvidia.svg';
const LogoGrid = ({ color = 'blue' }) => {
	return (
		<div className={`logo-grid ${color}`}>
			<img src={tesla} alt='Tesla logo' />
			<img src={microsoft} alt='Microsoft logo' />
			<img src={hp} alt='Hewlett Packard logo' />
			<img src={oracle} alt='Oracle logo' />
			<img src={google} className='jsc' alt='Google logo' />
			<img src={nvidia} alt='Nvidia logo' />
		</div>
	);
};

export default LogoGrid;
