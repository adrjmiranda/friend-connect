import { FunctionComponent, ReactNode } from 'react';

import * as Style from './style';
import Topbar from '../../components/topbar';

const Home: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<Topbar />
		</Style.Container>
	);
};

export default Home;
