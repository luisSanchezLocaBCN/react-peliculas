import { Children, ReactElement } from "react";
import Cargando from "./Cargando";

export default function Listadogenerico(props: ListadogenericoProps){
    if (!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI
        }
        return <Cargando/>
    }else if(props.listado.length===0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI
        }
        return <>No hay ELEMENTOS QUE MSOTRART</>
    }  else{
        return props.children;
    }
}
interface ListadogenericoProps{
    listado: any;
    children:ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}