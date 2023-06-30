import { useState } from 'react';

const Community = () => {
	const [posts, setPosts] = useState([
		{title: 'Rules (PLEASE READ BEFORE POSTING)', body: '', author: 'WBWorkshopStaff', id: 1, isPinned: true},
		{title: "A Beginner's Guide to Worldbuilding", body: '', author: 'WBWorkshopStaff', id: 2, isPinned: true},
		{title: 'User post #1', body: '', author: 'User123', id:3, isPinned: false}
	]);


	return (
		<div>
			<h6>Pinned</h6>
			{posts.map((post) => (
				<div className="pinnedPost-preview" key={post.id}>
					This is where posts will go.
				</div>
			))}



		</div>

	);
}



export default Community;