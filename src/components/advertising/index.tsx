import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Images
import AdvertisingImg from '../../assets/img/add.jpg';
import GiftImg from '../../assets/img/gift.png';

const Advertising: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<div className='birthdays'>
				<img src={GiftImg} alt='' />
				<p>
					<span>Jane Smith</span> and <span>5 others</span> have a birthday
					tomorrow
				</p>
			</div>
			<div className='add'>
				<img src={AdvertisingImg} alt='' />
			</div>
		</Style.Container>
	);
};

export default Advertising;
