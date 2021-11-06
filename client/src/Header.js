import React from 'react';
import {Link} from 'react-scroll';
import './App.css';

function Header() {

  return (
    <div className="Header">
      <ul className="Navigation">
          <li><Link to="top" smooth={true}>Top</Link></li>
          <li><Link to="proto" smooth={true}>Prototypes</Link></li>
          <li><Link to="scen" smooth={true}>Scenarios</Link></li>
        </ul>
    </div>
  );
}

export default Header;







