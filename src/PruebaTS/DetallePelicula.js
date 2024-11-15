import {useParams } from 'react-router-dom';
import Card from './Card';
import './DetallePeliculaCss.css';


export default function DetallePelicula()
{
    const {id} = useParams();

    const movieId = id === null || id === undefined ? 'TEST' : id;
    
    return <Card>
        <div className="atributos_pelicula" style={{backgroundColor: 'blue', color: 'white'}}>
            <div>Id: {movieId}</div>
            <div>Titulo: </div>
            <div>Director: </div>
        </div>
        <style jsx>
            {`
            .atributos_pelicula{
                display: flex;
                flex-direction: row;
                grid-gap: 10px;
            }
            `}
        </style>
    </Card>;
}