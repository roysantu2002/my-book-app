import React from 'react'
import PropTypes from 'prop-types'

const DEFAULT_BOOK_COVER = 'http://lgimages.s3.amazonaws.com/gc-md.gif';


const Books = props => {

        const {header, status, optionToRead} = props;
       
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{header}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {status.map((book) => (
    
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : DEFAULT_BOOK_COVER})`}}></div>
                        <div className="book-shelf-changer">
                          <select value={book.shelf || 'none'} onChange={(event) => optionToRead(event.target.value, book, event)}>
                            <option value="move" >Move to...</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
                  ))}
                </ol>
              </div>
            </div>
    );
    };
  Books.propTypes = {
      header: PropTypes.string.isRequired,
      status: PropTypes.array.isRequired,
      // optionToRead: PropTypes.func.isRequired,
    };
export default Books