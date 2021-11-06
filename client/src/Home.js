import React from 'react';
import './Home.css';
import Header from './Header';
import Mint from './Mint';
import Proto from './Proto';
import Scenario from './Scenario';

export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="HomeHeader">
        <Header />
      </div>
      <div className="HomeMint">
        <Mint />
      </div>
      <div className="HomeProto">
        <Proto />
      </div>
      <div className="HomeScenario">
        <Scenario />
      </div>
      </React.Fragment>
    );
  };

};







