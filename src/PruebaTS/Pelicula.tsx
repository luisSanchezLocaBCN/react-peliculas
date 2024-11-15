import Card from "./Card";
import {Pelicula} from "./Peliculas.modelo"
//import css from './ModeloCssPelicula.css'


export default function PeliculaIndividual(props: PeliculaProps){
    const contruirLink =()=> `/pelicula/${props.pelicula.id}`
    return(
        <Card > 
            <a href={contruirLink()} >
            <img
                src={props.pelicula.poster}
                alt="poster"
                style={{
                    width: '235px',
                    height: '300px',
                    
                }}
/>
            </a>
            <p>
                <a href={contruirLink()}>{props.pelicula.titulo}</a>
            </p>
        </Card>
    );
}

interface PeliculaProps{
    pelicula: Pelicula;
}







// export default function Pelicula(
//     {
//         portada = "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg", 
//         nombre = ""
//     }) {

//     return (
//         <>
//             <img src={portada} style={{width: '80px'}}/>
//             <div>
//                 {nombre}
//             </div>
//         </>
//     );
// }
