import React from 'react';
import classes from'./Post.module.css';

const Post = (props) => {
    return (
        
        <div className={classes.item}>
            <img src='https://underthebanyan.files.wordpress.com/2018/02/male_bornean_orangutan_-_big_cheeks2.jpg?w=676' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
            
            
        </div>
           
    )

}   


export default Post