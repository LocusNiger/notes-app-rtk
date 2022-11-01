import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask, completeTask } from "../features/tasks/taskSlice";

export default function TaskComponent({ task }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };
  /* Función que retorna un badge dependiendo el nivel de la tarea */
  const taskLevelBadge = () => {
    switch (task.level) {
      case "normal":
        return (
          <strong
            className={
              "rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700" +
              (task.completed ? " line-through" : "")
            }
          >
            Normal
          </strong>
        );
      case "important":
        return (
          <strong
            className={
              "rounded bg-yellow-200 px-3 py-1.5 text-xs font-medium text-yellow-700" +
              (task.completed ? " line-through" : "")
            }
          >
            Important
          </strong>
        );
      case "urgent":
        return (
          <strong
            className={
              "rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700" +
              (task.completed ? " line-through" : "")
            }
          >
            Urgent
          </strong>
        );
      default:
        break;
    }
  };
  /* Función que retorna icono dependiendo si la tarea esta completada o no */
  const taskCompletedIcon = () => {
    if (task.completed) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          onClick={() => handleComplete(task.id)}
          style={{ color: "green", fontSize: "1rem", cursor: "pointer" }}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          onClick={() => handleComplete(task.id)}
          style={{ color: "grey", fontSize: "1rem", cursor: "pointer" }}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700 border font-bold">
        <span className={task.completed ? "line-through" : ""}>{task.title}</span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700 border">
        <span className={task.completed ? "line-through" : ""}>{task.description}</span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 border">{taskLevelBadge()}</td>
      <td className="whitespace-nowrap px-4 py-2 flex justify-around border">
        {taskCompletedIcon()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          style={{ color: "tomato", cursor: "pointer" }}
          onClick={() => handleDelete(task.id)}
        >
          <path
            fillRule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
            clipRule="evenodd"
          />
        </svg>
        <Link className="underline uppercase" to={`/edit-task/${task.id}`}>
          Edit
        </Link>
      </td>
    </tr>
  );
}
