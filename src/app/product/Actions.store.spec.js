// reference: http://redux.js.org/docs/recipes/WritingTests.html


jest.mock("config", () => {
    return {
        apiEndPoint: "http://example.com"
    }
})

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './Actions'
import * as ActionTypes from './ActionTypes'

import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  

  afterEach(() => {
     fetchMock.restore();
   })


  it('getproducts with store mock', () => {
    
    fetchMock.get('http://example.com/api/products', [{id: 1},{id: 2}]);
    
    const expectedActions = [
      { type: ActionTypes.LOADING, loading: true },
      { type: ActionTypes.INIT_PRODUCTS, products: [{id: 1},{id: 2}] },
      { type: ActionTypes.LOADING, loading: false }
    ]
    
    const store = mockStore({ products: [] })

    return store.dispatch(actions.getProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})