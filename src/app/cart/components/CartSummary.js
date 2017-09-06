
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount : 0
        }
    }
    
    componentDidMount() {
        this.calculateAmount(this.props);
    }

    calculateAmount(props) {
        let amount = 0;
        for (let item of props.items) {
            //fixme: qty
            amount += item.price * item.qty;
        }

        console.log("Amount ", amount);
        //set new value
        //call render
        this.setState( {
            amount: amount
        })
    }

    //propery life cycle
    //update cycle
    //called for every parent render method
    componentWillReceiveProps(nextProps) {
        console.log("ComponentWillReceiveProps");
        console.log("Current items count" 
                    , this.props.items.length);

        console.log("next list count ",
                     nextProps.items.length);

        this.calculateAmount(nextProps);
    }

    //control whether react can call render method 
    //or not
    shouldComponentUpdate(nextProps, nextState) {
        console.log("summary shouldComponentUpdate");

        //shallow compare
        //compare references
        if (this.props.items != nextProps.items ||
            this.state.amount != nextState.amount)
            return true; //calls render method

        return false;

    }

    //called just before render method
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update ");
        console.log(this.props.items.length, 
                    nextProps.items.length);

       // this.calculateAmount(nextProps);
    }

    
    render() {
        console.log("Cart Summary Render");

        return (
            <div> 
            <h2>Cart Summary - [{this.props.items.length}]</h2>
             
            <h2> Amount : {this.state.amount} </h2>
            
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}