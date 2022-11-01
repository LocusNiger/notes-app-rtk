import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice"; //importo el action a usar en dispatch
import { v4 as uuid } from "uuid"; //Biblioteca para generar id's
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TaskForm() {
  const dispatch = useDispatch(); //Para usar reducer
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();

  //La tarea a crear/editar
  const [task, setTask] = useState({
    title: "",
    description: "",
    level: null,
  });

  //Seteo en el estado interno las tareas nuevas del form
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  //Submit: si hay id => se edita la tarea. Sino, se crea una nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task, //titulo y descripcion + id generado
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);
  return (
    <form className="flex flex-col max-w-2xl gap-3 " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title..."
        name="title"
        onChange={handleChange}
        value={task.title}
        className="input input-bordered w-full max-w-xs"
      ></input>
      <textarea
        className="textarea textarea-bordered"
        name="description"
        onChange={handleChange}
        value={task.description}
        placeholder="Description..."
      ></textarea>
      <select className="select select-bordered select-sm w-full max-w-xs" onChange={handleChange} name="level">
        <option selected disabled>
          Priority
        </option>
        <option value="normal">Normal</option>
        <option value="important">Important</option>
        <option value="urgent">Urgent</option>
      </select>
      <button className="btn btn-error gap-2 w-1/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        Save
      </button>
    </form>
  );
}
