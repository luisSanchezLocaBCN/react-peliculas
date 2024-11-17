// import { MapContainer ,TileLayer } from "react-leaflet";

export default function Mapa(props: MapaProps){

    return(
        <>
        {/* <MapContaine>
            <TileLayer attribution= "React Peliculas"></TileLayer>
        </MapContaine> */}

        </>
    )
}

interface MapaProps{

    heigth: string;

}

Mapa.defaultProps ={
    heigth: "500px"
}