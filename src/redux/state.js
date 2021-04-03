  
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hey, Hi!', likesCount: 12 },
            { id: 2, message: "It's my new post.", likesCount: 14 }
          ]
        
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
    }
    
}

export default state;