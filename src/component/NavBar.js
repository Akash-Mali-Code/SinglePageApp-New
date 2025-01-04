import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for routing
import '../styles/NavBar.css'; // Import the custom CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-item">Home</Link></li>
        <li><Link to="/about" className="navbar-item">About</Link></li>
        <li><Link to="/services" className="navbar-item">Services</Link></li>
        <li><Link to="/products" className="navbar-item">Products</Link></li>
        <li><Link to="/contact" className="navbar-item">Contact</Link></li>
        <li><Link to="/login" className="navbar-item">Login</Link></li>
        <li><Link to="/cart" className="navbar-item">Cart</Link></li>
        <li><Link to="/Account" className="navbar-item">Acount</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
