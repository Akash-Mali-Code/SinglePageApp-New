import React, { useState, useEffect } from 'react';
import '../styles/ProductsPage.css';
import '../styles/Spinner.css'; // Import the spinner CSS

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="spinner"></div>; // Display the spinner while loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  return (
    <div className="products-page">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;