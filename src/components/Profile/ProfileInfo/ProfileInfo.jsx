import React from 'react';

import classes from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profile_photo} src="https://papers.co/wallpaper/papers.co-nn56-mountain-morning-sky-bird-blue-nature-35-3840x2160-4k-wallpaper.jpg" />
            </div>
            <div>
                <img className={classes.description_block} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="80" />
            </div>
         </div>
    )

}   


export default ProfileInfo