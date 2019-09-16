import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem'

class SearchBook extends Component {
  state = {
    query: '',
    results: []
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()

    }))
    query !== '' &&
      // this.props.search(query)
      BooksAPI.search(query)
          .then((results) => {
            this.setState(() => ({
              results
            }))
          })
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  render() {
    const { query } = this.state
    const { onUpdateBookShelf, inList } = this.props
    const showingResult = query ==='' ?
      []
      : this.state.results
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              Array.isArray(showingResult) &&
              showingResult.map((book) => (
              <BookItem key={book.id} book={book} onUpdateBookShelf={onUpdateBookShelf} inList={inList} />
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
