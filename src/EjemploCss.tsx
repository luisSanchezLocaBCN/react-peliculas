import React, {useEffect, useState } from 'react';
import './App.css';
import AppCss from './App.module.css'
export default function EjemploCss(){

    const subtitulo ="Este es un subtitulo";
    const imagenURL = "https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%c3%a1genes-de-fantas%c3%ada-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0";
    return (
     <>
     <div className='cuadradoRojo'>  </div>
        <h1 className='rojo'>hola mundo</h1>
        <h3 style={{color: 'blue'}}>{subtitulo.toUpperCase()} </h3>
        <h4 className='color'>Index.css: El doble de 3 es </h4>
        <h4 className={AppCss.color}>Index.css: El doble de 3 es </h4>
        <img alt='logo react' src={imagenURL}/>
     
     </> 
    )
}