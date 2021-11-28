import React from 'react';
import './App.css';
import RangeStepInput from './RangeStepInput.js';
import {forceNumber, label} from './utils';

export default class App2 extends React.Component {


    render() {
        return <React.Fragment><li><RangeStepInput
                    min={1} max={100}
                    value={this.props.value} step={1}
                    id={this.props.div}
                    className="inputRange"
                    onChange={this.onChange2.bind(this)}
                /></li>
                    <li>{label(this.props.value, this.props.lab)}</li>
                    <li>{this.props.value}</li></React.Fragment>;
    };
    onChange2(e) {
      const newVal = forceNumber(e.target.value);
      this.props.onChange(newVal)
    }
};








