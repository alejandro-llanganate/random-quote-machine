import React from 'react'
import Botón from './Botón'
import './quoteMachine.scss'

const CajaFrase = props => (
    <div id="quote-box" >
        <div id="text"> 
            <p> <label className="comillas">"</label>{props.frase}<label className="comillas">"</label></p>
        </div>
        <div id="author"> 
            <p> - {props.autor}</p>
        </div>

        <div className="botones"> 
            <div className="twitterIcon">
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.frase}${" - "+props.autor}&hashtags=freecodecamp`} target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter-square"></i></a>
            </div>
            <Botón texto="Siguiente" clickHandler={props.clickHandler} />            
        </div>

    </div>
)

export default CajaFrase