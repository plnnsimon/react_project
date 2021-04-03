import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from'./Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
    <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Max' },
        { id: 4, name: 'Igor' }
    ];

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hu' },
        { id: 3, message: 'Ha' },
        { id: 4, message: 'He' }
    ];


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            
            <div className={classes.dialogs_items}>
                <DialogItem name={dialogsData [0].name} id={dialogsData [0].id} />
                <DialogItem name={dialogsData [1].name} id={dialogsData [1].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData [0].message} id={messagesData [0].id} />
                <Message message={messagesData [1].message} id={messagesData [1].id} />
            </div>
        </div>
    )

}

export default Dialogs