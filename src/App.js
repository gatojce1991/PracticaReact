import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
     <div>
        <Header title="Mi primera Aplicacion"/>
       hola mundo
        <footer copyrigth="Copyright 2017 - All rights reserved" />
       </div>

      
    );
  }
}

export default App;
