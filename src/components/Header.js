import React from 'react';
import { Link } from 'react-router-dom'; 
 
import logoImage from '../images/Designer2.png';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoImage} alt="Logo" className="logo" />
      </Link>
      <h1><Link to="/">Trello Clone</Link></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
      </nav>
    </header>
  );
}

export default Header;
