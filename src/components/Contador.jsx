import React, { useState } from 'react'
import { Button } from './Button'

export const Contador = () => {

    const [contador, setContador] = useState(0)

     // sumar

    const sumarContador = () => {
        setContador( contador + 1 );
    }


    // restar
    const restarContador = () => {
        if ( contador < 1 ) 
            return
        setContador( contador - 1 );
    }

    // reiniciar 
    const reiniciarContador = () => {
        setContador( 0 );
    }

    return (
        <div className='contador_container'>
            <h1>Contador</h1>
            <p>Cuenta cuantos click estas realizando</p>
            <h2 className='contador'>{ contador }</h2>
            
            <Button
                changeContador={ restarContador }
            >
                -1
            </Button>
            
            <Button
                changeContador={ sumarContador }
            >
                +1
            </Button>

            <Button
                changeContador={ reiniciarContador }
            >
                Reiniciar
            </Button>
        
        
        </div>
    )
}
