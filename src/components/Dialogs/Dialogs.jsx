import React from 'react';
import { Redirect } from 'react-router';

import DialogItem from './DialogItem/DialogItem';
import classes from'./Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {   

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> ) ; 
       
    let messagesElements = state.messages.map ( message => <Message message={message.message} key={message.id} /> );
    let newMessageText = state.newMessageText;

    let addNewMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                { dialogsElements }

            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={ newMessageText } 
                    onChange={ onNewMessageChange }
                    placeholder='Enter your message:' ></textarea></div>
                    <div><button onClick={ addNewMessage } >Send</button></div>
                </div>
            </div>
            
        </div>
    )

}

export default Dialogs