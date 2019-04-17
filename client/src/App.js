import React, { Component } from 'react'
// import logo from './logo.svg'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider data-test="provider" store={store}>
        <div data-test="app">
          <h1>Make Me Cool</h1>
        </div>
      </Provider>
    )
  }
}

export default App
