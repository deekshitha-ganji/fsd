import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operation, setOperation] = useState('');

  const appendToCalc = (value) => {
    setCurrentInput((prev) => prev + value);
  };

  const handleOperation = (op) => {
    if (currentInput === '') return;
    setPreviousInput(currentInput);
    setOperation(op);
    setCurrentInput('');
  };

  const calculate = () => {
    if (previousInput === '' || currentInput === '' || operation === '') return;

    let result;
    try {
      if (operation === '/' && currentInput === '0') {
        setCurrentInput('Division by 0 Error');
        return;
      }
      result = eval(previousInput + operation + currentInput);
      setCurrentInput(result.toString());
      setPreviousInput('');
      setOperation('');
    } catch (e) {
      setCurrentInput('Error');
      setPreviousInput('');
      setOperation('');
    }
  };

  const clearCalc = () => {
    setCurrentInput('');
    setPreviousInput('');
    setOperation('');
  };

  return (
    <div className="calculator"> {/* Calculator container */}
      <h1>React Calculator</h1>
      {/* Display previous input and operation */}
      <div className="calc-display">
        {previousInput} {operation}
      </div>
      {/* Current input */}
      <input type="text" value={currentInput} readOnly className="calc-display" />
      <div className="button-container">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/', 'C'].map((btn) => (
          <button key={btn} onClick={() => (btn === 'C' ? clearCalc() : /[+\-*/]/.test(btn) ? handleOperation(btn) : appendToCalc(btn))}>
            {btn}
          </button>
        ))}
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default App;
