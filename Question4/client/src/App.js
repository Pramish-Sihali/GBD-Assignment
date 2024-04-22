import React, { useState } from 'react';
import './App.css';

function LoginValidation() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      alert('Form is valid: Submitting');
      // Handle form submission here
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!username) formErrors.username = 'Username is required';

    if (password.length < 8 || password.length > 20) {
      formErrors.password = 'Password must be between 8 and 20 characters';
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <LoginValidation />
    </div>
  );
}

export default App;
