import React,{useState} from 'react';
import { Card } from '../../UI/Card/Card';
import { UILookingCharacter } from '../../UI/UILookingCharacter/UILookingCharacter';
import image1 from '../../../Images/banner2.png';

export const MainCard = () => {

  // const card = {name:"Rick",gender:"Male",image:image1};
  const [card, setCard] = useState({name:"Rick",gender:"Male",image:image1});
  const URL = 'https://rickandmortyapi.com/api/character';

  function renderCards(event) {
    let input_character = event.target.value;
    if (event.keyCode === 13) {
      fetch(URL)
      .then(response=>response.json())
      .then(data=>{
        data.results.map(element=>{
          if (card.name.includes(input_character)) {
            setCard(element);
          }
        })
      })
    }
  }

  return (
    <>
      <UILookingCharacter placeHolder="Find a character" event={renderCards} />
      <main>
        <Card card={card} />
      </main>            
    </>
  )
}
