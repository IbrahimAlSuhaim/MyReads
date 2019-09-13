import React, { Component } from 'react'
import './App.css'
//import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {
    books: []
  }
  render() {
    return (
      <div className="app">
        <ListBooks />
      </div>
    )
  }
}

export default BooksApp
