export default function ContenidoDinamico(props: any){
    //  EJEMPLO 1 DE OPERADOR TERNARIO BASICO
    // return(
    //     <div>
    //         {props.mostrarMensajeSecreto ? <span>Mensaje Secreto: 42</span>: null}
    //     </div>
    // )


    //EJEMPLO 2

   if(props.calificacion > 90){
    return(
        <div>
            <h3>{props.nombre}: Exelente calificaciones</h3>
        </div>
    ) } else if( props.calificacion >= 80 && props.calificacion <=90){
        return(
            <h3>{props.nombre}:Nota normal </h3>
        ) } else{
            return(
                <div>
                    <h3>{props.nombre}:Tercera Respuesta</h3>
                </div>
            )
        }
    }
   

