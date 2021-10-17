import React from 'react';
import './App.css';
import App2 from './App';
import nft from './test.gif'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "Not Clicked",
          data: "NA",
          soundStrengthVal: 50,
          weatherSkyVal: 50,
          weatherTempVal: 50
        };
        this.pyth = this.pyth.bind(this)
        this.onSkyConditionsChange = this.onSkyConditionsChange.bind(this)
        this.onTemperatureChange = this.onTemperatureChange.bind(this)
        this.onStrengthofSoundsChange = this.onStrengthofSoundsChange.bind(this)
    }

    onSkyConditionsChange(newVal) {
          this.setState({weatherSkyVal: newVal});
    }

    onTemperatureChange(newVal) {
          this.setState({weatherTempVal: newVal});
    }

    onStrengthofSoundsChange(newVal) {
          this.setState({soundStrengthVal: newVal});
    }

    pyth() {

      const formData = ['SkyConditions', this.state.weatherSkyVal, 'Temperature', this.state.weatherTempVal, 'StrengthofSounds', this.state.soundStrengthVal];

      fetch("/api", {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
        .then(res => res.json())
        .then(data => this.setState({data: data.message}));
    }

    render() {
        const soundStrengthLab = ['Silence', 'Soft', 'Medium', 'Loud', 'Deafening'];
        const soundStrengthDiv = 'StrengthofSounds';
        const weatherSkyLab = ['Sunny', 'Partly Cloudy', 'Mostly Cloudy', 'Cloudy', 'Stormy'];
        const weatherSkyDiv = 'SkyConditions';
        const weatherTempLab = ['Hot', 'Warm', 'Cool', 'Crisp', 'Cold'];
        const weatherTempDiv = 'Temperature';

        return <div className="App">
            <table>
            <tr><td colspan="2">Weather:</td></tr>
            <tr><td>Sky Conditions
            <App2 onChange={this.onSkyConditionsChange} value={this.state.weatherSkyVal} lab={weatherSkyLab} div={weatherSkyDiv} />
            </td>
            <td>Temperature
            <App2 onChange={this.onTemperatureChange} value={this.state.weatherTempVal} lab={weatherTempLab} div={weatherTempDiv} />
            </td></tr>
            <tr><td colspan="2">Sensory Experience:</td></tr>
            <tr><td colspan="2">When you recall your moment are there sounds you associate with it?</td></tr>
            <tr><td colspan="2">Strength of Sounds
            <App2 onChange={this.onStrengthofSoundsChange} value={this.state.soundStrengthVal} lab={soundStrengthLab} div={soundStrengthDiv} />
            </td></tr>
            </table>
                <div className="Test">
                    <button onClick={this.pyth}>Mint</button>
                    <div className="Test">
                        <span>{this.state.data}</span>
                    </div>
                    <div className="Test">
                        <img src={nft} alt="Did Not Mint Yet" />
		       <img src="https://bucketeer-be56a818-47b8-45ac-8891-d13ecbace823.s3.amazonaws.com/public/test.gif" alt="Did Not Mint Yet" />
                    </div>
                </div>
        </div>;
    };

};







