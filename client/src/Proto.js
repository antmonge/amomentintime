import React from 'react';
import './App.css';

function protoHeader (protoNum){

  return (
      <p>Prototype {protoNum}</p>
    );
}

function protoRender (protoNum, protos){

  return (
    protos.map(item => <li><img className="ProtoImg" src={require(`./proto${protoNum}/proto${protoNum}-${item.file}-test.svg`).default} alt={"Proto" + protoNum + "-" + item.file}/></li>)
  );
}

function scaleRender (scale){
    return (
    scale.map(item => <li><ul><li>{item.question}</li><li>{item.driver}</li><li>{item.direction}</li><li>{item.one}</li><li>{item.two}</li><li>{item.three}</li><li>{item.four}</li><li>{item.five}</li></ul></li>)
  );
}

function Proto() {
  const proto = [
    {id: 0, label: 'Crazy Productive Day', file: 'CrazyProductiveDay'},
    {id: 1, label: 'Baseball Game', file: 'BaseballGame'},
    {id: 2, label: 'Graduation Day', file: 'GraduationDay'},
    {id: 3, label: 'Kids Graduation', file: 'KidsGraduation'},
    {id: 4, label: 'Wedding', file: 'Wedding'},
    {id: 5, label: 'Kids Wedding', file: 'KidsWedding'},
    {id: 6, label: 'Funeral', file: 'Funeral'},
    {id: 7, label: 'Day At Beach', file: 'DayAtBeach'},
    {id: 8, label: 'High School Party', file: 'HighSchoolParty'},
    {id: 9, label: 'Relationship Breakup', file: 'RelationshipBreakup'},
    {id: 10, label: 'Scammed', file: 'Scammed'},
    {id: 11, label: 'Fight With Friends', file: 'FightWithFriends'},
    {id: 12, label: 'Lazy Summer Day', file: 'LazySummerDay'},
    {id: 13, label: 'Rainy Day', file: 'RainyDay'},
    {id: 14, label: 'Snowstorm', file: 'Snowstorm'},
    {id: 15, label: 'Fishing', file: 'Fishing'},
    {id: 16, label: 'Xmas Holiday', file: 'XmasHoliday'},
    {id: 17, label: 'Sunday With Family', file: 'SundayWithFamily'},
    {id: 18, label: 'Down Day', file: 'DownDay'},
    {id: 19, label: 'Night Out', file: 'NightOut'},
    {id: 20, label: 'Dinner Party', file: 'DinnerParty'},
    {id: 21, label: 'Seasonal Activity', file: 'SeasonalActivity'},
    {id: 22, label: 'Shopping', file: 'Shopping'},
    {id: 23, label: 'Garage Saleing', file: 'GarageSaleing'},
    {id: 24, label: 'Travel Day', file: 'TravelDay'},
    {id: 25, label: 'Kid Milestone', file: 'KidMilestone'},
    {id: 26, label: 'Play In Sports Game', file: 'PlayInSportsGame'},
    {id: 27, label: 'Date', file: 'Date'},
    {id: 28, label: 'Meet Someone New', file: 'MeetSomeoneNew'},
    {id: 29, label: 'Random Act Kindness', file: 'RandomActKindness'}
  ];

  const scale1 = [
    {id: 0, question: 'Taste Strength', driver: 'Circle Color', direction: 'Selection', one: 'Bland-White', two: 'Mild-Light Blue', three: 'Seasoned-Purple', four: 'Flavorful-Brown', five: 'Intense-Black'},
    {id: 1, question: 'Smell Strength', driver: 'Squiggle Color', direction: 'Selection', one: 'Scentless-Pink', two: 'Subtle-Blue', three: 'Scented-Soft Green', four: 'Aromatic-Orange', five: 'Potent-Red'},
    {id: 2, question: 'Smell Type', driver: 'Triangle Color', direction: 'Selection', one: 'Fragrant-Orange', two: 'Pleasant-Red', three: 'Neutral-Blue', four: 'Stale-Grey', five: 'Pungent-Black'},
    {id: 3, question: 'Taste Type', driver: 'Line Color', direction: 'Selection', one: 'Mouthwatering-Light Blue', two: 'Pleasant-Pink', three: 'Tasteful-Soft Rainbow', four: 'Disagreeable-Brown/Green', five: 'Repulsive-Green/Yellow'},
  ];

  return (
    <div className="ProtoList" id="proto">
          <p>Prototype Originals</p>
          <ul className="ProtoList1">
            <li><img className="ProtoImg" src={require(`./proto/proto1.svg`).default} alt="Proto1"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto2.svg`).default} alt="Proto1"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto3.svg`).default} alt="Proto1"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto4a.svg`).default} alt="Proto4a"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto4b.svg`).default} alt="Proto4b"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto4c.svg`).default} alt="Proto4c"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto4d.svg`).default} alt="Proto4d"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5a.svg`).default} alt="Proto5a"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5b.svg`).default} alt="Proto5b"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5c.svg`).default} alt="Proto5c"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5d.svg`).default} alt="Proto5d"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5e.svg`).default} alt="Proto5e"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5f.svg`).default} alt="Proto5f"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5g.svg`).default} alt="Proto5g"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5h.svg`).default} alt="Proto5h"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5i.svg`).default} alt="Proto5i"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5j.svg`).default} alt="Proto5j"/></li>
            <li><img className="ProtoImg" src={require(`./proto/proto5k.svg`).default} alt="Proto5k"/></li>
          </ul>
          <ul className="ProtoList1">
            {scaleRender(scale1)}
          </ul>
          {protoHeader(17)}
          <ul className="ProtoList1">
            {protoRender(17, proto)}
          </ul>
    </div>
  );
}

export default Proto;







