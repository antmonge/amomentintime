import React from 'react';
import ReactDOM from 'react-dom';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import './Index.css';
import logo from './logo2.png'
import discord from './Discord.png'
import twitter from './Twitter.png'
import Home from './Home';
import Mint from './Mint';
import Purpose from './Purpose';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <div className="App">
      <div className="Header">
        <header className="App-header">
          <ul className="MainNav">
            <li className="MainNav"><img src={logo} className="MainLogo" alt="logo" /></li>
            <li className="MainNav"><NavLink to="/Home">Home</NavLink></li>
            <li className="MainNav"><NavLink to="/Mint">Mint</NavLink></li>
            <li className="MainNav"><NavLink to="/Purpose">Purpose</NavLink></li>
            <li className="MainNav"><img src={discord} className="MainSoc" alt="logo" /></li>
            <li className="MainNav"><img src={twitter} className="MainSoc" alt="logo" /></li>
          </ul>
        </header>
      </div>
      <div className="Body">
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Mint" component={Mint} />
        <Route path="/Purpose" component={Purpose} />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
