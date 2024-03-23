import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Styles from './styles';
import { Wrapper } from '../../GlobalStyles';

// Image
import Logo from '../../assets/logo.png';
import UserImg from '../../assets/img/users/1.jpg';

// Icons
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineRssFeed } from 'react-icons/md';
import { FaUserFriends, FaPhotoVideo } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { FiVideo } from 'react-icons/fi';
import { GrLike } from 'react-icons/gr';
import { IoAppsSharp } from 'react-icons/io5';

const Topbar: FunctionComponent = (): ReactNode => {
	return (
		<Styles.Container>
			<Wrapper>
				<nav>
					<Styles.SearchBar>
						<div className='logo'>
							<img src={Logo} alt='FriendConnect' />
						</div>
						<div className='search'>
							<form action='#'>
								<input type='search' name='search' placeholder='Search...' />
								<button type='submit'>
									<IoIosSearch />
								</button>
							</form>
						</div>
					</Styles.SearchBar>
					<Styles.Menu>
						<a href='#'>
							<MdOutlineRssFeed />
						</a>
						<a href='#'>
							<FaUserFriends />
						</a>
						<a href='#'>
							<TiMessages />
						</a>
						<a href='#'>
							<FaPhotoVideo />
						</a>
						<a href='#'>
							<FiVideo />
						</a>
						<a href='#'>
							<GrLike />
						</a>
						<a href='#'>
							<IoAppsSharp />
						</a>
					</Styles.Menu>
					<Styles.Profile>
						<a href='#' className='user'>
							<img src={UserImg} alt='Jhon Doe' />
							<span>Jhon Doe</span>
						</a>
					</Styles.Profile>
				</nav>
			</Wrapper>
		</Styles.Container>
	);
};

export default Topbar;
