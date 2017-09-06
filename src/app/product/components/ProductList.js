
import React, {Component} from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
//for SEO, Title bar update
import {Helmet} from "react-helmet";


import ProductWidget from "../containers/ProductWidget";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    
    
    componentDidMount() {
        this.props.actions.getProducts();
    }
     
    render() {
        
                let list= this.props
                     .products.map ( product => (
                         <ProductWidget key={product.id} product={product}>
                            {product.name}
                         </ProductWidget>
                     ))
        
                return (
                     
                    <div>
                         <Helmet>
                            <title>Products List</title>
                         </Helmet>

                        <h2>Cart Size [{this.props.cartSize}] </h2>
                        <div className="flex two">
                            {list}
                        </div>
                    </div>
        
                )
            }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}