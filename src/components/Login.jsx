import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user);

  //Seteo los datos en el estado interno del componente
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
      case "email":
        setEmail(e.target.value);
      case "password":
        setPassword(e.target.value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name,
        email,
        password,
        loggedIn: true,
      })
    );
    navigate("/my-tasks");
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
