import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserData }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  function getFormData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser); // update user data
    console.log(myUser);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:5000/user/signin", user);
    console.log(data);
    if (data.message === "Done" && data.result.length !== 0) {
      console.log("loggedin");
      localStorage.setItem("token",data.result[0].userID ); /// Step 1
      localStorage.setItem("email",data.result[0].email ); /// Step 1
      setUserData(); //// here call setUserData function
      goToHome();
    } else {
      console.log("cannot login");
      alert("In-valid email or password")
    }
    console.log(user);
  }
  const navigate = useNavigate();
  function goToHome() {
    let path = "/";
    navigate(path);
  }

  return (
    <div className="d-flex justify-content-center align-items-center my-5  ">
      <div className={`w-50  p-5  bg-light overflow-auto form-text`}>
        <h1 className="my-4 text-center text-dark">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-gp my-3">
            <input
              onChange={getFormData}
              className="form-control my-2"
              type="email"
              placeholder="email"
              name="email"
              required
            />
          </div>
          <div className="input-gp my-3">
            <input
              onChange={getFormData}
              className="form-control my-2"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>
          <div className=" form-group d-flex justify-content-center my-3">
            <button
              className="btn btn-dark  w-100 my-4 "
              id="signin"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
