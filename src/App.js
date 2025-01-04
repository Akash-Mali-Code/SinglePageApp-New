import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Sample pages
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import ServicesPage from './component/ServicesPage';
import ProductsPage from './component/ProductsPage';
import ContactPage from './component/ContactPage';
import LoginPage from './component/LoginPage';
import CartPage from './component/CartPage';
import Account from './component/Account';
import Navbar from './component/NavBar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Display the Navbar at the top of the app */}

      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
