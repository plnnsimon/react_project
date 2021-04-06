import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPostsContainer = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />  );

    let newPostElement = React.createRef();
    
    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    } 

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} />
    )

}   


export default MyPostsContainer;