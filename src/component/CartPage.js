import React, { useState } from 'react';
import '../styles/CartPage.css'; // Import the CSS for styling

function CartPage() {
  // Initial cart with some products
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]);

  // Function to add an item to the cart
  const addItemToCart = () => {
    const newItem = { id: cart.length + 1, name: `Product ${cart.length + 1}`, price: 15 };
    setCart([...cart, newItem]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {/* Cart Items */}
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <button className="remove-btn" onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Add Item Button */}
      <button className="add-item-btn" onClick={addItemToCart}>Add Item</button>

      {/* Total Price */}
      <div className="total-price">
        <strong>Total Price: ${totalPrice}</strong>
      </div>
    </div>
  );
}

export default CartPage;


