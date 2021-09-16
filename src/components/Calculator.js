/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = (props) => {
  let { calculatorObj } = props;

  const clickButton = (obj, button) => {
    const { updateState } = props;
    let newObj;
    try {
      newObj = calculate(obj, button);
    } catch {
      newObj = {
        total: 'Something went wrong',
      };
    }
    calculatorObj = newObj;
    updateState(newObj);
  };

  const displayResult = () => {
    const { total, next, operation } = calculatorObj;
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
  };

  return (
    <div className="table">
      <div className="row field">
        <p id="field-text">
          { displayResult() }
        </p>
      </div>
      <div className="row">
        <div className="button gray" onClick={() => { clickButton(calculatorObj, 'AC'); }}>AC</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '+/-'); }}>+/-</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '%'); }}>%</div>
        <div className="button orange" onClick={() => { clickButton(calculatorObj, '÷'); }}>÷</div>
      </div>
      <div className="row">
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '7'); }}>7</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '8'); }}>8</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '9'); }}>9</div>
        <div className="button orange" onClick={() => { clickButton(calculatorObj, 'x'); }}>X</div>
      </div>
      <div className="row">
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '4'); }}>4</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '5'); }}>5</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '6'); }}>6</div>
        <div className="button orange" onClick={() => { clickButton(calculatorObj, '-'); }}>-</div>
      </div>
      <div className="row">
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '1'); }}>1</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '2'); }}>2</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '3'); }}>3</div>
        <div className="button orange" onClick={() => { clickButton(calculatorObj, '+'); }}>+</div>
      </div>
      <div className="row">
        <div className="big-button gray" onClick={() => { clickButton(calculatorObj, '0'); }}>0</div>
        <div className="button gray" onClick={() => { clickButton(calculatorObj, '.'); }}>.</div>
        <div className="button orange" onClick={() => { clickButton(calculatorObj, '='); }}>=</div>
      </div>
    </div>
  );
};
Calculator.propTypes = {
  updateState: PropTypes.func.isRequired,
  calculatorObj: PropTypes.instanceOf(Object).isRequired,
};

export default Calculator;
