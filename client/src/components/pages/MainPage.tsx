import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MainPageInlineCard from '../UI/MainPageInlineCard';
import MainPageInfoCard from '../UI/MainPageInfoCard';
import '../../Styles/MainPage.css';

// Первый набор данных для преимуществ
const additionalInfoData = [
  { title: 'Удобства', description: 'Ключи от готового дома через 6 месяцев.' },
  {
    title: 'Выгода',
    description:
      'Участки с домами по цене от 15.2 млн. Для первых покупателей стоимость от 14.4 млн.',
  },
  {
    title: 'Акции',
    description:
      'Акции на старте продаж на участки и коттеджи от застройщика. Заморозили для вас цены 2023 года.',
  },
  {
    title: 'Преимущества',
    description:
      'Московская прописка дает право на дополнительные социальные прибавки и различные льготы и выплаты, детские пособия.',
  },
];

// Второй набор данных для дополнительных характеристик
const mainAdvantagesData = [
  {
    title: 'Чистота сделки',
    description:
      'Земля находится в собственности, сделка происходит с продавцом по Договору купли-продажи.',
  },
  {
    title: 'Возможность регистрации',
    description:
      'Территория относится к землям населенных пунктов для индивидуального жилищного строительства (ИЖС).',
  },
  {
    title: 'Оформление в собственность',
    description: 'Вы становитесь владельцем участка, а затем построенного на нем дома.',
  },
  {
    title: 'Инфраструктура',
    description: 'Детская площадка, спортивные площадки, теннисный корт.',
  },
  { title: 'Безопасность', description: 'Закрытая, охраняемая территория, въездная группа, КПП.' },
];

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

      {/* Первый размап с преимуществами (без фонового изображения) */}
      <Box className="inlineCardContainer">
        {mainAdvantagesData.map((card, index) => (
          <MainPageInlineCard key={index} title={card.title} description={card.description} />
        ))}
      </Box>

      <Typography variant="h4" className="mainPageContentTitle" style={{ marginTop: '40px' }}>
        Почему именно мы
      </Typography>

      {/* Второй размап с фоновым изображением */}
      <Box className="cardContainer">
        <Box className="mainPageBackground" />
        {additionalInfoData.map((card, index) => (
          <MainPageInfoCard key={index} title={card.title} description={card.description} />
        ))}
      </Box>
    </Box>
  );
}
