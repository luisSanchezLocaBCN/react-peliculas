import { useContext } from "react"
import ValorContext from "./ValorContex"

export default function Abuelo(){

    const valor = useContext(ValorContext);
    return(
        <>
        <h3>Componente Hijo: El valor del Contexto</h3>
        
        </>
    )
}