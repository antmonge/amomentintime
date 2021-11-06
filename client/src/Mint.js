import React from 'react';
import './App.css';
import App2 from './App';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          imgsrc: "https://bucketeer-be56a818-47b8-45ac-8891-d13ecbace823.s3.amazonaws.com/public/test.svg",
          value: "Not Clicked",
          data: "NA",
          emotionIntroVal: 50,
          emotionTemperVal: 50,
          emotionAcceptVal: 50,
          emotionSensVal: 50,
          weatherSkyVal: 50,
          weatherTempVal: 50,
          surroundPeopleVal: 50,
          surroundPlaceVal: 50,
          soundStrengthVal: 50,
          soundTypeVal: 50,
          smellStrengthVal: 50,
          smellTypeVal: 50,
          tasteStrengthVal: 50,
          tasteTypeVal: 50,
          physicalSensationVal: 50,
          physicalExertionVal: 50
        };
        this.pyth = this.pyth.bind(this)
        this.onIntrospectionChange = this.onIntrospectionChange.bind(this)
        this.onTemperChange = this.onTemperChange.bind(this)
        this.onAcceptanceChange = this.onAcceptanceChange.bind(this)
        this.onSensitivityChange = this.onSensitivityChange.bind(this)
        this.onSkyConditionsChange = this.onSkyConditionsChange.bind(this)
        this.onTemperatureChange = this.onTemperatureChange.bind(this)
        this.onPeopleChange = this.onPeopleChange.bind(this)
        this.onPlaceChange = this.onPlaceChange.bind(this)
        this.onStrengthofSoundsChange = this.onStrengthofSoundsChange.bind(this)
        this.onTypeofSoundsChange = this.onTypeofSoundsChange.bind(this)
        this.onStrengthofSmellsChange = this.onStrengthofSmellsChange.bind(this)
        this.onTypeofSmellsChange = this.onTypeofSmellsChange.bind(this)
        this.onStrengthofTastesChange = this.onStrengthofTastesChange.bind(this)
        this.onTypeofTastesChange = this.onTypeofTastesChange.bind(this)
        this.onSensationChange = this.onSensationChange.bind(this)
        this.onExertionChange = this.onExertionChange.bind(this)
    }

    onIntrospectionChange(newVal) {
          this.setState({emotionIntroVal: newVal});
    }

    onTemperChange(newVal) {
          this.setState({emotionTemperVal: newVal});
    }

    onAcceptanceChange(newVal) {
          this.setState({emotionAcceptVal: newVal});
    }

    onSensitivityChange(newVal) {
          this.setState({emotionSensVal: newVal});
    }

    onSkyConditionsChange(newVal) {
          this.setState({weatherSkyVal: newVal});
    }

    onTemperatureChange(newVal) {
          this.setState({weatherTempVal: newVal});
    }

    onPeopleChange(newVal) {
          this.setState({surroundPeopleVal: newVal});
    }

    onPlaceChange(newVal) {
          this.setState({surroundPlaceVal: newVal});
    }

    onStrengthofSoundsChange(newVal) {
          this.setState({soundStrengthVal: newVal});
    }

    onTypeofSoundsChange(newVal) {
          this.setState({soundTypeVal: newVal});
    }

    onStrengthofSmellsChange(newVal) {
          this.setState({smellStrengthVal: newVal});
    }

    onTypeofSmellsChange(newVal) {
          this.setState({smellTypeVal: newVal});
    }

    onStrengthofTastesChange(newVal) {
          this.setState({tasteStrengthVal: newVal});
    }

    onTypeofTastesChange(newVal) {
          this.setState({tasteTypeVal: newVal});
    }

    onSensationChange(newVal) {
          this.setState({physicalSensationVal: newVal});
    }

    onExertionChange(newVal) {
          this.setState({physicalExertionVal: newVal});
    }

    pyth() {

      const formData = ['IntrospectionEmotion', this.state.emotionIntroVal, 'TemperEmotion', this.state.emotionTemperVal, 'AcceptanceEmotion', this.state.emotionAcceptVal, 'SensitivityEmotion', this.state.emotionSensVal, 'SkyConditions', this.state.weatherSkyVal, 'Temperature', this.state.weatherTempVal, 'People', this.state.surroundPeopleVal, 'Place', this.state.surroundPlaceVal, 'StrengthofSounds', this.state.soundStrengthVal, 'TypeofSounds', this.state.soundTypeVal, 'StrengthofSmells', this.state.smellStrengthVal, 'TypeofSmells', this.state.smellTypeVal, 'StrengthofTastes', this.state.tasteStrengthVal, 'TypeofTastes', this.state.tasteTypeVal, 'PhysicalSensation', this.state.physicalSensationVal, 'PhysicalExertion', this.state.physicalExertionVal];

      fetch("/api", {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
        .then(res => res.json())
        .then(data => this.setState({imgsrc: "https://bucketeer-be56a818-47b8-45ac-8891-d13ecbace823.s3.amazonaws.com/public/" + data.message.trim()}));
    }

    render() {
        const emotionIntroLab = ['Ecstasy', 'Joy', 'Contentment', 'Sadness', 'Grief'];
        const emotionIntroDiv = 'IntrospectionEmotion';
        const emotionTemperLab = ['Bliss', 'Calmness', 'Annoyance', 'Anger', 'Rage'];
        const emotionTemperDiv = 'TemperEmotion';
        const emotionAcceptLab = ['Proud', 'Satisfied', 'Ambivalent', 'Embarrassed', 'Humiliated'];
        const emotionAcceptDiv = 'AcceptanceEmotion';
        const emotionSensLab = ['Enthusiasm', 'Eagerness', 'Anxiety', 'Fear', 'Terror'];
        const emotionSensDiv = 'SensitivityEmotion';
        const weatherSkyLab = ['Sunny', 'Partly Cloudy', 'Mostly Cloudy', 'Cloudy', 'Stormy'];
        const weatherSkyDiv = 'SkyConditions';
        const weatherTempLab = ['Hot', 'Warm', 'Cool', 'Crisp', 'Cold'];
        const weatherTempDiv = 'Temperature';
        const surroundPeopleLab = ['Family', 'Friends', 'Acquaintances', 'Strangers', 'Adversaries'];
        const surroundPeopleDiv = 'People';
        const surroundPlaceLab = ['Community', 'City', 'Region', 'Country', 'Foreign'];
        const surroundPlaceDiv = 'Place';
        const soundStrengthLab = ['Silent', 'Faint', 'Moderate', 'Loud', 'Deafening'];
        const soundStrengthDiv = 'StrengthofSounds';
        const soundTypeLab = ['Monotone', 'Soothing', 'Melodic', 'Lively', 'Chaotic'];
        const soundTypeDiv = 'TypeofSounds';
        const smellStrengthLab = ['Scentless', 'Subtle', 'Scented', 'Aromatic', 'Potent'];
        const smellStrengthDiv = 'StrengthofSmells';
        const smellTypeLab = ['Fragrant', 'Pleasant', 'Neutral', 'Stale', 'Pungent'];
        const smellTypeDiv = 'TypeofSmells';
        const tasteStrengthLab = ['Bland', 'Mild', 'Seasoned', 'Flavorful', 'Intense'];
        const tasteStrengthDiv = 'StrengthofTastes';
        const tasteTypeLab = ['Mouthwatering', 'Pleasant', 'Tasteful', 'Disagreeable', 'Repulsive'];
        const tasteTypeDiv = 'TypeofTastes';
        const physicalSensationLab = ['Thrill', 'Pleasure', 'Comfort', 'Suffering', 'Agony'];
        const physicalSensationDiv = 'PhysicalSensation';
        const physicalExertionLab = ['Sedentary', 'Light', 'Active', 'Vigorous', 'Strenuous'];
        const physicalExertionDiv = 'PhysicalExertion';

        return <div className="App-header" id="top">
          <div className="App-header">
            <table>
              <tr>
                <td colspan="2">Emotional Experience:</td>
              </tr>
              <tr>
                <td className="App3">Introspection Emotion
                <App2 onChange={this.onIntrospectionChange} value={this.state.emotionIntroVal} lab={emotionIntroLab} div={emotionIntroDiv} />
                </td>
                <td className="App3">Temper Emotion
                <App2 onChange={this.onTemperChange} value={this.state.emotionTemperVal} lab={emotionTemperLab} div={emotionTemperDiv} />
                </td>
              </tr>
              <tr>
                <td className="App3">Acceptance Emotion
                <App2 onChange={this.onAcceptanceChange} value={this.state.emotionAcceptVal} lab={emotionAcceptLab} div={emotionAcceptDiv} />
                </td>
                <td className="App3">Sensitivity Emotion
                <App2 onChange={this.onSensitivityChange} value={this.state.emotionSensVal} lab={emotionSensLab} div={emotionSensDiv} />
                </td>
              </tr>
              <tr>
                <td colspan="2"></td>
              </tr>
              <tr>
                <td colspan="2">Weather:</td>
              </tr>
              <tr>
                <td className="App3">Sky Conditions
                <App2 onChange={this.onSkyConditionsChange} value={this.state.weatherSkyVal} lab={weatherSkyLab} div={weatherSkyDiv} />
                </td>
                <td className="App3">Temperature
                <App2 onChange={this.onTemperatureChange} value={this.state.weatherTempVal} lab={weatherTempLab} div={weatherTempDiv} />
                </td>
              </tr>
              <tr>
                <td colspan="2"></td>
              </tr>
              <tr>
                <td colspan="2">Surroundings:</td>
              </tr>
              <tr>
                <td className="App3">People
                <App2 onChange={this.onPeopleChange} value={this.state.surroundPeopleVal} lab={surroundPeopleLab} div={surroundPeopleDiv} />
                </td>
                <td className="App3">Place
                <App2 onChange={this.onPlaceChange} value={this.state.surroundPlaceVal} lab={surroundPlaceLab} div={surroundPlaceDiv} />
                </td>
              </tr>
              <tr>
                <td colspan="2"></td>
              </tr>
            <tr><td colspan="2">Sensory Experience:</td></tr>
            <tr><td colspan="2">When you recall your moment are there sounds you associate with it?</td></tr>
            <tr><td className="App3">Strength of Sounds
            <App2 onChange={this.onStrengthofSoundsChange} value={this.state.soundStrengthVal} lab={soundStrengthLab} div={soundStrengthDiv} />
            </td>
            <td className="App3">Type of Sounds
            <App2 onChange={this.onTypeofSoundsChange} value={this.state.soundTypeVal} lab={soundTypeLab} div={soundTypeDiv} />
            </td></tr>
            <tr><td colspan="2">When you recall your moment are there smells you associate with it?</td></tr>
            <tr><td className="App3">Strength of Smells
            <App2 onChange={this.onStrengthofSmellsChange} value={this.state.smellStrengthVal} lab={smellStrengthLab} div={smellStrengthDiv} />
            </td>
            <td className="App3">Type of Smells
            <App2 onChange={this.onTypeofSmellsChange} value={this.state.smellTypeVal} lab={smellTypeLab} div={smellTypeDiv} />
            </td></tr>
            <tr><td className="App3">Strength of Tastes
            <App2 onChange={this.onStrengthofTastesChange} value={this.state.tasteStrengthVal} lab={tasteStrengthLab} div={tasteStrengthDiv} />
            </td>
            <td className="App3">Type of Tastes
            <App2 onChange={this.onTypeofTastesChange} value={this.state.tasteTypeVal} lab={tasteTypeLab} div={tasteTypeDiv} />
            </td></tr>
            <tr><td colspan="2"></td></tr>
            <tr><td colspan="2">Physical Experience:</td></tr>
            <tr><td className="App3">Sensation
            <App2 onChange={this.onSensationChange} value={this.state.physicalSensationVal} lab={physicalSensationLab} div={physicalSensationDiv} />
            </td>
            <td className="App3">Exertion
            <App2 onChange={this.onExertionChange} value={this.state.physicalExertionVal} lab={physicalExertionLab} div={physicalExertionDiv} />
            </td></tr>
            </table>
          </div>
                <div className="Test">
                    <button onClick={this.pyth}>Mint</button>
                    <div className="Test">
                      <span>{this.state.data}</span>
                    </div>
                    <div className="Test">
                      <img src={this.state.imgsrc} alt="Did Not Mint Yet" />
                    </div>
                </div>
        </div>;
    };

};







