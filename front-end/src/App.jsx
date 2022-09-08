import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import Update from './components/Update'
import AddProduct from "./components/AddProduct";
const App = () => {
  let [loginData, setLoginData] = useState(null);
  function setUserData() {
    /// Step 3
    let token = localStorage.getItem("token");
    setLoginData(token);
  }
  let navigateLogin = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setLoginData(null);
    navigateLogin("/");
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // if user logged in
      setUserData();
    }
  });
  return (
    <div>

      <Navbar loginData={loginData} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login setUserData={setUserData} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct loginData={loginData} />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
