import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/Userslice";
import "../components/Logout.css";

export default function Logout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  console.log(user);
  return (
    <div className="container">
      <h1>Welcome:</h1>
      <p>{user.name}</p>
      <button className="logout-btn" onClick={(e) => logoutHandler(e)}>
        Logout
      </button>
    </div>
  );
}
