import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Interfaces
import User from '../../interfaces/User';

// Icons
import { GoPlus } from 'react-icons/go';

const SuggestionItem: FunctionComponent<{ user: User }> = ({
	user,
}): ReactNode => {
	return (
		<Style.Container>
			<div className='user-id'>
				<img src={user.image} alt={user.name} />
				<span>{user.name}</span>
			</div>
			<a href={`/user/${user.id}`} className='btn'>
				<GoPlus />
			</a>
		</Style.Container>
	);
};

export default SuggestionItem;
