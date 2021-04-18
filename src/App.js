import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer.js';
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}


  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }
      return (
        
          
          <div className='app-wrapper'>
          
            <HeaderContainer />
            <Nav />
            
            <div className='app-wrapper-content'>
                      
              <Route path='/dialogs' 
                  render={ () => <DialogsContainer /> } />

              <Route path='/profile/:userId?' 
                  render={ () => <ProfileContainer /> } />

              <Route path='/users' 
                  render={ () => <UsersContainer /> } />

              <Route path='/login' 
                  render={ () => <LoginPage /> } />

              <Route path='/news' render={ () => <News /> } />
              <Route path='/music' render={ () => <Music /> } />
              <Route path='/settings' render={ () => <Settings /> } />
              
            </div>
            
          </div>
          
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
