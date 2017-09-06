import * as ActionTypes from "./ActionTypes";

import * as productApi 
        from "./ProductApi";


export  function loading(status) {
    return {
        type: ActionTypes.LOADING,
        loading: status
    }
}

export  function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        products //es6 {products: products}
    }
}


export function getProducts() {
    //we don't have data yet, async call

    //return action as function
    //called by thunk middleware
    return function(dispatch) {
        console.log ("called by middleware");
        productApi.getProducts()
        .then ( products => {
            let action = initProducts(products);
            dispatch(action);
        })
    }

}





//returns a function, that shall be executed by thunk
export function getProduct(id) {
    return function(dispatch) {
        console.log("Called by thunk ", id,  dispatch);

        productApi.getProduct(id)
        .then ( (product) => {
            dispatch( {
                type: ActionTypes.EDIT_PRODUCT,
                product: product
            })
        })
    }
}
 

export function updateProduct(product) {
    return {
        type: ActionTypes.EDIT_PRODUCT,
        product: product
    }
}

export function saveProduct(product) {
    return function(dispatch) {
        productApi.saveProduct(product)
        .then ( () => {
            alert("product saved successfully")
        })
    }
}