import React, { useState } from 'react';
import '../SignUpForm.css'; // Import file CSS terpisah

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Perform validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Continue with login/signup logic
    if (isLogin) {
      console.log('Login with:', email, password);
    } else {
      console.log('Sign Up:', fullName, email, password);
    }

    // Clear form after submission
    setFullName('');
    setEmail('');
    setPassword('');
  };

  // Prefix pada judul halaman
  const pageTitlePrefix = isLogin ? 'Login' : 'Sign Up';

  return (
    <div className="signup-container">
      <h2 style={{ color: '#fff' }}>{pageTitlePrefix} - PacMail</h2>
      <form className="signup-form" onSubmit={handleFormSubmit} method="post">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group password-input-container">
          <label htmlFor="password">Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`eye-icon ${showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="toggle-link">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <span onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
