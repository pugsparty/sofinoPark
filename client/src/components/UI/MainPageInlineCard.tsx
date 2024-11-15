import React from 'react';
import '../../Styles/MainPageInlineCard.css';

type MainPageInlineCardProps = {
  title: string;
  description: string;
};

export default function MainPageInlineCard({
  title,
  description,
}: MainPageInlineCardProps): React.JSX.Element {
  return (
    <div className="horizontalCard">
      <div className="iconPlaceholder">✓</div>
      {''}
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{description}</p>
      </div>
    </div>
  );
}
