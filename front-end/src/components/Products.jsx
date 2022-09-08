import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  let [products, setProducts] = useState([]);

  async function getProductsFromServer() {
    let { data } = await axios.get("http://localhost:5000/products");
    console.log(data);
    setProducts(data.result);
    console.log(products);
  }
  useEffect(() => {
    getProductsFromServer();
  }, []);
  const deleteP = (product)=>{
    // alert("do you want to delete ") instead use sweet alert 
    handleDelete(product.productID)
  }

async function handleDelete(productID){

    let { data } = await axios.delete(`http://localhost:5000/product/${productID}`);
    if(data.message === 'Done'){
      getProductsFromServer();
    }
    else {
      alert("cannot Delete this product")
      console.log(data);

    }
}
  return (
    <div className="font-monospace px-5 mt-5 w-90  ">
      <h1 className="text-center font-monospace my-3"> Products List</h1>
      <div className="px-5">
        <table className="table caption-top fw-bold text-center border ">
          <thead className="table-dark">
            <tr className="table-dart fw-bold">
              <th>Product ID</th>
              <th>Title</th>
              <th>description</th>
              <th>Price</th>
              <th>User ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, id) => {
              return (
                <tr key={id}>
                  <td>{product.productID}</td>
                  <td>{product.productName}</td>
                  <td>{product.productDesc}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.userID}</td>
                  <td>
                    <Link className="btn btn-dark  btn-sm fw-bold mx-3 " to={`/update/${product.productID}`}  >
                      Update
                    </Link >
                    <button  className="btn btn-dark  text-danger opacity-50 btn-sm" 
                    onClick={()=>deleteP(product)}
                    >
                      Delete
                    </button >
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
