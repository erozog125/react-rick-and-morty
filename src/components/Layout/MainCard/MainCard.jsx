import React, { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import { UILookingCharacter } from '../../UI/UILookingCharacter/UILookingCharacter';
import image1 from '../../../Images/banner2.png';

export const MainCard = () => {
  const URL = 'https://rickandmortyapi.com/api/character/?name=';
  const [cards, setCards] = useState([
    {
      name: 'Rick',
      gender: 'Male',
      image: image1,
    },
  ]);

  const FetchApi = (event) => {
    if (event.keyCode === 13) {
      fetch(URL + event.target.value)
        .then((res) => res.json())
        .then((data) => {
          setCards(data.results);
        });
    }
  };

  return (
    <div className="div-main">
      <h2>What character do you want to show?</h2>
      <UILookingCharacter placeHolder="Find a character" event={FetchApi} />
      <main>
        {cards.map((character) => (
          <Card card={character} />
        ))}
      </main>
    </div>
  );
};