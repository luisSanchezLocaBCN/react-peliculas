import {Route, Routes} from 'react-router';
import IndiceGeneros from '../Generos/indiceGeneros';
import { BrowserRouter } from 'react-router-dom';
import Peliculas from './Peliculas';
import DetallePelicula from './DetallePelicula';
import CrearGeneros from '../Generos/CrearGeneros';
import EditarGeneros from '../Generos/EditarGenero';
import IndiceActores from '../Actores/IndiceActores';
import CrearActores from '../Actores/CrearActores';
import EditarActores from '../Actores/EditarActores';
import EditarCines from '../Cines/EditarCines';
import IndiceCines from '../Cines/IndiceCines';
import CrearCines from '../Cines/CrearCine';
import EditarPeliculas from './EditarPeliculas';
import CrearPeliculas from './CrearPelicula';
import FiltroPeliculas from './FiltroPeliculas';
import RedireccionLanding from '../Utils/RedireccionLanding';


export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Peliculas />} />
                <Route path='/pelicula/:id' element={<DetallePelicula />} />
                
                <Route path='/generos' element={<IndiceGeneros/>} />
                <Route path='/generos/crear' element={<CrearGeneros/>} />
                <Route path='/generos/editar/:id' element={<EditarGeneros/>} />

                <Route path='/actores' element={<IndiceActores/>} /> 
                <Route path='/actores/crear' element={<CrearActores/>} />
                <Route path='/actores/editar/:id' element={<EditarActores/>} />
            
                <Route path='/cines' element={<IndiceCines/>} /> 
                <Route path='/cines/crear' element={<CrearCines/>} />
                <Route path='/cines/editar/:id' element={<EditarCines/>} />
            
                <Route path='/peliculas/filtrar' element={<FiltroPeliculas/>} /> 
                <Route path='/peliculas/crear' element={<CrearPeliculas/>} />
                <Route path='/peliculas/editar/:id' element={<EditarPeliculas/>} />
            
                <Route path='*' element={<RedireccionLanding/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}