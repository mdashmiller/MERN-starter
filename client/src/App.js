import React, { Component } from 'react'
import ItemsList from './components/ItemsList'
// import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div data-test="app">
        <ItemsList data-test="items-list" />
      </div>
    )
  }
}

export default App
