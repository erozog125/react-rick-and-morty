import React from 'react';
import './Card.css';

export const Card = ({ card }) => {
  const { name, image, gender } = card;
  return (
    <>
      <div className="card">
        <div className="div-img">
          <img className="img-card" src={image} alt={name} />
        </div>
        <div className="txt-content">
          <h2>{name}</h2>
          <p>Gender:{gender}</p>
        </div>
      </div>
    </>
  );
};
