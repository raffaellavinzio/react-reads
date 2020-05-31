import React from "react";
import BookShelf from "./BookShelf";

const BooksPage = (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <BookShelf
        booksOnShelf={props.books.filter(
          (book) => book.shelf === "currentlyReading"
        )}
        shelfTitle='Currently Reading'
        onBookShelfUpdate={props.onBookShelfUpdate}
      />
      <BookShelf
        booksOnShelf={props.books.filter((book) => book.shelf === "wantToRead")}
        shelfTitle='Want to Read'
        onBookShelfUpdate={props.onBookShelfUpdate}
      />
      <BookShelf
        booksOnShelf={props.books.filter((book) => book.shelf === "read")}
        shelfTitle='Read'
        onBookShelfUpdate={props.onBookShelfUpdate}
      />
    </div>
  </div>
);

export default BooksPage;
