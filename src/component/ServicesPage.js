import React, { useState } from 'react';
import '../styles/ServicesPage.css';  


function ServicesPage() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="services-page">
      <h1>Our Premium Services</h1>
      <p>At our company, we strive to offer the best solutions tailored to your needs. Whether you're looking to build a website, develop a mobile app, or deploy cloud-based services, we are here to help you every step of the way!</p>
      <button className="btn" onClick={toggleDetails}>
        {showDetails ? 'Hide Service Details' : 'Show Service Details'}
      </button>

      {showDetails && (
        <div className="services-details">
          <div className="service">
            <h3>Web Development</h3>
            <p>Our web development services encompass everything from responsive websites to complex web applications. We use modern frameworks like React, Angular, and Vue.js to ensure your site is fast, secure, and scalable.</p>
          </div>
          
          <div className="service">
            <h3>Mobile App Development</h3>
            <p>We create high-performance mobile apps for both iOS and Android platforms. From concept to deployment, we design intuitive and user-friendly apps that meet your business needs and delight your users.</p>
          </div>
          
          <div className="service">
            <h3>Cloud Solutions</h3>
            <p>Our cloud solutions are designed to provide scalability, reliability, and security for your business. Whether it's hosting, data storage, or cloud-based applications, we ensure your infrastructure is optimized for performance and cost-effectiveness.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;
