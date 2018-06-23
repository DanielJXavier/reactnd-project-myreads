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
    book.shelf = shelf
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat([book])
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
          <SearchBooks onUpdate={this.updateBook.bind(this)}/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdate={this.updateBook.bind(this)}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
