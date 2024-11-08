import { text } from "stream/consumers";

export default function MostrarTexto(props: mostrarTextoProps){
    return(
        <div>
            {props.texto}
        </div>
    )
}

interface mostrarTextoProps{
    texto: String;
}

/*Podemos darle un valor por defecto en el componente de Mostrar texto para no rellenar el string*/
MostrarTexto.defaultProps ={
    texto: 'Valor por defecto'
}