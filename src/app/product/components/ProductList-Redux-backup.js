
import React, {Component} from "react";
import PropTypes from "prop-types";

//BAD: import everywhere
import store from "../../Store";
import * as actions from "../Actions";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

        //All places
        this.unsubscribeFn = store.subscribe ( ()=> {
            console.log("Subs ", store.getState());
            this.forceUpdate();
        })

        let action = actions.initProducts([{
                            id: 1,
                            name: "phone 1"
                        },
                        {
                            id: 2,
                            name: "phone 2"
                        }
                    ])

        //calls reducer internally
        store.dispatch (action);

        store.dispatch(actions.loading(true));
    }


    componentWillUnmount() {
        this.unsubscribeFn();
        
    }
    
    render() {
        return (
            <div> 
            <h2>ProductList - {store.getState().products.length}</h2>
            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}