import { FunctionComponent, ReactNode } from 'react';

// Styles
import * as Style from './style';

// Components
import ShareBox from '../share-box';

// Fictitious Data
import posts from '../../data/posts';
import FeedCard from '../feed-card';

const Feed: FunctionComponent = (): ReactNode => {
	return (
		<Style.Container>
			<ShareBox />
			<div className='posts'>
				{posts.length > 0 &&
					posts.map((post) => (
						<FeedCard
							id={post.id}
							description={post.description}
							photo={post.photo}
							date={post.date}
							userId={post.userId}
							like={post.like}
							comment={post.comment}
							key={post.id}
						/>
					))}
			</div>
		</Style.Container>
	);
};

export default Feed;
