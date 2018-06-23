import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book, onUpdate } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => onUpdate(book, e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" selected={book.shelf === 'currentlyReading'}>Currently Reading</option>
                <option value="wantToRead" selected={book.shelf === 'wantToRead'}>Want to Read</option>
                <option value="read" selected={book.shelf === 'read'}>Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors.map((author) => (
            <div key={author} className="book-authors">{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book
