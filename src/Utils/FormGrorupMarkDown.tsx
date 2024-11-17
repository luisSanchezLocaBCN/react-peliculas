import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import { useFormAction } from "react-router-dom";

//ESTE APARTADO LO PODEMOS USAR PARA EDITAR Y VER EL APARTADO DE BIOGRAFIA DE UN ACTOR 
//FALTA AÑADIR CSS  "VIDEO 81"

export default function FormGroupMarkDown(props: FormGroupMarkDownProps){
    const {values} = useFormikContext<any>();
    return(
        <>
        <div>
            <div className="form-group form-markdown">
                <label >{props.label}</label>
                <div>
                <Field name={props.campo} as="textarea" className="form-textarea"/>
                </div>
            </div>

            <div>
                <label >{props.label} (previews): </label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
                </div>
            </div>

           

            
        </div>
        </>
    )
}

interface FormGroupMarkDownProps{
    campo: string;
    label: string;
}