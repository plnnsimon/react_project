import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />  );
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
                <div className={classes.posts}>
                    { postsElements }
                </div>
            </div>
         </div>
    )

}   


export default MyPosts