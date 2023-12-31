import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    // Check for empty email field
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else {
      // Check email format using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Invalid email format';
      }
    }

    // Check for empty password field
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Login with email:', email, 'and password:', password);
    }
  
    // Make a POST request to the login API endpoint
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        if (data.token) {
          // Authentication successful, save the token to local storage or browser's cookie
          // Redirect to the dashboard or any other authenticated route
          navigate('/dashboard')
          console.log('Login successful');
        } else {
          // Authentication failed, display error message
          console.log('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
