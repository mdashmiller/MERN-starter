import React from 'react'
import ReactDOM from 'react-dom'
import ItemsList from './index'
import { shallow } from 'enzyme'
import { findByTestAttr, testStore, checkProps } from '../../../Utils'

const initialState = {
  items: [
    {
      userId: 1,
      id: 1,
      title: 'test title 1',
      body: 'test text 1'
    },
    {
      userId: 2,
      id: 2,
      title: 'test title 2',
      body: 'test text 2'
    },
    {
      userId: 3,
      id: 3,
      title: 'test title 3',
      body: 'test text 3'
    }
  ]
}

const setUp = (initialState={}) => {
  const store = testStore(initialState)
  return shallow(<ItemsList store={store} />).childAt(0).dive()
}

describe('ItemsList component', () => {

  describe('rendering with items', () => {

    let component
    beforeEach(() => {
      component = setUp(initialState)
    })

    it('should render 1 list', () => {
      const wrapper = findByTestAttr(component, 'list')
      
      expect(wrapper.length).toBe(1)
    })

  })

  describe('rendering with NO items', () => {

    let component
    beforeEach(() => {
      component = setUp()
    })

    it('should NOT render a list', () => {
      const wrapper = findByTestAttr(component, 'list')

      expect(wrapper.length).toBe(0)
    })

  })

  describe('checking PropTypes', () => {

    it('should not throw a warning', () => {
      const expectedProps = {
        getItems: () => {},
        ...initialState
      }
      const propsErr = checkProps(ItemsList, expectedProps)

      expect(propsErr).toBeUndefined()
    })

  })

})

describe('ItemsList mounting and unmounting', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ItemsList store={testStore(initialState)} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
