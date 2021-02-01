import React from 'react';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <li><a href={props.link}>BurgerBuilder</a></li>
        <li><a href={props.link}>Checkout</a></li>
    </ul>
);

export default navigationItems;