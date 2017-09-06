
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


//for SEO, Title bar update
import {Helmet} from "react-helmet";
 
export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.id = 2;
    }

    addItem() {
        this.id++;
        
        let item = {
            id: this.id,
            name: "Phone " + this.id,
            price : Math.random() * 10000,
            qty: 0
        }

        //dispatch
        this.props.actions.addItemToCart(item);
    }

    refresh() {
        //just example
        //calls render
        this.setState({
            ignore: false
        })
    }

    updateQuantity (id, qty) {
        this.props.actions.updateItemInCart(id, qty);
    }

    removeItem(id) {
        this.props.actions.removeItemFromCart(id);
    }
    
    componentDidMount() {
        
    }

    emptyCart() {
        this.props.actions.emptyCart();
    }
    
    render() {

        let items = this.props.items;
        console.log("Cart Render called");

        return (
            <div> 
            <h2>Cart</h2>

            <Helmet>
                        <title>Cart</title>
            </Helmet>

            <button onClick={() => this.addItem()}>
                New Item
            </button>


            <button onClick={() => this.emptyCart()}>
                Empty
            </button>


            <button onClick={() => this.refresh()}>
                Refresh
            </button>

            <CartList items={items}
                      onUpdate={ (id, qty) => this.updateQuantity(id, qty)}
                      onRemove={(id) => this.removeItem(id)}
             />

            <CartSummary items={items} />
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}