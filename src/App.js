import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/Users Container';

const App = (props) => {
  return (
    <BrowserRouter>
      
      <div className='app-wrapper'>
       
        <Header />
        <Nav />
        
        <div className='app-wrapper-content'>
                   
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />

          <Route path='/profile' render={ () => <Profile /> } />

          <Route path='/users' render={ () => <UsersContainer /> } />

          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/settings' render={ () => <Settings /> } />
          
        </div>
        
      </div>
      </BrowserRouter>  
  );
}

export default App;
