import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header'
import CajaFrase from './Componentes/QuoteMachine/CajaFrase'
import Footer from './Componentes/Footer/Footer'
import frases from './frases.js'
import {random} from 'lodash'


class App extends React.Component {

  state = {
    frases: frases,
    indexFraseSeleccionada: null
  }
 
  componentDidMount = () => {
      this.setState({indexFraseSeleccionada: this.indexAleatorioFrase()})
  }

  indexAleatorioFrase = () => this.state.frases.length !== 0 ? random(0, this.state.frases.length - 1) : undefined;

  get fraseSeleccionada(){
    return this.state.frases.length !== 0 && Number.isInteger(this.state.indexFraseSeleccionada) ? this.state.frases[this.state.indexFraseSeleccionada] : undefined;
  }

  siguienteFrase = () => {
    this.setState({indexFraseSeleccionada: this.indexAleatorioFrase()})
  }

  render(){
    let quote = "";
    let author = "";
    if(this.fraseSeleccionada){
      quote = this.fraseSeleccionada.frase;
      author = this.fraseSeleccionada.autor; 
  }
    return (
      <div className="App" >
        <Header 
          tituloProyecto="Random Quote Machine"
          autor="Alejandro Llanganate" 
        />
        <main>
             <CajaFrase frase={quote} autor={author} clickHandler={this.siguienteFrase}  />
        </main>
        <Footer 
          nombreOrganización="FreeCodeCamp"
        />
  
      </div>
    );
  }
}

export default App;
