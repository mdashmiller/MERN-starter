import React from 'react'
import ReactDOM from 'react-dom'
import ItemsList from './index'

import { Provider } from 'react-redux'
import store from '../../store'

import { mount } from 'enzyme'
// import { findByTestAttr } from '../../Utils'

const state = {}

describe('ItemsList rendering', () => {

  it('should render 1 ItemsList component', () => {
    const component = mount(
      <Provider store={store(state)}>
        <ItemsList />
      </Provider>
    )

    expect(component.find(ItemsList).length).toBe(1)
  })
  
})
