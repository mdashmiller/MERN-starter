import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// const initState = {}

export const middlewares = [thunk]

// const store = (state = initState) =>
//   createStore(rootReducer, state, applyMiddleware(...middleware))

// export default store

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(rootReducer)
