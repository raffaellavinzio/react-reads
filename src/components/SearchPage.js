import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";
import * as BooksAPI from "../BooksAPI";
import debounce from "lodash/debounce";

class SearchPage extends React.Component {
  state = {
    query: "",
    searchResults: [],
  };

  getSearchResults = async (query) => {
    try {
      query = query
        .split(" ")
        .filter((s) => s)
        .join(" ");
      if (query.length > 0) {
        let searchResults = await BooksAPI.search(query, 20);
        searchResults =
          searchResults === undefined || searchResults.error === "empty query"
            ? []
            : searchResults;

        searchResults = searchResults.map(
          (result) =>
            this.props.books.find((book) => book.id === result.id) || {
              ...result,
              shelf: "none",
            }
        );

        this.setState((prevState) => ({
          ...prevState,
          searchResults,
        }));
      }
    } catch (err) {
      throw err;
    }
  };

  // debouncing blog ref: https://medium.com/@anuhosad/debouncing-events-with-react-b8c405c33273
  handleSearch = (query) => {
    this.setState((prevState) => ({
      ...prevState,
      query,
    }));
    if (!this.debouncedFn) {
      this.debouncedFn = debounce(() => {
        this.getSearchResults(this.state.query);
      }, 300);
    }
    this.debouncedFn();
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <SearchInput
            onChangeQuery={this.handleSearch}
            query={this.state.query}
          />
        </div>
        <SearchResults
          searchResults={this.state.searchResults}
          onBookShelfUpdate={this.props.onBookShelfUpdate}
        />
      </div>
    );
  }
}

export default SearchPage;
