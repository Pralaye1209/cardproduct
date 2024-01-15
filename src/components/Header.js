// Header.js
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderInput from './HeaderInput';

const Header = ({ product, cartCount, addToCart }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!product) {
    return null; // or render a placeholder or loading state
  }

  const { title } = product;

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <AppBar
  position="fixed"
  style={{
    top: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    boxShadow: scrolling
      ? '0px 6px 6px -3px rgba(0, 0, 0, 0.1), 0px 10px 14px 1px rgba(0, 0, 0, 0.09), 0px 6px 20px 3px rgba(0, 0, 0, 0.08)'
      : 'none',
    transition: 'box-shadow 0.3s ease',
  }}
>

      <Toolbar style={{ justifyContent: 'space-between', position: 'relative' }}>
        {/* Left of the screen */}
        <Typography style={{ color: 'red', marginRight: '200px' }} variant="h6" component="div">
          {title}
        </Typography>

        {/* Input field and Add to Cart button */}
        {scrolling && <HeaderInput buttonText="Add to Cart" onButtonClick={handleAddToCart} />}

        {/* Icons on the right */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="end" color="gray" style={{ marginLeft: '10px' }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton edge="end" color="gray" style={{ marginLeft: '2px' }}>
            <AppsIcon />
          </IconButton>
          <IconButton edge="end" color="gray" style={{ marginLeft: '10px' }}>
            <ShoppingCartIcon />
            <span
              style={{
                position: 'absolute',
                top: '1px',
                right: '4px',
                backgroundColor: 'red',
                borderRadius: '50%',
                padding: '0.1px 2px 3px 8px',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {typeof cartCount === 'number' ? cartCount.toString() : ''}
            </span>
            {/* Vertical line */}
            <span
              style={{
                position: 'absolute',
                top: '20',
                left: '-8px',
                height: '60px',
                width: '2px',
                backgroundColor: ' #f0f0f0',
              }}
            ></span>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
