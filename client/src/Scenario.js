import React from 'react';
import './App.css';

function protoHeader (label, introspection, temper, acceptance, sensitivity, sky, temp, people, place, sndstr, sndtyp, smlstr, smltyp, tststr, tsttyp, sensation, exertion){

  return (
      <div><p>{label}</p><ul className="ProtoList1"><li>Introspection >> {introspection}</li><li>Temper >> {temper}</li><li>Acceptance >> {acceptance}</li><li>Sensitivity >> {sensitivity}</li><li>Sky >> {sky}</li><li>Temp >> {temp}</li><li>People >> {people}</li><li>Place >> {place}</li><li>Sound Strength >> {sndstr}</li><li>Sound Type >> {sndtyp}</li><li>Smell Strength >> {smlstr}</li><li>Smell Type >> {smltyp}</li><li>Taste Strength >> {tststr}</li><li>Taste Type >> {tsttyp}</li><li>Sensation >> {sensation}</li><li>Exertion >> {exertion}</li></ul></div>
    );
}

function protoRender (scenFile, protos){

  return (
    protos.map(item => <li><img className="ProtoImg" src={require(`./proto${item.num}/proto${item.num}-${scenFile}-test.svg`).default} alt={"Proto" + item.num + "-" + scenFile}/></li>)
  );
}

