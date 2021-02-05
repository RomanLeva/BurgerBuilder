import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled} btnType='Danger' >Cancel</Button>
            <Button clicked={props.checkoutContinued} btnType='Success' >Continue</Button>
            <p>Price: {props.price} $</p>
        </div>
        );
}

export default checkoutSummary;