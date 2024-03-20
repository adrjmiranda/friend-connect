import { FunctionComponent, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

const App: FunctionComponent = (): ReactNode => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default App;
