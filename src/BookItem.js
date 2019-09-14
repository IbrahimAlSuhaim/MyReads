import React, { Component } from 'react'

class BookItem extends Component {
  hundleSelect = (e) => {
    if(this.props.onUpdateBookShelf) {
      this.props.onUpdateBookShelf(this.props.book, e.target.value)
    }
  }
  render() {
    const { book } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url('+(book.imageLinks.thumbnail)+')' }}></div>
            <div className="book-shelf-changer">
              <select
                onChange={this.hundleSelect}
                defaultValue={book.shelf}>
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
            {book.authors.map((author) =>
              <div key={author}>{author}<br /></div>
            )}
          </div>
        </div>
      </li>
    )
  }
}

export default BookItem