import * as React from 'react';
import { Container, Box, Typography, Button, Card, CardContent } from '@mui/material';

const MainPageInfoCard = ({ title, description }: { title: string; description: string }) => (
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
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function MainPage(): React.JSX.Element {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        color: '#6e1c3a', // Используем стандартный черный цвет для текста
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Поселок комфорт-класса
          <br /> «Софьино Парк»
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '18px', marginBottom: '30px' }}>
          На Калужском шоссе, 20 км от Мкад и 15 км до центра Подольска
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f57c00',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#e65100',
            },
          }}
        >
          Получить презентацию
        </Button>
      </Container>

      {/* Карточки с преимуществами */}
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginTop: '40px',
        }}
      >
        <MainPageInfoCard title="Ключи от готового дома через 6 месяцев." description="" />
        <MainPageInfoCard
          title="Участки с домами по цене от 15.2 млн. Для первых покупателей стоимость от 14.4 млн."
          description=""
        />
        <MainPageInfoCard
          title="Акции на старте продаж на участки и коттеджи от застройщика. Заморозили для вас цены 2023 года."
          description=""
        />
        <MainPageInfoCard
          title="Московская прописка дает право на дополнительные социальные прибавки и различные льготы и выплаты, детские пособия."
          description=""
        />
      </Container>
    </Box>
  );
}
