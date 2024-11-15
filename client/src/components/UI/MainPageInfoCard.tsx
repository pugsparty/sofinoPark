import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import '../../Styles/MainPageInfoCard.css';

export default function MainPageInfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}): React.JSX.Element {
  return (
    <Card className="cardComponent">
      <CardContent>
        <Typography variant="h6" className="cardTitle">
          {title}
        </Typography>
        <Typography variant="body2" className="cardDescription">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
