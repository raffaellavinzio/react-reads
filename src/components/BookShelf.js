import React from "react";
import BookList from "./BookList";

const BookShelf = (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.shelfTitle}</h2>
    <div className='bookshelf-books'>
      <BookList
        books={props.booksOnShelf}
        onBookShelfUpdate={props.onBookShelfUpdate}
      />
    </div>
  </div>
);

export default BookShelf;
