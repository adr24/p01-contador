import { useState } from 'react'
import { Contador } from './components/Contador';


import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  
  const saludo = 'hola mundo'
  
  console.log('saludo');
  return(
    <>
      <Contador/>    
    </>
  )

}
export default App;

