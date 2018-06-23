import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    books: []
  }

  updateQuery = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({ books: books && books.length ? books : [] })
    })
  }

  render() {
    const { books } = this.state
    const { onUpdate } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" autoFocus placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value) }/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <Book key={book.id} book={book} onUpdate={onUpdate}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
