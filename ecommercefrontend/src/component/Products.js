import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: 'Laptop', price: 999.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smartphone', price: 699.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/150' },
];

const Products = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="products-wrapper">
      <div className="brand-title">K A R A</div>

      <div className="topnav">
        <nav>
          <a onClick={() => navigate('/')} href="#home"><b>Home</b></a>
          <a href="#shop"><b>Shop</b></a>
          <a href="#about"><b>About Us</b></a>
          <a href="#contact"><b>Contact Us</b></a>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search.." />
        </div>
      </div>

      <div className="products-header">
  <h2 className="products-heading">SHOP OUR COLLECTION</h2>
  <button className="cart-button" onClick={() => navigate('/cart')}>
    View Cart 🛒
  </button>
</div>


      <div className="products-grid">
        {mockProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