function Scenario() {
  const scenario = [
    {id: 0, label: 'Crazy Productive Day', file: 'CrazyProductiveDay', introspection: '50-Contentment', temper: '30-Calmness', acceptance: '18-Proud', sensitivity: '5-Enthusiasm', sky: '60-Mostly Cloudy', temp: '75-Crisp', people: '1-Family', place: '1-Community', sndstr: '35-Faint', sndtyp: '50-Melodic', smlstr: '25-Subtle', smltyp: '50-Neutral', tststr: '70-Flavorful', tsttyp: '30-Pleasant', sensation: '25-Pleasure', exertion: '5-Sedentary'},
    {id: 1, label: 'Baseball Game', file: 'BaseballGame', introspection: '25-Joy', temper: '50-Annoyance', acceptance: '20-Proud', sensitivity: '5-Enthusiasm', sky: '1-Sunny', temp: '10-Hot', people: '30-Friends', place: '30-City', sndstr: '75-Loud', sndtyp: '75-Lively', smlstr: '79-Aromatic', smltyp: '35-Pleasant', tststr: '75-Flavorful', tsttyp: '50-Tasteful', sensation: '18-Thrill', exertion: '50-Active'},
    {id: 2, label: 'Graduation Day', file: 'GraduationDay', introspection: '20-Ecstasy', temper: '20-Bliss', acceptance: '10-Proud', sensitivity: '35-Eagerness', sky: '10-Sunny', temp: '30-Warm', people: '25-Friends', place: '10-Community', sndstr: '65-Loud', sndtyp: '65-Lively', smlstr: '30-Subtle', smltyp: '50-Neutral', tststr: '50-Seasoned', tsttyp: '35-Pleasant', sensation: '30-Pleasure', exertion: '55-Active'},
    {id: 3, label: 'Kids Graduation', file: 'KidsGraduation', introspection: '50-Contentment', temper: '25-Calmness', acceptance: '1-Proud', sensitivity: '55-Anxiety', sky: '5-Sunny', temp: '21-Warm', people: '5-Family', place: '5-Community', sndstr: '50-Moderate', sndtyp: '72-Lively', smlstr: '45-Scented', smltyp: '50-Neutral', tststr: '75-Flavorful', tsttyp: '25-Pleasant', sensation: '30-Pleasure', exertion: '55-Active'},
      {id: 4, label: 'Wedding', file: 'Wedding', introspection: '30-Joy', temper: '10-Bliss', acceptance: '10-Proud', sensitivity: '39-Eagerness', sky: '55-Mostly Cloudy', temp: '60-Cool', people: '15-Family', place: '30-City', sndstr: '60-Moderate', sndtyp: '75-Lively', smlstr: '55-Scented', smltyp: '25-Pleasant', tststr: '60-Seasoned', tsttyp: '50-Tasteful', sensation: '25-Pleasure', exertion: '55-Active'},
    {id: 5, label: 'Kids Wedding', file: 'KidsWedding', introspection: '55-Contentment', temper: '43-Annoyance', acceptance: '5-Proud', sensitivity: '5-Enthusiasm', sky: '10-Sunny', temp: '30-Warm', people: '19-Family', place: '19-Community', sndstr: '75-Loud', sndtyp: '75-Lively', smlstr: '70-Aromatic', smltyp: '30-Pleasant', tststr: '75-Flavorful', tsttyp: '18-Mouthwatering', sensation: '50-Comfort', exertion: '50-Active'},
    {id: 6, label: 'Funeral', file: 'Funeral', introspection: '95-Grief', temper: '30-Calmness', acceptance: '50-Ambivalent', sensitivity: '55-Anxiety', sky: '25-Partly Cloudy', temp: '40-Warm', people: '20-Family', place: '10-Community', sndstr: '25-Faint', sndtyp: '25-Soothing', smlstr: '50-Scented', smltyp: '45-Neutral', tststr: '30-Mild', tsttyp: '50-Tasteful', sensation: '75-Suffering', exertion: '55-Active'},
    {id: 7, label: 'Day At Beach', file: 'DayAtBeach', introspection: '35-Joy', temper: '10-Bliss', acceptance: '50-Ambivalent', sensitivity: '5-Enthusiasm', sky: '5-Sunny', temp: '5-Hot', people: '21-Friends', place: '50-Region', sndstr: '35-Faint', sndtyp: '25-Soothing', smlstr: '70-Aromatic', smltyp: '10-Fragrant', tststr: '50-Seasoned', tsttyp: '30-Pleasant', sensation: '30-Pleasure', exertion: '35-Light'},
    {id: 8, label: 'High School Party', file: 'HighSchoolParty', introspection: '5-Ecstasy', temper: '5-Bliss', acceptance: '5-Proud', sensitivity: '5-Enthusiasm', sky: '90-Stormy', temp: '90-Cold', people: '35-Friends', place: '42-Region', sndstr: '81-Deafening', sndtyp: '81-Chaotic', smlstr: '81-Potent', smltyp: '70-Stale', tststr: '81-Intense', tsttyp: '60-Tasteful', sensation: '10-Thrill', exertion: '30-Light'},
    {id: 9, label: 'Relationship Breakup', file: 'RelationshipBreakup', introspection: '70-Sadness', temper: '70-Anger', acceptance: '81-Humiliated', sensitivity: '60-Anxiety', sky: '50-Mostly Cloudy', temp: '50-Cool', people: 'Solo-Adversaries', place: '1-Community', sndstr: '1-Silent', sndtyp: '1-Monotone', smlstr: '1-Scentless', smltyp: '50-Neutral', tststr: '1-Bland', tsttyp: '50-Tasteful', sensation: '70-Suffering', exertion: '10-Sedentary'},
    {id: 10, label: 'Scammed', file: 'Scammed', introspection: '75-Sadness', temper: '90-Rage', acceptance: '95-Humiliated', sensitivity: '55-Anxiety', sky: '35-Partly Cloudy', temp: '15-Hot', people: '95-Adversaries', place: '95-Foreign', sndstr: '5-Silent', sndtyp: '5-Monotone', smlstr: '5-Scentless', smltyp: '50-Neutral', tststr: '25-Mild', tsttyp: '90-Repulsive', sensation: '81-Agony', exertion: '5-Sedentary'},
    {id: 11, label: 'Fight With Friends', file: 'FightWithFriends', introspection: '75-Sadness', temper: '75-Anger', acceptance: '70-Embarrassed', sensitivity: '65-Fear', sky: '70-Cloudy', temp: '70-Crisp', people: '5-Family', place: '5-Community', sndstr: '75-Loud', sndtyp: '95-Chaotic', smlstr: '90-Potent', smltyp: '75-Stale', tststr: '75-Flavorful', tsttyp: '25-Pleasant', sensation: '75-Suffering', exertion: '50-Active'},
    {id: 12, label: 'Lazy Summer Day', file: 'LazySummerDay', introspection: '45-Contentment', temper: '40-Calmness', acceptance: '42-Ambivalent', sensitivity: '45-Anxiety', sky: '5-Sunny', temp: '1-Hot', people: '25-Friends', place: '15-Community', sndstr: '25-Faint', sndtyp: '35-Soothing', smlstr: '75-Aromatic', smltyp: '75-Stale', tststr: '5-Bland', tsttyp: '65-Disagreeable', sensation: '65-Suffering', exertion: '30-Light'},
    {id: 13, label: 'Rainy Day', file: 'RainyDay', introspection: '45-Contentment', temper: '25-Calmness', acceptance: '30-Satisfied', sensitivity: '35-Eagerness', sky: '90-Stormy', temp: '75-Crisp', people: '25-Friends', place: '15-Community', sndstr: '60-Moderate', sndtyp: '30-Soothing', smlstr: '65-Aromatic', smltyp: '22-Pleasant', tststr: '40-Mild', tsttyp: '50-Tasteful', sensation: '35-Pleasure', exertion: '25-Light'},
    {id: 14, label: 'Snowstorm', file: 'Snowstorm', introspection: '30-Joy', temper: '20-Bliss', acceptance: '30-Satisfied', sensitivity: '15-Enthusiasm', sky: '100-Stormy', temp: '95-Cold', people: '10-Family', place: '5-Community', sndstr: '65-Loud', sndtyp: '35-Soothing', smlstr: '50-Scented', smltyp: '30-Pleasant', tststr: '65-Flavorful', tsttyp: '30-Pleasant', sensation: '20-Thrill', exertion: '65-Vigorous'},
    {id: 15, label: 'Fishing', file: 'Fishing', introspection: '45-Contentment', temper: '20-Bliss', acceptance: '25-Satisfied', sensitivity: '25-Eagerness', sky: '5-Sunny', temp: '10-Hot', people: '30-Friends', place: '50-Region', sndstr: '5-Silent', sndtyp: '21-Soothing', smlstr: '75-Aromatic', smltyp: '81-Pungent', tststr: '35-Mild', tsttyp: '50-Tasteful', sensation: '41-Comfort', exertion: '25-Light'},
    {id: 16, label: 'Xmas Holiday', file: 'XmasHoliday', introspection: '5-Ecstasy', temper: '1-Bliss', acceptance: '5-Proud', sensitivity: '1-Enthusiasm', sky: '10-Sunny', temp: '90-Cold', people: '15-Family', place: '50-Region', sndstr: '75-Loud', sndtyp: '75-Lively', smlstr: '90-Potent', smltyp: '5-Fragrant', tststr: '90-Intense', tsttyp: '5-Mouthwatering', sensation: '15-Thrill', exertion: '45-Active'},
    {id: 17, label: 'Sunday With Family', file: 'SundayWithFamily', introspection: '25-Joy', temper: '25-Calmness', acceptance: '25-Satisfied', sensitivity: '25-Eagerness', sky: '25-Partly Cloudy', temp: '65-Crisp', people: '10-Family', place: '50-Region', sndstr: '55-Moderate', sndtyp: '65-Lively', smlstr: '80-Aromatic', smltyp: '15-Fragrant', tststr: '75-Flavorful', tsttyp: '15-Mouthwatering', sensation: '25-Pleasure', exertion: '45-Active'},
    {id: 18, label: 'Down Day', file: 'DownDay', introspection: '80-Sadness', temper: '60-Annoyance', acceptance: '55-Ambivalent', sensitivity: '55-Anxiety', sky: '55-Mostly Cloudy', temp: '65-Crisp', people: '1-Family', place: '1-Community', sndstr: '81-Deafening', sndtyp: '81-Chaotic', smlstr: '50-Scented', smltyp: '50-Neutral', tststr: '50-Seasoned', tsttyp: '50-Tasteful', sensation: '80-Suffering', exertion: '10-Sedentary'},
    {id: 19, label: 'Night Out', file: 'NightOut', introspection: '15-Ecstasy', temper: '5-Bliss', acceptance: '10-Proud', sensitivity: '10-Enthusiasm', sky: '70-Cloudy', temp: '70-Crisp', people: '40-Friends', place: '35-City', sndstr: '90-Deafening', sndtyp: '90-Chaotic', smlstr: '80-Aromatic', smltyp: '10-Fragrant', tststr: '40-Mild', tsttyp: '50-Tasteful', sensation: '15-Thrill', exertion: '55-Active'},
    {id: 20, label: 'Dinner Party', file: 'DinnerParty', introspection: '50-Contentment', temper: '45-Annoyance', acceptance: '30-Satisfied', sensitivity: '60-Anxiety', sky: '35-Partly Cloudy', temp: '25-Warm', people: '50-Acquantices', place: '10-Community', sndstr: '70-Loud', sndtyp: '70-Lively', smlstr: '75-Aromatic', smltyp: '25-Pleasant', tststr: '70-Flavorful', tsttyp: '21-Pleasant', sensation: '60-Comfort', exertion: '60-Active'},
    {id: 21, label: 'Seasonal Activity', file: 'SeasonalActivity', introspection: '30-Joy', temper: '25-Calmness', acceptance: '30-Satisfied', sensitivity: '30-Eagerness', sky: '25-Partly Cloudy', temp: '70-Crisp', people: '20-Family', place: '45-Region', sndstr: '55-Moderate', sndtyp: '75-Lively', smlstr: '55-Scented', smltyp: '65-Stale', tststr: '70-Flavorful', tsttyp: '25-Pleasant', sensation: '40-Pleasure', exertion: '45-Active'},
    {id: 22, label: 'Shopping', file: 'Shopping', introspection: '35-Joy', temper: '55-Annoyance', acceptance: '25-Satisfied', sensitivity: '55-Anxiety', sky: '70-Cloudy', temp: '50-Cool', people: '70-Strangers', place: '45-Region', sndstr: '70-Loud', sndtyp: '70-Lively', smlstr: '55-Scented', smltyp: '45-Neutral', tststr: '50-Seasoned', tsttyp: '50-Tasteful', sensation: '60-Comfort', exertion: '60-Active'},
    {id: 23, label: 'Garage Saleing', file: 'GarageSaleing', introspection: '25-Joy', temper: '55-Annoyance', acceptance: '30-Satisfied', sensitivity: '45-Anxiety', sky: '45-Mostly Cloudy', temp: '40-Warm', people: '70-Strangers', place: '45-Region', sndstr: '50-Moderate', sndtyp: '15-Monotone', smlstr: '35-Subtle', smltyp: '50-Neutral', tststr: '25-Mild', tsttyp: '50-Tasteful', sensation: '60-Comfort', exertion: '60-Active'},
    {id: 24, label: 'Travel Day', file: 'TravelDay', introspection: '61-Sadness', temper: '60-Annoyance', acceptance: '55-Ambivalent', sensitivity: '55-Anxiety', sky: '50-Mostly Cloudy', temp: '50-Cool', people: '70-Strangers', place: '70-Country', sndstr: '75-Loud', sndtyp: '75-Lively', smlstr: '75-Aromatic', smltyp: '75-Stale', tststr: '50-Seasoned', tsttyp: '50-Tasteful', sensation: '65-Suffering', exertion: '50-Active'},
    {id: 25, label: 'Kid Milestone', file: 'KidMilestone', introspection: '25-Joy', temper: '10-Bliss', acceptance: '5-Proud', sensitivity: '35-Eagerness', sky: '15-Sunny', temp: '30-Warm', people: '5-Family', place: '5-Community', sndstr: '45-Moderate', sndtyp: '35-Soothing', smlstr: '50-Scented', smltyp: '50-Neutral', tststr: '50-Seasoned', tsttyp: '50-Tasteful', sensation: '30-Pleasure', exertion: '30-Light'},
    {id: 26, label: 'Play In Sports Game', file: 'PlayInSportsGame', introspection: '10-Ecstasy', temper: '25-Calmness', acceptance: '10-Proud', sensitivity: '35-Eagerness', sky: '5-Sunny', temp: '45-Cool', people: '55-Acquantices', place: '55-Region', sndstr: '75-Loud', sndtyp: '75-Lively', smlstr: '75-Aromatic', smltyp: '30-Pleasant', tststr: '50-Seasoned', tsttyp: '50-Tasteful', sensation: '5-Thrill', exertion: '95-Strenuous'},
    {id: 27, label: 'Date', file: 'Date', introspection: '25-Joy', temper: '40-Calmness', acceptance: '60-Ambivalent', sensitivity: '50-Anxiety', sky: '25-Partly Cloudy', temp: '25-Warm', people: '55-Acquantices', place: '35-City', sndstr: '75-Loud', sndtyp: '75-Lively', smlstr: '75-Aromatic', smltyp: '20-Fragrant', tststr: '75-Flavorful', tsttyp: '20-Mouthwatering', sensation: '23-Pleasure', exertion: '25-Light'},
    {id: 28, label: 'Meet Someone New', file: 'MeetSomeoneNew', introspection: '30-Joy', temper: '30-Calmness', acceptance: '30-Satisfied', sensitivity: '40-Eagerness', sky: '30-Partly Cloudy', temp: '30-Warm', people: '55-Acquantices', place: '35-City', sndstr: '50-Moderate', sndtyp: '55-Melodic', smlstr: '50-Scented', smltyp: '30-Pleasant', tststr: '65-Flavorful', tsttyp: '30-Pleasant', sensation: '30-Pleasure', exertion: '45-Active'},
    {id: 29, label: 'Random Act Kindness', file: 'RandomActKindness', introspection: '45-Contentment', temper: '30-Calmness', acceptance: '25-Satisfied', sensitivity: '45-Anxiety', sky: '70-Cloudy', temp: '95-Cold', people: '75-Strangers', place: '35-City', sndstr: '35-Faint', sndtyp: '50-Melodic', smlstr: '50-Scented', smltyp: '50-Neutral', tststr: '50-Seasoned', tsttyp: '50-Tasteful', sensation: '30-Pleasure', exertion: '35-Light'}
    ];

  const prototype = [
    {id: 2, label: 'Prototype 9', file: 'Proto9', num: 9},
    {id: 3, label: 'Prototype 14', file: 'Proto14', num: 14},
    {id: 4, label: 'Prototype 12', file: 'Proto12', num: 12},
    {id: 5, label: 'Prototype 11', file: 'Proto11', num: 11},
    {id: 6, label: 'Prototype 13', file: 'Proto13', num: 13}
    ];

  return (
    <div className="ProtoList" id="scen">
          {scenario.map(proto => <div>{protoHeader(proto.label, proto.introspection, proto.temper, proto.acceptance, proto.sensitivity, proto.sky, proto.temp, proto.people, proto.place, proto.sndstr, proto.sndtyp, proto.smlstr, proto.smltyp, proto.tststr, proto.tsttyp, proto.sensation, proto.exertion)}<ul className="ProtoImg">{protoRender(proto.file, prototype)}</ul></div>)}
    </div>
  );
}

export default Scenario;







