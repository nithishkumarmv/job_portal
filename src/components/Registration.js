import React, { useState } from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/bg.avif'
import {Link} from 'react-router-dom'

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Implement registration logic (e.g., send a POST request to your backend)

    // For this example, we'll simply log the data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="container" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="login-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <label>Role:</label>
          <select value={selectedOption} onChange={handleOptionChange}>
             <option value="option1">Student</option>
             <option value="option2">Employee</option>
          </select>
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
        {/*<div className="form-group">
          <label>:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>*/}
        <Link to="/login">
        <button type="submit">Register</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Registration;
