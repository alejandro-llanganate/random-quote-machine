import React from 'react'

const Footer = props => (
    <footer className="app-footer">
        Creado para {props.nombreOrganización} <img style={{width: 25}} src="https://www.coltonjdale.com/img/misc/freeCodeCamp.png" alt="logo de FreeCodeCamp" />
    </footer>
)

export default Footer