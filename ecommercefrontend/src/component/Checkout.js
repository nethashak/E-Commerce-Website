import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="checkout-wrapper">
      <button className="back-button" onClick={() => navigate('/cart')}>
        ← Back to Cart
      </button>

      <h2 className="checkout-heading">Checkout</h2>

      <div className="checkout-summary">
        {cartItems.map(item => (
          <div className="checkout-item" key={item.id}>
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="checkout-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;