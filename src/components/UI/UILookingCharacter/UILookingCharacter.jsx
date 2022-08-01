import React from 'react'

export const UILookingCharacter = ({ event, placeHolder }) => {
  return (
    <input className="input-find" onChange={event} placeholder={placeHolder} type="text" />
  )
}
