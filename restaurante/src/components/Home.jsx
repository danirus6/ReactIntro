import React from 'react'

export default function Home() {


  return (
    <div>
    <h2>Menú</h2>
    <div>
      {platillos.map(platin => (
        <div key={platin.id}>
          <h3>{platin.name}</h3>
          <p>{platin.description}</p>
          <p>Precio: ${platin.price}</p>
        </div>
      ))}
    </div>
  </div>
);
}