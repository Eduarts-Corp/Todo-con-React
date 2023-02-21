import React from 'react'

export const Todo = ({todo, deleteTodo, updateTodo}) => {

    const { id, title, description, state, priority } = todo // Destructuramos los todos para no estar escribiendo todo.title x ej

  return (
    <li className="list-group-item" key={todo.id}>
      <div className ="d-flex justify-content-between align-items-center">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>{title}</h5>
          <p className={`${state && "text-decoration-line-through"}`}>{description}</p>
          <button onClick={()=> deleteTodo(id)} className='btn btn-sm btn-danger m-lg-1'>Eliminar</button>
          <button onClick={()=> updateTodo(id)}  className='btn btn-sm btn-warning'>Actualizar</button>
        </div>
        <span className='badge text-bg-primary'>{priority && "Prioritario"}</span>
      </div>
    </li>
  );
}

