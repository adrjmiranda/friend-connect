import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';
import { Wrapper } from '../../GlobalStyles';

// Components
import Topbar from '../../components/topbar';
import Suggestionbar from '../../components/suggestionsbar';
import Feed from '../../components/feed';
import Friendsbar from '../../components/friendsbar';
import Advertising from '../../components/advertising';

const Home: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Topbar />
			<Wrapper>
				<div className='content' id='container'>
					<Suggestionbar />
					<Feed />
					<div className='right-content'>
						<Advertising />
						<Friendsbar />
					</div>
				</div>
			</Wrapper>
		</Style.Container>
	);
};

export default Home;
