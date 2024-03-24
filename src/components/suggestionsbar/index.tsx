import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Fictitious Data
import users from '../../data/users';
import SuggestionItem from '../suggestion-item';

// Icons
import { HiOutlineDotsVertical } from 'react-icons/hi';

const Suggestionbar: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<div className='top'>
				<h3>Suggestions</h3>
				<span>
					<HiOutlineDotsVertical />
				</span>
			</div>
			<div className='users'>
				{users.length > 0 &&
					users.reverse().map((user) => <SuggestionItem user={user} />)}
			</div>
		</Style.Container>
	);
};

export default Suggestionbar;
