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
                ]
        },
    },    
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state was changed');
    },

    addPost () {
    
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
    },

    subscribe (observer) {
            this._callSubscriber = observer;
    }
    
}

export default store;
window.store = store;