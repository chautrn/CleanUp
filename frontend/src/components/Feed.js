import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';

const Feed = () => {
	const style = {
		width: '100%',
		overflow: 'auto',
		display: 'flex',
		flexDirection: 'column-reverse',
		marginTop: '50px'

	}
	const posts = [<Post/>,<Post/>,<Post/>,<Post/>,<Post/>,<Post/>];
	const [postAmount, setPostAmount] = useState(0);

	const fetchData = () => {
		return 1; 
	}

	return ( 
		<div style={style}>
			<InfiniteScroll
				dataLength={1} //This is important field to render the next data
				next={fetchData}
				hasMore={true}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center'  }}>
						<b>Yay! You have seen it all</b>
					</p>

				}
			>
				{posts}
			</InfiniteScroll>
		</div>
	);
};

export default Feed;
