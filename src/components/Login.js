import React from "react";
import "../components/Login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-lines">
          <form>
            <h1 className="heading">Login</h1>
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Pasword" />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
