import React from 'react';
import proto6CrazyProductiveDay from './proto6/proto6-CrazyProductiveDay-test.svg'
import proto6BaseballGame from './proto6/proto6-BaseballGame-test.svg'
import proto6GraduationDay from './proto6/proto6-GraduationDay-test.svg'
import proto6KidsGraduation from './proto6/proto6-KidsGraduation-test.svg'
import proto6Wedding from './proto6/proto6-Wedding-test.svg'
import proto6KidsWedding from './proto6/proto6-KidsWedding-test.svg'
import proto6Funeral from './proto6/proto6-Funeral-test.svg'
import proto6DayAtBeach from './proto6/proto6-DayAtBeach-test.svg'
import proto6HighSchoolParty from './proto6/proto6-HighSchoolParty-test.svg'
import proto6RelationshipBreakup from './proto6/proto6-RelationshipBreakup-test.svg'
import proto6Scammed from './proto6/proto6-Scammed-test.svg'
import proto6FightWithFriends from './proto6/proto6-FightWithFriends-test.svg'
import proto6LazySummerDay from './proto6/proto6-LazySummerDay-test.svg'
import proto6RainyDay from './proto6/proto6-RainyDay-test.svg'
import proto6Snowstorm from './proto6/proto6-Snowstorm-test.svg'
import proto6Fishing from './proto6/proto6-Fishing-test.svg'
import proto6XmasHoliday from './proto6/proto6-XmasHoliday-test.svg'
import proto6SundayWithFamily from './proto6/proto6-SundayWithFamily-test.svg'
//import proto6DownDay from './proto6/proto6-DownDay.svg'
//import proto6NightOut from './proto6/proto6-NightOut.svg'
//import proto6DinnerParty from './proto6/proto6-DinnerParty.svg'
//import proto6SeasonalActivity from './proto6/proto6-SeasonalActivity.svg'
//import proto6Shopping from './proto6/proto6-Shopping.svg'
//import proto6GarageSaleing from './proto6/proto6-GarageSaleing.svg'
//import proto6TravelDay from './proto6/proto6-TravelDay.svg'
//import proto6KidMilestone from './proto6/proto6-KidMilestone.svg'
//import proto6PlayInSportsGame from './proto6/proto6-PlayInSportsGame.svg'
//import proto6Date from './proto6/proto6-Date.svg'
//import proto6MeetSomeoneNew from './proto6/proto6-MeetSomeoneNew.svg'
//import proto6RandomActKindness from './proto6/proto6-RandomActKindness.svg'
import './App.css';

function Proto() {
  const protoLabel = ['Crazy Productive Day', 'Baseball Game', 'Graduation Day', 'Kids Graduation', 'Wedding', 'Kids Wedding', 'Funeral', 'Day At Beach', 'High School Party', 'Relationship Breakup', 'Scammed', 'Fight With Friends', 'Lazy Summer Day', 'Rainy Day', 'Snowstorm', 'Fishing', 'Xmas Holiday', 'Sunday With Family'];
  return (
    <div id="proto">
      <table>
        <tr>
          <td className="ProtoHeader" colspan="6">Prototype 6</td>
        </tr>
        <tr>
          <td><img src={proto6CrazyProductiveDay} className="ProtoImg" alt={protoLabel[0]} /></td>
          <td><img src={proto6BaseballGame} className="ProtoImg" alt={protoLabel[1]} /></td>
          <td><img src={proto6GraduationDay} className="ProtoImg" alt={protoLabel[2]} /></td>
          <td><img src={proto6KidsGraduation} className="ProtoImg" alt={protoLabel[3]} /></td>
          <td><img src={proto6Wedding} className="ProtoImg" alt={protoLabel[4]} /></td>
          <td><img src={proto6KidsWedding} className="ProtoImg" alt={protoLabel[5]} /></td>
        </tr>
        <tr>
          <td className="ProtoCap">{protoLabel[0]}</td>
          <td className="ProtoCap">{protoLabel[1]}</td>
          <td className="ProtoCap">{protoLabel[2]}</td>
          <td className="ProtoCap">{protoLabel[3]}</td>
          <td className="ProtoCap">{protoLabel[4]}</td>
          <td className="ProtoCap">{protoLabel[5]}</td>
        </tr>
        <tr>
          <td><img src={proto6Funeral} className="ProtoImg" alt={protoLabel[6]} /></td>
          <td><img src={proto6DayAtBeach} className="ProtoImg" alt={protoLabel[7]} /></td>
          <td><img src={proto6HighSchoolParty} className="ProtoImg" alt={protoLabel[8]} /></td>
          <td><img src={proto6RelationshipBreakup} className="ProtoImg" alt={protoLabel[9]} /></td>
          <td><img src={proto6Scammed} className="ProtoImg" alt={protoLabel[10]} /></td>
          <td><img src={proto6FightWithFriends} className="ProtoImg" alt={protoLabel[11]} /></td>
        </tr>
        <tr>
          <td className="ProtoCap">{protoLabel[6]}</td>
          <td className="ProtoCap">{protoLabel[7]}</td>
          <td className="ProtoCap">{protoLabel[8]}</td>
          <td className="ProtoCap">{protoLabel[9]}</td>
          <td className="ProtoCap">{protoLabel[10]}</td>
          <td className="ProtoCap">{protoLabel[11]}</td>
        </tr>
        <tr>
          <td><img src={proto6LazySummerDay} className="ProtoImg" alt={protoLabel[12]} /></td>
          <td><img src={proto6RainyDay} className="ProtoImg" alt={protoLabel[13]} /></td>
          <td><img src={proto6Snowstorm} className="ProtoImg" alt={protoLabel[14]} /></td>
          <td><img src={proto6Fishing} className="ProtoImg" alt={protoLabel[15]} /></td>
          <td><img src={proto6XmasHoliday} className="ProtoImg" alt={protoLabel[16]} /></td>
          <td><img src={proto6SundayWithFamily} className="ProtoImg" alt={protoLabel[17]} /></td>
        </tr>
        <tr>
          <td className="ProtoCap">{protoLabel[12]}</td>
          <td className="ProtoCap">{protoLabel[13]}</td>
          <td className="ProtoCap">{protoLabel[14]}</td>
          <td className="ProtoCap">{protoLabel[15]}</td>
          <td className="ProtoCap">{protoLabel[16]}</td>
          <td className="ProtoCap">{protoLabel[17]}</td>
        </tr>
      </table>
    </div>
  );
}

export default Proto;







