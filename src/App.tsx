// src/App.tsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import MyForm from './MyForm';
import './index.css';

function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard</p>
      </div>
      <div className="card">
        <h2>Card 1</h2>
        <p>This is a card with some content.</p>
      </div>
      <div className="card">
        <h2>Card 2</h2>
        <p>This is another card with some content.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <h1>My Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<MyForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
