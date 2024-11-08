import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";

export default function EjemploUseEffect(){

        const [clicks, setCliks]= useState(0)
        const [fecha, setFecha]= useState (new Date())

        useEffect(()=>{
            console.log('Conponente Cargado')
            document.title = `${clicks} veces`
            return()=>(
                console.log('Conponente se va a destruir')
            )
            
        },[clicks])
        
        /*__________________ */
        useEffect(()=>{
            console.log('Conponente Cargado2')
            const intervalId = setInterval(()=>{
                setFecha(new Date())
            },1000)

            return() => clearInterval(intervalId);
        })

        return(
            <>
            
            <button onDoubleClick={()=> setCliks(clicks+1)}>
                 Me has clickeado{clicks}</button>
                 </>
        )
}