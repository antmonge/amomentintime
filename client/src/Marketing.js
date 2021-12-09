import React from 'react';
import './Purpose.css';

export default class Marketing extends React.Component {

  render() {
    return (
      <React.Fragment>
      <div className="PurposeBodyA" id="top">
      <img className="MktImg" src={require(`./logos/single06.svg`).default} alt="Proto1"/>
      <p className="MktTxt">Have you ever found yourself thinking back to a special moment, but not quite able to recapture everything that made it special?</p><p className="MktTxt">Have you ever had a special moment that was so special to you, but you had trouble expressing what made it special?</p><p className="MktTxt">Have you ever wanted to find a community where you could help others appreciate special moments in their lives?</p><p className="MktTxt">Have you ever wished you could  influence the design of your NFT?</p>
      </div>
      <div className="PurposeBodyB">
      <img className="MktImg" src={require(`./logos/single01.svg`).default} alt="Proto1"/>
      <h3 className="MktTxt">A Moment in Time honors meaningful moments in your life by capturing your emotions and stamping them on blockchain solidifying your memories and supporting your growth through a community focused on being there to help you on the journey of life.</h3>
      </div>
      <div className="PurposeBodyA">
      <img className="MktImg" src={require(`./logos/single11.svg`).default} alt="Proto1"/>
      <p className="MktTxt">What was the price of your first mint?</p><p className="MktTxt">.05, .15, .2, .3, 1.0?  Really 1 eth for your first mint?</p><p className="MktTxt">Have you ever paid more for gas than mint price?  How much more?</p><p className="MktTxt">2x, 3x, 10x?  You paid 10x in gas!</p><p className="MktTxt">Have you ever wondered whether a project could minimize prices and maintain a low mint price while still delivering cool art and community value?</p>
      </div>
      <div className="PurposeBodyB">
      <img className="MktImg" src={require(`./logos/single17.svg`).default} alt="Proto1"/>
      <h3 className="MktTxt">A Moment in Time is an NFT project focused on you.  You get to influence your design.  You get a keepsake that helps you honor your special moment, plus a community that is focused on well being and mental health.  We have developed a contract that minimizes gas prices.  We are committed to providing ongoing support and resources to advance mental health, well being, and emotional intelligence.</h3><h3 className="MktTxt">Check out the Mint process below and click on Purpose above for more detail about the project.</h3>
      </div>
      </React.Fragment>
    );
  };

};







