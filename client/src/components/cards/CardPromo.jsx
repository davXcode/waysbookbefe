import React from "react";
import { Link } from "react-router-dom";
import Rectangle from "../../images/Rectangle.png";

export default function CardPromo() {
  return (
    <div className=" container-fluid row ">
      <div className="col">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "500px" }}
        >
          <div className="p-0" style={{ width: "236px", height: "345px" }}>
            <Link to="/detail">
              <img src={Rectangle} alt="" className="img-fluid h-100 w-100" />
            </Link>
          </div>
          <div
            className="col d-none d-sm-block px-2 py-3 nav-item "
            style={{ background: "white" }}
          >
            <Link to="/detail" className=" nav-link p-0 text-dark">
              <p className=" fw-bold fs-4 m-0 lh-sm">
                Sebuah Seni Untuk Bersikap Bodoh Amat
              </p>
            </Link>
            <p className="fw-lighter mt-2">By Mark Manson</p>
            <div className="textPromo ">
              <p className="lh-sm">
                "Selama beberapa tahun belakangan, Mark Manson --- melalui
                blognya yang sngat populer tel ...
              </p>
            </div>
            <div>
              <p className="text-success fs-4 fw-bold">Rp. 59.000</p>
            </div>
            <div className="">
              <button className="btn btn-dark w-100">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
