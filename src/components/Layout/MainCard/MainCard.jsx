import React,{useState} from 'react';
import { Card } from '../../UI/Card/Card';
import { UILookingCharacter } from '../../UI/UILookingCharacter/UILookingCharacter';
import image1 from '../../../Images/banner2.png';

export const MainCard = () => {
  
  const [card, setCard] = useState({name:"Rick",gender:"Male",image:image1});
  const URL = 'https://rickandmortyapi.com/api/character';  
  let cards = [];

  const FetchApi=(event)=>{
    if (event.keyCode === 13) {      
      fetch(URL)
      .then(res=>res.json())
      .then(data=>{
        cards = [...cards,data.results];
        setCard(data.results[2])
      })
    }
  }

    
  return (
    <>
      <UILookingCharacter placeHolder="Find a character" event={FetchApi} />
      <main>
        <Card card={card} />           
      </main>
    </>
  )
}