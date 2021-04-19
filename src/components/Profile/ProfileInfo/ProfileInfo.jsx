import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from'./ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader /> 
    }
    return (
       
        <div>
            <div className={classes.description_block}>
                <img className={classes.profile_photo} src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
         </div>
    )

}   


export default ProfileInfo;