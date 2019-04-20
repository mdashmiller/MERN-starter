import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { shallow } from 'enzyme'
import { findByTestAttr } from './Utils'

// create shallow component for testing
const setUp = (props = {}) => {
  return shallow(<App {...props} />)
}

describe('App rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 Provider component', () => {
    const wrapper = findByTestAttr(component, 'provider')
    expect(wrapper.length).toBe(1)
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
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
