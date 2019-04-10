import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <header className="header">
      <img src={require('../../assets/me.JPG')} alt="Me sitting in my car" className="profile-img" />

      <nav className="navbar d-f fxd-c">
        <Link to="/home">
          About Me
          <i className="fas fa-user-astronaut"></i>
        </Link>

        <Link to="/portfolio">
          Portfolio
          <i className="fas fa-award"></i>
        </Link>

        <a href="https://growyourcode.webflow.io/">
          Blog
          <i className="fas fa-pencil-alt"></i>
        </a>

        <a href="mailto:tychambers3@gmail.com">
          Say Hello
          <i className="fas fa-heart"></i>
        </a>
      </nav>

      <ul className="social-links">
      </ul>
      <p className="copy">&copy; 2019 Tyrel Chambers</p>
    </header>
  );
}

export default Header;