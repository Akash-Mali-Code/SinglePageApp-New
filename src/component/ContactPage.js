import React, { useState } from 'react';
import '../styles/ContactPage.css';

function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${email}`);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </label> 
        <label>
          Message:
          <input
          type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />
        </label>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;

