import React from "react"

import logo from '../logo.svg';
import '../App.css';



function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          ...My groceries @pp...
        </h3>
       
      </header>
  );
}

export default Header;