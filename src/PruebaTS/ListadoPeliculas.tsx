import Cargando from "../Utils/Cargando";
import Listadogenerico from "../Utils/ListadoGenerico";
import PeliculaIndividual from "./Pelicula";
import { Pelicula } from "./Peliculas.modelo";
 import './ListadoPeliculasCss.css';
import DetallePelicula from "./DetallePelicula";

export default function ListadoPeliculas(props: ListListadoPeliculasProps){
   
        return(
            <Listadogenerico listado={props.peliculas}>
                <>
                    <div className="listado_peliculas_1">
                        {props.peliculas?.map(
                        pelicula => 
                        <PeliculaIndividual pelicula={pelicula}
                        key={pelicula.id}/>)}
                    </div>
                    <DetallePelicula />
                </>
            </Listadogenerico>
            )
    }

interface ListListadoPeliculasProps{
    peliculas?: Pelicula[]
}