import { useNavigate } from "react-router-dom" 
import Button from "../Utils/Button";
import {Form, Formik,  Field, ErrorMessage, FormikHelpers} from 'formik'
import * as Yup from "yup"
import FormGrouptext from "../Utils/FormGrouptext";
import { generoCreacionDTO } from "./GenerosModulo";
import FormGroupImagenes from "../Utils/FormGroupImagenes";


export default function FormularioGeneros(props:  formularioGenerosProps){
    return(
    
    <>
    <Formik initialValues={props.modelo}
        //Cuando damos clic al boton tardara 500 milesegundo como"el tiempo en que se ejcuta la funcion" para desactivar el boton
          onSubmit={props.onSubmit}

          validationSchema={Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()//VALIDACION PERSONALIZADA 
          })}
        >
            {(FormikProps)=>(
            <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div>
                    <FormGrouptext></FormGrouptext> {/*En este apartado tenemos el label  */}
                <button disabled={FormikProps.isSubmitting} type="submit"> Guardar</button> 
                <a className="btn btn-secondary" href="/generos">CANCELAR </a>
                </div>
                <FormGroupImagenes campo="foto" label="foto"  />
            </Form>
            )}
        </Formik>       
    </>
    )
}
interface formularioGenerosProps{
    modelo: generoCreacionDTO
    onSubmit(values:generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;

}