import React from 'react'
import { Todo } from './Todo'

export const Todos = ({todos, deleteTodo, updateTodo}) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
        {todos.length === 0 && (
          <li className="list-group-item text-center">No existen Todos</li>
        )}
      </ul>
    </div>
  );
}
