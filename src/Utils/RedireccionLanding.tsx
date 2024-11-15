import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export default function RedireccionLanding(){
    const navigate = useNavigate();

  useEffect(() => {
    navigate('/');  // Redirige automáticamente al cargar el componente
  }, []);

}