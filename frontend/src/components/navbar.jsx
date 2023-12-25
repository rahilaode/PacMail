// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from './assets/logo-pacmail.jpg';
import { Button, Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  const handleLogout = () => {
    // Implementasikan logika logout di sini
    console.log('Logout logic goes here');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Link to="/mail" className="navbar-brand">
        <img src={logo} alt="PacMail Logo" className="logo" />
        <span className="brand">PacMail</span>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;