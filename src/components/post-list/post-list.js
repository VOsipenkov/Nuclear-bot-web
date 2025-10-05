import React from "react";
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({ data, onDelete, onToggleImportant, onToggleLike }) => {
    const postListItems = data.map((item) => {
        return (
            <li>
                <PostListItem key={item.id} label={item.label} important={item.important}
                    onDelete={() => onDelete(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleLike={() => onToggleLike(item.id)}
                />
            </li>
        )
    });

    return <div className="app-list list-group">
        <ListGroup>
            {postListItems}
        </ListGroup>
    </div>
}

export default PostList;