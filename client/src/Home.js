import React from 'react';
import './Home.css';
import Header from './Header';
import Marketing from './Marketing';
import Mint from './Mint';
import Proto from './Proto';
import Scenario from './Scenario';
import Logos from './Logos';

export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="HomeHeader">
        <Header />
      </div>
      <div className="HomeMarketing">
        <Marketing />
      </div>
      <div className="HomeMint">
        <Mint />
      </div>
      <div className="HomeHeader">
        <Header />
      </div>
      <div className="HomeProto">
        <Proto />
      </div>
      <div className="HomeHeader">
        <Header />
      </div>
      <div className="HomeScenario">
        <Scenario />
      </div>
      <div className="HomeHeader">
        <Header />
      </div>
      <div className="HomeLogos">
        <Logos />
      </div>
      <div className="HomeHeader">
        <Header />
      </div>
      </React.Fragment>
    );
  };

};







