import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/Userslice";
import "../components/Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({ name: name, email: email, password: password, loggedIn: true })
    );
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-lines">
          <form onSubmit={(e) => submitHandler(e)}>
            <h1>BioInc. </h1>
            <br />
            <h1 className="heading">Login</h1>
            {/* <span>Details dont match!</span> */}
            <input
              required
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
