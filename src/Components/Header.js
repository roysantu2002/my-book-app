import React from "react";
import Search from './Search'

function Header() {
  return (
    <div className='list-books-title'>
      <h1>MyReads</h1>
      <Search/>
    </div>
  );
}

export default Header;
