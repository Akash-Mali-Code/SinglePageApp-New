import React, {useState} from 'react';
import '../styles/HomePage.css'; // Import CSS

function HomePage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Current Counter: {count}</p>
      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default HomePage;



// import React from 'react';
// import './Home.css'; // Import the CSS for Home page styling
// import { Link } from 'react-router-dom'; // Import Link for navigation

// function Home() {
//   return (
//     <div className="home-page">
//       <div className="welcome-section">
//         <h1>Welcome to Our E-Commerce Site!</h1>
//         <p>Your one-stop shop for all your needs.</p>
//         <Link to="/products" className="btn-primary">Browse Products</Link>
//       </div>
//       <div className="featured-products">
//         <h2>Featured Products</h2>
//         <div className="product-list">
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Product 1" />
//             <h3>Product 1</h3>
//             <p>$19.99</p>
//           </div>
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Product 2" />
//             <h3>Product 2</h3>
//             <p>$29.99</p>
//           </div>
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Product 3" />
//             <h3>Product 3</h3>
//             <p>$39.99</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

