
import React from "react";
import { useState } from "react";

export const Contador = () => {

    const[contador, setContador] = useState(0)

    const sumarContador = () => {
        setContador(contador + 1);
    }
// restar
    const restarContador = () => {
        setContador( contador -1 );
    }

//reiniciar
    const Reiniciar = () => {
        setContador(0);
    }

    return (
            <div className="contador_container">
                <h1>Contador</h1>
                <p>Cuenta cuantos click estas realizando</p>
                <h2>Contador: {contador}</h2>

                <button onClick={sumarContador}>Sumar</button>
                <button onClick={restarContador}>Restar</button>
                <button onClick={Reiniciar}>Reiniciar</button>
            </div>
        )
    }

