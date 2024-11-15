import {  Field, ErrorMessage} from 'formik'
import React from 'react';

export default function FormGrouptext(){
    return(
        <div className="form-group">
        <label htmlFor="nombre">LABEL</label>
        <Field name="nombre" className="form-control"/>
        <ErrorMessage name="nombre">
            {mensaje => <div className="text-danger">{mensaje}</div>}
        </ErrorMessage>
    </div>
    )
}
