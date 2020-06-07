import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div>
      <Link to='/searchBook' className='open-search'>
        <button>Add a book</button>
      </Link>
    </div>
  );
}
