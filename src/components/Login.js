import React, { useState } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., sending a request to the server)

    // For this example, we'll simply log the data
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="login-container" >
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/">
        <button type="submit">Login</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
