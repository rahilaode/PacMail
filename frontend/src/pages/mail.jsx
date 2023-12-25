// mail.jsx
import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

const Mail = () => {
  const navigate = useNavigate();

  const isAuthenticated = useCallback(() => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }, []);

  useEffect(() => {
    console.log('Is Authenticated:', isAuthenticated());

    if (!isAuthenticated()) {
      console.log('Redirecting to /');
      navigate('/');
    } else {
      console.log('User is authenticated.');
    }
  }, [navigate, isAuthenticated]);

  if (!isAuthenticated()) {
    return (
      <div>
        <p>You must log in to access this page.</p>
        <button onClick={() => navigate('/')}>Back to Login Page</button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <h2>Mail Page</h2>
    </>
  );
};

export default Mail;
