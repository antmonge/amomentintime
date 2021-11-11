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
    {id: 0, question: 'Introspection Emotion', driver: 'Triangle Randomness', direction: 'Increasing', one: 'Ecstasy', two: 'Joy', three: 'Contentment', four: 'Sadness', five: 'Grief'},
    {id: 1, question: 'Temper Emotion', driver: 'Triangle Quantity', direction: 'Increasing', one: 'Bliss', two: 'Calmness', three: 'Annoyance', four: 'Anger', five: 'Rage'},
    {id: 2, question: 'Acceptance Emotion', driver: 'Squiggle Pattern', direction: 'Selection', one: 'Proud', two: 'Satisfied', three: 'Ambivalent', four: 'Embarrassed', five: 'Humiliated'},
    {id: 3, question: 'Sensitivity Emotion', driver: 'Squiggle Quantity', direction: 'Increasing', one: 'Enthusiasm', two: 'Eagerness', three: 'Anxiety', four: 'Fear', five: 'Terror'},
    {id: 4, question: 'Sky Conditions', driver: 'Background Color', direction: 'Selection', one: 'Sunny', two: 'Partly Cloudy', three: 'Mostly Cloudy', four: 'Cloudy', five: 'Stormy'},
    {id: 5, question: 'Temperature', driver: 'Background Color', direction: 'Selection', one: 'Hot', two: 'Warm', three: 'Cool', four: 'Crisp', five: 'Cold'},
    {id: 6, question: 'People', driver: 'Circle Size', direction: 'Decreasing', one: 'Family', two: 'Friends', three: 'Acquantices', four: 'Strangers', five: 'Adversaries'},
    {id: 7, question: 'Place', driver: 'Circle Quantity, Randomness', direction: 'Decreasing, Increasing', one: 'Community', two: 'City', three: 'Region', four: 'Country', five: 'Foreign'},
    {id: 8, question: 'Strength of Sounds', driver: 'Triangle Color', direction: 'Selection', one: 'Silent', two: 'Faint', three: 'Moderate', four: 'Loud', five: 'Deafening'},
    {id: 9, question: 'Type of Sounds', driver: 'Triangle Size', direction: 'Increasing', one: 'Monotone', two: 'Soothing', three: 'Melodic', four: 'Lively', five: 'Chaotic'},
    {id: 10, question: 'Strength of Smells', driver: 'Squiggle Randomness', direction: 'Increasing', one: 'Scentless', two: 'Subtle', three: 'Scented', four: 'Aromatic', five: 'Potent'},
    {id: 11, question: 'Type of Smells', driver: 'Squiggle Size', direction: 'Increasing', one: 'Fragrant', two: 'Pleasant', three: 'Neutral', four: 'Stale', five: 'Pungent'},
    {id: 12, question: 'Strength of Tastes', driver: 'Line Size', direction: 'Increasing', one: 'Bland', two: 'Mild', three: 'Seasoned', four: 'Flavorful', five: 'Intense'},
    {id: 13, question: 'Type of Tastes', driver: 'Line Color', direction: 'Selection', one: 'Mouthwatering', two: 'Pleasant', three: 'Tsateful', four: 'Disagreeable', five: 'Repulsive'},
    {id: 14, question: 'Sensation', driver: 'Line Quantity', direction: 'Increasing', one: 'Thrill', two: 'Pleasure', three: 'Comfort', four: 'Suffering', five: 'Agony'},
    {id: 15, question: 'Exertion', driver: 'Line Randomness', direction: 'Increasing', one: 'Sedentary', two: 'Light', three: 'Active', four: 'Vigorous', five: 'Strenuous'},
  ];

  const scale2 = [
    {id: 0, question: 'Introspection Emotion', driver: 'Squiggle Size, Randomness', direction: 'Spectrum', one: 'Ecstasy', two: 'Joy', three: 'Contentment', four: 'Sadness', five: 'Grief'},
    {id: 1, question: 'Temper Emotion', driver: 'Squiggle Color', direction: 'Selection', one: 'Bliss', two: 'Calmness', three: 'Annoyance', four: 'Anger', five: 'Rage'},
    {id: 2, question: 'Acceptance Emotion', driver: 'Circle Size, Randomness', direction: 'Spectrum', one: 'Proud', two: 'Satisfied', three: 'Ambivalent', four: 'Embarrassed', five: 'Humiliated'},
    {id: 3, question: 'Sensitivity Emotion', driver: 'Circle Quantity', direction: 'Spectrum', one: 'Enthusiasm', two: 'Eagerness', three: 'Anxiety', four: 'Fear', five: 'Terror'},
    {id: 4, question: 'Sky Conditions', driver: 'Background Color', direction: 'Selection', one: 'Sunny', two: 'Partly Cloudy', three: 'Mostly Cloudy', four: 'Cloudy', five: 'Stormy'},
    {id: 5, question: 'Temperature', driver: 'Background Color', direction: 'Selection', one: 'Hot', two: 'Warm', three: 'Cool', four: 'Crisp', five: 'Cold'},
    {id: 6, question: 'People', driver: 'Line Color', direction: 'Spectrum', one: 'Family', two: 'Friends', three: 'Acquantices', four: 'Strangers', five: 'Adversaries'},
    {id: 7, question: 'Place', driver: 'Line Size, Randomness', direction: 'Increasing', one: 'Community', two: 'City', three: 'Region', four: 'Country', five: 'Foreign'},
    {id: 8, question: 'Strength of Sounds', driver: 'Line Opaqueness', direction: 'Increasing', one: 'Silent', two: 'Faint', three: 'Moderate', four: 'Loud', five: 'Deafening'},
    {id: 9, question: 'Type of Sounds', driver: 'Line Quantity, Randomness', direction: 'Increasing', one: 'Monotone', two: 'Soothing', three: 'Melodic', four: 'Lively', five: 'Chaotic'},
    {id: 10, question: 'Strength of Smells', driver: 'Triangle Opaqueness', direction: 'Increasing', one: 'Scentless', two: 'Subtle', three: 'Scented', four: 'Aromatic', five: 'Potent'},
    {id: 11, question: 'Type of Smells', driver: 'Triangle Size', direction: 'Spectrum', one: 'Fragrant', two: 'Pleasant', three: 'Neutral', four: 'Stale', five: 'Pungent'},
    {id: 12, question: 'Strength of Tastes', driver: 'Traingle Quantity, Randomness', direction: 'Increasing', one: 'Bland', two: 'Mild', three: 'Seasoned', four: 'Flavorful', five: 'Intense'},
    {id: 13, question: 'Type of Tastes', driver: 'Triangle Color', direction: 'Selection', one: 'Mouthwatering', two: 'Pleasant', three: 'Tsateful', four: 'Disagreeable', five: 'Repulsive'},
    {id: 14, question: 'Sensation', driver: 'Circle Color', direction: 'Selection', one: 'Thrill', two: 'Pleasure', three: 'Comfort', four: 'Suffering', five: 'Agony'},
    {id: 15, question: 'Exertion', driver: 'Squiggle Quantity', direction: 'Increasing', one: 'Sedentary', two: 'Light', three: 'Active', four: 'Vigorous', five: 'Strenuous'},
  ];

  const scale3 = [
    {id: 0, question: 'Introspection Emotion', driver: 'Squiggle Size', direction: 'Spectrum', one: 'Ecstasy', two: 'Joy', three: 'Contentment', four: 'Sadness', five: 'Grief'},
    {id: 1, question: 'Temper Emotion', driver: 'Squiggle Randomness', direction: 'Spectrum', one: 'Bliss', two: 'Calmness', three: 'Annoyance', four: 'Anger', five: 'Rage'},
    {id: 2, question: 'Acceptance Emotion', driver: 'Squiggle Opaqueness', direction: 'Spectrum', one: 'Proud', two: 'Satisfied', three: 'Ambivalent', four: 'Embarrassed', five: 'Humiliated'},
    {id: 3, question: 'Sensitivity Emotion', driver: 'Squiggle Quantity', direction: 'Spectrum', one: 'Enthusiasm', two: 'Eagerness', three: 'Anxiety', four: 'Fear', five: 'Terror'},
    {id: 4, question: 'Sky Conditions', driver: 'Background Color', direction: 'Selection', one: 'Sunny', two: 'Partly Cloudy', three: 'Mostly Cloudy', four: 'Cloudy', five: 'Stormy'},
    {id: 5, question: 'Temperature', driver: 'Background Color', direction: 'Selection', one: 'Hot', two: 'Warm', three: 'Cool', four: 'Crisp', five: 'Cold'},
    {id: 6, question: 'People', driver: 'Circle Size, Opaqueness', direction: 'Spectrum', one: 'Family', two: 'Friends', three: 'Acquantices', four: 'Strangers', five: 'Adversaries'},
    {id: 7, question: 'Place', driver: 'Circle Quantity, Randomness', direction: 'Increasing', one: 'Community', two: 'City', three: 'Region', four: 'Country', five: 'Foreign'},
    {id: 8, question: 'Strength of Sounds', driver: 'Line Quantity, Opaqueness', direction: 'Increasing', one: 'Silent', two: 'Faint', three: 'Moderate', four: 'Loud', five: 'Deafening'},
    {id: 9, question: 'Type of Sounds', driver: 'Line Randomness', direction: 'Increasing', one: 'Monotone', two: 'Soothing', three: 'Melodic', four: 'Lively', five: 'Chaotic'},
    {id: 10, question: 'Strength of Smells', driver: 'Squiggle Color', direction: 'Selection', one: 'Scentless', two: 'Subtle', three: 'Scented', four: 'Aromatic', five: 'Potent'},
    {id: 11, question: 'Type of Smells', driver: 'Triangle Color', direction: 'Selection', one: 'Fragrant', two: 'Pleasant', three: 'Neutral', four: 'Stale', five: 'Pungent'},
    {id: 12, question: 'Strength of Tastes', driver: 'Circle Color', direction: 'Selection', one: 'Bland', two: 'Mild', three: 'Seasoned', four: 'Flavorful', five: 'Intense'},
    {id: 13, question: 'Type of Tastes', driver: 'Line Color', direction: 'Selection', one: 'Mouthwatering', two: 'Pleasant', three: 'Tsateful', four: 'Disagreeable', five: 'Repulsive'},
    {id: 14, question: 'Sensation', driver: 'Triangle Quantity, Size, Opaqueness', direction: 'Spectrum', one: 'Thrill', two: 'Pleasure', three: 'Comfort', four: 'Suffering', five: 'Agony'},
    {id: 15, question: 'Exertion', driver: 'Line Size, Triangle Randomness', direction: 'Increasing', one: 'Sedentary', two: 'Light', three: 'Active', four: 'Vigorous', five: 'Strenuous'},
  ];

  return (
    <div className="ProtoList" id="proto">
          <ul className="ProtoList1">
            {scaleRender(scale1)}
          </ul>
          {protoHeader(6)}
          <ul className="ProtoList1">
            {protoRender(6, proto)}
          </ul>
          {protoHeader(7)}
          <ul className="ProtoList1">
            {protoRender(7, proto)}
          </ul>
          <ul className="ProtoList1">
            {scaleRender(scale2)}
          </ul>
          {protoHeader(8)}
          <ul className="ProtoList1">
            {protoRender(8, proto)}
          </ul>
          <ul className="ProtoList1">
            {scaleRender(scale3)}
          </ul>
          {protoHeader(9)}
          <ul className="ProtoList1">
            {protoRender(9, proto)}
          </ul>
    </div>
  );
}

export default Proto;







