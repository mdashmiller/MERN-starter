import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import { findByTestAttr, testStore } from '../Utils'

const initialState = {
  items: []
}

// render component for testing
const setUp = (initialState = {}) => {
  const store = testStore(initialState)
  return shallow(<App store={store} /> )
}

describe('App rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 app div', () => {
    const wrapper = findByTestAttr(component, 'app')
    expect(wrapper.length).toBe(1)
  })

  it('should render 1 items-list component', () => {
    const wrapper = findByTestAttr(component, 'items-list')
    expect(wrapper.length).toBe(1)
  })

})

describe('App mounting and unmounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={testStore(initialState)}>
        <App />
      </Provider>
      , div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

})
