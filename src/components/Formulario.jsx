import { useState } from "react";
import Swal from "sweetalert2";

export const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        state: "Pendiente",
        priority: true,
    })

    const {title, description, state,priority} = todo
    

    const handleSubmit = (e) => {
        e.preventDefault();

      if (title.trim() === "" || description.trim() === "") {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Titulo y escripción Obligatorios!",
        })
      }

      addTodo({
        id: Date.now(),
        ...todo,
        state: state === "Completado" ? true : false,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Todo Agregado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name);

        const{ name, type, checked, value}= e.target

        setTodo({
          ...todo,
          [name]: type === "checkbox" ? checked : value
        });
    }


    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese ToDo"
          className="form-control mb-2"
          name="title"
          value={title}
          //   onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Ingrese Description"
          name="description"
          value={description}
          //   onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          onChange={handleChange}
        ></textarea>

            

            <div className="form-check mb-2">
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheck" checked={priority}
                    // onChange={(e)=>setTodo({...todo, priority:e.target.checked})} />
                    onChange={handleChange} />
                <label htmlFor="inputCheck">Dar Prioridad</label>
            </div>
            

        <select
          className="form-select mb-2"
          name="state"
          value={state}
          //   onChange={(e) => setTodo({ ...todo, state: e.target.value })}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>

        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    );
  };
