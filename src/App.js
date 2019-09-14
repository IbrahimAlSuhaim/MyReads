import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  updateBookShelf = (book, shelf) => {
    book.shelf=shelf

    BooksAPI.update(book, shelf)
      .then((book) => {
          this.setState((currentState) => ({
            books: currentState.books.filter((b) => {
                      return b.id !== book.id
                    }).concat(book)
          }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdateBookShelf={this.updateBookShelf}/>
        )} />
        <Route exact path="/search" render={() => (
          <SearchBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
