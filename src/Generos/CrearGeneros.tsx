import { useNavigate } from "react-router-dom" 
import Button from "../Utils/Button";
import {Form, Formik,  Field, ErrorMessage} from 'formik'
import * as Yup from "yup"
import FormGrouptext from "../Utils/FormGrouptext";

export default function CrearGeneros(){
    const Navigate= useNavigate();
    
    return(
        <>

        <h1>Crear Generos</h1>
        
        <Formik initialValues={{
            nombre: ''
        }}
          onSubmit={(values) => {
            console.log(values)
          }}

          validationSchema={Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
          })}
        >
            <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div>
                    <FormGrouptext></FormGrouptext>
                <button type="submit"> Guardar</button> 
                <a className="btn btn-secondary" href="/generos">CANCELAR </a>
                </div>
            </Form>

        </Formik>       
        {/* <button onClick={()=> Navigate('/generos')}>SALVAR </button> */}
        



        </>
    )
}