import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

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
    <Card sx={{ maxWidth: 1900, margin: 'auto', padding: 2, marginTop: 4 }}>
      <CardMedia component="img" height="800" image={cottage.photo} alt="Cottage photo" />
      <CardContent>
        <Typography variant="h5">{cottage.price}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{cottage.area}</Typography>
        <Typography variant="body1" color="text.secondary" style={{ marginTop: 10 }}>
          {cottage.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
