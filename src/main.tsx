import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// Import Styles
import GlobalStyles from './GlobalStyles.ts';

// Import Pages
import App from './App.tsx';
import Home from './pages/home/index.tsx';
import Login from './pages/login/index.tsx';
import Register from './pages/register/index.tsx';
import Profile from './pages/profile/index.tsx';
import UserProfile from './pages/user-profile/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<GlobalStyles />
		<Routes>
			<Route element={<App />}>
				<Route path='/friend-connect' element={<Home />} />
				<Route path='/friend-connect/login' element={<Login />} />
				<Route path='/friend-connect/register' element={<Register />} />
				<Route path='/friend-connect/profile' element={<Profile />} />
				<Route
					path='/friend-connect/user-profile/:id'
					element={<UserProfile />}
				/>
			</Route>
		</Routes>
	</BrowserRouter>
);
