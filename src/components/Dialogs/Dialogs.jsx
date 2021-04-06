import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';

import DialogItem from './DialogItem/DialogItem';
import classes from'./Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {   

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> ) ; 
       
    let messagesElements = state.messages.map ( message => <Message message={message.message} /> );
    let newMessageText = state.newMessageText;

    let addNewMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));
    }

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