/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

type CottageType = {
  id: number;
  photo: string;
  price: string;
  area: string;
  description: string;
};

export default function AllHousesPage(): React.JSX.Element {
  const cottages: CottageType[] = [
    {
      id: 1,
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      price: '$250,000',
      area: '120 sqm',
      description: 'Charming two-bedroom cottage with a spacious garden.',
    },
    {
      id: 2,
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      price: '$300,000',
      area: '150 sqm',
      description: 'Modern cottage near the lake with stunning views.',
    },
    {
      id: 3,
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      price: '$450,000',
      area: '200 sqm',
      description: 'Luxury cottage with a private pool and sauna.',
    },
    {
      id: 4,
      photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      price: '$320,000',
      area: '140 sqm',
      description: 'Cozy cottage with rustic interiors and a large terrace.',
    },
    {
      id: 5,
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      price: '$380,000',
      area: '160 sqm',
      description: 'Elegant cottage with mountain views and a spacious patio.',
    },
    {
      id: 6,
      photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      price: '$500,000',
      area: '220 sqm',
      description: 'Spacious four-bedroom cottage with a large backyard.',
    },
    {
      id: 7,
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      price: '$275,000',
      area: '125 sqm',
      description: 'Charming cottage with a cozy fireplace and garden.',
    },
    {
      id: 8,
      photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      price: '$360,000',
      area: '145 sqm',
      description: 'Modern design cottage with open-plan living spaces.',
    },
    {
      id: 9,
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      price: '$420,000',
      area: '190 sqm',
      description: 'Cottage with a private pond and landscaped garden.',
    },
    {
      id: 10,
      photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      price: '$600,000',
      area: '250 sqm',
      description: 'Luxury hillside cottage with a panoramic ocean view.',
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          color: '#3f51b5',
          marginBottom: '30px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Наши коттеджи
      </Typography>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cottages.map((cottage) => (
          <Link
            to={`/house/${cottage.id}`}
            key={cottage.id}
            state={{ cottage }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardMedia component="img" height="140" image={cottage.photo} alt="Cottage photo" />
              <CardContent>
                <Typography variant="h6">{cottage.price}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {cottage.area}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cottage.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
