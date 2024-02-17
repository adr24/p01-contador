
import React from 'react'

export const Banner = ({ ciudad, setCiudad }) => {



    const changeCity = () => {
        setCiudad('Cochabamba')
    }

    return (
        <div>
            <h1>Banner de mi aplicacion</h1>
            <h2>Bienvenido desde "{ ciudad }"</h2>

            <button onClick={ changeCity }>
                Cambiar Ciudad
            </button>

            
        </div>
    )
}


