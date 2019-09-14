import React, { Component } from 'react'
import BookItem from './BookItem'

class Shelf extends Component {
  render() {
    const { books, shelf , onUpdateBookShelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <BookItem key={book.id} book={book} onUpdateBookShelf={(book, shelf) => {onUpdateBookShelf(book, shelf)}} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
