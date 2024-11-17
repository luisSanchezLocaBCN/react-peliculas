import { useParams } from "react-router-dom"
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGeneros(){
    const {id}: any= useParams();
    return(
        <>
        <h1>Editar Generos </h1>
        
        <h4>el id es {id} </h4>

      

    
        <FormularioGeneros modelo={{nombre:"Accion"}} // aqui recibiremos la info desde la base de datos en este caso es ACCION 
          onSubmit={async values => { 
            await new Promise(r => setTimeout(r,3000))
            console.log(values);
          
          }} />
        
        
        
        



       
        </>
    )
}