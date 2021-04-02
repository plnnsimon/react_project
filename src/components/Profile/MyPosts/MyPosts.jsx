import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>
                My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
                <div classNmae={classes.posts}>
                    <Post message='Hey, Hi!' likesCount='5' />   
                    <Post message="It's my new post." likesCount='3' />   
                </div>
            </div>
         </div>
    )

}   


export default MyPosts