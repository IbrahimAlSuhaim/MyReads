import React, { Component } from 'react'

class WantToRead extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
