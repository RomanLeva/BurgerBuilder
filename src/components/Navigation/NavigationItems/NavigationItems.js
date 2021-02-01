import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li>
            <NavLink
                to='/' exact
                className={classes.NavigationItems}
                activeClassName={classes.active}>
                Burger Builder
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/orders'
                exact
                className={classes.NavigationItems}
                activeClassName={classes.active}>
                Orders
            </NavLink>
        </li>
    </ul>
);

export default navigationItems;