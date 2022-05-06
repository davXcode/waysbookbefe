import React from "react";
import ChatHeader from "../components/chat/ChatHeader";
import Navbar from "../components/navbar/Navbar";

export default function UChat() {
  return (
    <div className="bg-homes">
      <Navbar />
      <div className="">
        <div className="chat-header d-flex overflow-auto">
          <ChatHeader />
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
  );
}
