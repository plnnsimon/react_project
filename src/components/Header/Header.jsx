import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return <header className={classes.header}>
            <img src="https://images.coollogo.com/images/prism-large-green.png" />
            <div className={classes.loginBlock}>
                { props.isAuth ? 
                    <div>{props.login} - <button onClick={props.logout} className={classes.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>

        </header>
}   


export default Header;