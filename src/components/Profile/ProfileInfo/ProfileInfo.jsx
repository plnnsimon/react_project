import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from'./ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader /> 
    }
    return (
       
        <div>
            {/* <div>
                <img className={classes.profile_photo} src="https://papers.co/wallpaper/papers.co-nn56-mountain-morning-sky-bird-blue-nature-35-3840x2160-4k-wallpaper.jpg" />
            </div> */}
            <div className={classes.description_block}>
                <img className={classes.profile_photo} src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
         </div>
    )

}   


export default ProfileInfo;