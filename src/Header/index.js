import React, { Component } from 'react';
import './Header.scss';
class Header extends Component {
  render() {
    return (<header>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="nav__list--item">
            <a href="https://twitter.com/clara_cloro" target="_blank" rel="noopener noreferrer">
              twitter
            </a>
          </li>
          <li className="nav__list--item">
            <a href="https://linkedin.com/in/claraharguindey/" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
          </li>
          <li className="nav__list--item">
            <a href="https://github.com/claraharguindey/" target="_blank" rel="noopener noreferrer">
              github
            </a>
          </li>
        </ul>
      </nav>
    </header>);
  }
}

export default Header;