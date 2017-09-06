import reducer from "./Reducer";
import * as ActionTypes from "./ActionTypes";

describe ("Testing reducer", ()=> {
    it("should true to be true", ()=> {
        expect(true).toBe(true);
    })

    it ("initial state", () => {
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


    it ("initial state", () => {
        expect(reducer({
                loading: false
        }, {
            type: ActionTypes.LOADING,
            loading: true,
            product: {}
        }))
        .toEqual ({
                loading: true,
                product: {}
        })

    })



    it ("initial state", () => {
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

    it ("initial state", () => {
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