import React from 'react'
import { UILookingCharacter } from '../../UI/UILookingCharacter/UILookingCharacter'


export const LookingCharacter = () => {
  return (
    <div className="input-looking">
      <h2>What character do you want to show?</h2>          
      <UILookingCharacter
        event={()=>console.log("Funciona")}
        placeHolder="Ingresa el personaje que deseas buscar"
      />
    </div>
  )
}
