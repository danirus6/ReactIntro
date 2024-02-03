import React from 'react'

const Home = (props) => {
  return (
    <div>
      <h2>Menú</h2>
      <div>
        {props.platillos.map(platin => (
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
export default Home