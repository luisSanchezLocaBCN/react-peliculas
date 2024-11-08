import { useContext } from "react"
import ValorContext from "./ValorContex"
import Hijo from './Hijo';

export default function Abuelo(){

    const valor = useContext(ValorContext);
    return(
        <>
        <h3>Componente Abuelo: El valor del Contexto: {valor}</h3>
        <Hijo/>
        </>
    )
}