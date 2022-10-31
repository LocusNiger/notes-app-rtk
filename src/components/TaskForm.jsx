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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title..." name="title" onChange={handleChange} value={task.title}></input>
      <textarea name="description" onChange={handleChange} value={task.description}></textarea>
      <button>Save</button>
    </form>
  );
}
