import React from "react";
import AChatHeader from "../components/chat/AChatHeader";
import AHeader from "../components/chat/AHeader";
import Navbar from "../components/navbar/Navbar";

export default function AChat() {
  return (
    <div className="bg-homes">
      <Navbar />
      <div className="container m-auto w-100">
        <p className="fw-bold fs-3">Customer Complain</p>
      </div>
      <div className=" container row m-auto chat-admin p-0">
        <div className="col-lg-4 p-0 p-lg-3">
          <div className="d-flex d-lg-block overflow-auto">
            <AHeader />
            <AHeader />
            <AHeader />
          </div>
        </div>
        <div className="col-lg-8 p-0 p-lg-3">
          <div className="chat-header d-flex overflow-auto">
            <AChatHeader />
          </div>
          <div className="chat-body overflow-auto">
            <div className="d-flex p-2 w-75">
              <p className="bg-light py-1 px-3 rounded m-0">hallo</p>
            </div>
            <div className="d-flex p-2 w-75 ms-auto">
              <p className="bg-light py-1 px-3 rounded m-0 ms-auto">
                hallo faf aajf ajfbbaj ajfba ajfja ajfbaj
              </p>
            </div>
          </div>
          <div className="chat-footer">
            <form>
              <div className="d-flex m-auto pb-lg-5" style={{ width: "95%" }}>
                <input type="text" className="form-control me-2 " />
                <button className="btn btn-info px-3"> &#9658;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
