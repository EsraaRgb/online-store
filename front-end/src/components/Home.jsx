import React from "react";
import style from "./Home.module.css";
export default function Home() {
  return (
    <div className="homepage">
      <div className="card bg-dark text-white border-0">
        <img 
          src="/assets/bg.jpeg"
          className={`card-img  ${style}`}
          alt="background"
          height="650px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className=" card-text lead fs-2">
            <h5 className="card-title display-5 fw-bolder mb-0">
              BEST PLACE TO FIND <h6 className={`d-inline text-5 text-dark`}> </h6>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
