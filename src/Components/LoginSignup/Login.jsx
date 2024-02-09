// LoginForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialFormData = {
    username: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const newFormErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newFormErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    // Perform login logic (replace with your authentication logic)
    console.log('Login submitted:', formData);

    // Reset form data after submission
    setFormData(initialFormData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.username}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.password}</span>
        </div>
        <div>
        <p>
          Not registered? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;