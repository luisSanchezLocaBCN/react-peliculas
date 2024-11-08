import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppCss from './App.module.css'
import { Console } from 'console';
import MostrarTexto from './MostrarTexto';
//import ProyectarContenido from './ProyectarContenido';
import ProtectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';
// import ContenidoDinamico from './ContenidoDinamico';
// import FormularioTexto  from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContex';
import Abuelo from './Abuelo';


function App() {
  //varialbes
  const parteIntemedia = <EjemploReloj/>
  

  //hooks
  const [textoUsuario,setTexto]= useState('Valor inicial');
  const [checked,setChecked]= useState(true); 
  
  
  

  //funciones
  // const manejarClick =()=> console.log('click');
  const manejarKeyUp= (TextoInput: string) =>{
    console.log(TextoInput);
    setTexto(TextoInput);
  }

  //OBJETOS
  const  calificaciones=[
    {nombre: 'Claudia', Calificacion: 75},
    {nombre: 'Alex', Calificacion: 85},
    {nombre: 'Luis', Calificacion: 95},
  ]




  //muestra por pantalla
  return(
    <>
      <h1>hola mundo</h1>
      <ProtectarContenido2
        parteSuperior={<h3>Esta es la parte de arriba</h3>}
        parteIntemedio={parteIntemedia}
        parteInferior={<h3>Parte inferior</h3>}
      /> 



      {/* <button onClick={manejarClick}>Has clic</button>
      <input type='text' onKeyUp={(e)=> manejarKeyUp(e)}/>
      <div>
        <input type="checkbox" 
        onChange={(e)=> setChecked(e.currentTarget.checked)}
        checked={checked} /> 
      </div>
      <div>
        {textoUsuario}
      </div> */}

      {/*Podemos darle un valor por defecto en el componente de Mostrar texto para no rellenar el string*/}
      {/* <MostrarTexto texto={textoUsuario}/> */}

      {/* <MostrarTexto /> */}
      
      {/*____CONTENIDO DINAMICO____*/ }
      {/* <ContenidoDinamico mostrarMensajeSecreto={true}/>
      <ContenidoDinamico calificacion = {95}/> */}

      {/* {calificaciones.map(cal => <ContenidoDinamico key={cal.nombre} {...cal}/>)} */}

      {/*_______FORMULARIO TEXTO_______ */}
      {/* <FormularioTexto manejarKeyUp={(e:string)=> manejarKeyUp(e)} /> */}
        
      {/*__________EJEMPLO USEEFFECT */}

      

      <div>
        <input type="checkbox" 
        onChange={(e)=> setChecked(e.currentTarget.checked)}
        checked={checked} /> Mostrar Component UseEffect 
      </div>
      {checked ?< EjemploUseEffect/>: null}
      
        {/*VALOR CONTEXT */}
        <ValorContext.Provider value={textoUsuario}>
          <Abuelo />
        </ValorContext.Provider>

        <div>
        {textoUsuario}
        </div>





    </>

    
  )
}

export default App;
