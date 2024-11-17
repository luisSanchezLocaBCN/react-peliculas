import { error } from "console";
import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

interface FormGroupImagenesProps{

    campo: string;
    label: string;
    imagenURL?: string;
}

//estilos para imagen y DIV
const divStyñe = {marginTop: "10px"}
const imageStyle ={width: "450 px "}






export default function FormGroupImagenes(props: FormGroupImagenesProps){
    const [imagenBase64, setimagenBase64] = useState('');
const {values} = useFormikContext <any>();

    const Manejaronchange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) { 
            const archivo = e.currentTarget.files[0];
            aBase64(archivo)
                .then((valor: string) => setimagenBase64(valor))
                .catch(error => console.error(error));

                values[props.campo]=archivo;
        }
    };

    const aBase64 =(file: File) =>{ 
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload =()=> resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })

    }

    
    return(
        <>
        <div className="form-group">
            <label >{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={Manejaronchange}/>
            </div>
            {imagenBase64 ?
            <div>
                <div>
                    <img style={imageStyle} src={imagenBase64} alt="imagen seleccionada" />
                </div>
                
            </div>:null
            
            }  
            
        </div>
        
        </>
    )
}


