import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

import { mount } from 'enzyme'
import { findByTestAttr } from './Utils'

// render component for testing
const setUp = (props = {}) => {
  return mount(
    <Provider store={store}>
      <App {...props} />
    </Provider>
  )
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

  it('should render a Connect(items-list) component and an items-list component', () => {
    const wrapper = findByTestAttr(component, 'items-list')
    expect(wrapper.length).toBe(2)
  })

})

describe('App mounting and unmounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
