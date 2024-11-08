export default function FormularioTexto(props: formularioTextoProps){
    return(
        <div>
            <input type="text"
            onKeyUp={(e)=> props.manejarKeyUp(e.currentTarget.value)}
            
            />
            
        </div>
    )
}interface formularioTextoProps{
    manejarKeyUp(texto: string): void
}