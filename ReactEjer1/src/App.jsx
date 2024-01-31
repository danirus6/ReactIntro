import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Person } from './components/Person'
import PersonClass from './components/PersonClass'

function App() {

  return (
    <>
      <Person name="Dani" surname="Rus" age={28} />
      <Person name="Eder" surname="AAAA" age={26} />
      <Person name="Olatz" surname="BBBB" age={27} />

      <PersonClass name="Carlos" surname="Sánchez" age={40} />
      <PersonClass name="Ernaldo" surname="Carro" age={20} />
      <PersonClass name="Pepe" surname="Viyuela" age={89} />

    </>
  )
}

export default App
