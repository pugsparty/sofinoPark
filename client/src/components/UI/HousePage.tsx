/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Styles/HousePage.css';
import type { HousePageProps } from '../../types/HousePageType';

export default function HousePage(): React.JSX.Element {
  const location = useLocation();
  const cottage = location.state?.cottage as HousePageProps['cottage'];

  return (
    <div className="house-page-container">
      <div className="house-page-content">
        <img src={cottage.photo} alt="Cottage photo" className="house-page-image" />
        <div className="house-page-details">
          <h2>{cottage.price}</h2>
          <p className="house-page-area">{cottage.area}</p>
          <p className="house-page-description">{cottage.description}</p>
        </div>
      </div>
    </div>
  );
}
