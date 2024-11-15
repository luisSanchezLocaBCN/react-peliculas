import { useParams } from "react-router-dom"

export default function EditarGeneros(){
    const {id}: any= useParams();
    return(
        <>
        <h1>Editar Generos </h1>
        
        <h4>el id es {id} </h4>
        </>
    )
}