import React, { useState } from 'react';
import './App.css';

function TextInputSubmit() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(inputValue);
  };

  const handleReset = () => {
    setInputValue('');  // Clears the input field
  };

  return (
    <div>
      <h1>Submit Your Input</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button 
        onClick={handleSubmit}
        disabled={inputValue.length === 0}
      >
        Submit
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TextInputSubmit />
    </div>
  );
}

export default App;
