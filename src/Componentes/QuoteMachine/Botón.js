import React from 'react'
import './_boton.scss'

const Botón = props => (
    <button id="new-quote" onClick={props.clickHandler}>
        {props.texto}
    </button>
)

export default Botón