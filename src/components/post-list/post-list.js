import React from "react";
import PostListItem from '../post-list-item';

const PostList = ()=>(<div className="app-list list-group">
    <ul>
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </ul>
</div>)

export default PostList;