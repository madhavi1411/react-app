
import * as ActionTypes from "./ActionTypes";

jest.mock("config", () => {
    return {
        apiEndPoint: "http://example.com"
    }
})
 

jest.mock("./ProductApi");

var productApi = require("./ProductApi");


import {
    getProduct,
    getProducts,
    saveProduct
} from "./Actions";

describe("testing get products", () => {

    


    it("should get products",   (done) => {
        
            
            productApi.getProducts.mockImplementation ( ()=> {
                console.log("get products mock called ");
                return   Promise.resolve([{id: 1},{id: 2}])
            });
    
            
            let actionFn = getProducts();
            //mock for dispatch
            let dispatch = jest.fn();
            
            actionFn(dispatch);
    
            expect(productApi.getProducts).toHaveBeenCalled();
            expect(productApi.getProducts).toHaveBeenCalledTimes(1);
            
            //jest.runAllTimers();
            
                
            //FIXME:         
            setTimeout( ()=> {
                console.log("cheecking mock called");
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(3);
                expect(dispatch.mock.calls[0]).toEqual([{
                    type: ActionTypes.LOADING,
                    loading: true
                }])

                expect(dispatch.mock.calls[1]).toEqual([{
                    type: ActionTypes.INIT_PRODUCTS,
                    products: [{id: 1}, {id: 2}]
                }])

                expect(dispatch.mock.calls[2]).toEqual([{
                    type: ActionTypes.LOADING,
                    loading: false
                }])
                done();
            }, 1000);
    
            /*expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith({
                type: ActionTypes.INIT_PRODUCTS,
                products: [[{id: 1}, 
                            {id: 2}]]
            });*/
        
    })
    

       
})