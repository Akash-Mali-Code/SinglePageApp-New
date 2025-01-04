import React from 'react';
import '../styles/Account.css'; // Import the custom CSS file for styling

function Account() {
  return (
    <div className="account-page">
      <h1>My Account</h1>
      <div className="account-details">
        <h2>Account Details</h2>
        <div className="account-info">
          <label>Username:</label>
          <span>JohnDoe</span>
        </div>
        <div className="account-info">
          <label>Email:</label>
          <span>johndoe@example.com</span>
        </div>
      </div>
      <div className="account-actions">
        <button>Edit Profile</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Account;