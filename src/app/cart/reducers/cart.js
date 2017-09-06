import * as ActionTypes 
    from "../ActionTypes";

//state is items
const INITIAL_STATE = []
 
//Reducer is a pure function
//No internal state
//Do NOT modify input parameters
//Immutable 
export default
 function cartReducer(state=INITIAL_STATE,
                     action) {

    console.log("Cart reducer", state, action);

    switch (action.type) {
         case ActionTypes.ADD_ITEM: {
            let item = state.find( item => item.id == action.item.id);
            if (!item) { //item not found, add here
                return [...state, action.item]
            }

            return state.map ( item => {
                if (item.id != action.item.id) 
                    return item;
 
                return Object.assign({}, item, {qty: item.qty + action.item.qty});
            })

         }

         case ActionTypes.REMOVE_ITEM: {
            return state.filter(item => item.id != action.id)
         }

         case ActionTypes.UPDATE_ITEM: {
            return state.map ( item => {
                if (item.id != action.id) 
                    return item;
 
                return Object.assign({}, item, {qty: action.qty});
            })
         }

         case ActionTypes.EMPTY_CART : {
            return []
         }

         default:
            return state;
    }

}