
import { Field, Formik } from 'formik';
import { generoDTO } from '../Generos/GenerosModulo';
import Button from '../Utils/Button';

export default function FiltroPeliculas() {
    

    const valorInicial: FiltroPeliculasProps = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    };

    const generos: generoDTO[]=[{id:1 , nombre:"Accion"}, {id:2, nombre:"Comedia"}]

    return (
        <>
            <h3>FILTRAR PELICULAS</h3>
            <Formik
                initialValues={valorInicial}
                onSubmit={valores => {
                    console.log(valores);
                    // Redirigir a otra página después del envío
                    
                }}
            >
                {(FormikProps) => (
                    <form onSubmit={FormikProps.handleSubmit}>
                            <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only"> Titulo</label>
                                <input type="text"
                                    className="form-control"  id="titulo"
                                    placeholder="titulo de la pelicula"
                                    {...FormikProps.getFieldProps("titulo")}
                                    />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                            <select className="form-control" >
                                {/* {...FormikProps.getFieldProps("generoId")} */}
                                <option value="0" >-- Selecciona un genero </option>
                                {generos.map(genero => <option key={genero.id}
                                value={genero.id}>{genero.nombre}</option>)}
                            </select>

                            </div>

                            <div className='form-group mx-sm-3 mb-2'>
                                    <Field className="form-check-input" 
                                    id="proximosEstrenos" 
                                    name="proximosEstrenos" 
                                    type="checkbox" />

                                    <label className='form-check-label' 
                                    htmlFor='proximosEstrenos'>Proximos Estrenos</label>
                            </div>
                            <div className='form-group mx-sm-3 mb-2'>
                                    <Field className="form-check-input" 
                                    id="enCines" 
                                    name="enCines" 
                                    type="checkbox" />

                                    <label className='form-check-label' 
                                    htmlFor='proximosEstrenos'>En Cines</label>
                            </div>
                            <Button 
                            className="btn btn-primary mb-2-mx-sm-3" 
                            onClick={()=> FormikProps.submitForm()}>Filtrar Peliculas 
                            </Button>

                            <Button 
                            className="btn btn-danger mb-2" 
                            onClick={()=> FormikProps.setValues(valorInicial)}>Limpiar
                            </Button>


                        </div>


                    </form>
                )}
            </Formik>
        </>
    );
}

interface FiltroPeliculasProps{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;

}