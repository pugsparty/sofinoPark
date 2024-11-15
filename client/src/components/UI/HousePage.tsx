import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

type CottageType = {
  id: number;
  photo: string;
  price: string;
  area: string;
  description: string;
};

export default function HousePage(): React.JSX.Element {
  const location = useLocation();
  const cottage = location.state?.cottage as CottageType;

   return (
    <div
      style={{
        maxWidth: '1900px',
        margin: 'auto',
        padding: '20px',
        marginTop: '40px',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          transform: 'translateZ(50px)', // Можно изменить значение для изменения глубины
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img
          src={cottage.photo}
          alt="Cottage photo"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '800px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <div style={{ padding: '20px' }}>
          <Typography variant="h5">{cottage.price}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {cottage.area}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginTop: 10 }}
          >
            {cottage.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
