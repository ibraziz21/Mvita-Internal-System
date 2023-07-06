import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!jobDescription.trim()) {
      errors.jobDescription = 'Job Description is required';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post('/api/register', {
          name,
          email,
          jobDescription,
          phoneNumber,
          password,
        })
        .then((response) => {
          // Handle the response from the backend
          if (response.data.message) {
            // Registration successful, display success message or redirect to login page
            console.log('Registration successful');
          } else {
            // Registration failed, display error message
            console.log('Registration failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const isValidEmail = (value) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Job Description:</label>
          <select value={jobDescription} onChange={handleJobDescriptionChange}>
            <option value="">Select Job Description</option>
            <option value="Receptionist">Receptionist</option>
            <option value="IT">IT</option>
            <option value="Secretary">Secretary</option>
            <option value="Education Head">Education Head</option>
            <option value="Empowerment Head">Empowerment Head</option>
            <option value="Sports Arts and Culture Head">Sports Arts and Culture Head</option>
            <option value="Health Head">Health Head</option>
          </select>
          {errors.jobDescription && <span className="error">{errors.jobDescription}</span>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Registration;
