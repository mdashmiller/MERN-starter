import React, { Component } from 'react'
import ItemsList from './components/ItemsList'
// import logo from './logo.svg'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider data-test="provider" store={store}>
        <div data-test="app">
          <ItemsList data-test="items-list" />
        </div>
      </Provider>
    )
  }
}

export default App
