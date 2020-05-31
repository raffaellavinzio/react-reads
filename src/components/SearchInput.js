import React from "react";

class SearchInput extends React.Component {
  handleQuery = (event) => {
    const query = event.target.value;
    this.props.onChangeQuery(query);
  };

  render() {
    return (
      <div className='search-books-input-wrapper'>
        <input
          type='text'
          placeholder='Search by title or author'
          value={this.props.query}
          onChange={this.handleQuery}
        />
      </div>
    );
  }
}

export default SearchInput;
