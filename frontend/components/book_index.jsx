import React from 'react';
import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBooks();
  }
  render () {
    return (
      <div>
        <h2>Browse all books</h2>
        <ul>
          {
            this.props.books.map(book => (
              <BookIndexItem
                key={book.id}
                book={book} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default BookIndex;
