import React from 'react';
import './card.styles.scss';
import CardItem from '../cardItem/cardItem.component';
import logementsData from '../../logements.json';

const Card = () => {
  return (
    <div className="gallery">
      <div className="gallery-grid">
        {logementsData.map((logement) => (
          <CardItem 
          logement = {logement}
          key = {logement.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;