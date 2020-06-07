import React from "react";
import * as BooksAPI from "../Utils/BooksAPI";
import "../App.css";
import { Route } from "react-router-dom";
import Header from "./Header";
import Books from "./Books";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    // reading: [],
    // wantToRead: [],
    // read: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState({ allBooks });
      // this.setState({
      //   reading: allBooks.filter((book) => book.shelf === "currentlyReading"),
      // });

      // this.setState({
      //   read: allBooks.filter((book) => book.shelf === "read"),
      // });

      // this.setState({
      //   wantToRead: allBooks.filter((book) => book.shelf === "wantToRead"),
      // });
    });
  }

  handleChange = (shelf, book, event) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((previousState) => ({
        allBooks: previousState.allBooks
          .filter((b) => b.id !== book.id)
          .concat([book]),
      }));
    });

    // const books = this.state.allBooks;
    // this.setState({
    //   reading: books.filter((book) => book.shelf === "currentlyReading"),
    // });

    // this.setState({
    //   read: books.filter((book) => book.shelf === "read"),
    // });

    // this.setState({
    //   wantToRead: books.filter((book) => book.shelf === "wantToRead"),
    // });
  };
  //changeBook={(book, shelf) => this.changeBook(book, shelf)}
  render() {
    return (
      <div className='app'>
        <Route
          path='/searchbook'
          render={({ history }) => (
            <SearchBook
              header='currently reading'
              status={this.state.reading}
              optionToRead={this.handleChange}
            />
          )}
        />
        <Header />
        <div className='list-books-content'>
          <div className='list-books-conten' />
          <Books
            header='currently reading'
            status={this.state.allBooks.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            optionToRead={(shelf, book, event) =>
              this.handleChange(shelf, book, event)
            }
            // optionToRead={this.handleChange}
          />

          <Books
            header='want to read'
            status={this.state.allBooks.filter(
              (book) => book.shelf === "wantToRead"
            )}
            optionToRead={(shelf, book, event) =>
              this.handleChange(shelf, book, event)
            }
          />
          <Books
            header='read'
            status={this.state.allBooks.filter(
              (book) => book.shelf === "read"
            )}
            optionToRead={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default BooksApp;
