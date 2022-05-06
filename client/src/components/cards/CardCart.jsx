import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../images/Rectangle.png";
import Eraser from "../../images/Eraser.svg";

export default function CardCart() {
  return (
    <div className=" container-fluid row p-0 mb-2">
      <div className="col">
        <div
          className="d-flex justify-content-center "
          //   style={{ width: "500px" }}
        >
          <div className="p-0 me-2" style={{ width: "130px", height: "170px" }}>
            <Link to="#">
              <img src={Rectangle} alt="" className="img-fluid h-100 w-100" />
            </Link>
          </div>
          <div
            className="col nav-item "
            // style={{ background: "white" }}
          >
            <Link to="#" className=" nav-link p-0 text-dark d-none d-sm-block ">
              <p className=" fw-bold fs-5 m-0 lh-sm ">
                Sebuah Seni Untuk Bersikap Bodoh Amat
              </p>
            </Link>
            <p className="fw-lighter mt-2  my-1">By Mark Manson</p>

            <div className="m-0 p-0">
              <p className="text-success fs-4 fw-bold ">Rp. 59.000</p>
            </div>
          </div>
          <div className="col-2 text-end">
            <button className="btn">
              <img src={Eraser} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
