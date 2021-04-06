import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';




const DialogsContainer = (props) => {   

    let state = props.store.getState().dialogsPage;

    let addNewMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    }

    return (
        <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={addNewMessage} 
                dialogsPage={state} />
    )

}

export default DialogsContainer;