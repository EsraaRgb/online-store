import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  let [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: null,
  });

  const navigate = useNavigate();
  function goToLogin() {
    let path = "/signin";
    navigate(path);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      console.log("new user:", user);
      let { data } = await axios.post(
        "http://localhost:5000/user/signup",
        user
      );
      console.log("new user sent to server ", data);
      if (data.message === "Done") {
        goToLogin();
      } else if (data.message === "email is already exist") {
        alert("email is already exist");
      }
    } else {
      alert("Confirmed password not equal password ");
    }
  }

  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  return (
    <>
      <div className={`d-flex align-items-center overflow-auto`}>
        <div className="w-50 text-dark m-auto my-5 p-5 rounded-3 bg-light overflow-auto">
          <h1 className="my- text-center text-dark">Registeration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-gp my-3">
              <input
                onChange={getFormValue}
                type="text"
                className="form-control my-2"
                name="userName"
                placeholder="userName"
                required
              />
            </div>
            <div className="input-gp my-3">
              <input
                onChange={getFormValue}
                type="text"
                className="form-control my-2"
                name="age"
                placeholder="Age"
                required
              />
            </div>
            <div className="input-gp my-3">
              <input
                onChange={getFormValue}
                type="email"
                className="form-control my-2"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-gp my-3">
              <input
                onChange={getFormValue}
                type="password"
                className="form-control my-2"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-gp my-3">
              <input
                onChange={getFormValue}
                type="password"
                className="form-control my-2"
                name="confirmPassword"
                placeholder="confirm password"
                required
              />
            </div>
            <div className=" form-group d-flex justify-content-center my-3">
              <button className="btn btn-dark  w-100 my-4 " type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
