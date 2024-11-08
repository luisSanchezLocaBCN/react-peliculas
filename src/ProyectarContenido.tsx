import { ReactElement } from "react";


export default function ProyectarContenido(props: ProyectarContenidosProps) {
 
  return (
    <>
      <h3>Parte Superior</h3>
      
      
      {props.children}
      
      <h3>Parte Inferior</h3>
    </>
  );
}

// Definición de las propiedades del componente (ProyectarContenidosProps)
interface ProyectarContenidosProps {
  children: ReactElement; 
}