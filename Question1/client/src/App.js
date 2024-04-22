import React from 'react';
import './App.css';

function AddTwoNumbers() {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState('');

  const handleCalculate = () => {
    const num1 = parseInt(number1, 10);
    const num2 = parseInt(number2, 10);

    if (num1 === num2) {
      setError('The two numbers must be different.');
      setResult(null);
    } else {
      setError('');
      setResult(num1 + num2);
    }
  };

  const handleReset = () => {
    setNumber1('');
    setNumber2('');
    setResult(null);
    setError('');
  };

  return (
    <div>
      <h1>Add Two Different Numbers</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleCalculate}>Add Numbers</button>
      <button onClick={handleReset}>Reset</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AddTwoNumbers />
    </div>
  );
}

export default App;
