import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

export default function MainPageInfoCard({ title }: { title: string }): React.JSX.Element {
  return (
    <Card
      sx={{
        width: 280,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: '#6e1c3a', fontWeight: 'bold', fontSize: '16px' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
