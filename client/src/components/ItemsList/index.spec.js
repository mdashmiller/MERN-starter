import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ItemsList from './index'
import { store } from '../../store'

import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../Utils'

// const state = {}
// const expectedProps = {
//   getItems: () => {},
//   item: {testKey: 'test value'}
// }

// render component for testing
// const setUp = (props = {}) => {
//   return shallow(
//     <Provider store={store}>
//       <ItemsList {...props} />
//     </Provider>
//   )
// }

// describe('ItemsList rendering', () => {

//   describe('with items', () => {

//     // fake props for test rendering
//     const props = {
//       getItems: () => {},
//       items: [
//         {
//           userId: 1,
//           id: 1,
//           title: 'test title 1',
//           body: 'test body 1'
//         },
//         {
//           userId: 2,
//           id: 2,
//           title: 'test title 2',
//           body: 'test body 2'
//         }
//       ]
//     }

//     let component
//     beforeAll(() => {
//       component = setUp(props)
//     })

//     it('should render 1 list', () => {
//       const wrapper = findByTestAttr(component, 'list')
//       expect(wrapper.length).toBe(1)
//     })

//   })
  
// })

// describe('checking PropTypes', () => {

//   it('should not throw a warning', () => {
//     const propsErr = checkProps(ItemsList, expectedProps)

//     expect(propsErr).toBeUndefined()
//   })

// })
