import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ loginData, logOut }) {
  return (
    <div className="text-dark">
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            KeRa COLLECTION
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {loginData ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/products"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/addproduct"
                    >
                      Add New Product
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {loginData? (
              <>
                <div className="buttons" onClick={logOut}>
                  <Link to="/" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1" > Logout</i>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="buttons">
                  <Link to="/signin" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"> Login</i>
                  </Link>
                  <Link to="/signup" className="btn btn-outline-dark m-1">
                    <i className="fa fa-user-plus me-1"> Register</i>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
