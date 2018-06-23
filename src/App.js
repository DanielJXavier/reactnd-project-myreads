import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  updateBook(book, shelf) {
    this.setState((state) => ({
      books: state.books.map((b) => {
        if (b.id === book.id) {
          book.shelf = shelf
        }
        return b
      })
    }))

    BooksAPI.update(book, shelf)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdate={this.updateBook.bind(this)}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
