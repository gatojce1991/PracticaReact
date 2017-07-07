import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactoForm from './components/ContactoForm';
import ContactList from './components/ContactList';
import axios from 'axios';

const API_URL='https://address-book-api-kfpkaqtghu.now.sh';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    SearchText:'',
    Nombre:'',
    Apellido:'',
    Telefono:'',
    contacts:[],

  };
}

componentDidMount(){

this.getContacts();
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

getContacts= () => {
  axios({
    method:'GET',
    url: API_URL + '/api/contacts',
    headers:{
      'Api-Key':'1719705210',
    },
  }).then((response)=>{
   console.log(response);
  this.setState({contacts:response.data.data})})
  .catch((error)=>
  console.log(error))
}


saveContact=(contact)=>{
   axios({
    method:'Post',
    url: API_URL + '/api/contacts',
    headers:{
      'Api-Key':'1719705210',
      'Content-Type':'application/json'
    },
    data:{
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
    },
   }).then((response)=>{
console.log(response);
this.getContacts();
   }).catch((error)=>
  console.log(error))
}

  render() {
    const contacts = this.state.contacts.filter((contact,index)=>{
      if (contact.firstName.indexOf(this.state.SearchText)>-1){
        return true;
      }
       if (contact.lastName.indexOf(this.state.SearchText)>-1){
        return true;
      }
      return false;
    });

    return (
     <div>
        <Header title="Mi primera Aplicacion"/>
        <div className="container">
      <div className="row" >
        <div className="col-md-6">
          <SearchBox value={this.state.SearchText}
           onChange={this.handleSearchTextChange}/>
           <ContactList 
           contacts={contacts}/>
        </div>
        <div className="col-md-6">
          <h3>Nuevo Contacto</h3>
          <ContactoForm Nombre={this.state.Nombre}
           onChange={this.handleNombreChange}
          Apellido={this.state.Apellido}
          onChange1={this.handleApellidoChange}
          Telefono={this.state.Telefono}
          onChange2={this.handleTelefonoChange}
          saveContact={this.saveContact}
         />
        </div>
        </div>
      </div>
        <Footer copyrigth="Copyright 2017 - Juan Carlos Espinel" />
       </div>
    );
  }
}

export default App;
