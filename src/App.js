import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

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
        <ListBooks books={this.state.books} onUpdateBookShelf={this.updateBookShelf}/>
      </div>
    )
  }
}

export default BooksApp
