import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const userStatus = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      logout({
        name: null,
        email: null,
        password: null,
        loggedIn: false,
      })
    );
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          NotesApp
        </Link>
      </div>
      {userStatus.loggedIn ? (
        <div className="flex-none">
          <Link to="/my-tasks" className="btn btn-ghost">
            My tasks
          </Link>
          <button className="btn btn-ghost" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="flex-none">
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
