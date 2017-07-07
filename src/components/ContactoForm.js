import React from 'react';
 
 const ContactoForm = (props) => (
             <div>
            <p>Nombre</p>
              <input
               type="text" 
               value={props.Nombre} 
               onChange={props.onChange}
               />   
               <p>Apellido</p>
                <input
               type="text" 
               value={props.Apellido} 
               onChange={props.onChange1}
               />   
            <p>Telefono</p>
                <input
               type="text" 
               value={props.Telefono} 
               onChange={props.onChange2}
               /> 
               <div className="text-center">
               <button className="btn btn-primary"
                onClick={() => props.saveContact({
                  firstName:props.Nombre,
                  lastName:props.Apellido,
                  phone:props.Telefono
                })}
                >
                Ingresar
               </button> 
               </div>
               </div>
        );

export default ContactoForm;