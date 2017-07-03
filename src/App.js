import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactoForm from './components/ContactoForm';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    SearchText:'',
    Nombre:'',
    Apellido:'',
    Telefono:'',
  };
}

handleSearchTextChange=(event) =>{
  this.setState({
    SearchText: event.target.value
  });

}

handleNombreChange=(event) =>{
  this.setState({
    Nombre: event.target.value
  });

}

handleApellidoChange=(event) =>{
  this.setState({
    Apellido: event.target.value
  });

}


handleTelefonoChange=(event) =>{
  this.setState({
    Telefono: event.target.value
  });

}

  render() {
    return (
     <div>
        <Header title="Mi primera Aplicacion"/>
        <div className="container">
      <div className="row" >
        <div className="col-md-6">
          <SearchBox value={this.state.SearchText}
           onChange={this.handleSearchTextChange}/>
        </div>
        <div className="col-md-6">
          <h3>Nuevo Contacto</h3>
          <ContactoForm value={this.state.Nombre}
           onChange={this.handleNombreChange}
            value1={this.state.Apellido}
           onChange1={this.handleApellidoChange}
           value2={this.state.Telefono}
           onChange2={this.handleTelefonoChange}/>
        </div>
        </div>
      </div>
        <Footer copyrigth="Copyright 2017 - Juan Carlos Espinel" />
       </div>
    );
  }
}

export default App;
