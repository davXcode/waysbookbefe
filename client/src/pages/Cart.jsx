import React from "react";
import CardCart from "../components/cards/CardCart";
import Navbar from "../components/navbar/Navbar";
import attach from "../images/AttacheTransaction.png";

export default function Cart() {
  return (
    <div className="bg-homes">
      <Navbar />
      <div className="container cart-bg ">
        <div className="col">
          <div>
            <h3 className="mb-lg-5 mb-2">My Cart</h3>
            <p>Review Your Order</p>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="border border-dark mb-2"></div>
              <CardCart />
              <CardCart />
              <div className="border border-dark mb-2"></div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="border border-dark"></div>
              <div className="d-flex justify-content-between">
                <p className=" my-2 fw-bold">SubTotal</p>
                <p className=" my-2 fw-normal">134.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className=" my-2 fw-bold">Qty</p>
                <p className=" my-2 fw-normal">2</p>
              </div>

              <div className="border border-dark"></div>

              <div className="d-flex justify-content-between">
                <p className="text-success my-2 fw-bold">Total</p>
                <p className="text-success my-2 fw-bold">134.000</p>
              </div>

              <form className="">
                <div className="form-group">
                  <input type="file" id="actual-btn" name="thumbnail" hidden />
                  <label
                    htmlFor="actual-btn w-100 m-auto"
                    style={{ height: "160px", width: "260px" }}
                  >
                    <img src={attach} alt="" className="btn w-100 h-100" />
                    <img src="" alt="" className="preview img-fluid" />
                  </label>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
