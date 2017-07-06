import React from 'react';
 
 const ContactoForm = (props) => (
             <div>
            <p>Nombre</p>
              <input
               type="text" 
               value={props.value} 
               onChange={props.onChange}
               />   
               <p>Apellido</p>
                <input
               type="text" 
               value={props.value1} 
               onChange={props.onChange1}
               />   
            <p>Telefono</p>
                <input
               type="text" 
               value={props.value2} 
               onChange={props.onChange2}
               /> 
               <button 
               value={props.value3}>Ingresar
               </button> 
               
               </div>
        );

export default ContactoForm;