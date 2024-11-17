import { useNavigate } from "react-router-dom" 

import FormGroupImagenes from "../Utils/FormGroupImagenes";
import FormularioGeneros from "./FormularioGeneros";
import { Formik } from "formik";

export default function CrearGeneros(){
    const Navigate= useNavigate();
    
    return(
        <>

        <h1>Crear Generos</h1>
        
        <FormularioGeneros modelo={{nombre:""}}
          onSubmit={async values => { 
            await new Promise(r => setTimeout(r,3000))
            console.log(values);
          }} />
         
        
        
        
        



        </>
    )
}