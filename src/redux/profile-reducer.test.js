import React from 'react'
import profileReducer, { addPostActionCreator } from "./profile-reducer";

describe('', () => {
    it('length posts should be incremented', () => {
        // 1. test data
        let action = addPostActionCreator('some text');
        let state = { 
            posts: [
                { id: 1, message: 'Hey, Hi!', likesCount: 12 },
                { id: 2, message: "It's my new post.", likesCount: 14 }
            ]
        
        };
        // 2. action
        let newState = profileReducer (state, action);
    
        // 3. expectation
        expect (newState.posts.length).toBe(3);
      });
      
})




