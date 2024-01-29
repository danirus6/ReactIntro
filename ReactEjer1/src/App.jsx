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
      <PersonClass name="Carlos" surname="Sánchez" age={40} />

    </>
  )
}

export default App
