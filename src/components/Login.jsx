import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      loggedIn: true,
    });
    console.log(user);
    // dispatch(login(user));
    // navigate("/my-tasks");
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <label className="input-group">
          <span>Name</span>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            className="input input-bordered"
          />
        </label>
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="info@locusNiger.com"
            onChange={handleChange}
            className="input input-bordered"
          />
        </label>
        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
        <label className="input-group">
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="Your password"
            onChange={handleChange}
            className="input input-bordered"
          />
        </label>
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
