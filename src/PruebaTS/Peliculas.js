import {useEffect, useState } from 'react';
import ListadoPeliculas from './ListadoPeliculas';
import {ladingPageDTO} from './Peliculas.modelo'


export default function Peliculas(){

    const [peliculas,setPeliculas] = useState({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({enCartelera: [
          {
          id:1,
          titulo:"batman",
          poster: "https://image.tmdb.org/t/p/original/hZUSv4mCne1DP05ihoVDoh8Dg0W.jpg"
          },
          {
            id:2,
            titulo:"spiderman",
            poster: "https://images.hdqwalls.com/download/classic-spiderman-zg-1920x1080.jpg"
          },
        ],
        proximosEstrenos: [
          {
            id:3,
            titulo:"batman 2",
          poster:"https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2020/09/poster-oficial-the-batman.jpg?resize=750%2C1262&quality=80&ssl=1"
          },
        ]
      })  
        // Código que deseas ejecutar después del tiempo
      }, 1000);
  
      return () => clearTimeout(timerId); // Limpieza del temporizador cuando el componente se desmonte
  }, []);

    return (          
    <>
        <div>
        <h3>Peliculas en cartelera </h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera}/>
        <h3>Peliculas por Estrenar</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </div>
    </>
    );
}
