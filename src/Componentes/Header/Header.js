import React from 'react'
 import './header.scss'
const Header = props => (
    <header className="app-header">
        <h1>{props.tituloProyecto}</h1>
        <p>Por {props.autor}</p>
    </header>
)

export default Header