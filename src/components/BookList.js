import React from "react";
import Book from "./Book";

const BookList = (props) => (
  <ol className='books-grid'>
    {props.books.map((book) => (
      <li key={book.id}>
        <Book book={book} onBookShelfUpdate={props.onBookShelfUpdate} />
      </li>
    ))}
  </ol>
);

export default BookList;
