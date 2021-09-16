/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(
      {
        calculatorObj: obj,
      },
    );
  }

  render() {
    const { calculatorObj } = this.state;
    return (
      <body>
        <Calculator updateState={this.updateState} calculatorObj={calculatorObj} />
      </body>
    );
  }
}

export default App;
