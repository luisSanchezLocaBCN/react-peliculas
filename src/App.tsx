import './App.css';
import Menu from './Utils/Menu';
import Router from './PruebaTS/Router';
import configurarValidaciones from './validaciones';

configurarValidaciones();
// import MostrarTexto from './MostrarTexto';
// //import ProyectarContenido from './ProyectarContenido';
// import ProtectarContenido2 from './ProyectarContenido2';
// import EjemploReloj from './EjemploReloj';
// // import ContenidoDinamico from './ContenidoDinamico';
// // import FormularioTexto  from './FormularioTexto';
// import EjemploUseEffect from './EjemploUseEffect';
// import ValorContext from './ValorContex';
// import Abuelo from './Abuelo';


function App() {


  // const peliculaEnCartelera: Pelicula[]=[
  //   {
  //     id:1,
  //     titulo:"batman",
  //     poster: "https://image.tmdb.org/t/p/original/hZUSv4mCne1DP05ihoVDoh8Dg0W.jpg"
  //   },
  //   {
  //     id:2,
  //     titulo:"spiderman",
  //     poster: "https://images.hdqwalls.com/download/classic-spiderman-zg-1920x1080.jpg"
  //   },
  // ] 

  

  return(
    <>
      
      <Menu/>

      {/*DEBAJO DEL MENU  */}
      <div className='container'>
        <Router />
      </div>
    </>
  );
    
  
}

export default App;
