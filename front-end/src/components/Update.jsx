import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Update() {
  let [product, setProduct] = useState([]);
  let { id } = useParams();
  async function getProduct() {
    let { data } = await axios.get(`http://localhost:5000/product/${id}`);
    console.log(data);
    setProduct(data.result[0]);
  }
  useEffect(() => {
    getProduct();
  }, []);
  let navigate = useNavigate();
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
    let { data } = await axios.put(`http://localhost:5000/product/${id}`, product);
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
          Update Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-gp my-3">
            <input
              defaultValue={product.productName}
              type="text"
              name="productName"
              className="form-control my-2"
              onChange={handleFormData}
              placeholder="Product Name"
            ></input>
          </div>
          <div className="input-gp my-3">
            {" "}
            <input
              type="text"
              className="form-control my-2"
              name="productDesc"
              onChange={handleFormData}
              defaultValue={product.productDesc}
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
              defaultValue={product.productPrice}
              placeholder="Price"
            />
          </div>
          <div className=" form-group d-flex justify-content-center my-3">
            <button className="btn btn-dark  w-100 my-4 " type="submit">
              Update My Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
