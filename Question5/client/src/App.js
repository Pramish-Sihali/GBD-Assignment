import React, { useState, useEffect } from 'react';
import './App.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.website}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
