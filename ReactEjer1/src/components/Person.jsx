import React from 'react'

export const Person = (props) => {
  return (
    <div>
        <span>Nombre: {props.name}</span>
        <br></br>
        <span>Apellido: {props.surname}</span>
        <br></br>
        <span>Edad: {props.age}</span>
        <br></br>
        </div>
  )
}
