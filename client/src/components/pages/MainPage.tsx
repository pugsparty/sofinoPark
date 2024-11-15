import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MainPageInfoCard from '../UI/MainPageInfoCard';
import '../../Styles/MainPage.css';

export default function MainPage(): React.JSX.Element {
  return (
    <Box className="mainPageContainer">
      <Container maxWidth="lg" className="mainPageContent">
        <Typography variant="h3" className="mainPageTitle">
          Поселок комфорт-класса
          <br /> «Софьино Парк»
        </Typography>
        <Typography variant="h6" className="mainPageSubtitle">
          На Калужском шоссе, 20 км от Мкад и 15 км до центра Подольска
        </Typography>
      </Container>

      <Typography variant="h4" className="mainPageContentTitle">
        Наши преимущества
      </Typography>

      <Box className="cardContainer">
        <Box className="mainPageBackground" />
        <MainPageInfoCard title="Удобства" description="Ключи от готового дома через 6 месяцев." />
        <MainPageInfoCard
          title="Выгода"
          description="Участки с домами по цене от 15.2 млн. Для первых покупателей стоимость от 14.4 млн."
        />
        <MainPageInfoCard
          title="Акции"
          description="Акции на старте продаж на участки и коттеджи от застройщика. Заморозили для вас цены 2023 года."
        />
        <MainPageInfoCard
          title="Преимущества"
          description="Московская прописка дает право на дополнительные социальные прибавки и различные льготы и выплаты, детские пособия."
        />
      </Box>
    </Box>
  );
}
