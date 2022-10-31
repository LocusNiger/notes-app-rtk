import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskComponent from "./TaskComponent";

export default function TaskList() {
  const tasksState = useSelector((state) => state.tasks);
  if (tasksState.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 my-10">
        <header>
          <h1 className="text-3xl font-bold underline">Tasks: {tasksState.length}</h1>
          <Link to="/create-task">Create task</Link>
        </header>
        <div className="w-full overflow-hidden overflow-x-auto rounded-lg  flex justify-center items-center">
          <table className="w-4/5 divide-y divide-gray-200 text-sm ">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="whitespace-nowrap px-4 py-2  font-medium text-gray-900 border border-gray-300">Title</th>
                <th className="border border-gray-300 whitespace-nowrap px-4 py-2  font-medium text-gray-900">
                  Description
                </th>
                <th className="border border-gray-300 whitespace-nowrap px-4 py-2  font-medium text-gray-900">
                  Priority
                </th>

                <th className="border border-gray-300 whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-center">
              {tasksState.map((task) => (
                <TaskComponent task={task} key={task.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col justify-center">
        <h1>Hey, looks like you're up to date.</h1>
        <div>
          <Link to="/create-task" className="underline font-bold text-2xl">
            New task
          </Link>
        </div>
      </div>
    );
  }
}
