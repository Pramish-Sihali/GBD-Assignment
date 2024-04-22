import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0); // Initialize the counter state

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); // Increment the counter
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1); // Decrement the counter
  };

  const handleReset = () => {
    setCount(0); // Reset the counter to zero
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
