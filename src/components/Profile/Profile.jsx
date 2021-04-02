import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from'./Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.profile_photo} src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Mountain-Landscape-Simple-Nature-Background-Image.jpg" />
            </div>
            <div>
                <img className={classes.avatar} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="80" />
            </div>
            <MyPosts />
         </div>
    )

}   


export default Profile