import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './Components/App';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<BrowserRouter>
ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

