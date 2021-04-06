import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: { 
        profilePage: {
            posts: [
                { id: 1, message: 'Hey, Hi!', likesCount: 12 },
                { id: 2, message: "It's my new post.", likesCount: 14 }
            ],
            newPostText: 'it-camasutra.com'
            
            },
        dialogsPage: {
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
        },
        sidebar: {}
    }, 
    _callSubscriber () {
        console.log('state was changed');
    },   

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;