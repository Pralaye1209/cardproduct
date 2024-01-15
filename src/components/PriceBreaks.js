import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AttachmentIcon from '@mui/icons-material/Attachment';

const PriceBreaks = ({ product }) => {
  const {
    features,
    attachments,
    keywords,
    price_breaks,
    currency,
    transport_costs,
    minimum_order_quantity,
    unit,
    delivery_time,
    description_long,
  } = product;

  return (
    <div style={{ background: '#f0f0f0', padding: '20px', marginBottom: '20px', width: '80%', marginRight: '20%', boxSizing: 'border-box' }}>
      <Typography variant="h5" style={{ color: 'red' }}>DESCRIPTION</Typography>
      <Typography variant="body1"><strong>{description_long}</strong></Typography>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '20px 0 0', padding: 0 }}>
        {/* Left-side Card */}
        <Card style={{ padding: '30px 30px 10px 30px' }}>
          <Typography variant="h5" style={{ color: 'red', paddingBottom: 10 }}>DETAILS</Typography>
          <hr style={{ border: '0.1px solid #f0f0f0', marginBottom: 10 }} />
          <Typography variant="subtitle1">Features</Typography>
          <ul style={{ paddingLeft: 15 }}>
            {Object.entries(features).map(([feature, value]) => (
              <li key={feature}>
                {feature}: <strong>{value}</strong>
              </li>
            ))}
          </ul>
          <Typography variant="subtitle1">Attachments</Typography>
          {attachments.map((attachment, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <AttachmentIcon />
              <Typography variant="body2" style={{ color: '#448EE4' }}>{attachment.file_label}</Typography>
            </div>
          ))}
          <Typography variant="subtitle1" style={{ paddingTop: 15, paddingBottom: 10 }}>Keywords</Typography>
          <div>
            {keywords.map((keyword, index) => (
              <Button
                key={index}
                variant="outlined"
                style={{
                  marginRight: '10px',
                  marginBottom: '5px',
                  border:'hidden',
                  borderRadius: '10px',
                  backgroundColor: 'lightgray',
                  color: 'white',
                  fontSize: '12px', 
                  padding: '2px 10px',
                  fontWeight: 'bold' 
                }}
              >
                {keyword}
              </Button>
            ))}
          </div>
        </Card>

        {/* Right-side Card */}
        <Card style={{ padding: '30px 30px 10px 30px' }}>
          <Typography variant="h5" style={{ color: 'red', paddingBottom: 10 }}>PRICING & SHIPPING</Typography>
          <hr style={{ border: '0.1px solid #f0f0f0', marginBottom: 10 }} />
          <ul style={{ paddingLeft: 15 }}>
            <li>Minimum Order: <strong>{minimum_order_quantity} {unit}</strong></li>
            <li>Shipping: <strong>{transport_costs} {currency}</strong></li>
            <li>Delivery: <strong>{delivery_time} days</strong></li>
          </ul>
          <Typography variant="h6" style={{ paddingTop: 20 }}>Price Breaks</Typography>
          <hr style={{ border: '0.1px solid #f0f0f0', marginBottom: 10 }} />
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {Object.entries(price_breaks).map(([quantity, price]) => (
              <li key={quantity} style={{ paddingBottom: 15 }}>
                <strong>ex {quantity} {unit}: {price} {currency}/{unit}</strong>
                <hr style={{ border: '0.1px solid #f0f0f0', marginBottom: 10 }} />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default PriceBreaks;
