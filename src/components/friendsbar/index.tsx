import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Fictitious Data
import users from '../../data/users';
import FriendItem from '../friend-item';

// Icons
import { HiOutlineDotsVertical } from 'react-icons/hi';

const Friendsbar: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<div className='top'>
				<h3>Online Friends</h3>
				<span>
					<HiOutlineDotsVertical />
				</span>
			</div>
			<div className='users'>
				{users.length > 0 && users.map((user) => <FriendItem user={user} />)}
			</div>
		</Style.Container>
	);
};

export default Friendsbar;
