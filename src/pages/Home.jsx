import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const userStatus = useSelector((state) => state.user);
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="./img/Man-taking-note.png" className="max-w-sm rounded-lg shadow-xl" />
      <div>
        <h1 className="text-5xl font-bold">Hey there!</h1>
        <p className="mt-6">This is my first CRUD app in which I want to put into practice all my knowledge so far.</p>
        <p className="py-6">Get ready to create notes!</p>
        <Link to={userStatus.loggedIn === false ? "/login" : "/my-tasks"} className="btn btn-outline">
          Get Started
        </Link>
      </div>
    </div>
  );
}
