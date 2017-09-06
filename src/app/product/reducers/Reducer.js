import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    loading: false,

    products: [],

    product: {
        name: '',
        year: ''
    }
}

export default
     function Reducer(state = INITIAL_STATE, action) {
        console.log("product reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.LOADING: {
                return Object.assign({}, state, {loading: action.loading})
            }

            case ActionTypes.INIT_PRODUCTS: {
                return Object.assign({}, state, {products: action.products})
            }


            case ActionTypes.EDIT_PRODUCT: {
                return Object.assign({}, state, {product: action.product})
            }

            default:
                return state;
        }

}