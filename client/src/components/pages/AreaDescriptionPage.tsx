import React from 'react';
import img from '../../img/-180.jpeg';
import  '../../Styles/AreaDescriptionPag.css';

export default function AboutSection(): React.JSX.Element {
  return (
    <div className="wrapper">
      <h1 className="title">О ПОСЕЛКЕ</h1>
      <div className="content">
        <div>
          <img
            src={img}
            alt="Изображение поселка"
            
          />
        </div>

        <div className="text">
          <p className="text2">
            Наш поселок «Софьино Парк» про комфорт, безопасность и спокойствие.
          </p>
          <p className="text2">Городской уровень жизни в собственном доме с участком.</p>
          <p className="text2">
            Здесь дети могут беспрепятственно играть на свежем воздухе, а взрослые наслаждаться
            природой и общением с соседями.
          </p>
          <p className="text2">
            В нашем поселке есть большое количество прекрасных участков для развития домашних
            животных.
          </p>
          <p className="text2">
            Живя в коттеджном поселке, вы обретаете не только дом, но и настоящее сообщество, где
            ценятся семейные ценности и дружба.
          </p>
          <p className="text2">Добро пожаловать в наш уютный уголок «Софьино Парк»!</p>
        </div>
      </div>
      
    </div>
  );
}
