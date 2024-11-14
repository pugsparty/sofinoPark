import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function ContactsPage(): React.JSX.Element {
  return (
    <div className="container">
      <h1 className="presentation">ПОЛУЧИТЕ ПРЕЗЕНТАЦИЮ</h1>
      <h2 className="contacts">КОНТАКТЫ:</h2>
      <h2 className="phone">+7 (915) 141-97-77</h2>
      <h2 className="email">SOFINOPARK@YANDEX.RU</h2>

      <span className="disclaimer">
        Получить презентациюПредоставленная информация (в том числе визуализации) на сайте не
        является публичной офертой. Приведенные данные, информация могут быть изменены. Визуализации
        могут отличаться от публикуемых изображений. Наличие участков, актуальные цены и данные
        уточняйте в отделе продаж.
      </span>
      <TextField
        id="standard-textarea"
        label="Введите номер"
        placeholder="Placeholder"
        multiline
        variant="standard"
      />
      <TextField
        id="standard-textarea"
        label="Введите email"
        placeholder="Placeholder"
        multiline
        variant="standard"
      />
      <Button className="button">Оставить заявку</Button>
    </div>
  );
}
