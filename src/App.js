import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  fetchBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState((prevState) => ({
      ...prevState,
      books,
    }));
  };

  componentDidMount = () => {
    this.fetchBooks();
  };

  handleBookShelfUpdate = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    this.fetchBooks();
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/search'
          render={() => (
            <SearchPage
              backHome={this.backHome}
              books={this.state.books}
              onBookShelfUpdate={this.handleBookShelfUpdate}
            />
          )}
        />

        <Route
          exact
          path='/'
          render={() => (
            <div>
              <BooksPage
                books={this.state.books}
                onBookShelfUpdate={this.handleBookShelfUpdate}
              />

              <Link className='open-search' to='/search'>
                Add a book
              </Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
