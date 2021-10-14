import React from 'react';
import proto1 from './proto1.gif'
import proto2 from './proto2.gif'
import proto3 from './proto3.gif'
import proto4 from './proto4.gif'
import './App.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
      <table>
        <tr>
          <td><img src={proto1} className="App-logo" alt="proto1" /></td>
          <td><img src={proto2} className="App-logo" alt="proto2" /></td>
          <td><img src={proto3} className="App-logo" alt="proto3" /></td>
          <td><img src={proto4} className="App-logo" alt="proto4" /></td>
        </tr>
      </table>
      </header>
    </div>
  );
}

export default Header;







