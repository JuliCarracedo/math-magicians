import { useState } from 'react';
import Calculator from './components/Calculator';

const App = () => {
  const [calculatorObj, setCalculatorObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const updateState = (obj) => {
    setCalculatorObj(
      {
        calculatorObj: obj,
      },
    );
  };

  return (
    <body>
      <Calculator updateState={updateState} calculatorObj={calculatorObj} />
    </body>
  );
};

export default App;
