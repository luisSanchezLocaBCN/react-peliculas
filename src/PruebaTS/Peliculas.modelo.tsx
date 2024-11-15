export interface Pelicula{
    id: number;
    titulo: string;
    poster: string;
    
}

export interface ladingPageDTO{
    enCartelera?: Pelicula[];
    proximosEstrenos?: Pelicula[];
}