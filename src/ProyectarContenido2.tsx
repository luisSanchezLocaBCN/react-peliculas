import { ReactElement } from "react";

export default function ProtectarContenido2 (props: ProyectarContenidosProps){
    return(
        <>
        {props.parteSuperior}
        {props.parteIntemedio}
        {props.parteInferior}
        </>
    )
}


// Definición de las propiedades del componente (ProyectarContenidosProps)
interface ProyectarContenidosProps {
    parteSuperior: ReactElement; 
    parteIntemedio: ReactElement; 
    parteInferior: ReactElement; 
  }