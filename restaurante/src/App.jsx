import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const platillos = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10,
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20,
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15,
    },
  ];

  return (
    <div>
    <Header />
    <Home platillos={platillos} />
    </div>
  )
}

export default App
