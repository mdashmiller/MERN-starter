import React from 'react'
import ReactDOM from 'react-dom'
import ItemsList from './index'

import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../Utils'

// const state = {}
// const expectedProps = {
//   getItems: () => {},
//   item: {testKey: 'test value'}
// }

// render component for testing
const setUp = (props = {}) => {
  return shallow(<ItemsList {...props} />)
}

describe('ItemsList rendering', () => {

  let component
  beforeAll(() => {
    component = setUp()
  })

  it('should render 1 list', () => {
    const wrapper = findByTestAttr(component, 'list')
    expect(wrapper.length).toBe(1)
  })
  
})

// describe('checking PropTypes', () => {

//   it('should not throw a warning', () => {
//     const propsErr = checkProps(ItemsList, expectedProps)

//     expect(propsErr).toBeUndefined()
//   })

// })
