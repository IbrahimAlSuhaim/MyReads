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
  //if a book shelf is updated then the state of books is updated
  updateBookShelf = (book, shelf) => {
    book.shelf=shelf

    BooksAPI.update(book, shelf)
      .then((book) => {
          BooksAPI.getAll()
            .then((books) => {
              this.setState(() => ({
                books
              }))
            })
      })
  }
  // isBookInList searches for the book in books list(in the shelves) return shelf if exist or none otherwise
  isBookInList = (book2) => {
    const inList = this.state.books.filter((book1) => {
      return book1.id === book2.id
    })
    if(inList.length===0)
      return "none"

    return inList[0].shelf
  }
  searchBook = (query) => {
    BooksAPI.search(query)
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
          books={this.state.books}
          onUpdateBookShelf={this.updateBookShelf} />
        )} />
        <Route exact path="/search" render={() => (
          <SearchBook
            onUpdateBookShelf={this.updateBookShelf}
            search={this.searchBook}
            books={this.state.books}
            inList={this.isBookInList} />
        )} />
      </div>
    )
  }
}

export default BooksApp
