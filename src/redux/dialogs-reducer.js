const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hu' },
        { id: 3, message: 'Ha' },
        { id: 4, message: 'He' }
        ],
    dialogs: [  
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Max' },
        { id: 4, name: 'Igor' }
        ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE: 
            let body = state.newMessageText;
                state.newMessageText = '';
                state.messages.push({ id: 5, message: body });
                return state;
        default:
            return state;
    }
 
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, body: body
    }
}

export default dialogsReducer;