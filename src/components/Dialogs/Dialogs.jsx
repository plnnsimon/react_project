import React from 'react';
import classes from'./Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Andrei
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hey, Hi! How are you?</div>
                <div className={classes.message}>Hey, Hi! How are you?</div>
                <div className={classes.message}>Hey, Hi! How are you?</div>
            </div>
        </div>
    )

}

export default Dialogs