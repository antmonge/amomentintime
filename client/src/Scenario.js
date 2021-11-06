import React from 'react';
import './App.css';

function protoHeader (protoNum){

  return (
      <p>{protoNum}</p>
    );
}

function protoRender (scenFile, protos){

  return (
    protos.map(item => <li><img className="ProtoImg" src={require(`./proto${item.num}/proto${item.num}-${scenFile}-test.svg`).default} alt={"Proto" + item.num + "-" + scenFile}/></li>)
  );
}

function Scenario() {
  const scenario = [
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

const prototype = [
    {id: 0, label: 'Prototype 6', file: 'Proto6', num: 6},
    {id: 1, label: 'Prototype 7', file: 'Proto7', num: 7},
  ];

  return (
    <div className="ProtoList" id="scen">
          {scenario.map(proto => <div>{protoHeader(proto.label)}<ul className="ProtoImg">{protoRender(proto.file, prototype)}</ul></div>)}
    </div>
  );
}

export default Scenario;







