import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Images
import UserImg from '../../assets/img/users/1.jpg';

// Icons
import { FaPhotoFilm } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { BsEmojiSmileFill } from 'react-icons/bs';

const ShareBox: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<div className='top'>
				<img src={UserImg} alt='' />
				<form className='share-form'>
					<input type='text' placeholder='What would you like to share?' />
				</form>
			</div>
			<div className='options'>
				<div className='icon'>
					<FaPhotoFilm />
					<span>Photo or Video</span>
				</div>
				<div className='icon'>
					<FaTag />
					<span>Tag</span>
				</div>
				<div className='icon'>
					<TiLocationOutline />
					<span>Location</span>
				</div>
				<div className='icon'>
					<BsEmojiSmileFill />
					<span>Feelings</span>
				</div>
				<button className='btn' type='button'>
					Share
				</button>
			</div>
		</Style.Container>
	);
};

export default ShareBox;
