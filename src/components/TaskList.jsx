import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskComponent from "./TaskComponent";

export default function TaskList() {
  const tasksState = useSelector((state) => state.tasks);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <header>
        <h1 className="text-3xl font-bold underline">Tasks: {tasksState.length}</h1>
        <Link to="/create-task">Create task</Link>
      </header>
      <div className="w-full overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-2/3 divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 border border-gray-300">
                <div className="flex items-center gap-2">Title</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Description</div>
              </th>
              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Priority</div>
              </th>

              <th className="border border-gray-300 whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tasksState.map((task) => (
              <TaskComponent task={task} key={task.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
