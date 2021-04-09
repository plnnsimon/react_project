import React from 'react';

import classes from'./ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.profile_photo} src="https://papers.co/wallpaper/papers.co-nn56-mountain-morning-sky-bird-blue-nature-35-3840x2160-4k-wallpaper.jpg" />
            </div>
            <div>
                <img className={classes.description_block} src={props.profile.photo.large} />
            </div>
         </div>
    )

}   


export default ProfileInfo