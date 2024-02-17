import { useState } from 'react'
import { Banner } from './components/Banner'
import { Contador } from './components/Contador';


const App = () => {

  const [ ciudad, setCiudad  ] = useState('La Paz');

  console.log(ciudad);

  return(
    <>
      {/* <Banner 
        ciudad={ ciudad } 
        setCiudad={ setCiudad }
      /> */}

      <Contador/>
    </>
  )
}

export default App;