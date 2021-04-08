import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={classes.links} activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/users' className={classes.links} activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={classes.links} activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={classes.links} activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={classes.links} activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={classes.links} activeClassName={classes.active}>Settings</NavLink>
      </div>
  </nav>
  )
}


export default Nav