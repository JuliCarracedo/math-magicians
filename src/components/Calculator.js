/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Component } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  calculate(obj, button) {
    const { updateState } = this.props;
    let newObj;
    try {
      newObj = calculate(obj, button);
    } catch {
      newObj = {
        total: 'Something went wrong',
      };
    }
    this.calculatorObj = newObj;
    updateState(newObj);
  }

  displayResult() {
    const { calculatorObj } = this.props;
    const { total } = calculatorObj;
    const { next } = calculatorObj;
    const { operation } = calculatorObj;
    let result = null;

    if (total === null && next === null) {
      result = 0;
    } else if (next !== null && total === null) {
      result = next;
    } else if (next !== null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation} ${next}`;
      } else {
        result = total;
      }
    } else if (next === null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation}`;
      } else {
        result = total;
      }
    }

    return result;
  }

  render() {
    const { calculatorObj } = this.props;
    return (
      <div className="table">
        <div className="row field">
          <p id="field-text">
            {' '}
            { this.displayResult() }
          </p>
        </div>
        <div className="row">
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, 'AC'); }}>AC</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '+/-'); }}>+/-</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '%'); }}>%</div>
          <div className="button orange" onClick={() => { this.calculate(calculatorObj, '÷'); }}>÷</div>
        </div>
        <div className="row">
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '7'); }}>7</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '8'); }}>8</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '9'); }}>9</div>
          <div className="button orange" onClick={() => { this.calculate(calculatorObj, 'x'); }}>X</div>
        </div>
        <div className="row">
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '4'); }}>4</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '5'); }}>5</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '6'); }}>6</div>
          <div className="button orange" onClick={() => { this.calculate(calculatorObj, '-'); }}>-</div>
        </div>
        <div className="row">
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '1'); }}>1</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '2'); }}>2</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '3'); }}>3</div>
          <div className="button orange" onClick={() => { this.calculate(calculatorObj, '+'); }}>+</div>
        </div>
        <div className="row">
          <div className="big-button gray" onClick={() => { this.calculate(calculatorObj, '0'); }}>0</div>
          <div className="button gray" onClick={() => { this.calculate(calculatorObj, '.'); }}>.</div>
          <div className="button orange" onClick={() => { this.calculate(calculatorObj, '='); }}>=</div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  calculatorObj: PropTypes.instanceOf(Object).isRequired,
};

export default Calculator;
