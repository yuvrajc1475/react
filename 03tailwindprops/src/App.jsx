import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
 

  return (
    <>
      <h1 className=' text-2xl underline'>Vite with tailwind</h1>
      <Card Username="hitesh" variable='def' />
      <Card />
      <Card />
    </>
  );
}

export default App
