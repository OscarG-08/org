import './Campo.css'
import { useState } from 'react';

const Campo = (props) =>{

    //Destructuracion
    const {type = "text"} = props


    //const placeholderModificado = `${props.placeholder}...`
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return(
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeholder} 
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    )
}
export default Campo;