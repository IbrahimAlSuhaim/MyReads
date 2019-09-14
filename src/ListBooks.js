import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  booksOnShelf(shelf) {
    const booksOnShelf = this.props.books.filter((book) => (
      book.shelf===shelf
    ))
    return booksOnShelf
  }

  render() {
    const { onUpdateBookShelf } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelf='Currently Reading' books={this.booksOnShelf('currentlyReading')} onUpdateBookShelf={(book, shelf) => {onUpdateBookShelf(book, shelf)}} />
            <Shelf shelf='Want to Read' books={this.booksOnShelf('wantToRead')} onUpdateBookShelf={(book, shelf) => {onUpdateBookShelf(book, shelf)}} />
            <Shelf shelf='Read' books={this.booksOnShelf('read')} onUpdateBookShelf={(book, shelf) => {onUpdateBookShelf(book, shelf)}} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
