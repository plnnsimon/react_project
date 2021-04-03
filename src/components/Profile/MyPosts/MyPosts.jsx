import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    { id: 1, message: 'Hey, Hi!', likesCount: 12 },
    { id: 2, message: "It's my new post.", likesCount: 14 }
];

const MyPosts = () => {
    return (
        <div classNmae={classes.postBlock}>
            <div>
                <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                
                
            </div>
                <div classNmae={classes.posts}>
                    <Post message={postData[0].message} likesCount={postData[0].likesCount} />   
                    <Post message={postData[1].message} likesCount={postData[1].likesCount} />   
                      
                </div>
            </div>
         </div>
    )

}   


export default MyPosts