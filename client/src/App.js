import React from 'react';
import './App.css';
import RangeStepInput from './RangeStepInput.js';
import {forceNumber, label} from './utils';

export default class App2 extends React.Component {
//    constructor(props) {
//        super(props);
//        this.onChange2 = this.onChange2.bind(this)
//    }

    render() {
        return <div className="App">
            <div className="App2">
                <RangeStepInput
                    min={1} max={100}
                    value={this.props.value} step={1}
                    id={this.props.div}
                    className="inputRange"
                    onChange={this.onChange2.bind(this)}
                />
                <div className="App2">
                    <span>{label(this.props.value, this.props.lab)}</span>
                </div>
                <div className="App2">
                    <span>{this.props.value}</span>
                </div>
            </div>
        </div>;
    };
    onChange2(e) {
      const newVal = forceNumber(e.target.value);
      this.props.onChange(newVal)
    }
};








