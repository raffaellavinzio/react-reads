import React from "react";
import ShelfSelector from "./ShelfSelector";

const Book = (props) => (
  <div className='book'>
    <div className='book-top'>
      <div
        className='book-cover'
        style={{
          width: 128,
          height: 192,
          backgroundImage:
            props.book.imageLinks && `url(${props.book.imageLinks.thumbnail})`,
        }}
      />
      <ShelfSelector
        book={props.book}
        onBookShelfUpdate={props.onBookShelfUpdate}
      />
    </div>
    <div className='book-title'>{props.book.title}</div>
    {props.book.authors && (
      <div className='book-authors'>{props.book.authors}</div>
    )}
  </div>
);

export default Book;
