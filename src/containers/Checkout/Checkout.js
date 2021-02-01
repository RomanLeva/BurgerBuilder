import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    //constructor(props) {
    //    super(props);
        
    //}

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        console.log();
        this.setState({ ingredients: ingredients, totalPrice: price });
        console.log(ingredients);
    }

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = (event) => {
        event.preventDefault();
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />)} />
            </div>
        );
    }
}

export default Checkout;