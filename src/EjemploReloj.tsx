import React, {useEffect, useState } from 'react';
import './App.css';

// Componente que usamos con DOM Virtual para
// solo actualizar la parte necesaria 
export default function EjemploReloj(){
    const [fecha,setFecha]= useState(new Date());// recuperamos la info de fecha y la funcion setFecha para actualizar la hora

//nos retorna la fecha actulizada
  useEffect(() => {
    const timerId = setInterval(()=>{
      setFecha(new Date());
    },1000);
    return () => clearInterval(timerId); 
  })
    return (
        <div >
           <h3>Ejemplo REACT</h3>
              <input />
              <div> {fecha.toString()} </div>
            
        </div>
      )
}