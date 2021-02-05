import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import classes from './ContactStyle.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Roma',
                address: 'Lugansk People Republic'
            }
        }

        axios.post('/orders.json', order)
            .then(response => this.setState({ loading: false }))
            .then(this.props.history.push('/'))
            .catch(error => this.setState({ loading: false }));

    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="Postal code" />
                <p><Button clicked={this.orderHandler} btnType='Success'>ORDER</Button></p>
            </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactStyle}>
                <h4>Enter your contacts:</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    };
};

export default connect(mapStateToProps)(withRouter(ContactData));