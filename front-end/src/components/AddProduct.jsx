import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function AddProduct({ loginData }) {
  let [product, setProduct] = useState({
    productName: "",
    productDesc: "",
    productPrice: null,
    userID: loginData,
  });
  const navigate = useNavigate();
  function goToProducts() {
    let path = "/products";
    navigate(path);
  }
  function handleFormData(e) {
    let newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:5000/product", product);
    if (data.message === "Done") {
      goToProducts();
    } else {
      alert("cannot add product");
      console.log(data);
    }
  }

  return (
    <div>
      <div className="w-50 text-dark m-auto my-5 p-5 rounded-3 bg-light overflow-auto">
        <h1 className="font-monospace my- text-center text-dark">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-gp my-3">
            <input
              type="text"
              name="productName"
              className="form-control my-2"
              onChange={handleFormData}
              placeholder="Product Name"
            />
          </div>
          <div className="input-gp my-3">
            {" "}
            <input
              type="text"
              className="form-control my-2"
              name="productDesc"
              onChange={handleFormData}
              placeholder="Product Description"
            />
          </div>
          <div className="input-gp my-3">
            {" "}
            <input
              type="number"
              className="form-control my-2"
              name="productPrice"
              onChange={handleFormData}
              placeholder="Price"
            />
          </div>
          <div className=" form-group d-flex justify-content-center my-3">
            <button className="btn btn-dark  w-100 my-4 " type="submit">
              Add My Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
