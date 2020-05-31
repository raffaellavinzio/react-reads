import React from "react";

class ShelfSelector extends React.Component {
  handleShelfChange = (event) => {
    const { book, onBookShelfUpdate } = this.props;
    onBookShelfUpdate(book, event.target.value);
  };

  render() {
    const { book } = this.props;

    return (
      <div className='book-shelf-changer'>
        <select value={book.shelf} onChange={this.handleShelfChange}>
          <option value='move' disabled>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

export default ShelfSelector;
