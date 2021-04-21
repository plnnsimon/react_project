import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer.js';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
            <Switch>    
              <Route exact path='/' 
                    render={ () => <Redirect exact from='/' to='/profile' /> } />
     
              <Route path='/dialogs' 
                  render={ withSuspense (DialogsContainer)} />

              <Route path='/profile/:userId?' 
                  render={ withSuspense (ProfileContainer)} />

              <Route path='/users' 
                  render={ () => <UsersContainer /> } />

              <Route path='/login' 
                  render={ () => <LoginPage /> } />

              <Route path='/news' render={ () => <News /> } />
              <Route path='/music' render={ () => <Music /> } />
              <Route path='/settings' render={ () => <Settings /> } />
              <Route path='*' render={ () => <div>404 NOT FOUND</div> } />
              </Switch>   
            </div>
            
          </div>
          
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
       <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;