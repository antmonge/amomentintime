import React from 'react';
import ReactDOM from 'react-dom';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import './index.css';
import proto1 from './proto1.gif'
import proto2 from './proto2.gif'
import proto3 from './proto3.gif'
import proto4 from './proto4.gif'
import Header from './Header';
import Footer from './Footer';
import App from './PyScr';
import Proto from './Proto';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
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
      <Header />
      <App />
      <Proto />
      <Footer />
    </div>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
