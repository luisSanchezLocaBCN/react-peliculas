export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React Peliculas</a>
                
                <div className="collapse navbar-collapse">
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" 
                            href='/generos'>Generos</a>  
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                            href='/peliculas/filtrar '>Filtrar de Peliculas</a>  
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                            href='/cines'>Cines</a>  
                            
                        </li>

                        <li>
                            <a className="nav-link" 
                            href="/actores">Actores</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
