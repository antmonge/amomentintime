import React from 'react';
import './App.css';
import RangeStepInput from './RangeStepInput.js';
import {forceNumber, label} from './utils';

export default class App2 extends React.Component {


    render() {
        return <div className="App">
                <RangeStepInput
                    min={1} max={100}
                    value={this.props.value} step={1}
                    id={this.props.div}
                    className="inputRange"
                    onChange={this.onChange2.bind(this)}
                />
                    <p className="App2">{label(this.props.value, this.props.lab)}</p>
                    <p className="App2">{this.props.value}</p>
        </div>;
    };
    onChange2(e) {
      const newVal = forceNumber(e.target.value);
      this.props.onChange(newVal)
    }
};








