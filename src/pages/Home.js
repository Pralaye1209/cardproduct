import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import PriceBreaks from '../components/PriceBreaks';
import data from '../../data.json';

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity) => {
    console.log('Add to cart clicked with quantity', quantity);
    setCartCount((prevCount) => prevCount + quantity);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div style={{ position: 'sticky' }}>
        <Header product={data.article} cartCount={cartCount} addToCart={addToCart} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>
          {/* Pass addToCart as a prop to ProductCard */}
          <ProductCard product={data.article} addToCart={addToCart} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <PriceBreaks product={data.article} />
        </div>
      </div>
    </div>
  );
};

export default Home;
