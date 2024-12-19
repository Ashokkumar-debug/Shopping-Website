import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="header__bar"> Online best shoping platform</div>
      <nav className="nav__container">
        <Link to="/" className="logo">
          Classy Fashion <br />
          
        </Link>
        <ul className="nav_links">
          <li className="link">
            <Link to="/">HOME</Link>
          </li>
          <li className="link">
            <Link to="/product">PRODUCT</Link>
          </li>
          <li className="link">
          <Link to="/about">ABOUT</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
