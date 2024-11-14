import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../../Styles/ContactsPageStyle.css';

export default function ContactsPage(): React.JSX.Element {
  return (
    <div className="container">
      <div className="text">
        <h1 className="contacts">КОНТАКТЫ:</h1>
        <h2 className="phone">+7 (915) 141-97-77</h2>
        <h2 className="email">SOFINOPARK@YANDEX.RU</h2>
      </div>

      <div className="form">
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
    </div>
  );
}
