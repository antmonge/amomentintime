import React from 'react';
import {Link} from 'react-scroll';
import './App.css';

function Header() {

  return (
    <div className="Header">
      <ul className="Navigation">
          <li><Link to="home" smooth={true}>Home</Link></li>
          <li><Link to="proto" smooth={true}>Prototypes</Link></li>
        </ul>
    </div>
  );
}

export default Header;







