import React, { useRef, useState } from 'react'

export const NoContrado = () => {

    const form = useRef(null); // Se usa con la referenia del formulario (linea 14)
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")


        // CAPTURAMOS LOS DATOS
        const data = new FormData(form.current)
        // console.log(...data.entries()) // estos son los arrays que generan las entries gracias al name del formulario pero si quisiera
        // procesarlas mejor deberia convertirlo a unnobjeto asi:
        const { title, description, state } = Object.fromEntries([...data.entries()])
        // console.log(title, description, state);



        // AQUI AHORA VAMOS A VALIDAR LOS DATOS
        if (!title.trim()) return setError("Llena los campos Vacios")
        
    
        
    }


    return (
        <form onSubmit={handleSubmit} ref={form}>

            <input type="text" placeholder="Ingrese ToDo" className="form-control mb-2" name="title" />

            <textarea className="form-control mb-2" placeholder="Ingrese Description" name="description"></textarea>

            <select className="form-select mb-2" name='state'>
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>

            <button className="btn btn-primary" type="submit"> Procesar </button>

            {error !== "" && error} {/*Este es un operador ternario para manejar el error si es que eñ usuario no escribe nada y su funcion esta en la linea 23 usando el useState de error que se plantea en la linea 7 */}
          
        </form>
    );
  
}
