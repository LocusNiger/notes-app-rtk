import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

export default function TaskList() {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const tasksState = useSelector((state) => state.tasks);
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">Tasks: {tasksState.length}</h1>
        <Link to="/create-task">Create task</Link>
      </header>
      {tasksState.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Clear task</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}
