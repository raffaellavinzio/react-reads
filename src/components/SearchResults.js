import React from "react";
import BookList from "./BookList";

const SearchResults = (props) => (
  <div className='search-books-results'>
    <BookList
      books={props.searchResults}
      onBookShelfUpdate={props.onBookShelfUpdate}
    />
  </div>
);

export default SearchResults;
