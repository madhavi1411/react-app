import reducer from "./Reducer";
import * as ActionTypes from "../ActionTypes";

describe ("Testing reducer", ()=> {
    

    it ("should be initial state", () => {
        expect(reducer(undefined, {}))
        .toEqual ({
            
                loading: false,
            
                products: [],
            
                product: {
                    name: '',
                    year: ''
                }
            
        })

    })


    it ("should change loading state", () => {
        expect(reducer({
                loading: false,
                product: {}
        }, {
            type: ActionTypes.LOADING,
            loading: true
        }))
        .toEqual ({
                loading: true,
                product: {}
        })

    })



    it ("should have one item in the products", () => {
        expect(reducer({
                products: []
        }, {
            type: ActionTypes.INIT_PRODUCTS,
             
            products: [ {id: 1}]
        }))
        .toEqual ({
            products: [ {id: 1}]
        })

    })

    it ("should have updated data in product", () => {
        expect(reducer({
                product: {}
        }, {
            type: ActionTypes.EDIT_PRODUCT,
             
            product: {id: 1}
        }))
        .toEqual ({
            product:  {id: 1}
        })

    })

})