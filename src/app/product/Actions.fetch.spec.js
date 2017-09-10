//mock restful api
import fetchMock from 'fetch-mock';

//jest.useFakeTimers();

import * as ActionTypes from "./ActionTypes";

jest.mock("config", () => {
    return {
        apiEndPoint: "http://example.com"
    }
})

//import nock from 'nock'
 
import {
    getProduct,
    getProducts,
    saveProduct
} from "./Actions";

describe("testing get products", () => {

    afterEach(() => {
       // nock.cleanAll()
        fetchMock.restore();
      })

 
    

      
    it("should get products",   (done) => {

        // nock('http://example.com/')
        // .get('/api/products')
        // .reply(200, { body: [{id: 1},{id: 2}] })

        fetchMock.get('http://example.com/api/products', [{id: 1},{id: 2}]);

        
        let actionFn = getProducts();
        //mock for dispatch
        let dispatch = jest.fn();
        
        // productApi.getProducts.mockImplementation ( ()=> {
        //     console.log("get products mock called ");
        //     return   Promise.resolve([{id: 1},{id: 2}])
        // });

        actionFn(dispatch);

        //expect(productApi.getProducts).toHaveBeenCalled();
        //expect(productApi.getProducts).toHaveBeenCalledTimes(1);
        
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