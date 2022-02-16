import React from 'react';
import './navbar.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
  return (
    <Router>
      <header>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a to="/"> Math magicians </a></li>
            <li className="nav-item right">
              <Link to="/quote">Quote</Link>
            </li>
            <li className="nav-item right">
              <Link to="/calculator">Calculator</Link>
            </li>
            <li className="nav-item right">
              <Link to="/"> Home </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Router>
  );
}

export default Navbar;
