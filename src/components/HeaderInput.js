// HeaderInput.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const HeaderInput = ({ buttonText, onButtonClick }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity >= 1 ? newQuantity : 1);
  };

  const handleAddToCart = () => {
    onButtonClick(quantity);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
      <TextField
        label="Quantity"
        value={quantity}
        type="number"
        onChange={handleQuantityChange}
        style={{ padding: '2px', fontSize: '5px', width: '30%', marginLeft: '5px' }}
      />
      PCE
      <Button
        variant="contained"
        style={{
          backgroundColor: 'red',
          color: 'white',
          marginLeft: '20px',
          borderRadius: '4px',
          padding: '12px',
          textTransform: 'none', 
        }}
        startIcon={<AddIcon style={{ fontSize: 30 }} />}
        onClick={handleAddToCart}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default HeaderInput;
