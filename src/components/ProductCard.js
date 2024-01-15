// ProductCard.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Header from './Header';
import HeaderInput from './HeaderInput';

const getStarIcons = (rating) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<StarIcon key={i} style={{ color: '#FFA500', fontSize: 18 }} />);
  }

  if (hasHalfStar) {
    starIcons.push(<StarBorderIcon key="half" style={{ color: '#FFA500', fontSize: 18 }} />);
  }

  const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(<StarBorderIcon key={i + filledStars + 1} style={{ color: '#FFA500', fontSize: 18 }} />);
  }

  return starIcons;
};

const ProductCard = ({ product, addToCart }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setCartCount(cartCount + quantity);
  };

  // Check if product is defined
  if (!product) {
    return null; // or render a placeholder or loading state
  }

  const {
    title,
    description_short,
    supplier_name,
    supplier_link,
    stars,
    price,
    currency,
    transport_costs,
    vat_percent,
    images,
  } = product;

  return (
    <>
      <Header product={product} cartCount={cartCount} />
      <Card style={{ marginTop: '60px' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={2} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', margin: '18px' }}>
                <CardMedia component="img" alt="Product Image 1" height="32%" image={images[0]} style={{ border: '2px solid #ddd', borderRadius: '3px', marginBottom: '20px' }} />
                <CardMedia component="img" alt="Product Image 2" height="32%" image={images[2]} style={{ border: '2px solid #ddd', borderRadius: '3px' }} />
                <CardMedia component="" alt=" " height="46%" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ margin: '35px 20px 12px 35px', border: '2px solid #ddd', borderRadius: '3px', overflow: 'hidden' }}>
              <CardMedia component="img" alt="Product Image 0" height="100%" image={images[1]} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', margin: '10px' }}>
                <Typography variant="h6" component="div" style={{ marginBottom: '10px', color: 'darkgray' }}>
                  <strong>{title}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" style={{ marginBottom: '10px' }}>
                  <strong>{description_short}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="a" href={supplier_link} target="_blank" rel="noopener noreferrer" style={{ marginBottom: '10px', textDecoration: 'none' }}>
                  by <strong style={{ color: '#448EE4' }}> {supplier_name}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" style={{ marginBottom: '10px' }}>
                  Stars: {getStarIcons(stars)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" style={{ marginBottom: '10px' }}>
                  Price: <strong>{price} {currency}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" style={{ marginBottom: '10px' }}>
                  Transport Costs: <strong>{transport_costs} {currency}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" style={{ marginBottom: '0px' }}>
                  VAT Percent: <strong>{vat_percent}%</strong>
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '200px' }}>
                  <HeaderInput buttonText="Add to Cart" onButtonClick={handleAddToCart} />
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
