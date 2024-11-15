import {Link} from "react-router-dom"

export default function IndiceActores(){
    return(
        <>
        <h1>Indice Actores</h1>
        <ul>
            <li>
                <Link to="/actores/crear">Crear Actor</Link>
                
            </li>
            <li>
            <Link to="/actores/editar">Editar Actor</Link>
            </li>
        </ul>
        
        </>
    )
}