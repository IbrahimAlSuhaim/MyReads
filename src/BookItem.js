import React, { Component } from 'react'

class BookItem extends Component {
  // handle selection by the dropdown book shelf changer
  hundleSelect = (e) => {
    if(this.props.onUpdateBookShelf) {
      this.props.onUpdateBookShelf(this.props.book, e.target.value)
    }
  }
  // inAShelf is basically checks if the book is in a shelf or not. if yes, shelf value is returned otherwise "none"
  inAShelf = (book) => {
    if(this.props.inList) {
      return this.props.inList(book)
    }
    else if (book.shelf) {
      return book.shelf
    }
    else {
      return "none"
    }
  }
  render() {
    const { book } = this.props
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192,
                                                backgroundImage:
                                                  'url('+(book.imageLinks &&
                                                    book.imageLinks.thumbnail)+')' }}></div>
            <div className="book-shelf-changer">
              <select
                onChange={this.hundleSelect}
                defaultValue={
                  this.inAShelf(book)
                  }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors &&
              book.authors.map((author) =>
              <div key={author}>{author}<br /></div>
            )}
          </div>
        </div>
      </li>
    )
  }
}

export default BookItem
