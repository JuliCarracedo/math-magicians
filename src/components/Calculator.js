/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="table">
        <div className="row field"><p id="field-text">Welcome</p></div>
        <div className="row">
          <div className="button gray">AC</div>
          <div className="button gray">+/-</div>
          <div className="button gray">%</div>
          <div className="button orange">/</div>
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
