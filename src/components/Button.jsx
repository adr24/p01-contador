import React from 'react'

export const Button = ({ children, changeContador, content }) => {


    // Callback que se ejecute al hacer un click

    return (
        <div className='contador_button' onClick={ changeContador }>
            {/* Contenido dinamico */}
            { children }
        </div>
    )
}
