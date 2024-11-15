import * as React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import MainPageInfoCard from '../UI/MainPageInfoCard';
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
        <MainPageInfoCard title="Ключи от готового дома через 6 месяцев." />
        <MainPageInfoCard title="Участки с домами по цене от 15.2 млн. Для первых покупателей стоимость от 14.4 млн." />
        <MainPageInfoCard title="Акции на старте продаж на участки и коттеджи от застройщика. Заморозили для вас цены 2023 года." />
        <MainPageInfoCard title="Московская прописка дает право на дополнительные социальные прибавки и различные льготы и выплаты, детские пособия." />
      </Container>
    </Box>
  );
}
