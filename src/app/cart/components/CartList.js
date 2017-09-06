
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

//PureComponent has shouldComponentUpdate code
//that compares props vs next props
//compares state with next states
//return true or false
export default class CartList extends PureComponent {
    constructor(props) {
        console.log("CartList created");
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("Cart list render called")
        //es6 deconstruct
        let {items} = this.props;
        //== let items = this.props.items;

        console.log ("Items is ", items);

        let rows = items.map (item => (
            <CartItem key={item.id} 
                      item={item}
                      
                      onUpdate={this.props.onUpdate}
                      onRemove={this.props.onRemove}
                      
                       />
        ))

        return (
            <div> 
            <h2>Cart List</h2>


            <table>
                <tbody>
                    <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Qty</th>
                     <th>Update</th>
                    </tr>

                    {rows}
                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}