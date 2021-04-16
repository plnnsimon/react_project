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
    
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        
        case SEND_MESSAGE: {
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };

        }
        default:
            return state;
    }
 
}

export const sendMessageCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE, newMessageText
    }
}


export default dialogsReducer;