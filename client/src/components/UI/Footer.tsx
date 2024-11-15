import React from 'react';
import '../../Styles/Footer.css';

export default function Footer(): React.JSX.Element {
  return (
    <div className="footerContainer">
      <div className="footer">
        Предоставленная информация (в том числе визуализации) на сайте не является публичной
        офертой. Приведенные данные, информация могут быть изменены. Визуализации могут отличаться
        от публикуемых изображений. Наличие участков, актуальные цены и данные уточняйте в отделе
        продаж.
      </div>
    </div>
  );
}
