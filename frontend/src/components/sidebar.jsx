// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <ListGroup className="sidebar">
      <ListGroup.Item as={Link} to="/mail/inbox">Inbox</ListGroup.Item>
      <ListGroup.Item as={Link} to="/mail/sent">Sent</ListGroup.Item>
    </ListGroup>
  );
};

export default Sidebar;
