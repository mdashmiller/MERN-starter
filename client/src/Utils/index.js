import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../store/reducers'
import { middlewares } from '../store'

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`)

export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)

export const testStore = intialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, intialState)
}
