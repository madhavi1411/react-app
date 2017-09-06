import {createStore, 
    applyMiddleware,
    combineReducers} from "redux";

import thunk from "redux-thunk";

import productReducer from "./product/reducers";
import cartReducer from "./cart/reducers";
import authReducer from "./auth/reducers";

let rootReducer = combineReducers({
    cartState: cartReducer,
    productState: productReducer,
    authState: authReducer,
})

let store = createStore(rootReducer,
                    applyMiddleware(thunk),
                    
                    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
                );
                    

export default store;