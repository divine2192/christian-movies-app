import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Correct import

const Login = () => {
  const { login } = useAuth(); // Use the login function from AuthContext
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior
    const { username, password } = credentials;
    if (username && password) {
      // Perform login (you might want to validate or call an API here)
      login({ username, profileImage: 'https://via.placeholder.com/100' }); // Example user data
    }
  };

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
