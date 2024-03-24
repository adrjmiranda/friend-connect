import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Icons
import { HiDotsVertical } from 'react-icons/hi';
import { BiSolidLike } from 'react-icons/bi';

// Interfaces
import PostCard from '../../interfaces/PostCard';

// Fictitious Data
import users from '../../data/users.ts';

const FeedCard: FunctionComponent<PostCard> = ({
	id,
	description,
	photo,
	date,
	userId,
	like,
	comment,
}): ReactNode => {
	const usersById = users.filter((u) => u.id === userId);

	let user: any = '';

	if (usersById.length > 0) {
		user = usersById[0];
	}

	return (
		<Style.Container>
			<div className='top'>
				<div className='user'>
					<img src={user.image} alt='' />
					<span>{user.name}</span>
					<span className='date'>{date}</span>
				</div>
				<div className='more'>
					<HiDotsVertical />
				</div>
				<div className='description'>
					<p>{description}</p>
				</div>
			</div>
			<div className='photo'>
				<img src={photo} alt='' />
			</div>
			<div className='status'>
				<div className='like'>
					<a href={`/#/${id}`} className='set-like'>
						<BiSolidLike />
					</a>
					<span className='likes-number'>{like}</span> people liked this
				</div>
				<div className='comments'>
					<span className='comments-number'>{comment}</span> comments
				</div>
			</div>
		</Style.Container>
	);
};

export default FeedCard;
