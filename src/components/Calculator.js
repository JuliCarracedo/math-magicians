/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  render() {
    return (
      <div className="table">
        <div className="row field"><p id="field-text">Welcome</p></div>
        <div className="row">
          <div className="button gray" onClick={calculate(obj, 'AC')}>AC</div>
          <div className="button gray" onClick={calculate(obj, 'AC')}>+/-</div>
          <div className="button gray" onClick={calculate(obj, 'AC')}>%</div>
          <div className="button orange" onClick={calculate(obj, 'AC')}>/</div>
        </div>
        <div className="row">
          <div className="button gray">7</div>
          <div className="button gray">8</div>
          <div className="button gray">9</div>
          <div className="button orange">X</div>
        </div>
        <div className="row">
          <div className="button gray">4</div>
          <div className="button gray">5</div>
          <div className="button gray">6</div>
          <div className="button orange">-</div>
        </div>
        <div className="row">
          <div className="button gray">1</div>
          <div className="button gray">2</div>
          <div className="button gray">3</div>
          <div className="button orange">+</div>
        </div>
        <div className="row">
          <div className="big-button gray">0</div>
          <div className="button gray">.</div>
          <div className="button orange">=</div>
        </div>
      </div>
    );
  }
}
export default Calculator;
