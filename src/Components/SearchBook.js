import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import * as BooksAPI from "../Utils/BooksAPI";
import Books from "./Books";
import PropTypes from 'prop-types'

class SearchBook extends Component {
  static propTypes = {
    optionToRead: PropTypes.func.isRequired,
  }
  state = { books: [] };

  updateQuery(query) {
    const maxResults = 20;

    if (query.length < 3) {
      return;
    }

    console.log(query);
    BooksAPI.search(query, maxResults).then((books) => {
      books.length > 0 &&
        books.forEach((book) => {
          BooksAPI.get(book.id).then((returnedBook) => {
            book.shelf = returnedBook.shelf;
            this.setState({ books });
          });
        });
    });
  }

  render() {
    const { books } = this.state;
    const { optionToRead} = this.props

    return (
      <div>
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link className='close-search' to='/'>
              Close
            </Link>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title or author'
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className='search-books-results'>
            {/* {books.length > 0 &&
              books.map((book) => ( */}
                <Books
                  header='Search Result'
                  status={books}
                  optionToRead={optionToRead}
                />
              {/* ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBook;
