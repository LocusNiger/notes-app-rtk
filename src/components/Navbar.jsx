import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          NotesApp
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/my-tasks" className="btn btn-ghost">
          My tasks
        </Link>
      </div>
    </div>
  );
}
