// SignUpForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const initialFormData = {
    username: '',
    email: '',
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

    // Perform sign-up logic (replace with your authentication logic)
    console.log('Sign Up submitted:', formData);

    // Reset form data after submission
    setFormData(initialFormData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.email}</span>
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
        <p>Already registered <Link to="/login">Login</Link></p>
      </div>

        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
